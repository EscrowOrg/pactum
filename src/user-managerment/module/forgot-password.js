//import { AppleOutlined, EyeInvisibleOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button,  Col, Form, Input,  Row,  } from "antd";
import React,  { Component } from "react";
//import { Link } from "react-router-dom";
import "./index.scss"
import PageWrapper from "./layouts/PageWrapper";


//const {Title} = Typography

class ForgotPassword extends Component{
    state = {
        formData: {
            email: "",
            password: "",
            action: ""
        },
        open: false
    }

    handleChange = (e)=>{
        const {name, value} = e.target;
        this.setState({
            formData:{
                ...this.state.formData,
                [name]: value
            }
        })
    }
    render(){
        const {formData} = this.state;
        return(
            <PageWrapper>
                <div className="forget-password w-full h-full">
                    <div className="password-forgeting">Forgot Password</div>
                    <div className="password-sub"> Enter your email address to receive a link via mail to setup a new passwords</div>
                    <Form className="form-class">
                        <Row gutter={32} className="gutter-row">
                        <Col span={8}>
                            <label className="lable-class">Email Address</label>
                            <Input
                            name="email"
                            placeholder="Email Address"
                            className="inputclassname" 
                            type="email"
                            value={formData.email}
                            onChange={this.handleChange}
                            />
                        </Col>
                        </Row>
                    </Form>
                    <Button className="send-code">Send Code</Button>
                </div>
            </PageWrapper>
        )
    }

}
export default ForgotPassword