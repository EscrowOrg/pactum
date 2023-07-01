import { TransactionMinus } from "iconsax-react";
import { useEffect, useMemo, useState } from "react";
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
import ListingAdCard from "../../../components/Dashboard/Listing/ListingAdCard";
import ListingAdPagination from "../Listing/ListingAdPagination";

const BuySellCoin = () => {

  // STATES
  const [action, setAction] = useState(1);
  const [coinSelect, setCoinSelect] = useState(null);
  const [listingAds, setListingAds] = useState([])
  const [currentPage, setCurrentPage] = useState(0)


  // DRAWER STATES
  const [isOpen, setIsOpen] = useState(false);


  // HOOKS
  const skip = useMemo(()=>{
    let output = (currentPage*10)-1;
    return output<0?0:output
  }, [currentPage])


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
    makeGetRequest(`${GET_AD_LISTING}/${skip}/${10}`)
  }, [currentPage])
  useEffect(() => {
    if(isSuccessful && !isEmpty(data)){
      setListingAds(data?.data)
    }
  }, [data, isSuccessful]);

  return (
    <PageWrapper>
      <div className="w-full min-h-full flex flex-col gap-3 bg-[#f0f0f0]">

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
        <div className="w-full h-full flex flex-col justify-between mx-auto gap-5 bg-transparent">

          {/* container */}
          <div className="w-[92%] flex flex-col mx-auto gap-5 bg-transparent">
            {
              getLoading?
              <LoadingSpinner
              bgColor="bg-transparent"
              viewPortHeight="h-[60vh]" />:
              !isEmpty(listingAds?.items)?
              listingAds?.items?.filter(listingAd=>listingAd.listingType===action)?.map((listingAd, index) => (
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
              bgColor="bg-transparent"
              viewPortHeight="h-[60vh]" />
            }
          </div>

        </div>

        {/* pagination */}
        <ListingAdPagination
        totalCount={listingAds?.totalCount}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        skip={skip} />
          
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
