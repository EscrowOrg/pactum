import React,  { Component } from "react";
import {Routes, Route} from "react-router-dom"
import Profile from "./individual/user-profile";
import RegistrationIndividual from "./individual/individual";
import LoginUser from "./individual/user";
import Onborading from "./onborading";
import ProfileVendon from "./vendon/profile";
//import LoginVendon from "./vendon/vendon";
import RegistrationVendon from "./vendon/vendonReg";
import ResetPassword from "./reset-password";
import ForgotPassword from "./forgot-password";

class OnboradingRouter extends Component{
     render(){
        return(
            <>
             <Routes>
                <Route path="/onboradings" element={<Onborading/>} excel/>
                <Route path="/vendon-register" element={<RegistrationVendon/>}/>
                {/* <Route path="/loginVendon" element={<LoginVendon/>} />  */}
                <Route path="/individual-register" element={<RegistrationIndividual/>}/>
                <Route path="/loginIndividual" element={<LoginUser/>}/>   
                <Route path="/individual-profile" element={<Profile/>} />
                <Route path="/vendon-profile" element={<ProfileVendon/>} />
                <Route path="/reset-password" element={<ResetPassword/>}/>  
                <Route path="/forgot-password" element={<ForgotPassword/>} />
             </Routes>
            </>
        )
     }
}

export default OnboradingRouter;