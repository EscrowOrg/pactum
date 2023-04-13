import { AppleOutlined,  GoogleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./logis.scss"
import PageWrapper from "../layouts/PageWrapper";

const LoginUser  = () =>{

   // STATES
   const [users, setUsers] = useState({
      companyEmail: "",
      password: "",
      action: ""
   })


   // HANDLERS
    const  handleChange = (e)=>{
      const {name, value} = e.target;
      setUsers({
         ...users,
         [name]: value
      })
   }

    return(
      <PageWrapper>
         <div className="container w-full h-full">
                  <div className="login-text">
                     <div className="head">Welcome Back</div>
                     <div className="sub">Login into your account</div>
                  </div>
                  <Form className="login-form">
                        <Row gutter={32} className="form-row1">
                           <Col span={8}>
                                 <Form.Item>
                                 <label>Company Email</label>
                                 <Input
                                 name="companyEmail"
                                 placeholder="Company Email"
                                 className="inputclassname" 
                                 type="email"
                                 value={users.companyEmail}
                                 onChange={handleChange}
                                 />
                                 </Form.Item>
                           </Col>
                        </Row>
                           <Row gutter={32} className="form-row2">
                              <Col span={8}>
                                 <label>Password</label>
                                 <Input.Password
                                    name="password"
                                    placeholder="Password"
                                    className="passwordclass"
                                    type="password"
                                    value={users.password}
                                    onChange={handleChange}
                                    />
                              </Col>
                           </Row>
                        
                        <div className="forgot-password">
                        <Link to="/forgot-password">Forgot Password</Link>
                        </div>
                        <div className="sign-button">
                        <Button className="button-sign">Login</Button>
                        </div>
                        <div className="sign-social">
                        <p >Or Sign Up With</p>
                        <Button className="google-button">
                           <GoogleOutlined className="google" />
                        </Button>
                        <Button className="google-apple">
                           <AppleOutlined className="apple" /> 
                        </Button>
                        
                        </div>
                  </Form>
                  <div className="create-accout">
                  Don't have an account? <Link to="/individual-register">Create Account</Link>
                  </div>
         </div>
      </PageWrapper>
   )
}
export default LoginUser;