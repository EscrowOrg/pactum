import React from "react";
import BottomNav from "../../../components/Dashboard/Home/BottomNav";
import HomeHeader from "../../../components/Dashboard/Home/HomeHeader";
import NoTransitionWrapper from "../../../components/Dashboard/Home/NoTransitionWrapper";
import ProfileCompletionPopup from "../../../components/Dashboard/Home/ProfileCompletionPopup";
import HotList from "../../../components/Dashboard/Home/HotList";
import RecentTransactions from "../../../components/Dashboard/Home/RecentTransactions";
import { useEffect } from "react";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import { AUTH_POST_VALIDATE_DEVICE_TOKEN } from "../../../../../serivce/apiRoutes.service";
import { getUserData } from "../../../../../serivce/cookie.service";

const Home = () => {
  const { loading, makeAuthPostReq } = useMakeReq();
  const { userId } = getUserData();

  const token = localStorage.getItem("currentToken");

  useEffect(() => {
    makeAuthPostReq(`${AUTH_POST_VALIDATE_DEVICE_TOKEN}`, {
      token: token,
      userId: userId,
    });
  }, []);

  return (
    <NoTransitionWrapper>
      <div className="w-full h-full flex flex-col">
        {/* Home header */}
        <HomeHeader />

        {/* body */}
        <div className="w-[92%] flex flex-col mx-auto py-4 gap-8 pb-24">
          {/* notification to complete profile */}
          <ProfileCompletionPopup />

          {/* Hotlist */}
          <HotList />

          {/* recent transactions */}
          <RecentTransactions />
        </div>

        {/* bottom nav */}
        <BottomNav />
      </div>
    </NoTransitionWrapper>
  );
};

export default Home;
