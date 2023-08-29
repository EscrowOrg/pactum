import React, { useEffect, useState } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import { BackButton } from "../../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import { AUTH_GET_OVERVIEW_ORDERS } from "../../../../../serivce/apiRoutes.service";
import { isEmpty } from "../../../helpers/isEmpty";
import LoadingSpinner from "../../../components/Global/LoadingSpinner";
import { getAssetLabel } from "../../../helpers/getAssetLabel";
import { modifyDateTime } from "../../../helpers/modifyDateTime";
import EmptyDataComp from "../../../components/Global/EmptyDataComp";
import { AdlistStatus } from "../../../helpers/enums";
import CircularProgress from "../../../components/Dashboard/Listing/CircularProgress";

const ClosedListingOverview = () => {
  const [closedOverview, setClosedOverview] = useState();
  const { data, getLoading, makeAuthGetReq, isSuccessful } = useMakeReq();

  // DATA INITIALIZATION
  const navigate = useNavigate();

  const { id } = useParams();

  // USE EFFECT
  useEffect(() => {
    makeAuthGetReq(`${AUTH_GET_OVERVIEW_ORDERS}/${id}`);
  }, []);

  useEffect(() => {
    if (!isEmpty(data)) {
      if (isSuccessful) {
        setClosedOverview(data?.data);
      }
    }
  }, [data, isSuccessful]);

  return (
    <PageWrapper>
      <>
        {getLoading ? (
          <LoadingSpinner viewPortHeight="h-[80vh]" />
        ) : !isEmpty(closedOverview) ? (
          <>
            {closedOverview.adListStatus ===
              (AdlistStatus.COMPLETED && AdlistStatus.CANCELLED) && (
              <div className="w-full h-full border border-[#F5F3F6] bg-white rounded-lg py-4 px-5 flex flex-col gap-4">
                <div className="flex gap-10">
                  <BackButton />
                  <h1 className="text-lg font-bold text-black pl-10 mt-2">
                    #000001
                  </h1>
                </div>

                <div>
                  <h3 className="font-normal text-sm text-[#8D85A0] my-3">
                    {`${modifyDateTime(closedOverview.created)}`}
                  </h3>

                  <div className="flex justify-between my-4">
                    <div className="flex gap-10">
                      <div className="">
                        <h4 className="font-normal text-xs text-[#8D85A0] pb-2">
                          Asset
                        </h4>
                        <h4 className="text-base font-bold text-black">
                          {getAssetLabel(closedOverview.asset)}
                        </h4>
                      </div>

                      <div className="pl-16">
                        <h4 className="font-normal text-xs text-[#8D85A0] pb-2">
                          Amount
                        </h4>
                        <h4 className="text-base font-bold text-black">
                          #{closedOverview.listingAmount}
                        </h4>
                      </div>
                    </div>

                    <div>
                      <CircularProgress
                        percent={`${closedOverview.percentageUsed}`}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between my-4">
                    <div className="flex gap-10">
                      <div>
                        <h4 className="font-normal text-xs text-[#8D85A0] pb-2">
                          Price
                        </h4>
                        <h4 className="text-base font-bold text-black">
                          #{closedOverview.tradePrice}
                        </h4>
                      </div>

                      <div className="pl-4">
                        <h4 className="font-normal text-xs text-[#8D85A0] pb-2">
                          Receiving Bank
                        </h4>
                        <h4
                          onClick={() =>
                            navigate(
                              `/listing/overview/more-info/${closedOverview.bankId}`
                            )
                          }
                          className=" text-[#48A9A6] border-b border-solid border-[#48A9A6] cursor-pointer"
                        >
                          Click to view
                        </h4>
                      </div>
                    </div>

                    {/* cancel button */}
                    <span
                      onClick={() => navigate(-1)}
                      className="  text-[#645B75] text-sm font-normal"
                    >
                      {closedOverview.adListStatus === AdlistStatus.COMPLETED
                        ? "Completed"
                        : "Cancelled"}
                    </span>
                  </div>

                  {/* MIN-MAX LIMIT */}
                  <h4 className="font-normal text-xs text-[#8D85A0] pb-2">
                    Min-Max Limit
                  </h4>
                  <h4 className="text-base font-bold text-black">
                    {closedOverview.lowerLimit} - {closedOverview.upperLimit}
                  </h4>
                </div>

                {/* ALL PAYMENTS LISTS */}

                <div className="mt-8">
                  <h4 className="text-base font-bold text-black pb-2">
                    All Orders
                  </h4>
                  {!isEmpty(closedOverview) ? (
                    <>
                      {closedOverview?.payments?.map((payment, index) => (
                        <div
                          key={index}
                          className="flex justify-between mt-2 py-3 border-b border-solid"
                        >
                          {/* Order date and time */}
                          <div>
                            <p className="font-normal text-xs text-[#8D85A0] pb-1">
                              {modifyDateTime(payment.created)}
                            </p>

                            {/* Received Order */}
                            <h4 className="text-base font-bold text-black">
                              {`${payment.fiatAmount} ${getAssetLabel(
                                +payment.asset
                              )}`}
                            </h4>
                            <div className="flex gap-1">
                              <h4 className="font-normal text-xs text-[#8D85A0] pt-1 ">
                                {payment.adListing.merchantName}
                              </h4>
                              <h4 className=" font-bold text-xs text-[#10B981] mt-1">
                                RECEIVED
                              </h4>
                            </div>
                          </div>

                          {/* view more button */}
                          <span
                            onClick={() =>
                              navigate(
                                `/listing/closed-listing-order/${payment.id}`
                              )
                            }
                            className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 mt-2 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer text-[#3A0CA3] text-xs font-normal"
                          >
                            View More
                          </span>
                        </div>
                      ))}
                    </>
                  ) : (
                 
                    <EmptyDataComp viewPortHeight="h-[80vh]" />
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <EmptyDataComp viewPortHeight="h-[80vh]" />
        )}
      </>
    </PageWrapper>
  );
};

export default ClosedListingOverview;
