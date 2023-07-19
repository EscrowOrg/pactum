import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_GET_AWAITING_ESCROW_SESSION } from "../../../../../serivce/apiRoutes.service";
import { getUserId } from "../../../../../serivce/cookie.service";
import { isEmpty } from "../../../helpers/isEmpty";
import useMakeReq from "../../../hooks/Global/useMakeReq";
<<<<<<< HEAD
import EmptyDataComp from "../../Global/EmptyDataComp";
import LoadingSpinner from "../../Global/LoadingSpinner";
=======
import LoadingSpinner from "../../Global/LoadingSpinner";
import EmptyDataComp from "../../Global/EmptyDataComp";
import { getAssetLabel } from "../../../helpers/getAssetLabel";
>>>>>>> 18649274ff3bebba8aa8d2d6fa6f0562366ff2c6

const PendingPaymentsCard = () => {

  // DATA INITIALIZATION
const navigate = useNavigate();
<<<<<<< HEAD
const {data, makeAuthGetReq, isSuccessful, getLoading} = useMakeReq();
=======
const {data, makeAuthGetReq, getLoading, isSuccessful} = useMakeReq();
>>>>>>> 18649274ff3bebba8aa8d2d6fa6f0562366ff2c6

// STATES
const [pendingOrder, setPendingOrder] = useState([]);
const userId = getUserId() || "";

//  SIDE EFFECTS
useEffect(()=>{
  makeAuthGetReq(`${AUTH_GET_AWAITING_ESCROW_SESSION}/${userId}`)
}, [])
useEffect(()=>{
if(!isEmpty(data)) {
  if(isSuccessful) {
    setPendingOrder(data?.data?.orders)
  }
}
}, [data, isSuccessful])

return (
    <div className="w-full flex flex-col gap-4">
<<<<<<< HEAD
      {
          getLoading?
          <LoadingSpinner
          bgColor="bg-transparent"
          viewPortHeight="h-[60vh]" />:
          !isEmpty(pendingOrder) ? pendingOrder?.map((order, index)=>(
            <div 
            key={index} 
            className="w-full border border-[#F5F3F6] bg-white rounded-lg py-3 px-4 flex flex-col gap-4">
              <div
              className="flex justify-between py-3 border-b border-solid">
                  <div>
                    <p className="font-bold text-xs text-[#3A0CA3] pb-1">BUY ORDER</p>
                  
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-[#EB9B00] rounded mt-2"></span>
                      <h4 className="text-base font-bold text-black">{order.fiatAmount}(BTC)</h4>
                    </div>
                    <h4 className="font-normal text-xs text-[#8D85A0] pt-1">
                      {order.accountName}
                    </h4>
                  </div>
                  <div>
                    {/* time */}
                    <p className="font-normal text-xs text-[#8D85A0] pl-16">
                      {order.created}
                    </p>

            {/* see listing button */}
            <span
              onClick={() => navigate(`/listing/pending-payments/${order.id}`)}
              className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 mt-2 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer text-[#3A0CA3] text-xs font-normal mr-2"
            >
              See Listing
            </span>

                    {/* view more button */}
                    <span  onClick={() => navigate(`/home/sell-coin/${order.id}/sell-order-statement`)} className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 mt-2 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer text-[#3A0CA3] text-xs font-normal">
                      View More
                    </span>
                  </div>
              </div>
              <div className="flex justify-between py-3 border-b border-solid">
                <div>
                <p className="font-bold text-xs text-[#D1292D] pb-1">SELL ORDER</p>
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-[#EB9B00] rounded mt-2"></span>
                  <h4 className="text-base font-bold text-black">{order.fiatAmount}(BTC)</h4>
                </div>
                <h4 className="font-normal text-xs text-[#8D85A0] pt-1">
                  {order.accountName}
                </h4>
                </div>
              {/* buy order */}
                <div>
                  {/* time */}
                  <p className="font-normal text-xs text-[#8D85A0] pl-16">
                    {order.created}
                  </p>
=======
       { getLoading ? (
        <LoadingSpinner viewPortHeight="h-[80vh]" />
      ) :
        !isEmpty(pendingOrder) ? (
          <>
          {
 pendingOrder?.map((order, index)=>{
  return(
    <div 
      key={index} 
    className="w-full border border-[#F5F3F6] bg-white rounded-lg py-3 px-4 flex flex-col gap-4">
      <div
      className="flex justify-between py-3 border-b border-solid">
          <div>
            <p className="font-bold text-xs text-[#3A0CA3] pb-1"> {order.listingType === 1
                  ? "Buy Order"
                  : "Sell Order"}</p>
          
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-[#EB9B00] rounded mt-2"></span>
              <h4 className="text-sm font-bold text-black">{`${order.fiatAmount} ${getAssetLabel(order.asset)}`}</h4>
            </div>
            <h4 className="font-normal text-xs text-[#8D85A0] pt-1">
              {order.accountName}
            </h4>
          </div>
          <div>
            {/* time */}
            <p className="font-normal text-xs text-[#8D85A0] pl-16">
              {order.created}
            </p>
>>>>>>> 18649274ff3bebba8aa8d2d6fa6f0562366ff2c6

            {/* see listing button */}
            <span
              onClick={() => navigate(`/listing/pending-payments/${order.id}`)}
              className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 mt-2 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer text-[#3A0CA3] text-xs font-normal mr-2"
            >
              See Listing
            </span>

<<<<<<< HEAD
                  {/* view more button */}
                  <span onClick={() => navigate(`/home/buy-coin/${order.id}/report-order-statement`)} className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 mt-2 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer text-[#3A0CA3] text-xs font-normal">
                    View More
                  </span>
                </div>
              </div>
            </div>
          )):
          <EmptyDataComp
          bgColor="bg-transparent"
          viewPortHeight="h-[60vh]" />
=======
            {/* view more button */}
            <span  onClick={() => navigate(`/home/sell-coin/${order.id}/sell-order-statement`)} className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 mt-2 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer text-[#3A0CA3] text-xs font-normal">
              View More
            </span>
          </div>
      </div>
      
    </div>
  )
}) 
          }
          </>
        ) : (
          <EmptyDataComp viewPortHeight="h-[80vh]" />
        )
>>>>>>> 18649274ff3bebba8aa8d2d6fa6f0562366ff2c6
      }
    </div>
  );
};

export default PendingPaymentsCard;
