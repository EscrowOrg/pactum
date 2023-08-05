import React, { useState, useEffect } from "react";
import { BackButton } from "../../../components/Button";
import NoTransitionWrapper from "../../../components/Dashboard/Home/NoTransitionWrapper";
import { useNavigate, useParams } from "react-router-dom";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import { isEmpty } from "../../../helpers/isEmpty";
import LoadingSpinner from "../../../components/Global/LoadingSpinner";
import {
  AUTH_GET_OVERVIEW_ORDERS,
  AUTH_UPDATE_AD_LISTING_STATUS,
} from "../../../../../serivce/apiRoutes.service";
import { getAssetLabel } from "../../../helpers/getAssetLabel";
import { modifyDateTime } from "../../../helpers/modifyDateTime";
import EmptyDataComp from "../../../components/Global/EmptyDataComp";
import ClosedListingCard from "../../../components/Dashboard/Listing/ClosedListingCard";
import { toast } from "react-toastify";

const Overviews = () => {
  // States
  const [viewMore, setViewMore] = useState();
  const { data, getLoading, makeAuthGetReq, isSuccessful } = useMakeReq();

  const { id } = useParams();

  const {
    data: updateCancelData,
    isSuccessful: isCancelSuccess,
    error: isCancelError,
    // loading: createListingLoading,
    makeAuthPostReq,
  } = useMakeReq();
  const [cancelOrder, setCancelOrder] = useState({
    id: { id },
    adListStatus: 3,
  });

  // DATA INITIALIZATION
  const navigate = useNavigate();

  const sessionNum = 2;

  useEffect(() => {
    makeAuthGetReq(`${AUTH_GET_OVERVIEW_ORDERS}/${id}`);
  }, []);

  useEffect(() => {
    if (!isEmpty(data)) {
      if (isSuccessful) {
        setViewMore(data?.data);
      }
    }
  }, [data, isSuccessful]);

  // cancel useEffect
  useEffect(() => {
    if (!isEmpty(data)) {
      if (isSuccessful) {
        setCancelOrder(data);
      }
    }
  }, [data, isSuccessful]);

  // useEffect(()=>{
  //   if(!isEmpty(updateCancelData)) {
  //       if(isCancelSuccess===true) {
  //           toast.success(updateCancelData.message || "Cancelled!")
  //       } else if(isCancelSuccess===false) {
  //           toast.error(updateCancelData.message || "Cancelled failed!")
  //       }
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [updateCancelData, isCancelSuccess])

  // console.log(cancelOrder.adListStatus)

  const handleCancel = () => {
    makeAuthPostReq(AUTH_UPDATE_AD_LISTING_STATUS, {
      id: id,
      adListStatus: cancelOrder.adListStatus,
    });
    if (cancelOrder.adListStatus === 3) {
      navigate.push(<ClosedListingCard />)
    } else {
      toast.error("Cancelled failed")
    }
  };
console.log(id, cancelOrder.adListStatus)
  return (
    <NoTransitionWrapper>
      <>
        {getLoading ? (
          <LoadingSpinner viewPortHeight="h-[80vh]" />
        ) : !isEmpty(viewMore) ? (
          <>
            {viewMore.adListStatus === 1 ? (
              <div className="w-full h-full border border-[#F5F3F6] bg-white rounded-lg py-4 px-5 flex flex-col gap-4">
                <div className="flex gap-10">
                  <BackButton />
                  <h1 className="text-lg font-bold text-black pl-10 mt-2">
                    #000001
                  </h1>
                </div>

                <div>
                  <h3 className="font-normal text-sm text-[#8D85A0] my-3">
                    {`Listed On: ${modifyDateTime(viewMore.created)}`}
                  </h3>

                  <div className="flex justify-between">
                    <div className="flex gap-10">
                      <div className="">
                        <h4 className="font-normal text-xs text-[#8D85A0] pb-2">
                          Asset
                        </h4>
                        <h4 className="text-base font-bold text-black">
                          {getAssetLabel(+viewMore.asset)}
                        </h4>
                      </div>

                      <div className="pl-16">
                        <h4 className="font-normal text-xs text-[#8D85A0] pb-2">
                          Amount
                        </h4>
                        <h4 className="text-base font-bold text-black">
                          #{viewMore.listingAmount}
                        </h4>
                      </div>
                    </div>

                    <div>{`${viewMore?.percentageUsed}%`}</div>
                  </div>

                  <div className="flex justify-between mt-3">
                    <div className="flex gap-10">
                      <div>
                        <h4 className="font-normal text-xs text-[#8D85A0] pb-2">
                          Price
                        </h4>
                        <h4 className="text-base font-bold text-black">
                          #{viewMore.tradePrice}
                        </h4>
                      </div>

                      <div className="pl-4">
                        <h4 className="font-normal text-xs text-[#8D85A0] pb-2">
                          Receiving Bank
                        </h4>
                        <h4
                          onClick={() =>
                            navigate(
                              `/listing/overview/more-info/${viewMore.bankId}`
                            )
                          }
                          className=" text-[#48A9A6] border-b border-solid border-[#48A9A6]"
                        >
                          Click to view
                        </h4>
                      </div>
                    </div>

                    {/* cancel button  */}
                    {/* {viewMore.adListStatus  ?    */}
                    <span
                      onClick={handleCancel}
                      className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer  text-[#645B75] text-xs font-normal"
                    >
                      Cancel
                    </span>
                    {/* : ""} */}
                  </div>

                  <div className="flex justify-between">
                    {/* MIN-MAX LIMIT  */}
                    <div className="mt-3">
                      <h4 className="font-normal text-xs text-[#8D85A0] pb-2">
                        {/* Min-Max Limit */}
                      </h4>
                      <h4 className="text-base font-bold text-black">
                        {viewMore.lowerLimit} - {viewMore.upperLimit}
                      </h4>
                    </div>

                    {/* pause button  */}
                    <span
                      onClick={() => navigate(-1)}
                      className="bg-[#FFF1D6] rounded-[32px] h-[35px] px-4 mt-0 inline-flex items-center justify-center hover:bg-orange-200 cursor-pointer  text-[#EB9B00] text-xs font-normal"
                    >
                      Pause
                    </span>
                  </div>
                </div>

                {/* ALL ORDERS LISTS  */}
                <div className="mt-8">
                  <h4 className="text-base font-bold text-black pb-2">
                    All Orders
                  </h4>
                  {!isEmpty(viewMore.payments) ? (
                    <>
                      {viewMore.payments.map((payment, index) => {
                        return (
                          <div
                            key={index}
                            className="flex justify-between mt-2 py-3 border-b border-solid"
                          >
                            <div>
                              <p className="font-normal text-xs text-[#8D85A0] pb-1">
                                {/* {payment.created}  */}
                                {modifyDateTime(payment.created)}
                              </p>
                              <div className="flex gap-1">
                                <h4 className="text-base font-bold text-black">
                                  {`${payment.fiatAmount} ${getAssetLabel(
                                    +payment.asset
                                  )}`}
                                </h4>
                                {/* session event */}
                                {payment.sessionEvent === sessionNum ? (
                                  <span className="w-2 h-2 bg-[#EB9B00] rounded mt-2"></span>
                                ) : (
                                  ""
                                )}
                              </div>
                              <h4 className="font-normal text-xs text-[#8D85A0] pt-1">
                                {payment.accountName}
                              </h4>
                            </div>

                            {/* view more button  */}
                            <span
                              onClick={() =>
                                navigate(
                                  `/listing/closed-listing-order/${payment.id}`
                                )
                              }
                              className="bg-[#F4EFFE] rounded-[32px] h-[35px] mt-2 px-4 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer text-[#3A0CA3] text-xs font-normal"
                            >
                              View More
                            </span>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <EmptyDataComp />
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          <EmptyDataComp viewPortHeight="h-[80vh]" />
        )}
      </>
    </NoTransitionWrapper>
  );
};

export default Overviews;
