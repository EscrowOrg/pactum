import React from "react";
import {Routes, Route, useLocation} from "react-router-dom"
import Profile from "./individual/user-profile";
import RegistrationIndividual from "./individual/individual";
import LoginUser from "./individual/user";
import Onborading from "./onborading";
import ProfileVendon from "./vendon/profile";
import RegistrationVendon from "./vendon/vendonReg";
import ResetPassword from "./reset-password";
import ForgotPassword from "./forgot-password";
import SplashScreen from "./pages/SplashScreen";
import { AnimatePresence } from "framer-motion";
import Info from "./pages/Info";

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

            {/* REGISTRATION VENDOR */}
            <Route 
            path="/vendon-register" 
            element={<RegistrationVendon/>}/>


            {/* <Route path="/loginVendon" element={<LoginVendon/>} />  */}

            {/* INDIVIDUAL REGISTER */}
            <Route 
            path="/individual-register" 
            element={<RegistrationIndividual/>}/>

            {/* LOGIN USER */}
            <Route 
            path="/loginIndividual" 
            element={<LoginUser  />}/>   

            {/* PROFILE */}
            <Route 
            path="/individual-profile" 
            element={<Profile/>} />

            {/* VENDOR'S PROFILE */}
            <Route 
            path="/vendon-profile" 
            element={<ProfileVendon/>} />

            {/* RESET PASSWORD */}
            <Route 
            path="/reset-password" 
            element={<ResetPassword/>}/>  

            {/* FORGOT PASSWORD */}
            <Route 
            path="/forgot-password" 
            element={<ForgotPassword/>} />
         </Routes>
      </AnimatePresence>
   )
}

export default MainRouter;