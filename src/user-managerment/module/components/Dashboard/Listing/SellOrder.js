import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { AUTH_CREATE_AD_LISTING, AUTH_GET_BANKS } from "../../../../../serivce/apiRoutes.service";
import { getUserId, getUserRole } from "../../../../../serivce/cookie.service";
import { isEmpty } from "../../../helpers/isEmpty";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import Drawer from "../../../layouts/Drawer";
import StrictWrapper from "../../../layouts/Drawer/StrictWrapper";
import { PrimaryButton } from "../../Button";
import FormError from "../../Global/FormError";
import { TextLabelInput } from "../../Input";
import AssetsListView from "../Portfolio/AssetsListView";
import DrawerSelectInput from "../Portfolio/DrawerSelectInput";
import BanksView from "./BanksView";

const BuyOrder = ({assetList}) => {

  // DATA INITIALIZATION
  const navigate = useNavigate();
  const {
    data: bankData,
    getLoading: getBankLoading,
    makeAuthGetReq,
  } = useMakeReq()
  const {
    data: createListingData,
    isSuccessful: isCreateSuccess,
    error: isCreateError,
    loading: createListingLoading,
    makeAuthPostReq,
} = useMakeReq()
const role = getUserRole()
const userId = getUserId()


  // STATES
  const [isOpen, setIsOpen] = useState(false);
  const [isBankDrawerOpen, setIsBankDrawerOpen] = useState(false);
  const [banks, setBanks] = useState([])
  const [bankDetails, setBankDetails] = useState({});
  const [asset, setAsset] = useState({
    name: "",
    symbol: "",
    assetId: null, 
    networkId: null,
    image: ""
  })


  // HANDLERS
  const toggleDrawer = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const toggleBankDrawer = () => {
    setIsBankDrawerOpen((isOpen)=>!isOpen)
  }


  // SIDE EFFECTS
  useEffect(()=>{
    makeAuthGetReq(`${AUTH_GET_BANKS}/${userId}/${role}`)
  }, [])
  useEffect(()=>{
    if(!isEmpty(bankData?.data)) {
        setBanks(bankData.data)
    }
  }, [bankData])

  // create wallet feedback
  useEffect(()=>{
    if(!isEmpty(createListingData)) {
        if(isCreateSuccess===true) {
            toast.success(createListingData.message || "Listing created successful!")
            navigate("/listing");
        } else if(isCreateSuccess===false) {
            toast.error(createListingData.message || "Failed to create listing!")
        }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createListingData, isCreateSuccess])

  // create wallet error
  useEffect(()=>{
    if(isCreateError) {
        console.log(isCreateError)
    }
  }, [isCreateError])

  return(

    <Formik
    enableReinitialize
    initialValues={{
        userId: "",
        assets: null,
        upperLimit: null,
        lowerLimit: null,
        listingType: 2,
        rateToFiat: null,
        fiatCurrency: 1,
        listingAmount: null,
        bank: null,
        paymentTimeFrame: null
    }}
    onSubmit={(values) => {
      const formValues = {...values}
      formValues.bank = bankDetails.id
      formValues.userId = userId
      formValues.assets = asset.assetId

      // create AdListing
      makeAuthPostReq(AUTH_CREATE_AD_LISTING, {
        adListRequest: formValues
      })
    }}
    validationSchema={
      Yup.object({
          lowerLimit: Yup.number().required(),
          upperLimit: Yup.number().min(Yup.ref('lowerLimit'), "can't be less than minimum transaction limit").required(),
          rateToFiat: Yup.number().required(),
          listingAmount: Yup.number().required(),
      })
    }>
      {({
          values,
          dirty,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          field,
          isValid
      }) => {
        return (
          <div>
            <form
              className="flex flex-col gap-5 w-full h-full pb-5"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* assets  */}
              <label className="flex flex-col gap-2 w-full">

                {/* label text  */}
                <span className="font-medium text-xs text-black">Assets</span>

                {/* input field  */}
                <DrawerSelectInput
                  value={asset?.name || "Select asset"}
                  onClick={toggleDrawer}
                />
              </label>

              {/* Listing Amount  */}
              <label className="flex flex-col gap-2 w-full">
                {/* title  */}
                <span className="font-medium text-xs text-black">Listing Amount</span>

                {/* input field  */}
                <TextLabelInput 
                name={"listingAmount"}
                value={values.listingAmount}
                onChange={handleChange}
                onBlur={handleBlur}
                label={asset?.symbol || ""} 
                placeholderText={"Enter amount"} 
                type="number" />
                {
                  touched.listingAmount && 
                  errors.listingAmount && (
                    <FormError 
                    text={errors.listingAmount} />
                  )
                }
              </label>

              {/* Rate-Fiat Value  */}
              <label className="flex flex-col gap-2 w-full">
                {/* title */}
                <span className="font-normal text-xs text-black">
                  Rate-Fiat Value
                </span>

                {/* input field  */}
                <TextLabelInput 
                name={"rateToFiat"}
                value={values.rateToFiat}
                onChange={handleChange}
                onBlur={handleBlur}
                label={"NAIRA"} 
                placeholderText={"Rate to fiat"}  
                type="number" />
                {
                  touched.rateToFiat && 
                  errors.rateToFiat && (
                    <FormError 
                    text={errors.rateToFiat} />
                  )
                }
              </label>

              {/* Minimum Transaction Limit  */}
              <label className="flex flex-col gap-2 w-full">
                {/* title* */}
                <span className="font-medium text-xs text-black">
                  Minimum Transaction Limit
                </span>

                {/* input field  */}
                <TextLabelInput 
                name={"lowerLimit"}
                value={values.lowerLimit}
                onChange={handleChange}
                onBlur={handleBlur}
                label={"NAIRA"} 
                placeholderText={"Minimum transaction limit"}  
                type="number"/>
                {
                  touched.lowerLimit && 
                  errors.lowerLimit && (
                    <FormError 
                    text={errors.lowerLimit} />
                  )
                }
              </label>

              {/* Maximum Transaction Limit  */}
              <label className="flex flex-col gap-2 w-full">
                {/* title */}
                <span className="font-medium text-xs text-black">
                  Maximum Transaction Limit
                </span>

                {/* input field */}
                <TextLabelInput 
                name={"upperLimit"}
                value={values.upperLimit}
                onChange={handleChange}
                onBlur={handleBlur}
                label={"NAIRA"} 
                placeholderText={"Maximum transaction limit"}  
                type="number"/>
                {
                  touched.upperLimit && 
                  errors.upperLimit && (
                    <FormError 
                    text={errors.upperLimit} />
                  )
                }
              </label>

              {/* Payment Timefram  */}
              <label className="flex flex-col gap-2 w-full">

                {/* title */}
                <span className="font-medium text-xs text-black">
                  Payment Timeframe
                </span>

                {/* input field */}
                <TextLabelInput 
                name={"paymentTimeFrame"}
                value={values.paymentTimeFrame}
                onChange={handleChange}
                onBlur={handleBlur}
                label={"MINUTES"} 
                placeholderText={"Payment time frame"}  
                type="number"/>
                {
                  touched.paymentTimeFrame && 
                  errors.paymentTimeFrame && (
                    <FormError 
                    text={errors.paymentTimeFrame} />
                  )
                }
              </label>

              {/* Receiving Bank  */}
              <label className="flex flex-col gap-2 w-full">
                {/* label text  */}
                <span className="font-medium text-xs text-black">Receiving Bank</span>

                {/* input field */}
                <DrawerSelectInput
                onClick={toggleBankDrawer}
                disabled={getBankLoading}
                value={bankDetails?.accountNumber || "Select bank"} />
              </label>

              {/* container */}
              <div className="flex w-full flex-col">
                {/* continue button */}
                <div className="w-full flex flex-col items-stretch">
                  <PrimaryButton
                  disabled={!isValid || isEmpty(asset.assetId) || isEmpty(bankDetails) || isEmpty(userId)}
                  loading={createListingLoading}
                  onClick={handleSubmit}
                  text={"Create"}
                  />
                </div>
              </div>
            </form>

            {/* Assets Drawer  */}
            <Drawer isOpen={isOpen} onClose={toggleDrawer} position="bottom">

              {/* drawer content container  */}
              <StrictWrapper title={"Assets"} closeDrawer={toggleDrawer}>

                {/* Body content  */}
                <AssetsListView
                assetList={assetList}
                closeDrawer={toggleDrawer}
                setAsset={setAsset}/>
              </StrictWrapper>
            </Drawer>

            {/* Banks Drawer  */}
            <Drawer 
            isOpen={isBankDrawerOpen} 
            onClose={toggleBankDrawer} 
            position="bottom">

              {/* drawer content container  */}
              <StrictWrapper 
              title={"Banks"} 
              closeDrawer={toggleBankDrawer}>

                {/* Body content  */}
                <BanksView
                listItem={banks}
                closeDrawer={toggleBankDrawer}
                setBank={setBankDetails}/>
              </StrictWrapper>
            </Drawer>
          </div>
        );
      }}
    </Formik>
  )
};

export default BuyOrder;
