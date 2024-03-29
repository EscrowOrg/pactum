import React, { useState, useEffect } from "react";
import { BackButton } from "../../../components/Button";
import NoTransitionWrapper from "../../../components/Dashboard/Home/NoTransitionWrapper";
import { useNavigate, useParams } from "react-router-dom";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import { isEmpty } from "../../../helpers/isEmpty";
import LoadingSpinner from "../../../components/Global/LoadingSpinner";
import {
  AUTH_DEACTIVATE_ADLIST,
  AUTH_GET_OVERVIEW_ORDERS,
  AUTH_UPDATE_AD_LISTING_STATUS,
} from "../../../../../serivce/apiRoutes.service";
import { getAssetLabel } from "../../../helpers/getAssetLabel";
import { modifyDateTime } from "../../../helpers/modifyDateTime";
import EmptyDataComp from "../../../components/Global/EmptyDataComp";
import ClosedListingCard from "../../../components/Dashboard/Listing/ClosedListingCard";
import { toast } from "react-toastify";
import { getUserData } from "../../../../../serivce/cookie.service";
import CircularProgress from "../../../components/Dashboard/Listing/CircularProgress";
import { Pause } from "iconsax-react";
import { AdlistStatus } from "../../../helpers/enums";

const Overviews = () => {
  // DATA INITIALIZATION
  const navigate = useNavigate();
  const { id } = useParams();
  const { userId } = getUserData();

  // STATES
  const [viewMore, setViewMore] = useState();
  const { data, getLoading, makeAuthGetReq, isSuccessful } = useMakeReq();
  const {
    data: updateCancelData,
    isSuccessful: isCancelSuccess,
    makeAuthPostReq,
  } = useMakeReq();
  const [cancelOrder, setCancelOrder] = useState({ id: id, adListStatus: 3 });
  const [pauseOrder, setPauseOrder] = useState({});
  const { data: pauseData, isSuccessful: isPauseSuccess } = useMakeReq();

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

  useEffect(() => {
    if (!isEmpty(updateCancelData)) {
      if (isCancelSuccess === true) {
        toast.success(updateCancelData?.message || "Cancelled!");
      } else if (isCancelSuccess === false) {
        toast.error(updateCancelData?.message || "Cancelled failed!");
      }
    }
  }, [updateCancelData, isCancelSuccess]);

  const handleCancel = () => {
    makeAuthPostReq(AUTH_UPDATE_AD_LISTING_STATUS, {
      id: id,
      adListStatus: 3,
    });
    if (cancelOrder.adListStatus === 3) {
      navigate?.push(<ClosedListingCard />);
    } else {
      toast.success(updateCancelData?.message || "Cancelled!");
    }
  };

  // pause useEffect
  useEffect(() => {
    if (!isEmpty(data)) {
      if (isPauseSuccess) {
        setPauseOrder(data);
      }
    }
  }, [data, isPauseSuccess]);

  useEffect(() => {
    if (!isEmpty(pauseData)) {
      if (isPauseSuccess === true) {
        toast.success(pauseData?.message || "Paused!");
      } else if (isPauseSuccess === false) {
        toast.error(pauseData?.message || "Paused failed!");
      }
    }
  }, [pauseData, isPauseSuccess]);

  // Pause handle feature
  const handlePause = () => {
    const adId = viewMore.adId;
    makeAuthPostReq(AUTH_DEACTIVATE_ADLIST, {
      userId: userId,
      adId: adId,
    });
    if (pauseOrder.active === false) {
      navigate(-1);
    } else {
      toast.success(pauseData?.message);
    }
  };
  return (
    <NoTransitionWrapper>
      <>
        {getLoading ? (
          <LoadingSpinner viewPortHeight="h-[80vh]" />
        ) : !isEmpty(viewMore) ? (
          <>
            {viewMore.adListStatus === AdlistStatus.ONGOING ? (
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

                    <div>
                      {viewMore.active === false ? (
                        <Pause size="32" color="#EB9B00" />
                      ) : (
                        <CircularProgress
                          percent={`${viewMore.percentageUsed}`}
                        />
                      )}
                    </div>
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
                    <span
                      onClick={handleCancel}
                      className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer  text-[#645B75] text-xs font-normal"
                    >
                      Cancel
                    </span>
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
                      onClick={handlePause}
                      className=" rounded-[32px] h-[35px] px-4 mt-0 inline-flex items-center justify-center hover:bg-orange-200 cursor-pointer  text-[#EB9B00] text-xs font-normal"
                      style={{
                        color:
                          viewMore.active === true ? "#EB9B00" : "   #10B981",

                        backgroundColor:
                          viewMore.active === true ? "#FFF1D6" : "   #ECFDF5",
                      }}
                    >
                      {viewMore.active === true ? "Pause" : "Resume"}
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
                    <EmptyDataComp viewPortHeight="h-[80vh]" />
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
