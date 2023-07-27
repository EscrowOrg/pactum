import { Copy, InfoCircle, Message } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AUTH_GET_ESCROW_SESSION_BYID } from "../../../../../serivce/apiRoutes.service";
import {
  BackButton,
  PrimaryButton,
  PrimaryButtonLight,
} from "../../../components/Button";
import EmptyDataComp from "../../../components/Global/EmptyDataComp";
import LoadingSpinner from "../../../components/Global/LoadingSpinner";
import { copyToClipBoard } from "../../../helpers/copyToClipboard";
import { getAssetLabel } from "../../../helpers/getAssetLabel";
import { isEmpty } from "../../../helpers/isEmpty";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import PageWrapper from "../../../layouts/PageWrapper";

const OrderStatement = () => {

    // DATA INITIALIZATION
    const navigate = useNavigate()
    const {orderId} = useParams()
    const { data,  getLoading, makeAuthGetReq, isSuccessful } = useMakeReq();

    // STATES
    const [singleOrder, setSingleOrder] = useState(null)

    // SIDE EFFECTS
    useEffect(()=>{
      makeAuthGetReq(`${AUTH_GET_ESCROW_SESSION_BYID}/${orderId}`)
    }, [])
    useEffect(()=>{
    if(!isEmpty(data)) {
      if(isSuccessful) {
        setSingleOrder(data?.data)
      }
    }
  }, [data, isSuccessful])

  return (
    <PageWrapper>
      <div className="w-full h-full flex flex-col py-5 gap-8">

        {/* header */}
        <div className="flex items-center w-[92%] mx-auto justify-between">
          {/* back button */}
          <BackButton />

          {/* text */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg text-black">Order Statement</h3>

            <h3 className="text-xs font-normal text-[#141217]">
              Closes in{" "}
              <span className="text-[#D1292D] font-normal">{`${isEmpty(singleOrder)?"":singleOrder?.adListing?.timeFrame + " Minute(s)"}`}</span>
            </h3>
          </div>

          {/* transaction list button */}
          <button onClick={()=>navigate("/home/chat")} className="px-3 py-3 w-fit border border-[#DAD7E0] bg-[#FAFAFB] inline-flex items-center justify-center rounded-xl cursor-pointer hover:bg-gray-200">
            <Message size="14" color="#16053D" />
          </button>
        </div>

        {/* important message */}
        <div className="flex items-start bg-[#F6FBFB] gap-2 py-2 px-6 w-full">
          {/* icon */}
          <InfoCircle variant="Bulk" size={16} color="#48A9A6" />

          {/* text */}
          <h4 className="w-[90%] font-normal text-sm text-[#1B3F3E]">
            Asset has been withdrawn to Pactum escrow, ensure to make payment of
            the exact amount in record time.
          </h4>
        </div>

        {
          getLoading?
          <LoadingSpinner
          viewPortHeight='h-[80vh]' />:
          !isEmpty(singleOrder)?
            <>
              {/* body */}
              <div className="w-[92%] h-full flex flex-col mx-auto gap-8 pb-5">
                {/* main info */}
                <div className="flex flex-col gap-3 items-center w-full">
                  <h5 className="font-normal text-sm text-[#645B75]">
                    Amount to be paid.
                  </h5>

                  <h3 className="text-[#3F9491] text-[32px] font-bold">
                    {`₦${singleOrder?.fiatAmount?.toLocaleString('en-US')}`}
                  </h3>

                  <h3 className="bg-[#091515] py-2 px-3 font-semibold text-sm text-[#F6FBFB] rounded">
                    {`You will receive ${singleOrder?.cryptoAmount}${getAssetLabel(+singleOrder?.asset)}`}
                  </h3>
                </div>

                {/* summary details */}
                <div className="flex flex-col bg-gray-100 py-3 px-4 gap-6 rounded-lg w-full relative overflow-hidden">
                  {/* circles */}
                  <span className="absolute bottom-[55%] translate-y-[45%] right-[-1.2rem] rounded-[50%] bg-white h-[32px] w-[32px]" />
                  <span className="absolute bottom-[55%] translate-y-[45%] left-[-1.2rem] rounded-[50%] bg-white h-[32px] w-[32px]" />

                  {/* info */}
                  <div className="flex flex-col w-full gap-5 pb-7 [border-bottom:1px_dashed_#DAD7E0]">

                    {/* price */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-normal text-xs text-[#8D85A0]">Price</h3>

                      <h3 className="text-black text-sm font-semibold">{`₦${singleOrder?.adListing?.tradePrice}`}</h3>
                    </div>

                    {/* order id */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-normal text-xs text-[#8D85A0]">Order ID</h3>

                      <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                        {singleOrder?.sessId?.slice(0,8)}
                        <Copy
                          onClick={() => copyToClipBoard(singleOrder?.sessId?.slice(0,8))}
                          variant="Bulk"
                          size={16}
                          color="#3F9491"
                        />
                      </h3>
                    </div>
                  </div>

                  {/* bank details */}
                  <div className="flex flex-col w-full gap-5">
                    {/* bank name */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-normal text-xs text-[#8D85A0]">
                        Bank Name
                      </h3>

                      <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                        {singleOrder?.bankName}
                        <Copy
                          onClick={() => copyToClipBoard("First Bank")}
                          variant="Bulk"
                          size={16}
                          color="#3F9491"
                        />
                      </h3>
                    </div>

                    {/* account number */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-normal text-xs text-[#8D85A0]">
                        Account Number
                      </h3>

                      <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                        {singleOrder?.accountNumber}
                        <Copy
                          onClick={() => copyToClipBoard("4890149295")}
                          variant="Bulk"
                          size={16}
                          color="#3F9491"
                        />
                      </h3>
                    </div>

                    {/* account name */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-normal text-xs text-[#8D85A0]">
                        Account Name
                      </h3>

                      <h3 className="text-black text-sm font-semibold">
                        {singleOrder?.accountName}
                      </h3>
                    </div>

                    {/* user name */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-normal text-xs text-[#8D85A0]">
                        User Name
                      </h3>

                      <h3 className="text-black text-sm font-semibold">
                        {singleOrder?.initatorName}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* important notice */}
                <div>
                  <h3 className="text-[#EB9B00] font-bold">IMPORTANT NOTICE:</h3>
                  <p className="text-xs font-medium">
                    Please chat with the seller before making payment.
                  </p>
                </div>

                {/* buttons */}
                <div className="mt-auto flex items-center gap-6 w-full">
                  <div className="flex flex-col items-stretch w-[40%]">
                    <PrimaryButtonLight
                      onClick={() =>
                        navigate(
                          "/home/buy-coin/:order-statement/report-order-statement"
                        )
                      }
                      height="h-14"
                      text={"Cancel"}
                    />
                  </div>

                  <div className="flex flex-col items-stretch w-[60%]">
                    <PrimaryButton
                      onClick={() =>
                        navigate(`/home/buy-coin/success/id:${orderId}`)
                      }
                      height="h-14"
                      text={"Transfer Done"}
                    />
                  </div>
                </div>
              </div>
            </>:
          <EmptyDataComp
          viewPortHeight='h-[80vh]' />
        }
      </div>
    </PageWrapper>
  );
};

export default OrderStatement;
