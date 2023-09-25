import { Form, Formik } from "formik";
import { InfoCircle, ProfileCircle } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {
  AUTH_GET_ASSETS_ACCOUNTS,
  AUTH_GET_ASSETS_MAPPING,
  AUTH_TRANSFER_EXTERNAL_USERS,
  AUTH_TRANSFER_INTERNAL_USERS
} from "../../../../../serivce/apiRoutes.service";
import { getUserId } from "../../../../../serivce/cookie.service";
import { BackButton, PrimaryButton } from "../../../components/Button";
import AssetsListView from "../../../components/Dashboard/Portfolio/AssetsListView";
import DrawerSelectInput from "../../../components/Dashboard/Portfolio/DrawerSelectInput";
import VerifyGasFee from "../../../components/Dashboard/Portfolio/VerifyGasFee";
import EmptyDataComp from "../../../components/Global/EmptyDataComp";
import FormError from "../../../components/Global/FormError";
import LoadingSpinner from "../../../components/Global/LoadingSpinner";
import { TextLabelInput } from "../../../components/Input";
import SelectInput from "../../../components/SelectInput";
import { getAssetLabel } from "../../../helpers/getAssetLabel";
import { isEmpty } from "../../../helpers/isEmpty";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import AltModal from "../../../layouts/AltModal";
import Drawer from "../../../layouts/Drawer";
import StrictWrapper from "../../../layouts/Drawer/StrictWrapper";
import PageWrapper from "../../../layouts/PageWrapper";
const INTERNAL_USER = 1
const EXTERNAL_USER = 2

const SendCoin = () => {
  // DATA INITIALIZATION
  const navigate = useNavigate();
  const modeOptions = [
    { value: 1, label: "Internal User" },
    { value: 2, label: "External User" },
  ];
  const {
    data: sendCoinData,
    isSuccessful: sendCoinSuccess,
    error: sendCoinError,
    loading: sendCoinLoading,
    makeAuthPostReq,
  } = useMakeReq();
  const {
    data: walletAssetData,
    getLoading: getAssetLoading,
    makeAuthGetReq,
  } = useMakeReq();
  const { coinId } = useParams();
  const { data: walletInfoData, makeAuthGetReq: getWalletInfo } = useMakeReq();
  const userId = getUserId()


  // STATES
  const [isOpen, setIsOpen] = useState(false);
  const [gasFeeModalState, setGasFeeModalState] = useState(false)
  const [walletInfo, setWalletInfo] = useState({});
  const [mode, setMode] = useState({
    value: 1,
    label: "Internal User",
  });
  const [assetList, setAssetList] = useState([]);
  const [asset, setAsset] = useState({
    name: "",
    symbol: "",
    assetId: null,
    networkName: "",
    networkId: null,
    image: "",
  });

  // HANDLERS
  const toggleDrawer = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const toggleVerifyGasFeeModal = () => {
    setGasFeeModalState(!gasFeeModalState)
  }

  // SIDE EFFECTS
  useEffect(() => {
    makeAuthGetReq(AUTH_GET_ASSETS_MAPPING);
    getWalletInfo(`${AUTH_GET_ASSETS_ACCOUNTS}/${userId}&USD`);
  }, []);

  // populate assets
  useEffect(()=>{
    if((coinId!==undefined || coinId !==null) && !isEmpty(assetList)) {
      const selectedAsset = assetList.find(asset=>asset.currency===(+coinId ?? 1))
      setAsset({
        name: selectedAsset.currencyName ?? "",
        symbol: selectedAsset.symbol ?? "",
        assetId: selectedAsset.currency ?? null,
        networkName: selectedAsset.networkName ?? "",
        networkId: selectedAsset.network ?? null,
        image: selectedAsset.imageUrl ?? ""
      })
    }
  }, [coinId, assetList])

  // get assets data
  useEffect(() => {
    if (!isEmpty(walletAssetData)) {
      setAssetList(walletAssetData);
    }
  }, [walletAssetData]);

  // populating wallet data
  useEffect(() => {
    if (!isEmpty(walletInfoData?.data)) {
      setWalletInfo(walletInfoData?.data.find(wallet=>wallet.currency===getAssetLabel(+coinId)));
    }
  }, [walletInfoData]);

  // create wallet feedback
  useEffect(() => {
    if (!isEmpty(sendCoinData)) {
      if (sendCoinSuccess === true) {
        toast.success(sendCoinData.message, {
          toastId: "success1",
        });
        navigate("/portfolio", {replace: true});
      } else if (sendCoinSuccess === false) {
        toast.error(sendCoinData.message, {
          toastId: "error1",
        });
      } else if(sendCoinError) {
        console.log("Failed to send coin", sendCoinError)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendCoinData, sendCoinSuccess, sendCoinError]);

  return(
    <Formik
    enableReinitialize
    validateOnMount={true}
    initialValues={{
        userName: "",
        userIdentifier: "",
        cryptoAmount: ""
    }}
    onSubmit={(values) => {
      // getting user ID
      const uId = getUserId();

      // payload
      // Internal Users Transfer
      const payload = mode.value === INTERNAL_USER
      ? {
          userIdentifier: values.userName,
          senderUserId: uId,
          amount: values.cryptoAmount,
          currency: asset.assetId,
          network: asset.networkId,
        }
      : // External Users Transfer
      mode.value === EXTERNAL_USER
      ? {
          asset: asset.assetId,
          address: values.userIdentifier,
          amount: values.cryptoAmount,
          networkChain: asset.networkId,
          userId: uId,
        }
      : null;
      const apiUrl = mode.value === INTERNAL_USER?AUTH_TRANSFER_INTERNAL_USERS:AUTH_TRANSFER_EXTERNAL_USERS
      makeAuthPostReq(apiUrl, payload);
    }}
    validationSchema={
      Yup.object({
        // userIdentifier: Yup.string().required("Required"),
        // userName: Yup.string().required("Required"),
        cryptoAmount: Yup.number().typeError("Must be a digit").test("is-greater-than-0", "Amount can't be zero (0)", (cryptoAmount)=>+cryptoAmount>0).test("insufficient-funds","Insufficient funds", (cryptoAmount)=>!(parseFloat(cryptoAmount) >
        parseFloat(walletInfo?.balance?.availableBalance))).required("Required"),
      })
    }>
      {({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid
      }) => {
        return (
          <PageWrapper>
            {/* container */}
            <div className="w-full h-full flex flex-col py-5 gap-5">
              {/* header */}
              <div className="flex items-center w-[92%] mx-auto justify-between">
                {/* back button */}
                <BackButton />
              </div>

              {/* body */}
              {getAssetLoading ? (
                <LoadingSpinner viewPortHeight="h-[80vh]" />
              ) : !isEmpty(assetList) ? (
                <div className="h-full w-full flex flex-col mx-auto gap-8">
                  {/* text captions */}
                  <div className="flex flex-col gap-2 w-[92%] mx-auto">
                    <h3 className="text-2xl font-bold text-black">
                      {isEmpty(walletInfo) ? "" : `Send ${walletInfo.currency}`}
                    </h3>

                    <h4 className="text-sm font-normal text-[#645B75]">
                      Send {isEmpty(walletInfo) ? "" : walletInfo.currency} to crypto
                      account.
                    </h4>
                  </div>

                  {/* form container */}
                  <Form
                    className="flex flex-col gap-5 w-full h-full pb-5"
                    onSubmit={e=>e.preventDefault()}
                  >
                    {/* mode */}
                    <label className="flex flex-col gap-2 w-[92%] mx-auto">
                      {/* label text */}
                      <span className="font-normal text-xs text-black">Mode</span>

                      <SelectInput
                        onChange={(e) => setMode(e)}
                        value={mode}
                        options={modeOptions}
                      />
                    </label>

                    {/* internal user */}
                    {
                      mode.value === INTERNAL_USER?
                      <>
                        {/* Destination Address*/}
                        <label className="flex flex-col gap-2 w-[92%] mx-auto">
                          {/* label text */}
                          <span className="font-normal text-xs text-black">
                            Recipient's Username
                          </span>

                          {/* input field */}
                          <TextLabelInput
                            name={"userName"}
                            value={values.userName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label={
                              <ProfileCircle variant="Bulk" size={22} color="#ACA6BA" />
                            }
                            placeholderText="Enter recipient's username"
                          />
                          {
                            touched.userName && 
                            errors.userName && (
                              <FormError
                              text={errors.userName} />
                            )
                          }
                        </label>

                        {/* currency/asset*/}
                        <label className="flex flex-col gap-2 w-[92%] mx-auto">
                          {/* label text */}
                          <span className="font-normal text-xs text-black">
                            Currency
                          </span>

                          {/* input field */}
                          <DrawerSelectInput
                          disabled={true}
                            value={asset?.name || "Select Currency"}
                            onClick={toggleDrawer}
                          />
                        </label>

                        {/* Amount*/}
                        <label className="flex flex-col gap-2 w-[92%] mx-auto">
                          {/* label text */}
                          <div className="w-full flex items-center justify-between">
                            <span className="font-normal text-xs text-black">Amount</span>

                            <h5 className="text-[#645B75] text-xs font-normal w-[70%] text-right">
                              {`Balance ${walletInfo?.balance?.availableBalance?.slice(0,14)?.concat("...")}`}
                            </h5>
                          </div>

                          {/* input field */}
                          <TextLabelInput
                            label={
                              <>
                                {isEmpty(walletInfo) ? "" : `${walletInfo.currency} | `}{" "}
                                <span className="text-[#EB9B00] font-semibold">Max</span>
                              </>
                            }
                            placeholderText={"Type in Amount"}
                            name={"cryptoAmount"}
                            value={values.cryptoAmount}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {
                            touched.cryptoAmount && 
                            errors.cryptoAmount && (
                              <FormError
                              text={errors.cryptoAmount} />
                            )
                          }
                        </label>

                        {/* important message */}
                        <div className="flex items-start bg-[#FAFAFB] gap-2 py-2 px-6 w-full">
                          {/* icon */}
                          <InfoCircle variant="Bulk" size={16} color="#ACA6BA" />

                          {/* text */}
                          <h4 className="w-[90%] font-normal text-sm text-[#1B3F3E]">
                            Asset has been withdrawn to Pactum escrow, ensure to make
                            payment of the exact amount in record time.
                          </h4>
                        </div>

                        {/* container */}
                        <div className="flex flex-col mt-8 w-[92%] mx-auto">
                          {/* send button */}
                          <div className="w-full flex flex-col items-stretch">
                            <PrimaryButton
                              loading={sendCoinLoading}
                              disabled={sendCoinLoading || !asset.assetId}
                              text={`Send ${values.amount?values.amount + " " + asset.symbol:""}`}
                              type="submit"
                              onClick={handleSubmit}
                            />
                          </div>
                        </div>
                      </>:
                      mode.value === EXTERNAL_USER?
                      <>
                        {/* User identifier */}
                        <label className="flex flex-col gap-2 w-[92%] mx-auto">
                          {/* label text */}
                          <span className="font-normal text-xs text-black">
                            {"Destination Address"}
                          </span>

                          {/* input field */}
                          <TextLabelInput
                            name={"userIdentifier"}
                            value={values.userIdentifier}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label={
                              <ProfileCircle variant="Bulk" size={22} color="#ACA6BA" />
                            }
                            placeholderText="Enter recipient's username"
                          />
                          {
                            touched.userIdentifier && 
                            errors.userIdentifier && (
                              <FormError
                              text={errors.userIdentifier} />
                            )
                          }
                        </label>

                        {/* currency/asset*/}
                        <label className="flex flex-col gap-2 w-[92%] mx-auto">
                          {/* label text */}
                          <span className="font-normal text-xs text-black">
                            {"Asset"}
                          </span>

                          {/* input field */}
                          <DrawerSelectInput
                          disabled={true}
                            value={
                              asset?.name || "Select Asset"
                            }
                            onClick={toggleDrawer}
                          />
                        </label>

                        {/* Amount*/}
                        <label className="flex flex-col gap-2 w-[92%] mx-auto">
                          {/* label text */}
                          <div className="w-full flex items-center justify-between">
                            <span className="font-normal text-xs text-black">Amount</span>

                            <h5 className="text-[#645B75] text-xs font-normal w-[70%] text-right">
                              {`Balance ${walletInfo?.balance?.availableBalance?.slice(0,14)?.concat("...")}`}
                            </h5>
                          </div>

                          {/* input field */}
                          <TextLabelInput
                            label={
                              <>
                                {isEmpty(walletInfo) ? "" : `${walletInfo.currency} | `}{" "}
                                <span className="text-[#EB9B00] font-semibold">Max</span>
                              </>
                            }
                            placeholderText={"Type in Amount"}
                            name={"cryptoAmount"}
                            value={values.cryptoAmount}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {
                            touched.cryptoAmount && 
                            errors.cryptoAmount && (
                              <FormError
                              text={errors.cryptoAmount} />
                            )
                          }
                        </label>

                        {/* important message */}
                        <div className="flex items-start bg-[#FAFAFB] gap-2 py-2 px-6 w-full">
                          {/* icon */}
                          <InfoCircle variant="Bulk" size={16} color="#ACA6BA" />

                          {/* text */}
                          <h4 className="w-[90%] font-normal text-sm text-[#1B3F3E]">
                            Asset has been withdrawn to Pactum escrow, ensure to make
                            payment of the exact amount in record time.
                          </h4>
                        </div>

                        {/* container */}
                        <div className="flex flex-col mt-8 w-[92%] mx-auto">
                          {/* send button */}
                          <div className="w-full flex flex-col items-stretch">
                            <PrimaryButton
                              loading={sendCoinLoading}
                              disabled={sendCoinLoading || !asset.assetId}
                              text={`Send ${values.amount?values.amount + " " + asset.symbol:""}`}
                              onClick={toggleVerifyGasFeeModal}
                            />
                          </div>
                        </div>
                      </>:
                      null
                    }
                  </Form>
                </div>
              ) : (
                <EmptyDataComp viewPortHeight="h-[80vh]" />
              )}
            </div>

            {/* Assets Drawer */}
            <Drawer isOpen={isOpen} onClose={toggleDrawer} position="bottom">
              {/* drawer content container */}
              <StrictWrapper title={"Assets"} closeDrawer={toggleDrawer}>
                {/* Body content */}
                <AssetsListView
                  assetList={assetList}
                  closeDrawer={toggleDrawer}
                  setAsset={setAsset}
                />
              </StrictWrapper>
            </Drawer>

            {/* modal */}
            <AltModal
            modalIsOpen={gasFeeModalState}
            toggleModal={toggleVerifyGasFeeModal}>
              <VerifyGasFee
              networkId={asset.networkId}
              recipientAddress={values.userIdentifier}
              virtualAccountId={walletInfo?.id}
              assetId={asset.assetId}
              amount={values.cryptoAmount}
              transferLoading={sendCoinLoading}
              handleTransfer={handleSubmit}
              closeModal={()=>setGasFeeModalState(false)} />
          </AltModal>
          </PageWrapper>
        );
      }}
    </Formik>
  )
};

export default SendCoin;
