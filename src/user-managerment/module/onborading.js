import { RightOutlined } from "@ant-design/icons";
import { Typography, Row, Col } from "antd";
import React from "react";
import {Link} from "react-router-dom";
import "./index.scss"
import PageWrapper from "./layouts/PageWrapper";

const {Title} = Typography;

const Onborading = ()=>{

    return(
        <PageWrapper>
            <div className="onboraing-form w-full h-full">
                <div className="head">Create an Account</div>
                <p className="sub">Select eight of these to get start</p>
                
                

                <div className="account-creation">
                I have an account? <Link style={{textDecoration: "none"}} to="/loginIndividual">Login</Link>
                </div>
                
            </div>
        </PageWrapper>
    )
}
export default Onborading