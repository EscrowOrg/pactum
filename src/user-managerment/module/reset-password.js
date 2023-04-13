//import { AppleOutlined, EyeInvisibleOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button,  Col, Form, Input, Radio, Row } from "antd";
import React,  { Component } from "react";
//import { Link } from "react-router-dom";
import "./index.scss"
import PageWrapper from "./layouts/PageWrapper";



class ResetPassword extends Component{
    state = {
        formData: {
            RetypePassword: "",
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
    changRadio = (e)=>{
        this.setState({
            formData: {
                 ...this.state.formData,
                action: e.target.value
            }
        })
    }
    render(){
        const {formData} = this.state;
        return(
            <PageWrapper>
                <div className="container w-full h-full">
                    <div className="head">Reset Password</div>
                    <div>Create your new password to gain access to your account again</div>
                    <br/>
                    <Form className="form-input" >
                        <Row gutter={32} className="input-row">
                        <Col span={8} className="input-row1">
                            <label >Password</label>
                            <Input.Password
                            name="password"
                            placeholder="Password"
                            className="inputclassname"
                            type="password"
                            value={formData.password}
                            onChange={this.handleChange}
                            />
                        </Col>
                        </Row>
                        <Row gutter={32} className="input-row2">
                            <Col span={8} className="input-row3">
                                <label>Repeat Password</label>
                                <Input.Password
                                name="RetypePassword"
                                placeholder="Retype Password"
                                className="inputclass" 
                                type="password"
                                value={formData.RetypePassword}
                                onChange={this.handleChange}
                                />
                                    <Radio.Group onChange={this.changRadio} className="radio-form1">
                                        <Radio value={1} className="row1">
                                        <p>At lastest 8 characters</p>
                                        </Radio>
                                        <Radio  className="row2">
                                            <p>At lastest 1 number</p>
                                        </Radio>
                                        <Radio  className="row3">
                                            <p>Contains both lower [a,z] and uper letter [A,Z]</p>
                                        </Radio>
                                        <Radio  className="row4">
                                        <p>Match Password</p>
                                    </Radio>
                                    </Radio.Group>
                            </Col>
                        </Row>
                    </Form>
                    <Button className="confirm-password"> Confirm Password</Button>
                </div>
            </PageWrapper>
        )
    }

}
export default ResetPassword