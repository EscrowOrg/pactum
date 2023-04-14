import React from "react";
import {Routes, Route, useLocation} from "react-router-dom"
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

const MainRouter = () => {

   // DATA INITIALIZATION
   const location = useLocation()

   return(
      <AnimatePresence
      mode="wait">

         {/* Parent Routes */}
         <Routes
         key={location.pathname}
         location={location}>

            {/* ============ USER-ONBOARDING ============== */}
            {/* SPLASH SCREEN */}
            <Route
            path="/"
            element={<SplashScreen />} />

            {/* INFO SCREEN */}
            <Route
            path="/info"
            element={<Info />} />

            {/* ONBOARDING */}
            <Route 
            path="/onboradings" 
            element={<Onborading />} 
            excel/>

            {/* ============= VENDOR ================= */}
            {/* REGISTRATION VENDOR */}
            <Route 
            path="/vendon-register" 
            element={<RegistrationVendon/>}/>

            {/* VENDOR VERIFICATION PAGE VENDOR */}
            <Route 
            path="/vendor-verification-page" 
            element={<VendorVerificationPage />}/>

            {/* VENDOR VERIFICATION PAGE SUCCESS */}
            <Route 
            path="/vendor-verification-success" 
            element={<VendorVerified />}/>

            {/* VENDOR'S PROFILE */}
            <Route 
            path="/vendon-profile" 
            element={<ProfileVendon/>} />

            {/* VENDOR CREATE PIN */}
            <Route 
            path="/vendor-create-p" 
            element={<VendorCreatePin />}/>

            {/* VENDOR CREATE PIN SUCCESS */}
            <Route 
            path="/vendor-create-success" 
            element={<VendorPinSuccess />}/>

            {/* <Route path="/loginVendon" element={<LoginVendon/>} />  */}

            {/* ============= INDIVIDUALS ================= */}
            {/* INDIVIDUAL REGISTER */}
            <Route 
            path="/individual-register" 
            element={<RegistrationIndividual />}/>

            {/* INDIVIDUAL VERIFICATION PAGE */}
            <Route 
            path="/individual-verification-page" 
            element={<IndividualVerificationPage />}/>

            {/* INDIVIDUAL VERIFICATION PAGE SUCCESS */}
            <Route 
            path="/individual-verification-success" 
            element={<IndividualVerified />}/>

            {/* PROFILE */}
            <Route 
            path="/individual-profile" 
            element={<Profile/>} />

            {/* MORE INFO */}
            <Route 
            path="/individual-more-info" 
            element={<MoreInfo/>} />
            
            {/* INDIVIDUAL CREATE PIN */}
            <Route 
            path="/individual-create-p" 
            element={<IndividualCreatePin />}/>

            {/* INDIVIDUAL CREATE PIN SUCCESS */}
            <Route 
            path="/individual-create-success" 
            element={<IndividualPinSuccess />}/>

            {/* ============= LOGIN ================= */}
            {/* LOGIN USER */}
            <Route 
            path="/loginIndividual" 
            element={<LoginUser  />}/>  

            {/* FORGOT PASSWORD */}
            <Route 
            path="/forgot-password" 
            element={<ForgotPassword/>} /> 

            {/* VERIFICATION */}
            <Route 
            path="/verification" 
            element={<Verification/>} />

            {/* RESET PASSWORD */}
            <Route 
            path="/reset-password" 
            element={<ResetPassword/>}/>  

            {/* PASSWORD CHANGE SUCCESS */}
            <Route 
            path="/reset-password/success" 
            element={<PasswordChangeSuccess/>} />

         </Routes>
      </AnimatePresence>
   )
}

export default MainRouter;