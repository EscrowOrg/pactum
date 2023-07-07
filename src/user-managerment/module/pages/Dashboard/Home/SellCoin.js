import { useEffect, useState } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import {ArrowRight2, Copy, RefreshCircle, TransactionMinus} from "iconsax-react";
import { BackButton, ErrorButton} from "../../../components/Button";
import {  TextLabelInput } from "../../../components/Input";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Drawer from "../../../layouts/Drawer";
import StrictWrapper from "../../../layouts/Drawer/StrictWrapper";
import { getUserId, getUserRole } from "../../../../../serivce/cookie.service";
import { CREATE_SELL_SESSION, GET_ADLISTING_DETAILS, GET_BANKS } from "../../../../../serivce/apiRoutes.service";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import { isEmpty } from "../../../helpers/isEmpty";
import { toast } from "react-toastify";
import BanksView from "../../../components/Dashboard/Listing/BanksView";
import { getAssetLabel } from "../../../helpers/getAssetLabel";
import LoadingSpinner from "../../../components/Global/LoadingSpinner";

const SellCoin = () => {

  // DATA INITIALIZATION
  const role = getUserRole()
  const userId = getUserId()
  const navigate = useNavigate();
  const {coinId: adID} = useParams()
  const [searchParams] = useSearchParams();
  const assetId = searchParams?.get("asset")
  const {
    data: bankData,
    getLoading: getBankLoading,
    makeGetRequest,
  } = useMakeReq()
  const { 
    data: listingAdData,
    makeGetRequest: getListingAds,
    getLoading: isgetLIstingAdsLoading
} = useMakeReq();
  const {
      data: sellAssetData, 
      loading: isSellLoading,  
      makePostRequest, 
      isSuccessful: isSellSuccess,
      error: sellError 
  } = useMakeReq();


  // STATES
  const [isBankDrawerOpen, setIsBankDrawerOpen] = useState(false);
  const [singleListing, setSingleListing] = useState(null)
  const [formData, setFormData] = useState({
    amount: "",
  });
  const [banks, setBanks] = useState([])
  const [bankDetails, setBankDetails] = useState({});


  // HANDLERS
  const toggleBankDrawer = () => {
    setIsBankDrawerOpen((isOpen)=>!isOpen)
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    const uId = getUserId()
    makePostRequest(CREATE_SELL_SESSION,
        {
            userId: uId,
            adId: adID,
            cryptoAmount: formData.amount,
            accountName: bankDetails.accountName,
            bankName: bankDetails.bankName,
            accountNumber: bankDetails.accountNumber 
        }
    )
}


// SIDE EFFECTS
// get banks
useEffect(()=>{
  makeGetRequest(`${GET_BANKS}/${userId}/${role}`)
}, [])
useEffect(()=>{
  if(!isEmpty(bankData?.data)) {
      setBanks(bankData.data)
      setBankDetails(bankData?.data[0])
  }
}, [bankData])

// get ad details
useEffect(()=>{
  getListingAds(`${GET_ADLISTING_DETAILS}/${adID}`)
}, [])
useEffect(()=>{
if(!isEmpty(listingAdData?.data)) {
  setSingleListing(listingAdData?.data)
}
}, [listingAdData])

// creating sell order
useEffect(()=>{
  if(!isEmpty(sellAssetData)) {
      if(isSellSuccess===true) {
          toast.success(sellAssetData?.message || "Sale was successful!")
          navigate(`/home/sell-coin/${adID}/sell-order-statement`, {
              replace: true
          })
      } else if(isSellSuccess===false) {
          toast.error(sellAssetData?.message || "Couldn't make the sale")
      }
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [sellAssetData, isSellSuccess])
useEffect(()=>{
  if(sellError) {
      toast.error(sellError || "Couldn't make the sale")
  }
}, [sellError])

  return (
    <PageWrapper>
      <div className="w-full h-full flex flex-col py-5 gap-8">

        {/* header */}
        <div className="flex items-center w-[92%] mx-auto justify-between">
          {/* back button */}
          <BackButton />

          {/* text */}
          <h3 className="font-bold text-lg text-black">Sell {getAssetLabel(+assetId)}</h3>

          {/* transaction list button */}
          <button className="px-3 py-3 w-fit border border-[#DAD7E0] bg-[#FAFAFB] inline-flex items-center justify-center rounded-xl cursor-pointer hover:bg-gray-200">
            <TransactionMinus size="14" color="#16053D" />
          </button>
        </div>

        {/* body */}
        <div className="w-[92%] h-full flex flex-col mx-auto gap-8 pb-5">
          {/* form */}
          <form
            className="flex flex-col gap-5 w-full h-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="flex flex-col gap-2 w-full">
              {/* worth of assets in naira */}
              <span className="font-normal text-xs text-black">
                Crypto Amount
              </span>

              {/* input field */}
              <TextLabelInput
                label={
                  <>
                    {getAssetLabel(+assetId)} |
                    <span className="text-[#EB9B00] font-semibold">Max</span>
                  </>
                }
                name={"amount"}
                value={formData.amount}
                onChange={handleChange}
                placeholderText={"Enter crypto amount"}
              />
            </label>

            {/* transaction details */}
            <div className='font-normal text-[#ACA6BA]'>
                Trade price: <span className='text-[#141217] font-semibold'>₦{singleListing?.tradePrice}</span>
            </div>
            {/* <div className="flex items-center w-full justify-between text-sm">
              <div className="font-normal text-[#ACA6BA]">
                Price:
                <span className="text-[#141217] font-semibold">₦400</span>
              </div>
              left line
              <hr className="w-16" />
              circle
              <div className="flex items-center text-[#DAD7E0] gap-1">
                <RefreshCircle variant="TwoTone" size={24} color="#16053D" />
              </div>

              right line
              <hr className="w-16" />

              <div className="font-normal text-[#ACA6BA]">
                You will receive:{" "}
                <span className="text-[#141217] font-semibold">...</span>
              </div>
            </div> */}

            {/* summary details */}
            <div className="flex w-full flex-col gap-6">

              {/* info */}
              {
                isgetLIstingAdsLoading?
                <LoadingSpinner
                viewPortHeight="h-[20vh]"
                bgColor="bg-gray-100"  />:
                !isEmpty(singleListing) ? 
                <>
                  <div className="flex flex-col w-full gap-5 bg-gray-100 py-3 px-4 rounded-lg">
                    {/*  Payment Timeframe */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-normal text-xs text-[#8D85A0]">
                        Payment Timeframe
                      </h3>

                      <h3 className="text-black text-sm font-semibold">{singleListing?.timeFrame} min</h3>
                    </div>

                    {/*  Min - Max Order Amount */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-normal text-xs text-[#8D85A0]">
                        Min - Max Order Amount
                      </h3>

                      <h3 className="text-black text-sm font-semibold">
                        {/* 0.989 - 4.583 BTC */}
                        {`${singleListing.lowerLimit}${getAssetLabel(assetId)}`} - {`${singleListing.upperLimit}${getAssetLabel(assetId)}`}
                      </h3>
                    </div>

                    {/* fiat amount */}
                    {/* <div className="flex items-center justify-between">
                      <h3 className="font-normal text-xs text-[#8D85A0]">
                        Fiat Amount
                      </h3>

                      <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                        ₦---
                      </h3>
                    </div> */}

                    {/* username */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-normal text-xs text-[#8D85A0]">
                        Buyer name
                      </h3>

                      <h3 className="text-black text-sm font-semibold">
                        {singleListing.merchantName}
                      </h3>
                    </div>
                  </div>
                </>:
                <></>
              }
            </div>

            {/* Existing Bank details */}
            {
                getBankLoading?
                <LoadingSpinner
                viewPortHeight="h-[20vh]"
                bgColor="bg-gray-100" />:
                !isEmpty(bankDetails) ? 
                <div className="flex items-center w-full bg-[#6D34F0]">
                  {/* first cont */}
                  <div className="bg-[#6D34F0] flex flex-col gap-2 py-3 px-4 w-full">
                    <h5 className="text-[8px] font-normal text-[#D2C1FA]">
                      BANK DETAILS LAST USED
                    </h5>

                    <h5 className="font-bold text-base text-[#F4EFFE]">
                      {getBankLoading?"Loading...":bankDetails?.bankName || "Empty"}
                    </h5>
                    
                    <h5 className="font-semibold text-[#F4EFFE] text-sm">
                      {getBankLoading?"Loading...":`${bankDetails?.accountNumber} - ${bankDetails?.accountName}`}
                    </h5>
                  </div>
                  <div
                    onClick={toggleBankDrawer}
                    className="flex items-center justify-center h-full w-16 bg-[rgba(255,255,255,.2)] cursor-pointer"
                  >
                    <ArrowRight2 variant="TwoTone" size={10} color="#F4EFFE" />
                  </div>
                </div>:
              <></>
              }

            {/* container */}
            <div className="flex w-full flex-col mt-auto">
              {/* continue button */}
              <div className="w-full flex flex-col items-stretch">
                <ErrorButton
                loading={isSellLoading}
                disabled={isEmpty(bankDetails) || !formData.amount}
                onClick={handleSubmit}
                text={`Sell ${getAssetLabel(+assetId)}`}
                />
              </div>
            </div>
          </form>
        </div>

         {/* Drawer */}
         <Drawer
            isOpen={isBankDrawerOpen}
            onClose={toggleBankDrawer}
            position="bottom">

                 {/* drawer content container */}
                <StrictWrapper
                title={"Receiving Bank"}
                closeDrawer={toggleBankDrawer}>

              {/* Body content  */}
              <BanksView
                listItem={banks}
                closeDrawer={toggleBankDrawer}
                setBank={setBankDetails}/>              
                </StrictWrapper>
            </Drawer> 
      </div>
    </PageWrapper>
  );
};

export default SellCoin;


// () => setIsSelected(true)