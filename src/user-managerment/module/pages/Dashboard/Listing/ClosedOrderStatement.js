import { ArrowRight2, Copy } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { BackButton, TransactionsListButton } from "../../../components/Button";
import { copyToClipBoard } from "../../../helpers/copyToClipboard";
import PageWrapper from "../../../layouts/PageWrapper";
import { useParams } from "react-router-dom";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import { AUTH_GET_ESCROW_SESSION_BYID } from "../../../../../serivce/apiRoutes.service";
import { isEmpty } from "../../../helpers/isEmpty";
import { getAssetLabel } from "../../../helpers/getAssetLabel";
import { modifyDateTime } from "../../../helpers/modifyDateTime";
import EmptyDataComp from "../../../components/Global/EmptyDataComp";
import LoadingSpinner from "../../../components/Global/LoadingSpinner";

const ClosedOrderStatement = () => {
  const [singleOrder, setSingleOrder] = useState();
  const { id } = useParams();

  // const navigate = useNavigate();
  // const {orderId} = useParams()
  const { data, getLoading, makeAuthGetReq, isSuccessful } = useMakeReq();

  // SIDE EFFECTS
  useEffect(() => {
    makeAuthGetReq(`${AUTH_GET_ESCROW_SESSION_BYID}/${id}`);
  }, []);
  useEffect(() => {
    if (!isEmpty(data)) {
      if (isSuccessful) {
        setSingleOrder(data?.data);
      }
    }
  }, [data, isSuccessful]);

  return (
    <PageWrapper>
      <div className="w-full h-full py-5 flex flex-col gap-8 overflow-x-hidden">
        {/* header */}
        <div className="flex justify-between w-[92%] mx-auto">
          {/* Back Button */}
          <BackButton />

          {/* title */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-black text-center">
              Order Statement
            </h3>

            <h3 className="font-normal text-xs text-[#8D85A0] text-center">
              {modifyDateTime(singleOrder?.adListing?.created)}
            </h3>
          </div>
          {/* transaction list button */}
          <TransactionsListButton />
        </div>

        {getLoading ? (
          <LoadingSpinner viewPortHeight="h-[80vh]" />
        ) : !isEmpty(singleOrder) ? (
          <>
            {/* Body */}
            <div className="w-[92%] h-full flex flex-col mx-auto gap-8 pb-5">
              {/* Amount to be Received */}
              <div className="flex flex-col gap-3 items-center w-full">
                <h4 className="font-normal text-sm text-[#645B75]">
                  Amount to be received.
                </h4>
                <p className="text-[#3F9491] text-[32px] font-bold">{`₦ ${singleOrder?.fiatAmount}`}</p>
                <h4 className="bg-[#091515] py-2 px-3 font-semibold text-sm text-[#F6FBFB] rounded">
                  {`${singleOrder?.cryptoAmount}${getAssetLabel(
                    singleOrder?.asset
                  )} deducted`}
                </h4>
              </div>

              <div className="flex flex-col bg-[#FAFAFB] border border-solid border-[#F5F3F6] rounded-lg w-full relative gap-6 px-4 py-3">
                {/* circles */}
                <span className="absolute bottom-[53%] translate-y-[47%] right-[-1.2rem] rounded-[50%] bg-white h-[32px] w-[32px]" />
                <span className="absolute bottom-[53%] translate-y-[47%] left-[-1.2rem] rounded-[50%] bg-white h-[32px] w-[32px]" />

                {/* info */}
                <div className="border-dashed border-b-2 flex flex-col w-full gap-5 pb-5">
                  <div className="flex items-center justify-between">
                    <h5 className="font-normal text-xs text-[#8D85A0]">
                      Listing
                    </h5>

                    <div className="flex items-center justify-center bg-[rgba(255,255,255,.2)] cursor-pointer">
                      <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                        {singleOrder?.sessId?.slice(0, 8)}
                      </h3>

                      <ArrowRight2
                        variant="TwoTone"
                        size={10}
                        color="#F4EFFE"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h4 className="font-normal text-xs text-[#8D85A0]">
                      Rate-Fiat Value
                    </h4>
                    <p className="text-black text-sm font-semibold inline-flex items-center gap-2">
                      {singleOrder?.tradePrice}
                    </p>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <h4 className="font-normal text-xs text-[#8D85A0]">
                      Order ID
                    </h4>
                    <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                      {singleOrder?.sessId?.slice(0, 8)}
                      <Copy
                        onClick={() =>
                          copyToClipBoard(singleOrder?.sessId?.slice(0, 8))
                        }
                        variant="Bulk"
                        size={16}
                        color="#3F9491"
                      />
                    </h3>
                  </div>
                </div>

                {/* Receiving Bank Details */}
                <div className="flex flex-col w-full gap-5">
                  <h4 className="text-center font-bold">
                    Receiving Bank Details
                  </h4>

                  <div className="flex items-center justify-between">
                    <h4 className="font-normal text-xs text-[#8D85A0]">
                      Bank Name
                    </h4>

                    <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                      {singleOrder?.bankName}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between">
                    <h4 className="font-normal text-xs text-[#8D85A0]">
                      Account Number
                    </h4>
                    <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                      {singleOrder?.accountNumber}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between">
                    <h4 className="font-normal text-xs text-[#8D85A0]">
                      Account Name
                    </h4>
                    <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                      {singleOrder?.accountName}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <EmptyDataComp viewPortHeight="h-[80vh]" />
        )}
      </div>
    </PageWrapper>
  );
};

export default ClosedOrderStatement;
