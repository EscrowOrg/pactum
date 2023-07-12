import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_GET_AWAITING_ESCROW_SESSION } from "../../../../../serivce/apiRoutes.service";
import { getUserData } from "../../../../../serivce/cookie.service";
import useMakeReq from "../../../hooks/Global/useMakeReq";

const PendingPaymentsCard = () => {
  // DATA INITIALIZATION
  const navigate = useNavigate();
  const {data, makeAuthGetReq} = useMakeReq();

  const [pendingOrder, setPendingOrder] = useState([]);
 const {userId} = getUserData();
useEffect(()=>{
  getPendingOrder()
},[data])
  const getPendingOrder = async ()=>{
     try {
       await makeAuthGetReq(`${AUTH_GET_AWAITING_ESCROW_SESSION}/${userId}`)
       setPendingOrder(data?.data?.orders)
     } catch (error) {
      setPendingOrder(error)
     }
  }
    return (
    <div className=" bg-white">
       { pendingOrder && pendingOrder?.map((order, index)=>{
            return(
                < >
                  <div className="flex justify-between py-3 border-b border-solid">
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

                      {/* see listing button */}
                      <span
                        onClick={() => navigate(`/listing/pending-payments/${order.id}`)}
                        className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 mt-2 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer text-[#3A0CA3] text-xs font-normal mr-2"
                      >
                        See Listing
                      </span>

                      {/* view more button */}
                      <span onClick={() => navigate(`/home/buy-coin/${order.id}/report-order-statement`)} className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 mt-2 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer text-[#3A0CA3] text-xs font-normal">
                        View More
                      </span>
                    </div>
                  </div>
                </>
            )
          })}
    </div>
  );
};

export default PendingPaymentsCard;
