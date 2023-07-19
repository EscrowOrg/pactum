import { InfoCircle, ProfileCircle } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  AUTH_GET_ASSETS_MAPPING,
  AUTH_GET_SINGLE_ACCOUNT,
  AUTH_TRANSFER_INTERNAL_USERS
} from "../../../../../serivce/apiRoutes.service";
import { getUserId } from "../../../../../serivce/cookie.service";
import { BackButton, PrimaryButton } from "../../../components/Button";
import AssetsListView from "../../../components/Dashboard/Portfolio/AssetsListView";
import DrawerSelectInput from "../../../components/Dashboard/Portfolio/DrawerSelectInput";
import EmptyDataComp from "../../../components/Global/EmptyDataComp";
import LoadingSpinner from "../../../components/Global/LoadingSpinner";
import { TextLabelInput } from "../../../components/Input";
import { isEmpty } from "../../../helpers/isEmpty";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import Drawer from "../../../layouts/Drawer";
import StrictWrapper from "../../../layouts/Drawer/StrictWrapper";
import PageWrapper from "../../../layouts/PageWrapper";

const SendAsset = () => {
  // DATA INITIALIZATION
  const navigate = useNavigate();
  const {
    data: sendInternalUserData,
    isSuccessful: isSendInternalUserSuccess,
    // error: isSendInternalUserError,
    loading: sendInternalUserLoading,
    makeAuthPostReq,
  } = useMakeReq();
  const {
    data: walletAssetData,
    getLoading: getAssetLoading,
    makeAuthGetReq,
  } = useMakeReq();
  const { coinId } = useParams();
  const { data: walletInfoData, makeAuthGetReq: getWalletInfo } = useMakeReq();

  // STATES
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [recipientId, setRecipientID] = useState("");
  const [walletInfo, setWalletInfo] = useState({});
//   const [mode, setMode] = useState({
//     value: 1,
//     label: "Internal User",
//   });
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
  const disableBtn = () => {
    return !(
      (asset.assetId && amount && recipientId && amount > 0) ||
      sendInternalUserLoading ||
      parseInt(amount) > walletInfo?.balalance?.availableBalance
    );
  };
  const toggleDrawer = (value) => {
    setIsOpen((isOpen) => !isOpen);
  };
  const handleSendToInternalUser = () => {
    // getting user ID
    const uId = getUserId();
    // const {userId} = getUserData();

    // Internal Users Transfer
    const payload = {
      userIdentifier: recipientId,
      senderUserId: uId,
      amount: amount,
      currency: asset.assetId,
      network: asset.networkId,
    };

    makeAuthPostReq(AUTH_TRANSFER_INTERNAL_USERS, payload);
  };


  // SIDE EFFECTS
  useEffect(() => {
    makeAuthGetReq(AUTH_GET_ASSETS_MAPPING);
    getWalletInfo(`${AUTH_GET_SINGLE_ACCOUNT}/${coinId}`);
  }, []);

  // get assets data
  useEffect(() => {
    if (!isEmpty(walletAssetData)) {
      setAssetList(walletAssetData);
    }
  }, [walletAssetData]);

  // populating data
  useEffect(() => {
    if (!isEmpty(walletInfoData)) {
      setWalletInfo(walletInfoData?.data);
    }
  }, [walletInfoData]);

  // create wallet feedback
  useEffect(() => {
    if (!isEmpty(sendInternalUserData)) {
      if (isSendInternalUserSuccess === true) {
        toast.success(sendInternalUserData.message, {
          toastId: "success1",
        });
        navigate("/profile/list-of-users");
      } else if (isSendInternalUserSuccess === false) {
        toast.error(sendInternalUserData.message, {
          toastId: "error1",
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendInternalUserData, isSendInternalUserSuccess]);
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
            <form
              className="flex flex-col gap-5 w-full h-full pb-5"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* mode */}
              <label className="flex flex-col gap-2 w-[92%] mx-auto">
                {/* label text */}
                <span className="font-normal text-xs text-black">Mode</span>

                {/* readOnly field */}
                <TextLabelInput
                  paddingRight="pr-[15%]"
                  value={"Internal User"}
                  readOnly={true}
                />
              </label>

              {/* Destination Address/user identifier */}
              <label className="flex flex-col gap-2 w-[92%] mx-auto">
                {/* label text */}
                <span className="font-normal text-xs text-black">
                  Recipient's Email
                </span>

                {/* input field */}
                <TextLabelInput
                  paddingRight="pr-[15%]"
                  value={recipientId}
                  placeholderText={"Recipient's Username"}
                  onChange={(e) => setRecipientID(e.target.value)}
                  label={
                    <ProfileCircle variant="Bulk" size={22} color="#ACA6BA" />
                  }
                />
              </label>

              {/* currency/asset*/}
              <label className="flex flex-col gap-2 w-[92%] mx-auto">
                {/* label text */}
                <span className="font-normal text-xs text-black">Currency</span>

                {/* input field */}
                <DrawerSelectInput
                  value={asset?.name || "Select Currency"}
                  onClick={toggleDrawer}
                />
              </label>

              {/* Amount*/}
              <label className="flex flex-col gap-2 w-[92%] mx-auto">
                {/* label text */}
                <div className="w-full flex items-center justify-between">
                  <span className="font-normal text-xs text-black">Amount</span>

                  <h5 className="text-[#645B75] text-xs font-normal">
                    Balance
                    {isEmpty(walletInfo)
                      ? ""
                      : `: ${walletInfo.balance.availableBalance}`}
                  </h5>
                </div>

                {/* input field */}
                <TextLabelInput
                  paddingRight="pr-[35%]"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  label={
                    <>
                      {isEmpty(walletInfo) ? "" : `${walletInfo.currency} | `}{" "}
                      <span className="text-[#EB9B00] font-semibold">Max</span>
                    </>
                  }
                  type="number"
                  placeholderText={"Type in Amount"}
                />

                {/* bottom label */}

                <h4 className="text-[#645B75] font-normal text-xs w-full text-center justify-center flex items-center gap-2">
                  Network fee: 0.00004 BTC
                  <InfoCircle variant="Bulk" size={12} color="#ACA6BA" />
                </h4>
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
                  {parseFloat(amount) >
                  parseFloat(walletInfo?.balance?.availableBalance) ? (
                    <PrimaryButton
                      onClick={handleSendToInternalUser}
                      loading={sendInternalUserLoading}
                      disabled={true}
                      text={"Insufficent funds"}
                    />
                  ) : disableBtn() ? (
                    <PrimaryButton
                      onClick={handleSendToInternalUser}
                      loading={sendInternalUserLoading}
                      disabled={disableBtn()}
                      text={"Send"}
                    />
                  ) : (
                    <PrimaryButton
                      onClick={handleSendToInternalUser}
                      loading={sendInternalUserLoading}
                      text={`Send ${amount}${asset.symbol}`}
                    />
                  )}
                </div>
              </div>
            </form>
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
    </PageWrapper>
  );
};

export default SendAsset;
