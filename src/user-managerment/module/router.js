import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Profile from "./individual/pages/user-profile";
import RegistrationIndividual from "./individual/pages/individual";
import LoginUser from "./individual/user";
import Onborading from "./pages/onborading";
import ProfileVendon from "./vendon/profile";
import RegistrationVendon from "./vendon/pages/vendonReg";
// import ResetPassword from "./reset-password";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/forgot-password";
import SplashScreen from "./pages/SplashScreen";
import { AnimatePresence } from "framer-motion";
import Info from "./pages/Info";
import Verification from "./pages/Verification";
import PasswordChangeSuccess from "./pages/PasswordChangeSuccess";
import VendorVerificationPage from "./vendon/pages/VerificationPage";
import VendorVerified from "./vendon/pages/VendorVerified";
import VendorCreatePin from "./vendon/pages/VendorCreatePin";
import VendorPinSuccess from "./vendon/pages/VendorPinSuccess";
import IndividualVerificationPage from "./individual/pages/IndividualVerificationPage";
import IndividualVerified from "./individual/pages/IndividualVerified";
import MoreInfo from "./individual/pages/MoreInfo";
import IndividualPinSuccess from "./individual/pages/IndividualPinSuccess";
import IndividualCreatePin from "./individual/pages/IndividualCreatePin";
import Home from "./pages/Dashboard/Home";
import Portfolio from "./pages/Dashboard/Portfolio";
import Listing from "./pages/Dashboard/Listing";
import SettingProfile from "./pages/Dashboard/Profile";
import Overview from "./pages/Dashboard/Home/Overview";
import BuySellCoin from "./pages/Dashboard/Home/BuySellCoin";
import BuyCoin from "./pages/Dashboard/Home/BuyCoin";
import OrderStatement from "./pages/Dashboard/Home/OrderStatement";
import TransactionSuccess from "./pages/Dashboard/Home/TransactionSuccess";
import SellCoin from "./pages/Dashboard/Home/SellCoin";
import SellOrderStatements from "./pages/Dashboard/Home/SellOrderStatements";
import CreateWallet from "./pages/Dashboard/Portfolio/CreateWallet";
import Transactions from "./pages/Dashboard/Portfolio/Transactions";
import Checkout from "./pages/Dashboard/Portfolio/Checkout";
import SendCoin from "./pages/Dashboard/Portfolio/SendCoin";
import ReceiveCoin from "./pages/Dashboard/Portfolio/ReceiveCoin";
import SwapBridgeCoin from "./pages/Dashboard/Portfolio/SwapBridgeCoin";
import CreateListing from "./pages/Dashboard/Listing/CreateListing";
import { AuthContext } from "../../context/AuthContext";
import EditProfile from "./pages/Dashboard/Profile/EditProfile";
import PrivateRoutes from "./components/Dashboard/PrivateRoutes";
import PrivacyPolicy from "./pages/Dashboard/Profile/PrivacyPolicy";
import TermsAndConditions from "./pages/Dashboard/Profile/TermsAndConditions";
import Overviews from "./pages/Dashboard/Listing/Overview";
import PendingOrderStatement from "./pages/Dashboard/Listing/PendingOrderStatement";
import ClosedListingOverview from "./pages/Dashboard/Listing/ClosedListingOverview";
import ClosedOrderStatement from "./pages/Dashboard/Listing/ClosedOrderStatement";

const MainRouter = () => {
  // DATA INITIALIZATION
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* Parent Routes */}
      <Routes key={location.pathname} location={location}>
        {/* ============ USER-ONBOARDING ============== */}
        {/* SPLASH SCREEN */}
        <Route path="/" element={<SplashScreen />} />

        {/* INFO SCREEN */}
        <Route path="/info" element={<Info />} />

        {/* ONBOARDING */}
        <Route path="/onboradings" element={<Onborading />} excel />

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

        {/* VENDOR'S PROFILE */}
        <Route path="/vendon-profile" element={<ProfileVendon />} />

        {/* VENDOR CREATE PIN */}
        <Route path="/vendor-create-p" element={<VendorCreatePin />} />

        {/* VENDOR CREATE PIN SUCCESS */}
        <Route path="/vendor-create-success" element={<VendorPinSuccess />} />

        {/* ============= INDIVIDUALS ================= */}
        {/* INDIVIDUAL REGISTER */}
        <Route
          path="/individual-register"
          element={<RegistrationIndividual />}
        />

        {/* INDIVIDUAL VERIFICATION PAGE */}
        <Route
          path="/individual-verification-page"
          element={<IndividualVerificationPage />}
        />

        {/* INDIVIDUAL VERIFICATION PAGE SUCCESS */}
        <Route
          path="/individual-verification-success"
          element={<IndividualVerified />}
        />

        {/* PROFILE */}
        <Route path="/individual-profile" element={<Profile />} />

        {/* MORE INFO */}
        <Route path="/individual-more-info" element={<MoreInfo />} />

        {/* INDIVIDUAL CREATE PIN */}
        <Route path="/individual-create-p" element={<IndividualCreatePin />} />

        {/* INDIVIDUAL CREATE PIN SUCCESS */}
        <Route
          path="/individual-create-success"
          element={<IndividualPinSuccess />}
        />

        {/* ============= LOGIN ================= */}
        {/* LOGIN USER */}
        <Route path="/loginIndividual" element={<LoginUser />} />

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

        {/* =========== HOME DASHBOARD ========== */}
        <Route element={<PrivateRoutes />}>
          {/* HOME */}
          <Route exact path="/home" element={<Home />} />

          <Route exact path="/home/overview/:coinId" element={<Overview />} />

          <Route
            exact
            path="/home/overview/coin-buy-sell"
            element={<BuySellCoin />}
          />

          <Route exact path="/home/buy-coin/:coinId" element={<BuyCoin />} />

          <Route exact path="/home/sell-coin/:coinId" element={<SellCoin />} />

          <Route
            exact
            path="/home/buy-coin/:coinId/order-statement"
            element={<OrderStatement />}
          />

          <Route
            exact
            path="/home/sell-coin/:coinId/sell-order-statement"
            element={<SellOrderStatements />}
          />

          <Route
            exact
            path="/home/buy-coin/success/:transactionId"
            element={<TransactionSuccess />}
          />

          <Route
            exact
            path="/home/sell-coin/success/:transactionId"
            element={<TransactionSuccess />}
          />

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
            path="/listing/pending-payments/:orderId"
            element={<PendingOrderStatement />}
          />

          <Route
            exact
            path="/listing/overview/:listingId"
            element={<Overviews />}
          />

          <Route
            exact
            path="/listing/closed-listing/:closedListingId"
            element={<ClosedListingOverview />}
          />

          <Route
            exact
            path="/listing/closed-listing-order/:closedOrderId"
            element={<ClosedOrderStatement />}
          />

          {/* PROFILE */}
          <Route exact path="/profile" element={<SettingProfile />} />

          <Route exact path="/profile/edit-profile" element={<EditProfile />} />
        </Route>

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
      </Routes>
    </AnimatePresence>
  );
};

export default MainRouter;
