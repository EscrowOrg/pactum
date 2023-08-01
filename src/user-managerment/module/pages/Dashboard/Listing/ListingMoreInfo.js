import React, { useEffect, useState } from "react";
import { BackButton } from "../../../components/Button";
import { useParams } from "react-router-dom";
import PageWrapper from "../../../layouts/PageWrapper";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import { AUTH_GET_OVERVIEW_ORDERS } from "../../../../../serivce/apiRoutes.service";
import { isEmpty } from "../../../helpers/isEmpty";
import LoadingSpinner from "../../../components/Global/LoadingSpinner";
import EmptyDataComp from "../../../components/Global/EmptyDataComp";

const ListingMoreInfo = () => {
  const [bankDetails, setBankDetails] = useState();
  const { data, getLoading, makeAuthGetReq, isSuccessful } = useMakeReq();

  const { bankId } = useParams();

  // USE EFFECT
  useEffect(() => {
    makeAuthGetReq(`${AUTH_GET_OVERVIEW_ORDERS}/${bankId}`);
  }, []);

  useEffect(() => {
    if (!isEmpty(data)) {
      if (isSuccessful) {
        setBankDetails(data?.data);
      }
    }
  }, [data, isSuccessful]);
  return (
    <PageWrapper>
      {getLoading ? (
        <LoadingSpinner viewPortHeight="h-[80vh]" />
      ) : !isEmpty(bankDetails) ? (
        <div className="w-full h-full p-5 flex flex-col gap-8 overflow-x-hidden">
          {/* header */}
          <div className="flex w-[92%] mx-auto">
            {/* Back Button */}
            <BackButton />

            {/* title */}
            <h3 className=" flex items-center mx-auto text-lg font-bold text-black text-center">
              More Info
            </h3>
          </div>

          {/* Body */}
          <div className="flex flex-col bg-[#FAFAFB] border border-solid border-[#F5F3F6] rounded-lg w-full relative gap-6 p-4">
            {/* info */}

            <div className="flex items-center justify-between">
              <h4 className="font-normal text-xs text-[#8D85A0]">
                Payment Timeframe
              </h4>
              <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                {`${bankDetails.paymentTimeFrame} min`}
              </h3>
            </div>

            <span className="w-[320px] mx-auto border-dashed border-b-2"></span>
            {/* Receiving Bank Details */}
            <div className="flex flex-col w-full gap-5">
              <div className="flex items-center justify-between">
                <h4 className="font-normal text-xs text-[#8D85A0]">
                  Bank Name
                </h4>

                <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                  {bankDetails.bankName}
                </h3>
              </div>

              <div className="flex items-center justify-between">
                <h4 className="font-normal text-xs text-[#8D85A0]">
                  Account Number
                </h4>
                <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                  {bankDetails.accountNumber}
                </h3>
              </div>

              <div className="flex items-center justify-between">
                <h4 className="font-normal text-xs text-[#8D85A0]">
                  Account Name
                </h4>
                <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                  {bankDetails.accountName}
                </h3>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyDataComp />
      )}
    </PageWrapper>
  );
};

export default ListingMoreInfo;
