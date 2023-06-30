import { TransactionMinus } from "iconsax-react";
import { useEffect, useState } from "react";
import {BackButton, ErrorButton,PrimaryButton} from "../../../components/Button";
import PageWrapper from "../../../layouts/PageWrapper";
import { useNavigate, useSearchParams } from "react-router-dom";
import SelectInput from "../../../components/SelectInput";
import "./buysellcoin.scss";
import { TextLabelInput } from "../../../components/Input";
import Drawer from "../../../layouts/Drawer";
import StrictWrapper from "../../../layouts/Drawer/StrictWrapper";
import Assets from "./Assets";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import { GET_AD_LISTING } from "../../../../../serivce/apiRoutes.service";
import LoadingSpinner from "../../../components/Global/LoadingSpinner";
import { isEmpty } from "../../../helpers/isEmpty";
import EmptyDataComp from "../../../components/Global/EmptyDataComp";
import { AiOutlineUser } from "react-icons/ai";
import ListingAdCard from "../../../components/Dashboard/Listing/ListingAdCard";

const BuySellCoin = () => {

  // STATES
  const [action, setAction] = useState(1);
  const [coinSelect, setCoinSelect] = useState(null);
  const [listingAds, setListingAds] = useState([])
  const [currentPage, setCurrentPage] = useState(0)


  // DRAWER STATES
  const [isOpen, setIsOpen] = useState(false);


  // DATA INTIALIZATION
  const {
    getLoading,
    makeGetRequest,
    isSuccessful,
    data
  } = useMakeReq()
  const [searchParams] = useSearchParams();
  const coinOptions = [
    { value: 1, label: "BTC" },
    { value: 2, label: "ETH" },
    { value: 3, label: "BNB" },
  ];


  // HANDLERS
  const toggleDrawer = (value) => {
    // value?setIsOpen(value):setIsOpen(isOpen => !isOpen)
    setIsOpen((isOpen) => !isOpen);
  };

  
  // SIDE EFFECTS
  useEffect(() => {
    setCoinSelect(coinOptions[0]);
    const id = searchParams?.get("id");
    if (id) {
      setAction(+id);
    } else {
      console.log("ID isn't present");
    }
  }, []);
  useEffect(()=>{
    makeGetRequest(`${GET_AD_LISTING}/${currentPage}/${10}`)
  }, [])
  useEffect(() => {
    console.log("success state: ", isSuccessful)
    if(isSuccessful && !isEmpty(data)){
      setListingAds(data?.data)
    }
  }, [data, isSuccessful]);

  return (
    <PageWrapper>
      <div className="w-full h-full flex flex-col gap-3 bg-[#f0f0f0]">

        {/* header */}
        <div className="border-b border-[#F5F3F6] bg-white pb-[14px] w-full flex flex-col pt-5 gap-4">

          {/* navbar */}
          <nav className="flex items-center w-[92%] mx-auto justify-between">

            {/* back button */}
            <BackButton />

            {/* text */}
            <div className="flex items-center gap-6">
              <h3
                onClick={() => setAction(1)}
                className={`cursor-pointer font-bold pb-2 text-lg ${
                  action === 1 ? "active-action1" : "text-[#C3BFCD]"
                }`}
              >
                Buy
              </h3>

              <h3
                onClick={() => setAction(2)}
                className={`cursor-pointer font-bold pb-2 text-lg ${
                  action === 2 ? "active-action2" : "text-[#C3BFCD]"
                }`}
              >
                Sell
              </h3>
            </div>

            {/* transaction list button */}
            <button className="px-3 py-3 w-fit border border-[#DAD7E0] bg-[#FAFAFB] inline-flex items-center justify-center rounded-xl cursor-pointer hover:bg-gray-200">
              <TransactionMinus size="14" color="#16053D" />
            </button>
          </nav>

          {/* wrapper */}
          <div className="w-[92%] mx-auto">

            {/* container */}
            <div className="grid grid-cols-[2fr_1fr] w-full gap-x-3">
              
              {/* textinput */}
              <TextLabelInput
                label={"NGN"}
                type="number"
                placeholderText={"Enter amount"}
              />

              {/* select input */}
              <SelectInput
                isDisabled
                value={coinSelect}
                onChange={(e) => setCoinSelect(e)}
                options={coinOptions}
              />
            </div>
          </div>
        </div>

        {/* body */}
        <div className="w-full flex flex-col justify-between h-full mx-auto gap-5 pb-5 bg-transparent">

          {/* container */}
          <div className="w-[92%] flex flex-col mx-auto gap-5 bg-transparent">
            {
              getLoading?
              <LoadingSpinner
              viewPortHeight="h-[95vh]" />:
              !isEmpty(listingAds)?
              listingAds?.filter(listingAd=>listingAd.listingType===action)?.map((listingAd, index) => (
                <ListingAdCard
                key={index}
                merchantName={listingAd.merchantName}
                username={listingAd.username}
                tradePrice={listingAd.tradePrice}
                availableBalance={listingAd.availableBalance}
                lowerLimit={listingAd.lowerLimit}
                upperLimit={listingAd.upperLimit}
                tradeMade={listingAd.tradeMade}
                percentageUsed={listingAd.percentageUsed}
                listingType={listingAd.listingType} />
              )):
              <EmptyDataComp
              viewPortHeight="h-[95vh]" />
            }
          </div>

          {/* pagination */}
          <div className="mx-auto px-2 w-[92%] flex items-center justify-between gap-2 mt-auto pb-3">

            {/* previous */}
            <button
            disabled={true} 
            className="text-[#3A0CA3] text-sm font-semibold disabled:text-gray-500 disabled:font-normal inline-flex items-center gap-1">
              <HiArrowSmLeft />
              previous
            </button>

            {/* next */}
            <button
            disabled={false} 
            className="text-[#3A0CA3] text-sm font-semibold disabled:text-gray-500 disabled:font-normal inline-flex items-center gap-1">
              Next
              <HiArrowSmRight />
            </button>
          </div>
        </div>

        {/* Drawer */}
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          position="bottom"
        >
          {/* drawer content container */}
          <StrictWrapper title={"Report"} closeDrawer={() => setIsOpen(false)}>
            
            {/* Body content */}
            <Assets />
          </StrictWrapper>
        </Drawer>
      </div>
    </PageWrapper>
  );
};

export default BuySellCoin;

//
