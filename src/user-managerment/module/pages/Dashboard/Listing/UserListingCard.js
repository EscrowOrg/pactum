import { useEffect, useState } from "react";
import { AUTH_GET_AWAITING_ESCROW_SESSION } from "../../../../../serivce/apiRoutes.service";
import { getUserId } from "../../../../../serivce/cookie.service";
import ListingBodyContent from "../../../components/Dashboard/Listing/ListingBodyContent";
import { isEmpty } from "../../../helpers/isEmpty";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import "./activelistingtab.scss";

const UserListingCard = () => {
  // STATE
  const [activeTab, setActiveTab] = useState(1);

  const { data, makeAuthGetReq, isSuccessful } = useMakeReq();
  const [pendingOrder, setPendingOrder] = useState([]);
  const userId = getUserId() || "";

  //  SIDE EFFECTS
  useEffect(() => {
    makeAuthGetReq(`${AUTH_GET_AWAITING_ESCROW_SESSION}/${userId}`);
  }, []);
  useEffect(() => {
    if (!isEmpty(data)) {
      if (isSuccessful) {
        setPendingOrder(data?.data);
      }
    }
  }, [data, isSuccessful]);

  // DATA INITIALIZATION
  const listData = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="w-full h-full flex flex-col bg-white">
      {/* heading tab */}
      <div className="flex items-center justify-between w-[90%] mx-auto">
        <div
          onClick={() => setActiveTab(1)}
          className={`flex gap-1 pb-4 text-xs text-[#929292] :p-bg[#929292] font-normal cursor-pointer [transition:all_.4s_linear] ${
            activeTab === 1 ? "active-listing-tab act-tb1" : ""
          }`}
        >
          <h3>Pending Orders</h3>
          <p className="bg-[#48A9A6] text-[#FFFFFF] text-xs  w-[22px] h-[22px] border p-0.5 rounded-full flex items-center justify-center">
            {pendingOrder.madePaymentCount}
          </p>
        </div>

        <div
          onClick={() => setActiveTab(2)}
          className={`pb-4 text-xs text-[#929292] font-normal cursor-pointer [transition:all_.4s_linear] ${
            activeTab === 2 ? "active-listing-tab act-tb2" : ""
          }`}
        >
          <h3>Ongoing Listings</h3>
        </div>
        <div
          onClick={() => setActiveTab(3)}
          className={`pb-4 text-xs text-[#929292] font-normal cursor-pointer [transition:all_.4s_linear] ${
            activeTab === 3 ? "active-listing-tab act-tb3" : ""
          }`}
        >
          <h3>Closed Listings</h3>
        </div>
      </div>

      <ListingBodyContent activeTab={activeTab} listData={listData} />
    </div>
  );
};

export default UserListingCard;
