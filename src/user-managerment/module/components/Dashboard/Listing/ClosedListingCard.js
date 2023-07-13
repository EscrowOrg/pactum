import React, { useEffect, useState } from "react";
import CircularProgress from "./CircularProgress";
import { useNavigate } from "react-router-dom";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import BASE_URL from "../../../../../serivce/url.serice";

const ClosedListingCard = () => {
  // STATES
  const [closedListingData, setClosedListingData] = useState([]);
  const { data, makeGetRequest } = useMakeReq();

  // DATA INITIALIZATION
  const navigate = useNavigate();

  useEffect(() => {
    getClosedData();
  }, [data]);

  const getClosedData = async () => {
    try {
      await makeGetRequest(
        `${BASE_URL}/api/ListingManagement/GetAdListing/${0}/${10}`
      );
      setClosedListingData(data?.data?.items);
      // console.log(data.data.items)
    } catch (error) {
      setClosedListingData(error);
    }
  };
// console.log(closedListingData)
  return (
    <>
          {closedListingData?.map((closedOrders, index) => {
            return (
              <div key={index} className="w-full border border-[#F5F3F6] bg-white  rounded-lg py-3 px-4 flex flex-col gap-4">
            {/* profile info */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-[#F5F3F6]">
              {/* image and name */}
              <div className="flex items-center gap-2">
                {/* <CircularProgress percent={100} /> */}
               {`${closedOrders.percentageUsed}%`}

                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-[#3A0CA3] text-xs">
                    BUY ORDER
                  </h3>

                  <h3 className="font-bold text-black text-xs">BTC(#000001)</h3>

                  <h4 className="text-[#8D85A0] text-xs font-normal">
                    Listed On:{closedOrders.created}
                  </h4>
                </div>
              </div>

              {/* price */}
              <div className="flex flex-col items-end gap-[2px]">
                <h4 className="text-[#8D85A0] text-xs font-normal">Price</h4>

                <h4 className="text-lg font-bold text-[#2D6A68]">₦{closedOrders.tradePrice}</h4>
              </div>
            </div>

            {/* available order & min-max order */}
            <div className="w-full flex items-center justify-between">
              <div className="flex flex-col gap-[2px]">
                <h3 className="font-normal text-xs text-[#8D85A0]">
                  Listing Amount
                </h3>

                <h4 className="text-sm font-semibold text-black">
                  ₦{closedOrders.availableBalance}
                </h4>
              </div>

              <div className="flex flex-col gap-[2px] items-end">
                <h3 className="font-normal text-xs text-[#8D85A0]">
                  Min - Max Order
                </h3>

                <h4 className="text-sm font-semibold text-black">
                  {closedOrders.lowerLimit} - {closedOrders.upperLimit}
                </h4>
              </div>
            </div>
            {/* view more button */}
            <span
              onClick={() => navigate("/listing/closed-listing/id:13")}
              className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer w-full text-[#3A0CA3] text-xs font-bold"
            >
              View More
            </span>
          </div>
            )
          })}
    
      {/* sell order card */}
      {/* <div className="w-full border border-[#F5F3F6] bg-white  rounded-lg py-3 px-4 flex flex-col gap-4">
        {/* profile info *
        <div className="w-full flex items-center justify-between pb-4 border-b border-[#F5F3F6]">
          {/* image and name *
          <div className="flex items-center gap-2">
            <CircularProgress percent={100} />

            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-[#D1292D] text-xs">SELL ORDER</h3>

              <h3 className="font-bold text-black text-xs">BTC(#000001)</h3>

              <h4 className="text-[#8D85A0] text-xs font-normal">
                Listed On: 09/04/2023
              </h4>
            </div>
          </div>

          {/* price *
          <div className="flex flex-col items-end gap-[2px]">
            <h4 className="text-[#8D85A0] text-xs font-normal">Price</h4>

            <h4 className="text-lg font-bold text-[#2D6A68]">₦300.00</h4>
          </div>
        </div>

        {/* available order & min-max order *
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
        {/* view more button *
        <span
          onClick={() => navigate("/listing/closed-listing/id:13")}
          className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer w-full text-[#3A0CA3] text-xs font-bold"
        >
          View More
        </span>
      </div> */}
    </>
  );
};

export default ClosedListingCard;

// onClick={() =>navigate("/listing/overview/awdgtsqrhbdfwtyu" )}
