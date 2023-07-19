import React, { useEffect, useState } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import { BackButton } from "../../../components/Button";
import CircularProgress from "../../../components/Dashboard/Listing/CircularProgress";
import Checkbox from "../../../components/Checkbox";
import { useNavigate, useParams } from "react-router-dom";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import { AUTH_GET_OVERVIEW_ORDERS } from "../../../../../serivce/apiRoutes.service";
import { isEmpty } from "../../../helpers/isEmpty";
import LoadingSpinner from "../../../components/Global/LoadingSpinner";
import { getAssetLabel } from "../../../helpers/getAssetLabel";

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
        // console.log(data?.data);
        setClosedOverview(data?.data);
      }
    }
  }, [data, isSuccessful]);
  console.log(data);
  return (
    <PageWrapper>
      {getLoading ? (
        <LoadingSpinner viewPortHeight="h-[80vh]" />
      ) : !isEmpty(closedOverview) ? (
        <>
          <div className="w-full border border-[#F5F3F6] bg-white rounded-lg py-4 px-5 flex flex-col gap-4">
            <div className="flex gap-10">
              <BackButton />
              <h1 className="text-lg font-bold text-black pl-10 mt-2">
                #000001
              </h1>
            </div>

            <div>
              <h3 className="font-normal text-sm text-[#8D85A0] my-3">
                Listed On: 9/04/2023 - 10:43AM
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

                <div>{closedOverview.percentageUsed}</div>
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
                    <h4 className=" text-[#48A9A6] border-b border-solid border-[#48A9A6]">
                      Click to view
                    </h4>
                  </div>
                </div>

                {/* cancel button */}
                <span
                  onClick={() => navigate(-1)}
                  className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer  text-[#645B75] text-xs font-normal"
                >
                  Cancel
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
                All Payments
              </h4>
              {closedOverview.payments.map((payment, index) => {
                return (
                  <div key={index} className="flex justify-between mt-2 py-3 border-b border-solid">
                    {/* Order date and time */}
                    <div>
                      <p className="font-normal text-xs text-[#8D85A0] pb-1">
                        {payment.created}
                      </p>

                      {/* Received Order */}
                      <div className="flex gap-1">
                        <h4 className="text-base font-bold text-black">
                          #100,000.00
                        </h4>

                        {/* checkbox  */}
                        <Checkbox className={"mt-2 "} />

                        <h4 className=" font-semibold text-xs text-[#3A0CA3] mt-1">
                          RECEIVED
                        </h4>
                      </div>

                      {/*  */}
                      <h4 className="font-normal text-xs text-[#8D85A0] pt-1 ">
                        {payment.adListing.merchantName}
                      </h4>
                    </div>

                    {/* view more button */}
                    <span
                      onClick={() =>
                        navigate("/listing/closed-listing-order/id:14")
                      }
                      className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 mt-2 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer text-[#3A0CA3] text-xs font-normal"
                    >
                      View More
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : null}
    </PageWrapper>
  );
};

export default ClosedListingOverview;
