import React, { useEffect, useState } from "react";
import CircularProgress from "./CircularProgress";
import { useNavigate, useSearchParams } from "react-router-dom";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import BASE_URL from "../../../../../serivce/url.serice";
import { isEmpty } from "../../../helpers/isEmpty";
import { getAssetLabel } from "../../../helpers/getAssetLabel";


const OngoingListingCard = () => {
  // STATES
  const [ongoingOrdersData, setOngoingOrdersData] = useState([]);
  const { data,  makeGetRequest } = useMakeReq()
  const [searchParams] = useSearchParams();
    const assetId = searchParams?.get("asset")



  // DATA INITIALIZATION
  const navigate = useNavigate();
  // console.log(getAssetLabel)

  useEffect(() => {
    getOngoingData();
  }, [data]);

  useEffect(() => {
    if (!isEmpty(data)) {
      setOngoingOrdersData(data);
    }
  }, [data]);

  const getOngoingData = async () => {
    try {
      await makeGetRequest(
        `${BASE_URL}/api/ListingManagement/GetAdListing/0/10`
      );
      setOngoingOrdersData(data?.data?.items);

    } catch (error) {
      setOngoingOrdersData(error);
    }
  };

  return (
      <>
        {ongoingOrdersData?.map((ordersData, index) => {
          // console.log(ordersData.id)
          return (
            <div className="w-full border border-[#F5F3F6] bg-white rounded-lg py-3 px-4 flex flex-col gap-4" key={index}>
              {/* profile info */}
              <div className="w-full flex items-center justify-between pb-4 border-b border-[#F5F3F6]">
                {/* image and name */}
                <div className="flex items-center gap-2">
                  {/* <CircularProgress percent={10} {ordersData.percentageUsed}/>
                   */}
                   {`${ordersData.percentageUsed}%`}

                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-[#3A0CA3] text-xs">BUY ORDER</h3>

                    <h3 className="font-bold text-black text-xs">(#000001)</h3>

                    <h4 className="text-[#8D85A0] text-xs font-normal">
                      Listed On: {ordersData.created}
                    </h4>
                  </div>
                </div>

                {/* price */}
                <div className="flex flex-col items-end gap-[2px]">
                  <h4 className="text-[#8D85A0] text-xs font-normal">Price</h4>

                  <h4 className="text-lg font-bold text-[#2D6A68]">
                    {ordersData.tradePrice}
                  </h4>
                </div>
              </div>

              {/* available order & min-max order */}
              <div className="w-full flex items-center justify-between">
                <div className="flex flex-col gap-[2px]">
                  <h3 className="font-normal text-xs text-[#8D85A0]">
                    Listing Amount
                  </h3>

                  <h4 className="text-sm font-semibold text-black">{ordersData.availableBalance}</h4>
                </div>

                <div className="flex flex-col gap-[2px] items-end">
                  <h3 className="font-normal text-xs text-[#8D85A0]">
                    Min - Max Order
                  </h3>

                  <h4 className="text-sm font-semibold text-black">
                    {ordersData.lowerLimit
                    } - {ordersData.upperLimit}
                  </h4>
                </div>
              </div>

              {/* buttons */}
              <div className="w-full flex items-center justify-between gap-5 pb-4">
                {/* cancel button */}
                <span
                  onClick={() => navigate(-1)}
                  className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer w-full text-[#645B75] text-xs font-normal"
                >
                  Cancel
                </span>

                {/* view more button */}
                <span
                  onClick={() => navigate(`/listing/overview/${ordersData.id}`)}
                  // asset={coinSelect}
                  className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer w-full text-[#3A0CA3] text-xs font-normal"
                
                >
                  View More
                </span>
              </div>
            </div>
          );

        })}
    

      {/* sell order card */}
      <div className="w-full border border-[#F5F3F6] bg-white rounded-lg py-3 px-4 flex flex-col gap-4">
        {/* profile info */}
        <div className="w-full flex items-center justify-between pb-4 border-b border-[#F5F3F6]">
          {/* image and name */}
          <div className="flex items-center gap-2">
            <CircularProgress percent={10} />

            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-[#D1292D] text-xs">SELL ORDER</h3>

              <h3 className="font-bold text-black text-xs">BTC(#000001)</h3>

              <h4 className="text-[#8D85A0] text-xs font-normal">
                Listed On: 09/04/2023
              </h4>
            </div>
          </div>

          {/* price */}
          <div className="flex flex-col items-end gap-[2px]">
            <h4 className="text-[#8D85A0] text-xs font-normal">Price</h4>

            <h4 className="text-lg font-bold text-[#2D6A68]">₦300.00</h4>
          </div>
        </div>

        {/* available order & min-max order */}
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col gap-[2px]">
            <h3 className="font-normal text-xs text-[#8D85A0]">
              Listing Amount
            </h3>

            <h4 className="text-sm font-semibold text-black">₦100,000.00</h4>
          </div>

          <div className="flex flex-col gap-[2px] items-end">
            <h3 className="font-normal text-xs text-[#8D85A0]">
              Min - Max Order
            </h3>

            <h4 className="text-sm font-semibold text-black">
              ₦2,000.00 - ₦230,000.00
            </h4>
          </div>
        </div>

        {/* buttons */}
        <div className="w-full flex items-center justify-between gap-5 pb-4">
          {/* cancel button */}
          <span
            onClick={() => navigate(-1)}
            className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer w-full text-[#645B75] text-xs font-normal"
          >
            Cancel
          </span>

          {/* view more button */}
          <span
            onClick={() => navigate("/listing/overview/id:15")}
            className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer w-full text-[#3A0CA3] text-xs font-normal"
          >
            View More
          </span>
        </div>
      </div>
      </>
  );
};

export default OngoingListingCard;