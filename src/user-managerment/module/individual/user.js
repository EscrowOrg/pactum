import { AppleOutlined,  GoogleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row} from "antd";
import React,  {  useState } from "react";
import { Link } from "react-router-dom";
import "./logis.scss"


//const {Title} = Typography


const LoginUser  = () =>{
  const [users, setUsers] = useState({
    companyEmail: "",
    password: "",
    action: ""
  })

    const  handleChange = (e)=>{
        const {name, value} = e.target;
          setUsers({
             ...users,
             [name]: value
          })
    }
    return(
        <div className="container">
                <div className="login-text">
                    <div className="head">Welcome Back</div>
                    <div className="sub">Login into your account</div>
                </div>
                <Form className="login-form">
                    <Row gutter={32}>
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
                        <Col span={8}>
                            <Form.Item>
                                <label>Password</label>
                                <Input.Password
                                name="password"
                                placeholder="Password"
                                className="inputclassname"
                                type="password"
                                value={users.password}
                                onChange={handleChange}
                                />
                            </Form.Item>
                      </Col>
                    </Row>
                      <div className="forgot-password">
                        <Link to="">Forgot Password</Link>
                      </div>
                      <div className="sign-button">
                       <Button>Sign UP</Button>
                      </div>
                      <div className="sign-social">
                        <p>Or Sign Up With</p>
                        <GoogleOutlined className="google" />
                        <AppleOutlined className="apple" />
                      </div>
                </Form>
                <div className="create-accout">
                  Don't have an account? <Link to="/individual-register">Create Account</Link>
                </div>
        </div>
    )

}
export default LoginUser;