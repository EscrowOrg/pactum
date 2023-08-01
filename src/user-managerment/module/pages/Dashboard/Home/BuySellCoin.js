import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AUTH_GET_AD_LISTING_BY_VALUE } from "../../../../../serivce/apiRoutes.service";
import { BackButton, TransactionsListButton } from "../../../components/Button";
import ListingAdCard from "../../../components/Dashboard/Listing/ListingAdCard";
import EmptyDataComp from "../../../components/Global/EmptyDataComp";
import LoadingSpinner from "../../../components/Global/LoadingSpinner";
import { TextLabelInput } from "../../../components/Input";
import SelectInput from "../../../components/SelectInput";
import { isEmpty } from "../../../helpers/isEmpty";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import Drawer from "../../../layouts/Drawer";
import StrictWrapper from "../../../layouts/Drawer/StrictWrapper";
import PageWrapper from "../../../layouts/PageWrapper";
import ListingAdPagination from "../Listing/ListingAdPagination";
import Assets from "./Assets";
import "./buysellcoin.scss";

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
    makeAuthGetReq,
    isSuccessful,
    data
  } = useMakeReq()
  const [searchParams] = useSearchParams();
  const coinOptions = [
    {value: 0, label: "tether"},
    { value: 1, label: "bitcoin" },
    { value: 2, label: "ethereum" },
    { value: 3, label: "binancecoin" },
  ];
  const coinId = searchParams?.get("asset")
  const id = searchParams?.get("id");
  const navigate = useNavigate()
  
  
  // SIDE EFFECTS
  useEffect(() => {
    setCoinSelect(coinId?coinOptions.find(item => item.label === coinId):coinOptions[0]);
    if (id) {
      setAction(+id);
    } else {
      console.log("ID isn't present");
    }
  }, []);

  useEffect(()=>{

    // making GET request
    makeAuthGetReq(`${AUTH_GET_AD_LISTING_BY_VALUE}?skip=${skip}&take=${10}&asset=${coinSelect?.value || (coinOptions.find(item => item.label === (coinId || 2)).value || 1)}`)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, coinSelect])

  // populate data
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
                onClick={() => setAction(2)}
                className={`cursor-pointer font-bold pb-2 text-lg ${
                  action === 2 ? "active-action1" : "text-[#C3BFCD]"
                }`}
              >
                Buy
              </h3>

              <h3
                onClick={() => setAction(1)}
                className={`cursor-pointer font-bold pb-2 text-lg ${
                  action === 1 ? "active-action2" : "text-[#C3BFCD]"
                }`}
              >
                Sell
              </h3>
            </div>

            {/* transaction list button */}
            <TransactionsListButton />
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
                isDisabled={getLoading}
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
              listingAds?.items?.filter(listingAd=>listingAd.listingType===action && listingAd.active===true)?.map((listingAd, index) => (
                <ListingAdCard
                defaultAssetLabel={coinId}
                key={index}
                adID={listingAd.adId}
                merchantName={listingAd.merchantName}
                username={listingAd.username}
                tradePrice={listingAd.tradePrice}
                availableBalance={listingAd.availableBalance}
                lowerLimit={listingAd.lowerLimit}
                upperLimit={listingAd.upperLimit}
                tradeMade={listingAd.tradeMade}
                percentageUsed={listingAd.percentageUsed}
                listingType={listingAd.listingType}
                assetId={listingAd.assets}
                asset={coinSelect} />
              )):
              <EmptyDataComp
              bgColor="bg-transparent"
              viewPortHeight="h-[60vh]" />
            }
          </div>
        </div>

        {/* pagination */}
        <ListingAdPagination
        disabledNextBtn={isEmpty(listingAds) || isEmpty(listingAds.items)}
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
