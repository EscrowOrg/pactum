import { Copy, InfoCircle } from "iconsax-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AUTH_GET_ESCROW_SESSION_BYID, AUTH_REPORT_LISTING, AUTH_TRANSFER_DONE, AUTH_VERIFY_PAYMENT } from "../../../../../serivce/apiRoutes.service";
import { getUserId } from "../../../../../serivce/cookie.service";
import {
  BackButton,
  ErrorButton,
  PrimaryButton,
  PrimaryButtonLight,
  OrderRecieveButton,
  TransactionsListButton,
  OrderTransferButton
} from "../../../components/Button";
import EmptyDataComp from "../../../components/Global/EmptyDataComp";
import LoadingSpinner from "../../../components/Global/LoadingSpinner";
import { copyToClipBoard } from "../../../helpers/copyToClipboard";
import { SessionEvent } from "../../../helpers/enums";
import { getAssetLabel } from "../../../helpers/getAssetLabel";
import { isEmpty } from "../../../helpers/isEmpty";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import PageWrapper from "../../../layouts/PageWrapper";

const SellOrderStatements = () => {

  // STATES
  const [singleOrder, setSingleOrder] = useState({})

  // DATA INITIALIZATION
  const navigate = useNavigate();
  const {orderId} = useParams()
  const { data,  getLoading, makeAuthGetReq, isSuccessful } = useMakeReq();
  const { 
    data: verifyPaymentData,  
    loading: verifyPaymentLoading, 
    makeAuthPostReq: verifyPayment, 
    isSuccessful: isVerifyPaymentSuccessful 
  } = useMakeReq();
  const { 
    data: transferDoneData,  
    loading: transferDoneLoading, 
    makeAuthPostReq: transferDone, 
    isSuccessful: transferDoneSuccessful 
   } = useMakeReq();
  const currentUserId = getUserId()
  const { 
    data: reportListingData,  
    loading: reportListingLoading, 
    makeAuthPostReq: reportListing, 
    isSuccessful: reportListingSuccessful 
  } = useMakeReq();

  // HANDLERS
  const handleReportOrder = (sessionId) => {
    reportListing(AUTH_REPORT_LISTING, {
      userId: currentUserId,
      escrowSessionId: sessionId
    })
  }
   const handleTransferDone = (id, sessionId) => {
    transferDone(AUTH_TRANSFER_DONE, {
      payerUserId: id,
      sessionId: sessionId
    })
   }
   const handleVerifyPayment = (id, sessionId) => {
    verifyPayment(AUTH_VERIFY_PAYMENT, {
      makerId: id,
      escrowSessionId: sessionId
    })
   }
 
    // SIDE EFFECTS
    useEffect(()=>{
      console.log("Calling endpoint")
      makeAuthGetReq(`${AUTH_GET_ESCROW_SESSION_BYID}/${orderId}`)
    }, [])
    useEffect(()=>{
    if(!isEmpty(data)) {
      if(isSuccessful) {
        setSingleOrder(data?.data)
      }
      console.log(data?.data);
    }
  }, [data, isSuccessful])

  // transfer done check
    useEffect(()=>{
    if(!isEmpty(transferDoneData?.data)) {
      if(transferDoneSuccessful) {
        toast.success(transferDoneData?.data?.message || "Transferred successfully!")
        navigate(`/home/buy-coin/success/${orderId}`)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transferDoneData, transferDoneSuccessful])

  // verify payment check
    useEffect(()=>{
    if(!isEmpty(verifyPaymentData?.data)) {

      if(isVerifyPaymentSuccessful) {
        toast.success(verifyPaymentData?.data?.message || "Payment received!")
        navigate(`/home/sell-coin/success/${orderId}`)
      }
      toast.error(verifyPaymentData?.data?.message|| "Verification was not successful. Contact support");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verifyPaymentData, isVerifyPaymentSuccessful])

  // report listing
  useEffect(()=>{
    if(!isEmpty(reportListingData?.data)) {
      if(reportListingSuccessful) {
        toast.success(reportListingData?.message || "Listing reported!")
        navigate(`/listing`)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reportListingData, reportListingSuccessful])

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

              {
                singleOrder?.sessionEvent >= SessionEvent?.MADEPAYMENT?
                <h3 className="text-xs font-normal text-[#141217]">
                  Closed{" "}
                </h3>:
                <h3 className="text-xs font-normal text-[#141217]">
                  Closes in{" "}
                  <span className="text-[#D1292D] font-normal">{`${isEmpty(singleOrder)?"":singleOrder?.adListing?.timeFrame + " Minute(s)"}`}</span>
                </h3>
              }
          </div>

          {/* transaction list button */}
          <TransactionsListButton />
        </div>

        {/* important message */}
        {
          singleOrder.sessionEvent >= SessionEvent.MADEPAYMENT?
          <></>:
          <div className="flex items-start bg-[#F6FBFB] gap-2 py-2 px-6 w-full">
            {/* icon */}
            <InfoCircle variant="Bulk" size={16} color="#48A9A6" />

            {/* text */}
            <h4 className="w-[90%] font-normal text-sm text-[#1B3F3E]">
              Asset has been withdrawn to escrow, ensure to make payment of
              the exact amount in record time.
            </h4>
          </div>
        }

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
                  {
                    singleOrder.sessionEvent >= SessionEvent.MADEPAYMENT?
                    <h5 className="font-normal text-sm text-[#645B75]">
                      Amount received.
                    </h5>:
                    <h5 className="font-normal text-sm text-[#645B75]">
                      Amount to be received.
                    </h5>
                  }

                  <h3 className="text-[#3F9491] text-[32px] font-bold">
                  {`₦${singleOrder?.fiatAmount?.toLocaleString('en-US')}`}
                  </h3>

                  {
                    singleOrder.sessionEvent >= SessionEvent.MADEPAYMENT?
                    <h3 className="bg-[#091515] py-2 px-3 font-semibold text-sm text-[#F6FBFB] rounded">
                      {`You were deducted ${singleOrder?.cryptoAmount}${getAssetLabel(singleOrder?.asset)}`}
                    </h3>:
                    <h3 className="bg-[#091515] py-2 px-3 font-semibold text-sm text-[#F6FBFB] rounded">
                    {`You will be deducted ${singleOrder?.cryptoAmount}${getAssetLabel(singleOrder?.asset)}`}
                  </h3>
                  }
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

                    {/* buyer name */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-normal text-xs text-[#8D85A0]">Buyer</h3>

                      <h3 className="text-black text-sm font-semibold">
                        {singleOrder?.initatorName}
                      </h3>
                    </div>
                  </div>

                  {/* bank details */}
                  <div className="flex flex-col w-full gap-5">

                      <h3 className="text-center font-bold text-sm">Your Bank Details</h3>
                    {/* bank name */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-normal text-xs text-[#8D85A0]">
                        Bank Name
                      </h3>

                      <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                        {singleOrder?.bankName}
                      </h3>
                    </div>

                    {/* account number */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-normal text-xs text-[#8D85A0]">
                        Account Number
                      </h3>

                      <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                        {singleOrder?.accountNumber}
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
                  </div>
                </div>

                {/* buttons */}
                {
                  singleOrder.verifierUserId === currentUserId?
                  <div className="mt-auto flex items-center gap-6 w-full">
                    <div className="flex flex-col items-stretch w-[40%]">
                      <ErrorButton
                      loading={reportListingLoading}
                      disabled={singleOrder.sessionEvent === SessionEvent.REPORTED}
                      onClick={()=>{
                        handleReportOrder(singleOrder.sessId)
                      }}
                      height="h-14"
                      text={singleOrder.sessionEvent === SessionEvent.REPORTED?"Reported":"Report"}
                      />
                    </div>

                    <div className="flex flex-col items-stretch w-[60%]">
                      <OrderRecieveButton
                        disabled={singleOrder.sessionEvent > SessionEvent.MADEPAYMENT || verifyPaymentLoading}
                        onClick={()=>handleVerifyPayment(currentUserId, singleOrder.sessId)}
                        loading={verifyPaymentLoading}
                        height="h-14"
                       session={singleOrder?.sessionEvent}
                      />
                    </div>
                  </div>:
                  singleOrder.userId === currentUserId?
                  <div className="mt-auto flex items-center gap-6 w-full">
                    <div className="flex flex-col items-stretch w-[40%]">
                      <PrimaryButtonLight
                      disabled={singleOrder.sessionEvent === SessionEvent.CANCELLED}
                        onClick={() =>
                          navigate(
                            `/home/buy-coin/${orderId}/report-order-statement`
                          )
                        }
                        height="h-14"
                        text={singleOrder.sessionEvent === SessionEvent.CANCELLED?"Cancelled":"Cancel"}
                      />
                    </div>

                    <div className="flex flex-col items-stretch w-[60%]">
                      <OrderTransferButton
                        disabled={singleOrder.sessionEvent >= SessionEvent.MADEPAYMENT || transferDoneLoading}
                        onClick={()=>handleTransferDone(currentUserId, singleOrder.sessId)}
                        loading={transferDoneLoading}
                        height="h-14"
                        session={singleOrder?.sessionEvent}
                        //text={singleOrder.sessionEvent >= SessionEvent.MADEPAYMENT?"Transferred successfully":"Transfer Done"}
                      />
                    </div>
                  </div>:
                  <>
                    <div className="flex flex-col items-stretch w-[60%]">
                      <PrimaryButtonLight
                        onClick={() =>
                          navigate(-1)
                        }
                        height="h-14"
                        text={"Go back"}
                      />
                    </div>
                  </>
                }
              </div>
            </>:
          <EmptyDataComp
          viewPortHeight='h-[80vh]' />
        }
      </div>
    </PageWrapper>
  );
};

export default SellOrderStatements;
