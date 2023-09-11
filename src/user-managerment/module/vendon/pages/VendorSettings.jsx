import {
  Bank,
  Document,
  Like1,
  Lock1,
  Logout,
  Messages,
  ProfileCircle,
  Receipt1,
  Security,
  Star1,
  TableDocument,
} from "iconsax-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";
import { Logout as logUserOut } from "../../../../serivce/apiCalls";
import BottomNav from "../../components/Dashboard/Home/BottomNav";
import NoTransitionWrapper from "../../components/Dashboard/Home/NoTransitionWrapper";
import SendReview from "../../components/Dashboard/Profile/SendReview";
import SettingOptionCards from "../../components/Dashboard/Profile/SettingOptionCards";
import UnverifiedLabel from "../../components/Dashboard/Profile/UnverifiedLabel";
import Drawer from "../../layouts/Drawer";
import SlideWrapper from "../../layouts/Drawer/SlideWrapper";
import StrictWrapper from "../../layouts/Drawer/StrictWrapper";
import ReviewPactum from "../../pages/Dashboard/Profile/RecommendPactum";
import SendChat from "../../pages/Dashboard/Profile/SendChat";
import { getUserRole } from "../../../../serivce/cookie.service";

const VendorSettings = () => {
  // STATES
  const [reviewDrawer, setReviewDrawer] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  // DATA INITIALIZATION
  const { dispatch } = useContext(AuthContext);

  // HANDLERS
  const toggleRateDrawer = () => {
    setReviewDrawer(!reviewDrawer);
  };

  const toggleChatDrawer = (value) => {
    setIsOpen1((isOpen1) => !isOpen1);
  };

  const toggleReviewDrawer = (value) => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleLogout = () => {
    logUserOut(dispatch);
  };
   
  const roles = getUserRole();

  return (
    <NoTransitionWrapper>
      <div className="w-full h-full flex flex-col gap-8 py-5 overflow-auto">
        {/* HEADER */}
        <div className="flex items-center w-[92%] mx-auto justify-between">
          {/* title */}
          <h4 className="text-[22px] font-bold text-black">@pacpac</h4>

          {/* user button */}
          <div
            className="flex items-center bg-[#F4EFFE] gap-1 px-3 rounded-[32px] h-10"
            onClick={handleLogout}
          >
            <Logout color="#3A0CA3" size={18} variant="TwoTone" />

            <a href="/loginIndividual">
              <h4 className="text-sm font-bold text-[#3A0CA3]">Logout</h4>{" "}
            </a>
          </div>
        </div>

        {/* BODY */}
        <div className="flex flex-col gap-6 w-full min-h-fit pb-20 px-4">
          {/* profile photo */}
          <div className="w-full flex flex-col items-center gap-2">
            {/* image */}
            <div className="h-[64px] w-[64px] rounded-[50%] bg-[#3A0CA3] inline-flex items-center justify-center">
              <img
                alt=""
                src="/images/dashboard/profile-image.png"
                className="h-full w-full rounded-[50%]"
              />
            </div>

            {/* texts */}
            <div className="flex flex-col gap-1 items-center">
              {/* name */}
              <h4 className="text-base font-semibold text-black">CoinAmix Ltd</h4>

              {/* edit profile button */}
              <Link
                to="/profile/edit-profile"
                className="text-[#48A9A6] flex items-center bg-[#F6FBFB] justify-center px-4 rounded-[32px] h-10 hover:no-underline"
              >
                Edit Profile
              </Link>
            </div>
          </div>

          {/* account group */}
          <div className="flex flex-col gap-3 w-full">
            {/* title */}
            <h4 className="text-[#8D85A0] font-normal text-xs">
              ACCOUNT & SETTINGS
            </h4>

            {/* container */}
            <div className="p-3 flex flex-col gap-8 bg-[#FAFAFB] rounded-lg">
              <SettingOptionCards
                Icon={Security}
                title={"Identity Verification"}
              >
                <UnverifiedLabel />
              </SettingOptionCards>
              {roles === "VendorAdmin" && (
                    <SettingOptionCards
                    Icon={ProfileCircle}
                    title={"My Users"}
                    pathTo="/profile/list-of-users"
                  />
              )}
              

              <SettingOptionCards
                Icon={Bank}
                title={"Banks"}
                pathTo="/profile/list-bank"
              />

              <SettingOptionCards
              pathTo="/portfolio/transactions" 
              Icon={Receipt1} 
              title={"Transactions"} />

              <SettingOptionCards
                Icon={Lock1}
                title={"Change Password"}
                pathTo="/profile/change-password"
              />

              <SettingOptionCards
                Icon={Lock1}
                title={"Change Pin"}
                pathTo="/profile/change-pin"
              />
            </div>
          </div>

          {/*support group */}
          <div className="flex flex-col gap-3 w-full">
            {/* title */}
            <h4 className="text-[#8D85A0] font-normal text-xs">SUPPORT</h4>

            {/* container */}
            <div className="p-3 flex flex-col gap-8 bg-[#FAFAFB] rounded-lg">
              <div onClick={toggleRateDrawer}>
                <SettingOptionCards Icon={Like1} title={"Recommend CoinAmix"} />
              </div>

              <div onClick={toggleReviewDrawer}>
                <SettingOptionCards
                  Icon={Star1}
                  title={"Review on Playstore"}
                />
              </div>

              <div onClick={toggleChatDrawer}>
                <SettingOptionCards
                  Icon={Messages}
                  title={"Send us a Chat"}
                  // pathTo="/profile/send-chat"
                />
              </div>
            </div>
          </div>

          {/* legal group */}
          <div className="flex flex-col gap-3 w-full">
            {/* title */}
            <h4 className="text-[#8D85A0] font-normal text-xs">LEGAL</h4>

            {/* container */}
            <div className="p-3 flex flex-col gap-8 bg-[#FAFAFB] rounded-lg">
              <SettingOptionCards
                Icon={Document}
                title={"Terms & Conditions"}
                pathTo="/profile/terms-and-conditions"
              />

              <SettingOptionCards
                Icon={TableDocument}
                title={"Privacy Policy"}
                pathTo="/profile/privacy-policy"
              />
            </div>
          </div>
        </div>

        {/* bottom nav */}
        <BottomNav />

        {/* send us a chat drawer */}
        <Drawer
          isOpen={isOpen1}
          onClose={() => setIsOpen1(false)}
          position="bottom"
        >
          {/* drawer content container */}
          <StrictWrapper
            title={"Send us a Chat"}
            closeDrawer={() => setIsOpen1(false)}
          >
            {/* Body content */}
            <SendChat
            closeDrawer={()=>setIsOpen1(false)} />
          </StrictWrapper>
        </Drawer>

        {/* rate Pactum modal */}
        <Drawer
          relationshipStatus="alone"
          height="!h-auto"
          insertCurve={false}
          type="slider"
          isOpen={reviewDrawer}
          onClose={toggleRateDrawer}
          position="bottom"
        >
          {/* content */}
          <SlideWrapper
            closeDrawer={toggleRateDrawer}
            title={"Enjoying CoinAmix?"}
          >
            <ReviewPactum closeModal={toggleRateDrawer} />
          </SlideWrapper>
        </Drawer>

        {/* toggle review drawer */}
        <Drawer
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          position="bottom"
        >
          {/* drawer content container */}
          <StrictWrapper
            title={"Write a Review"}
            closeDrawer={() => setIsOpen(false)}
          >
            {/* Body content */}
            <SendReview />
          </StrictWrapper>
        </Drawer>
      </div>
    </NoTransitionWrapper>
  );
};

export default VendorSettings;
