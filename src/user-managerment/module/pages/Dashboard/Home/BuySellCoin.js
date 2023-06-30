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

const BuySellCoin = () => {

  // STATES
  const [action, setAction] = useState(1);
  const [coinSelect, setCoinSelect] = useState(null);
  const [listingAds, setListingAds] = useState([])


  // DRAWER STATES
  const [isOpen, setIsOpen] = useState(false);


  // DATA INTIALIZATION
  const {
    getLoading,
    makeGetRequest,
    isSuccessful,
    data
  } = useMakeReq()
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const coinOptions = [
    { value: 1, label: "BTC" },
    { value: 2, label: "ETH" },
    { value: 3, label: "BNB" },
  ];
  const offers = [
    {
      imgUrl: "/images/dashboard/purchase-imgurl.png",
      name: "Asemota Joel",
      username: "@jhoellasemota",
      price: 300.0,
      availableOrder: 100000.0,
      minMaxOrder: [2000.0, 230000.0],
      tradeMade: 499,
      completionPercentage: 98,
    },
    {
      imgUrl: "/images/dashboard/purchase-imgurl.png",
      name: "Dave Joel",
      username: "@jh567",
      price: 560.0,
      availableOrder: 210000.0,
      minMaxOrder: [2000.0, 230000.0],
      tradeMade: 499,
      completionPercentage: 98,
    },
    {
      imgUrl: "/images/dashboard/purchase-imgurl.png",
      name: "Asemota Joel",
      username: "@jhoellasemota",
      price: 300.0,
      availableOrder: 100000.0,
      minMaxOrder: [2000.0, 230000.0],
      tradeMade: 499,
      completionPercentage: 98,
    },
    {
      imgUrl: "/images/dashboard/purchase-imgurl.png",
      name: "Asemota Joel",
      username: "@jhoellasemota",
      price: 300.0,
      availableOrder: 100000.0,
      minMaxOrder: [2000.0, 230000.0],
      tradeMade: 499,
      completionPercentage: 98,
    },
    {
      imgUrl: "/images/dashboard/purchase-imgurl.png",
      name: "Asemota Joel",
      username: "@jhoellasemota",
      price: 300.0,
      availableOrder: 100000.0,
      minMaxOrder: [2000.0, 230000.0],
      tradeMade: 499,
      completionPercentage: 98,
    },
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
    makeGetRequest(`${GET_AD_LISTING}/${0}/${10}`)
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
        <div className="w-full flex flex-col mx-auto gap-5 pb-5 bg-transparent">

          {/* container */}
          <div className="w-[92%] flex flex-col mx-auto gap-5 bg-transparent">
            {
              getLoading?
              <LoadingSpinner
              viewPortHeight="h-[95vh]" />:
              !isEmpty(listingAds)?
              listingAds.map((listingAd, index) => (
                <div
                  className="w-full border border-[#F5F3F6] bg-white rounded-lg py-3 px-4 flex flex-col gap-4"
                >

                  {/* profile info */}
                  <div className="w-full flex items-center justify-between pb-4 border-b border-[#F5F3F6]">

                    {/* name */}
                    <div className="flex items-center gap-2">
                      <img
                        alt=""
                        src={listingAd.imgUrl}
                        className="h-[40px] w-[40px] rounded-[50%]"
                      />

                      <div className="flex flex-col gap-1">
                        <h3 className="font-semibold text-black text-sm">
                          {listingAd.merchantName}
                        </h3>

                        <h4 className="text-[#8D85A0] text-xs font-normal">
                          {listingAd.username}
                        </h4>
                      </div>
                    </div>

                    {/* price */}
                    <div className="flex flex-col items-end gap-[2px]">
                      <h4 className="text-[#8D85A0] text-xs font-normal">
                        Price
                      </h4>

                      <h4 className="text-lg font-bold text-[#2D6A68]">
                        ₦{listingAd.tradePrice.toLocaleString('en-US')}
                      </h4>
                    </div>
                  </div>

                  {/* available order & min-max order */}
                  <div className="w-full flex items-center justify-between pb-4 border-b border-[#F5F3F6]">
                    <div className="flex flex-col gap-[2px]">
                      <h3 className="font-normal text-xs text-[#8D85A0]">
                        Available Order
                      </h3>

                      <h4 className="text-sm font-semibold text-black">
                        ₦{listingAd?.availableOrder?.toLocaleString("en-US")}
                      </h4>
                    </div>

                    <div className="flex flex-col gap-[2px] items-end">
                      <h3 className="font-normal text-xs text-[#8D85A0]">
                        Min - Max Order
                      </h3>

                      <h4 className="text-sm font-semibold text-black">
                        ₦{listingAd.lowerLimit.toLocaleString("en-US")} -{" "}
                        {listingAd.upperLimit.toLocaleString("en-US")}
                      </h4>
                    </div>
                  </div>

                  {/* trade percentage */}
                  <div className="w-full flex items-center justify-between pb-4">
                    <div className="flex flex-col gap-[2px]">
                      <h3 className="font-normal text-xs text-[#8D85A0]">
                        Trade
                      </h3>

                      <h4 className="text-sm font-semibold text-[#645B75]">
                        {listingAd.tradeMade}{" "}
                        <span className="text-[#8D85A0] font-normal">{`(${listingAd.completionPercentage}% Completion)`}</span>
                      </h4>
                    </div>

                    {listingAd.listingType === 1 ? (
                      <PrimaryButton
                        onClick={() =>
                          navigate("/home/buy-coin/id:3")
                        }
                        height="h-10"
                        text="Buy"
                      />
                    ) : (
                      <ErrorButton
                        onClick={() =>
                          navigate("/home/sell-coin/id:3")
                        }
                        height="h-10"
                        text="Sell"
                      />
                    )}
                  </div>
                </div>
              )):
              <EmptyDataComp
              viewPortHeight="h-[95vh]" />
            }
          </div>

          {/* pagination */}
          <div className="mx-auto px-2 w-[92%] flex items-center justify-between gap-2">

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
