import { AppleOutlined, EyeInvisibleOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button,  Col, Form, Input,  Typography } from "antd";
import React,  { Component } from "react";
import { Link } from "react-router-dom";
import "../index.scss"


const {Title} = Typography

class LoginVendon extends Component{
    state = {
        formData: {
            companyEmail: "",
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
    // changRadio = (e)=>{
    //     this.setState({
    //         formData: {
    //              ...this.state.formData,
    //             action: e.target.value
    //         }
    //     })
    // }
    render(){
        const {formData} = this.state;
        return(
            <div className="vendor-registration" >
                <Title>Welcome Back</Title>
                <p>Login into your account</p>
                <Form className="form-registration">
                    <Col span={8}>
                     <Form.Item>
                        <label>Company Email</label>
                            <Input
                            name="companyEmail"
                            placeholder="Company Email"
                            className="inputclassname" 
                            type="email"
                            value={formData.companyEmail}
                            onChange={this.handleChange}
                            />
                          </Form.Item>
                        </Col>
                      <Col span={8}>
                        <Form.Item>
                            <label>Password</label>
                            <Input
                            name="password"
                            placeholder="Password"
                            className="inputclassname"
                            type="password"
                            value={formData.password}
                            onChange={this.handleChange}
                            />
                            <EyeInvisibleOutlined />
                         </Form.Item>
                      </Col>
                      <Link to="">Forgot Password</Link>
                    <Button>Sign UP</Button>
                    <p>Or Sign Up With</p>
                    
                    <GoogleOutlined />
                    <AppleOutlined />
                </Form>
                Don't have an account? <Link to="/vendon-register">Create Account</Link>
            </div>
        )
    }

}
export default LoginVendon