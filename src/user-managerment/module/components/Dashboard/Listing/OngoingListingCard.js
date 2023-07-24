import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import { isEmpty } from "../../../helpers/isEmpty";
import LoadingSpinner from "../../Global/LoadingSpinner";
import { AUTH_GET_LISTING_ORDERS } from "../../../../../serivce/apiRoutes.service";
import EmptyDataComp from "../../Global/EmptyDataComp";
import ListingAdPagination from "../../../pages/Dashboard/Listing/ListingAdPagination";
import { getAssetLabel } from "../../../helpers/getAssetLabel";
import { modifyDateTime } from "../../../helpers/modifyDateTime";

const OngoingListingCard = () => {
  // STATES
  const [ongoingOrdersData, setOngoingOrdersData] = useState([]);
  const { data, getLoading, makeAuthGetReq, isSuccessful } = useMakeReq();
  const [currentPage, setCurrentPage] = useState(0);

  // HOOKS
  const skip = useMemo(() => {
    let output = currentPage * 10 - 1;
    return output < 0 ? 0 : output;
  }, [currentPage]);

  // DATA INITIALIZATION
  const navigate = useNavigate();

  // SIDE EFFECT
  useEffect(() => {
    makeAuthGetReq(`${AUTH_GET_LISTING_ORDERS}/0/10`);
  }, []);

  // &skip=${skip}&take=${10}
  useEffect(() => {
    if (!isEmpty(data)) {
      if (isSuccessful) {
        // console.log(data?.data?.items);
        setOngoingOrdersData(data?.data?.items);
      }
    }
  }, [data, isSuccessful]);

  return (
    <>
      {getLoading ? (
        <LoadingSpinner viewPortHeight="h-[80vh]" />
      ) : !isEmpty(ongoingOrdersData) ? (
        <>
          {ongoingOrdersData?.map((ordersData, index) => {
            return (
              <div
                className="w-full border border-[#F5F3F6] bg-white rounded-lg py-3 px-4 flex flex-col gap-4"
                key={index}
              >
                {/* profile info */}
                <div className="w-full flex items-center justify-between pb-4 border-b border-[#F5F3F6]">
                  {/* image and name */}
                  <div className="flex items-center gap-2">
                    {`${ordersData.percentageUsed}%`}

                    <div className="flex flex-col gap-1">
                      <h3
                        style={{
                          color:
                            ordersData.listingType === 1
                              ? "#3A0CA3"
                              : "#D1292D",
                          fontSize:
                            ordersData.listingType === 1 ? "14px" : "14px",
                          fontWeight: ordersData.listingType === 1 ? 700 : 700,
                        }}
                      >
                        {/* BUY ORDER */}
                        {ordersData.listingType === 1
                          ? "BUY ORDER"
                          : "SELL ORDER"}
                      </h3>

                      <h3 className="font-bold text-black text-xs">
                        {`${getAssetLabel(+ordersData.assets)} (#000001)`}
                      </h3>

                      <h4 className="text-[#8D85A0] text-xs font-normal">
                        Listed On: {modifyDateTime(ordersData.created)}
                      </h4>
                    </div>
                  </div>

                  {/* price */}
                  <div className="flex flex-col items-end gap-[2px]">
                    <h4 className="text-[#8D85A0] text-xs font-normal">
                      Price
                    </h4>

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

                    <h4 className="text-sm font-semibold text-black">
                      {ordersData.availableBalance}
                    </h4>
                  </div>

                  <div className="flex flex-col gap-[2px] items-end">
                    <h3 className="font-normal text-xs text-[#8D85A0]">
                      Min - Max Order
                    </h3>

                    <h4 className="text-sm font-semibold text-black">
                      {ordersData.lowerLimit} - {ordersData.upperLimit}
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
                    onClick={() =>
                      navigate(`/listing/overview/${ordersData.id}`)
                    }
                    // asset={coinSelect}
                    className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer w-full text-[#3A0CA3] text-xs font-normal"
                  >
                    View More
                  </span>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <EmptyDataComp viewPortHeight="h-[80vh]" />
      )}

      <ListingAdPagination
        disabledNextBtn={
          isEmpty(ongoingOrdersData) || isEmpty(ongoingOrdersData.items)
        }
        totalCount={ongoingOrdersData?.totalCount}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        skip={skip}
      />
    </>
  );
};

export default OngoingListingCard;
