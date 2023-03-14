import { RightOutlined } from "@ant-design/icons";
import { Typography, Row, Col } from "antd";
import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./index.scss"



//sconst {Panel} = Collapse;
const {Title} = Typography;
//const {TabPane} = Tabs;

class Onborading extends Component{
    render(){
        return(
            <div className="onboraing-form">
                <Title>
                    Create an Account
                </Title>
                <p>Select eight of these to get start</p>
                <div className="showal-form">
                    <Link to="/vendon-register" className="link-transfer">
                        <Row gutter={32} className="gutter-row">
                            <Col span={6}>
                                <Title>I am a Vendon</Title>
                            <p>
                                A Vendon user is capable of creating several users and is typical for register.
                            </p>
                            <RightOutlined style={{fontSize: "32px", marginLeft: "1000px", color: "black"}}/>
                            </Col>
                        </Row>
                    </Link>
                </div>

                <div className="showal-form">
                    <Link to="/individual-register" className="link-transfer">
                        <Row gutter={32} className="gutter-row" style={{}}>
                            <Col span={6}>
                                <Title className="title-form">I am an Individual</Title>
                            <p>
                                An individual user account is mostly prefered for personal use
                            </p>
                            <RightOutlined  style={{fontSize: "32px", marginLeft: "1000px", top: "50px", color: "black"}} />
                            </Col>
                        </Row>
                    </Link>
                    
                </div>
                 
                 I have an account? <Link style={{textDecoration: "none"}} to="/login">Login</Link>
            </div>
        )
    }
}
export default Onborading;