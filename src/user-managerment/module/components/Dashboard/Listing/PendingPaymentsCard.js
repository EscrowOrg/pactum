import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_GET_AWAITING_ESCROW_SESSION } from "../../../../../serivce/apiRoutes.service";
import { getUserId } from "../../../../../serivce/cookie.service";
import { ListingType, SessionEvent } from "../../../helpers/enums";
import { getAssetLabel } from "../../../helpers/getAssetLabel";
import { isEmpty } from "../../../helpers/isEmpty";
import { modifyDateTime } from "../../../helpers/modifyDateTime";
import { roundToN } from "../../../helpers/roundToN";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import EmptyDataComp from "../../Global/EmptyDataComp";
import LoadingSpinner from "../../Global/LoadingSpinner";

const PendingPaymentsCard = () => {
  // DATA INITIALIZATION
  const navigate = useNavigate();
  const { data, makeAuthGetReq, getLoading, isSuccessful } = useMakeReq();

  // STATES
  const [pendingOrder, setPendingOrder] = useState([]);
  const userId = getUserId() || "";

  //  SIDE EFFECTS
  useEffect(() => {
    makeAuthGetReq(`${AUTH_GET_AWAITING_ESCROW_SESSION}/${userId}`);
  }, []);
  useEffect(() => {
    if (!isEmpty(data)) {
      if (isSuccessful) {
        setPendingOrder(data?.data?.orders);
      }
    }
  }, [data, isSuccessful]);

  return (
    <div className="w-full flex flex-col gap-4">
      {getLoading ? (
        <LoadingSpinner viewPortHeight="h-[80vh]" />
      ) : !isEmpty(pendingOrder) ? (
        <>
          {pendingOrder?.map((order, index) => (
            <div
              key={index}
              className="w-full border border-[#F5F3F6] bg-white rounded-lg py-3 px-4 flex flex-col gap-4"
            >
              <div className="flex justify-between py-3">
                <div>
                  {order.listingType === ListingType.BUY ? (
                    <p className="font-bold text-xs text-[#3A0CA3] pb-1">
                      {"BUY ORDER"}
                    </p>
                  ) : (
                    <p className="font-bold text-xs text-red-500 pb-1">
                      {"SELL ORDER"}
                    </p>
                  )}

                  <div className="flex gap-1">
                    {order.sessionEvent === SessionEvent.MADEPAYMENT ? (
                      <span className="w-2 h-2 bg-[#EB9B00] rounded mt-2"></span>
                    ) : (
                      ""
                    )}

                    {order.listingType === ListingType.BUY ? (
                      <h4 className="text-sm font-bold text-black">
                        {`${order.fiatAmount.toLocaleString(
                          "en-US"
                        )} ${getAssetLabel(order.asset)}`}
                      </h4>
                    ) : (
                      <h4 className="text-sm font-bold text-black">
                        {`${
                          order.fiatAmount > 1
                            ? roundToN(+order.fiatAmount, 2)
                            : order.fiatAmount
                        } ${getAssetLabel(order.asset)}`}
                      </h4>
                    )}
                  </div>
                  <h4 className="font-normal text-xs text-[#8D85A0] pt-1">
                    {order.accountName}
                  </h4>
                </div>
                <div className="inline-flex flex-col gap-1">
                  {/* time */}
                  <p className="font-normal text-xs text-[#8D85A0]">
                    {modifyDateTime(order.created)}
                  </p>

                  {/* see listing button */}
                  {/* <span
                    onClick={() =>
                      navigate(`/listing/pending-payments/${order.id}`)
                    }
                    className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 mt-2 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer text-[#3A0CA3] text-xs font-normal mr-2"
                  >
                    See Listing
                  </span> */}

                  {/* view more button */}
                  <span
                    onClick={() =>{
                        const url =  order.listingType===ListingType.BUY?`/home/buy-coin/${order.id}/order-statement`:`/home/sell-coin/${order.id}/sell-order-statement`
                        navigate(url)
                      }
                    }
                    className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 mt-2 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer text-[#3A0CA3] text-xs font-normal"
                  >
                    View More
                  </span>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <EmptyDataComp viewPortHeight="h-[80vh]" />
      )}
    </div>
  );
};

export default PendingPaymentsCard;
