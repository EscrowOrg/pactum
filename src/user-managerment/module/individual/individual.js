import { AppleOutlined,  GoogleOutlined } from "@ant-design/icons";
import { Button,  Col, Form, Input, Radio, Row} from "antd";
import React,  {  useState } from "react";
import { Link } from "react-router-dom";
import "./logis.scss"
import PageWrapper from "../layouts/PageWrapper";





const RegistrationIndividual = ()=>{
   const [formData, setFormData] = useState({
        emailAddress: "",
        password: "",
        action: "",
        open: false

   })
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value

        })
    }
    const changRadio = (e)=>{
         setFormData({
            ...formData,
            action: e.target.value

         })
       
    }
    return(
        <PageWrapper>
            <div className="register w-full h-full">
                <div className="register-head">Sign Up as a Individual</div>
                <Form className="register-form">
                <Row gutter={32} className="register-row1">
                        <Col span={8}>
                            <Form.Item>
                                    <label>Email Address</label>
                                    <Input
                                        name="emailAddress"
                                        placeholder="Email Address"
                                        className="inputclassname" 
                                        type="email"
                                        value={formData.emailAddress}
                                        onChange={handleChange}
                                        />
                            </Form.Item>
                        </Col>
                </Row>
                <Row gutter={32} className="register-row2">
                        <Col span={8}>
                                <Form.Item>
                                        <label>Password</label>
                                        <Input.Password
                                        name="password"
                                        placeholder="Password"
                                        className="inputclass"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        />

                                        <Radio.Group onChange={changRadio} className="radio-form1">
                                            <Radio value={1}>
                                            <p>At lastest 8 characters</p>
                                            </Radio>
                                            <Radio value={2}>
                                                <p>At lastest 1 number</p>
                                            </Radio>
                                            <Radio value={3}>
                                                <p>Contains both lower [a,z] and uper letter [A,Z]</p>
                                            </Radio>
                                        </Radio.Group>
                                </Form.Item>
                        </Col>
                </Row>
                    <div className="radio-form2">
                        <Radio onChange={changRadio}>
                            <p>
                                I agree with the Teams and Privacy Policy 
                            </p>
                        </Radio>
                    </div>
                    <div className="sign-up">
                    <Button className="sign-button">Sign UP</Button>
                    </div>
                    <div className="sign-sola">
                        <p>Or Sign Up With</p>
                        <Button className="google-button">
                                <GoogleOutlined className="google" />
                            </Button>
                            <Button className="google-apple">
                            <AppleOutlined className="apple" /> 
                            </Button>
                    </div>
                </Form>
                <div className="login">
                I have an account?  <Link to="/loginIndividual" style={{textDecoration: "none"}}>Login</Link>
                </div>
            </div>
        </PageWrapper>
    )
}

export default RegistrationIndividual