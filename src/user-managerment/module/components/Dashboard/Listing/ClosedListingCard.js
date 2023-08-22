import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import { AUTH_GET_AD_LISTING_BY_VALUE } from "../../../../../serivce/apiRoutes.service";
import { isEmpty } from "../../../helpers/isEmpty";
import EmptyDataComp from "../../Global/EmptyDataComp";
import LoadingSpinner from "../../Global/LoadingSpinner";
import ListingAdPagination from "../../../pages/Dashboard/Listing/ListingAdPagination";
import { getAssetLabel } from "../../../helpers/getAssetLabel";
import { modifyDateTime } from "../../../helpers/modifyDateTime";
import { getUserId } from "../../../../../serivce/cookie.service";
import { AdlistStatus, ListingType } from "../../../helpers/enums";
import CircularProgress from "./CircularProgress";

const ClosedListingCard = () => {
  // STATES
  const [closedListingData, setClosedListingData] = useState([]);
  const { data, getLoading, makeAuthGetReq, isSuccessful } = useMakeReq();
  const [currentPage, setCurrentPage] = useState(0);

  // HOOKS
  const skip = useMemo(() => {
    let output = currentPage * 10 - 1;
    return output < 0 ? 0 : output;
  }, [currentPage]);

  // DATA INITIALIZATION
  const navigate = useNavigate();
  const userId = getUserId();

  // SIDE EFFECT
  useEffect(() => {
    makeAuthGetReq(
      `${AUTH_GET_AD_LISTING_BY_VALUE}?skip=${skip}&take=${10}&userId=${userId}`
    );
  }, []);

  useEffect(() => {
    if (!isEmpty(data)) {
      if (isSuccessful) {
        setClosedListingData(data?.data);
      }
    }
  }, [data, isSuccessful]);

  return (
    <>
      {getLoading ? (
        <LoadingSpinner viewPortHeight="h-[80vh]" />
      ) : !isEmpty(closedListingData) ? (
        <div className="my-0">
          {closedListingData?.items?.map((closedOrders, index) => {
            return (
              <div key={index}>
                {closedOrders.adListStatus ===
                  (AdlistStatus.COMPLETED && AdlistStatus.CANCELLED) && (
                  <div className="w-full border border-[#F5F3F6] bg-white rounded-lg py-3 px-4 my-3 flex flex-col gap-4">
                    {/* profile info */}
                    <div className="w-full flex items-center justify-between pb-4 border-b border-[#F5F3F6]">
                      {/* image and name */}
                      <div className="flex items-center gap-2">
                        <CircularProgress
                          percent={`${closedOrders.percentageUsed}`}
                        />
                        <div className="flex flex-col gap-1">
                          <h3
                            style={{
                              color:
                                closedOrders.listingType === ListingType.BUY
                                  ? "#3A0CA3"
                                  : "#D1292D",
                              fontSize:
                                closedOrders.listingType === ListingType.BUY
                                  ? "14px"
                                  : "14px",
                              fontWeight:
                                closedOrders.listingType === ListingType.BUY
                                  ? 700
                                  : 700,
                            }}
                          >
                            {closedOrders.listingType === ListingType.BUY
                              ? "BUY ORDER"
                              : "SELL ORDER"}
                          </h3>

                          <h3 className="font-bold text-black text-xs">
                            {`${getAssetLabel(+closedOrders.assets)}(#000001)`}
                          </h3>

                          <h4 className="text-[#8D85A0] text-xs font-normal">
                            Listed On: {modifyDateTime(closedOrders.created)}
                          </h4>
                        </div>
                      </div>

                      {/* price */}
                      <div className="flex flex-col items-end gap-[2px]">
                        <h4 className="text-[#8D85A0] text-xs font-normal">
                          Price
                        </h4>

                        <h4 className="text-lg font-bold text-[#2D6A68]">
                          ₦{closedOrders.tradePrice}
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
                      onClick={() =>
                        navigate(`/listing/closed-listing/${closedOrders.id}`)
                      }
                      className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer w-full text-[#3A0CA3] text-xs font-bold"
                    >
                      View More
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <EmptyDataComp viewPortHeight="h-[80vh]" />
      )}

      <ListingAdPagination
        disabledNextBtn={
          isEmpty(closedListingData) || isEmpty(closedListingData.items)
        }
        totalCount={closedListingData?.totalCount}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        skip={skip}
      />
    </>
  );
};

export default ClosedListingCard;
