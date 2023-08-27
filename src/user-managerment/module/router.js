import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import RegistrationIndividual from "./individual/pages/individual";
import Profile from "./individual/pages/user-profile";
import LoginUser from "./individual/user";
import Onborading from "./pages/onborading";
import RegistrationVendon from "./vendon/pages/vendonReg";
import ProfileVendon from "./vendon/profile";
// import ResetPassword from "./reset-password";
import { AnimatePresence } from "framer-motion";
import IndividualCreatePin from "./individual/pages/IndividualCreatePin";
import IndividualPinSuccess from "./individual/pages/IndividualPinSuccess";
import IndividualVerificationPage from "./individual/pages/IndividualVerificationPage";
import IndividualVerified from "./individual/pages/IndividualVerified";
import MoreInfo from "./individual/pages/MoreInfo";
import Home from "./pages/Dashboard/Home";
import BuyCoin from "./pages/Dashboard/Home/BuyCoin";
import BuySellCoin from "./pages/Dashboard/Home/BuySellCoin";
import Notification from "./pages/Dashboard/Home/Notification";
import OrderStatement from "./pages/Dashboard/Home/OrderStatement";
import Overview from "./pages/Dashboard/Home/Overview";
import ReportOrderStatement from "./pages/Dashboard/Home/ReportOrderStatement";
import SellCoin from "./pages/Dashboard/Home/SellCoin";
import SellOrderStatements from "./pages/Dashboard/Home/SellOrderStatements";
import SellTransactionSuccess from "./pages/Dashboard/Home/SellTransactionSuccess";
import TransactionSuccess from "./pages/Dashboard/Home/TransactionSuccess";
import Listing from "./pages/Dashboard/Listing";
import ClosedListingOverview from "./pages/Dashboard/Listing/ClosedListingOverview";
import ClosedOrderStatement from "./pages/Dashboard/Listing/ClosedOrderStatement";
import CreateListing from "./pages/Dashboard/Listing/CreateListing";
import Overviews from "./pages/Dashboard/Listing/Overview";
import PendingOrderStatement from "./pages/Dashboard/Listing/PendingOrderStatement";
import Portfolio from "./pages/Dashboard/Portfolio";
import Checkout from "./pages/Dashboard/Portfolio/Checkout";
import CreateWallet from "./pages/Dashboard/Portfolio/CreateWallet";
import ReceiveCoin from "./pages/Dashboard/Portfolio/ReceiveCoin";
import SendCoin from "./pages/Dashboard/Portfolio/SendCoin";
import SwapBridgeCoin from "./pages/Dashboard/Portfolio/SwapBridgeCoin";
import Transactions from "./pages/Dashboard/Portfolio/Transactions";
import ChangePassword from "./pages/Dashboard/Profile/ChangePassword";
import PrivacyPolicy from "./pages/Dashboard/Profile/PrivacyPolicy";
import TermsAndConditions from "./pages/Dashboard/Profile/TermsAndConditions";
import Info from "./pages/Info";
import PasswordChangeSuccess from "./pages/PasswordChangeSuccess";
import ResetPassword from "./pages/ResetPassword";
import SplashScreen from "./pages/SplashScreen";
import Verification from "./pages/Verification";
import ForgotPassword from "./pages/forgot-password";
import SettingsEditProfile from "./vendon/pages/SettingsEditProfile";
import VendorCreatePin from "./vendon/pages/VendorCreatePin";
import VendorPinSuccess from "./vendon/pages/VendorPinSuccess";
import VendorSettings from "./vendon/pages/VendorSettings";
import VendorVerified from "./vendon/pages/VendorVerified";
import VendorVerificationPage from "./vendon/pages/VerificationPage";
// import NewUser from "./pages/Dashboard/Portfolio/NewUser";
import AuthRoutes from "./components/AuthRoutes";
import ChatBox from "./pages/Dashboard/Home/ChatBox";
import CreateListingInfo from "./pages/Dashboard/Listing/CreateListingInfo";
import ListingMoreInfo from "./pages/Dashboard/Listing/ListingMoreInfo";
import AddBanks from "./pages/Dashboard/Profile/AddBanks";
import AddUser from "./pages/Dashboard/Profile/AddUsers";
import ChangePin from "./pages/Dashboard/Profile/ChangePin";
import ListOfBanks from "./pages/Dashboard/Profile/ListOfBanks";
import MyUsers from "./pages/Dashboard/Profile/MyUsers";
import SendAsset from "./pages/Dashboard/Profile/SendAsset";
import SendChat from "./pages/Dashboard/Profile/SendChat";
import UserWallet from "./pages/Dashboard/Profile/UserWallet";
import UserWalletAsset from "./pages/Dashboard/Profile/UserWalletAsset";
import { getUserRole } from "../../serivce/cookie.service";

const MainRouter = () => {
  // DATA INITIALIZATION
  const location = useLocation();
  const roles = getUserRole();
  return (
    <AnimatePresence mode="wait">
      {/* Parent Routes */}
      <Routes key={location.pathname} location={location}>
        {/* ============ USER-ONBOARDING ============== */}
        {/* ONBOARDING */}
        <Route path="/onboradings" element={<Onborading />} excel />
        <Route path="/" element={<SplashScreen />} />
        <Route path="/info" element={<Info />} />
        {/* Login and Registration */}
        <Route
          path="/individual-register"
          element={<RegistrationIndividual />}
        />
        <Route path="/loginIndividual" element={<LoginUser />} />
        {/* ============= VENDOR ================= */}
        {/* REGISTRATION VENDOR */}
        <Route path="/vendon-register" element={<RegistrationVendon />} />
        {/* VENDOR VERIFICATION PAGE VENDOR */}
        <Route
          path="/vendor-verification-page"
          element={<VendorVerificationPage />}
        />
        {/* VENDOR VERIFICATION PAGE SUCCESS */}
        <Route
          path="/vendor-verification-success"
          element={<VendorVerified />}
        />
        <Route path="/vendor-create-p" element={<VendorCreatePin />} />
        <Route
          path="/individual-verification-page"
          element={<IndividualVerificationPage />}
        />
        <Route
          path="/individual-verification-success"
          element={<IndividualVerified />}
        />
        {/* INDIVIDUAL CREATE PIN */}
        <Route path="/individual-create-p" element={<IndividualCreatePin />} />
        <Route
          path="/individual-create-success"
          element={<IndividualPinSuccess />}
        />
        {/* FORGOT PASSWORD */}
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* VERIFICATION */}
        <Route path="/verification" element={<Verification />} />

        {/* RESET PASSWORD */}
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* PASSWORD CHANGE SUCCESS */}
        <Route
          path="/reset-password/success"
          element={<PasswordChangeSuccess />}
        />
        {roles === "Customer" && (
          <Route element={<AuthRoutes />}>
            {/* HOME */}
            <Route exact path="/home" element={<Home />} />
            <Route path="/individual-more-info" element={<MoreInfo />} />
            <Route path="/individual-profile" element={<Profile />} />
            <Route
              path="/vendor-create-success"
              element={<VendorPinSuccess />}
            />

            {/* VENDOR'S USERS */}
            <Route path="/vendor-user-wallet/:id" element={<UserWallet />} />

            <Route path="/vendor-user-send-asset/:id" element={<SendAsset />} />

            <Route
              path="/vendor-user-wallet-asset/:id"
              element={<UserWalletAsset />}
            />
            <Route exact path="/home/overview/:coinId" element={<Overview />} />

            <Route
              exact
              path="/home/overview/coin-buy-sell"
              element={<BuySellCoin />}
            />

            <Route exact path="/home/buy-coin/:coinId" element={<BuyCoin />} />

            <Route
              exact
              path="/home/sell-coin/:coinId"
              element={<SellCoin />}
            />

            <Route
              exact
              path="/home/buy-coin/:orderId/order-statement"
              element={<OrderStatement />}
            />

            <Route
              exact
              path="/home/buy-coin/:order-statement/report-order-statement"
              element={<ReportOrderStatement />}
            />

            <Route
              exact
              path="/home/sell-coin/:orderId/sell-order-statement"
              element={<SellOrderStatements />}
            />

            <Route
              exact
              path="/home/buy-coin/success/:transactionId"
              element={<TransactionSuccess />}
            />

            <Route
              exact
              path="/home/sell-coin/success/:selltransactionId"
              element={<SellTransactionSuccess />}
            />

            <Route exact path="/home/notification" element={<Notification />} />

            <Route exact path="/home/chat" element={<ChatBox />} />

            {/* PORTFOLIO */}
            <Route exact path="/portfolio" element={<Portfolio />} />

            <Route
              exact
              path="/portfolio/create-wallet"
              element={<CreateWallet />}
            />

            <Route
              exact
              path="/portfolio/transactions"
              element={<Transactions />}
            />

            <Route
              exact
              path="/portfolio/checkout/:coinId"
              element={<Checkout />}
            />

            <Route
              exact
              path="/portfolio/checkout/:coinId/send"
              element={<SendCoin />}
            />

            <Route
              exact
              path="/portfolio/checkout/:coinId/receive"
              element={<ReceiveCoin />}
            />

            <Route
              exact
              path="/portfolio/swap-bridge"
              element={<SwapBridgeCoin />}
            />

            {/* LISTING */}
            <Route exact path="/listing" element={<Listing />} />

            <Route
              exact
              path="/listing/create-listing"
              element={<CreateListing />}
            />

            <Route
              exact
              path="/listing/create-listing/info"
              element={<CreateListingInfo />}
            />

            <Route
              path="/listing/pending-payments/:orderId"
              element={<PendingOrderStatement />}
            />

            <Route exact path="/listing/overview/:id" element={<Overviews />} />

            <Route
              exact
              path="/listing/overview/more-info/:bankId"
              element={<ListingMoreInfo />}
            />

            <Route
              exact
              path="/listing/closed-listing/:id"
              element={<ClosedListingOverview />}
            />

            <Route
              exact
              path="/listing/closed-listing-order/:id"
              element={<ClosedOrderStatement />}
            />

            {/* ACCOUNTS */}
            <Route exact path="/profile" element={<VendorSettings />} />

            <Route
              exact
              path="/profile/edit-profile"
              element={<SettingsEditProfile />}
            />

            <Route exact path="/profile/add-bank" element={<AddBanks />} />

            <Route exact path="/profile/list-bank" element={<ListOfBanks />} />

            <Route
              exact
              path="/profile/change-password"
              element={<ChangePassword />}
            />

            <Route exact path="/profile/change-pin" element={<ChangePin />} />

            <Route exact path="/profile/send-chat" element={<SendChat />} />

            <Route
              exact
              path="/profile/terms-and-conditions"
              element={<TermsAndConditions />}
            />

            <Route
              exact
              path="/profile/privacy-policy"
              element={<PrivacyPolicy />}
            />
          </Route>
        )}
        {roles === "SubUser" && (
          <Route element={<AuthRoutes />}>
            {/* HOME */}
            <Route exact path="/home" element={<Home />} />

            <Route exact path="/home/overview/:coinId" element={<Overview />} />
            <Route
              path="/vendor-create-success"
              element={<VendorPinSuccess />}
            />
            <Route path="/individual-more-info" element={<MoreInfo />} />
            <Route path="/individual-profile" element={<Profile />} />
            {/* VENDOR'S USERS */}
            <Route path="/vendor-user-wallet/:id" element={<UserWallet />} />

            <Route path="/vendor-user-send-asset/:id" element={<SendAsset />} />

            <Route
              path="/vendor-user-wallet-asset/:id"
              element={<UserWalletAsset />}
            />
            <Route
              exact
              path="/home/overview/coin-buy-sell"
              element={<BuySellCoin />}
            />

            <Route exact path="/home/buy-coin/:coinId" element={<BuyCoin />} />

            <Route
              exact
              path="/home/sell-coin/:coinId"
              element={<SellCoin />}
            />

            <Route
              exact
              path="/home/buy-coin/:orderId/order-statement"
              element={<OrderStatement />}
            />

            <Route
              exact
              path="/home/buy-coin/:order-statement/report-order-statement"
              element={<ReportOrderStatement />}
            />

            <Route
              exact
              path="/home/sell-coin/:orderId/sell-order-statement"
              element={<SellOrderStatements />}
            />

            <Route
              exact
              path="/home/buy-coin/success/:transactionId"
              element={<TransactionSuccess />}
            />

            <Route
              exact
              path="/home/sell-coin/success/:selltransactionId"
              element={<SellTransactionSuccess />}
            />

            <Route exact path="/home/notification" element={<Notification />} />

            <Route exact path="/home/chat" element={<ChatBox />} />

            {/* PORTFOLIO */}
            <Route exact path="/portfolio" element={<Portfolio />} />

            <Route
              exact
              path="/portfolio/create-wallet"
              element={<CreateWallet />}
            />

            <Route
              exact
              path="/portfolio/transactions"
              element={<Transactions />}
            />

            <Route
              exact
              path="/portfolio/checkout/:coinId"
              element={<Checkout />}
            />

            <Route
              exact
              path="/portfolio/checkout/:coinId/send"
              element={<SendCoin />}
            />

            <Route
              exact
              path="/portfolio/checkout/:coinId/receive"
              element={<ReceiveCoin />}
            />

            <Route
              exact
              path="/portfolio/swap-bridge"
              element={<SwapBridgeCoin />}
            />

            {/* LISTING */}
            <Route exact path="/listing" element={<Listing />} />

            <Route
              exact
              path="/listing/create-listing"
              element={<CreateListing />}
            />

            <Route
              exact
              path="/listing/create-listing/info"
              element={<CreateListingInfo />}
            />

            <Route
              path="/listing/pending-payments/:orderId"
              element={<PendingOrderStatement />}
            />

            <Route exact path="/listing/overview/:id" element={<Overviews />} />

            <Route
              exact
              path="/listing/overview/more-info/:bankId"
              element={<ListingMoreInfo />}
            />

            <Route
              exact
              path="/listing/closed-listing/:id"
              element={<ClosedListingOverview />}
            />

            <Route
              exact
              path="/listing/closed-listing-order/:id"
              element={<ClosedOrderStatement />}
            />

            {/* ACCOUNTS */}
            <Route exact path="/profile" element={<VendorSettings />} />

            <Route
              exact
              path="/profile/edit-profile"
              element={<SettingsEditProfile />}
            />
            <Route exact path="/profile/list-bank" element={<ListOfBanks />} />

            <Route
              exact
              path="/profile/change-password"
              element={<ChangePassword />}
            />

            <Route exact path="/profile/change-pin" element={<ChangePin />} />

            <Route exact path="/profile/send-chat" element={<SendChat />} />

            <Route
              exact
              path="/profile/terms-and-conditions"
              element={<TermsAndConditions />}
            />

            <Route
              exact
              path="/profile/privacy-policy"
              element={<PrivacyPolicy />}
            />
          </Route>
        )}
        {/* =========== HOME DASHBOARD ========== */}
        {roles === "VendorAdmin" && (
          <Route element={<AuthRoutes />}>
            {/* HOME */}
            <Route exact path="/home" element={<Home />} />
            <Route
              path="/vendor-create-success"
              element={<VendorPinSuccess />}
            />
            <Route path="/individual-more-info" element={<MoreInfo />} />
            <Route path="/individual-profile" element={<Profile />} />
            {/* VENDOR'S USERS */}
            <Route path="/vendor-user-wallet/:id" element={<UserWallet />} />

            <Route path="/vendor-user-send-asset/:id" element={<SendAsset />} />

            <Route
              path="/vendor-user-wallet-asset/:id"
              element={<UserWalletAsset />}
            />
            <Route path="/vendon-profile" element={<ProfileVendon />} />
            <Route exact path="/home/overview/:coinId" element={<Overview />} />
            <Route path="/vendor-add-user" element={<AddUser />} />

            <Route
              exact
              path="/home/overview/coin-buy-sell"
              element={<BuySellCoin />}
            />

            <Route exact path="/home/buy-coin/:coinId" element={<BuyCoin />} />

            <Route
              exact
              path="/home/sell-coin/:coinId"
              element={<SellCoin />}
            />

            <Route
              exact
              path="/home/buy-coin/:orderId/order-statement"
              element={<OrderStatement />}
            />

            <Route
              exact
              path="/home/buy-coin/:order-statement/report-order-statement"
              element={<ReportOrderStatement />}
            />

            <Route
              exact
              path="/home/sell-coin/:orderId/sell-order-statement"
              element={<SellOrderStatements />}
            />

            <Route
              exact
              path="/home/buy-coin/success/:transactionId"
              element={<TransactionSuccess />}
            />

            <Route
              exact
              path="/home/sell-coin/success/:selltransactionId"
              element={<SellTransactionSuccess />}
            />

            <Route exact path="/home/notification" element={<Notification />} />

            <Route exact path="/home/chat" element={<ChatBox />} />

            {/* PORTFOLIO */}
            <Route exact path="/portfolio" element={<Portfolio />} />

            <Route
              exact
              path="/portfolio/create-wallet"
              element={<CreateWallet />}
            />

            <Route
              exact
              path="/portfolio/transactions"
              element={<Transactions />}
            />

            <Route
              exact
              path="/portfolio/checkout/:coinId"
              element={<Checkout />}
            />

            <Route
              exact
              path="/portfolio/checkout/:coinId/send"
              element={<SendCoin />}
            />

            <Route
              exact
              path="/portfolio/checkout/:coinId/receive"
              element={<ReceiveCoin />}
            />

            <Route
              exact
              path="/portfolio/swap-bridge"
              element={<SwapBridgeCoin />}
            />

            {/* LISTING */}
            <Route exact path="/listing" element={<Listing />} />

            <Route
              exact
              path="/listing/create-listing"
              element={<CreateListing />}
            />

            <Route
              exact
              path="/listing/create-listing/info"
              element={<CreateListingInfo />}
            />

            <Route
              path="/listing/pending-payments/:orderId"
              element={<PendingOrderStatement />}
            />

            <Route exact path="/listing/overview/:id" element={<Overviews />} />

            <Route
              exact
              path="/listing/overview/more-info/:bankId"
              element={<ListingMoreInfo />}
            />

            <Route
              exact
              path="/listing/closed-listing/:id"
              element={<ClosedListingOverview />}
            />

            <Route
              exact
              path="/listing/closed-listing-order/:id"
              element={<ClosedOrderStatement />}
            />

            {/* ACCOUNTS */}
            <Route exact path="/profile" element={<VendorSettings />} />

            <Route
              exact
              path="/profile/edit-profile"
              element={<SettingsEditProfile />}
            />

            <Route exact path="/profile/list-of-users" element={<MyUsers />} />

            <Route exact path="/profile/add-bank" element={<AddBanks />} />

            <Route exact path="/profile/list-bank" element={<ListOfBanks />} />

            <Route
              exact
              path="/profile/change-password"
              element={<ChangePassword />}
            />

            <Route exact path="/profile/change-pin" element={<ChangePin />} />

            <Route exact path="/profile/send-chat" element={<SendChat />} />

            <Route
              exact
              path="/profile/terms-and-conditions"
              element={<TermsAndConditions />}
            />

            <Route
              exact
              path="/profile/privacy-policy"
              element={<PrivacyPolicy />}
            />
          </Route>
        )}
      </Routes>
    </AnimatePresence>
  );
};

export default MainRouter;
