import { AppleOutlined, EyeInvisibleOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, Radio, Row } from "antd";
import React,  { Component } from "react";
import { Link } from "react-router-dom";



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
            <div>
                <Form>
                    <Row gutter={32}>
                      <Col span={8}>
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
                      </Col>
                      <Col span={8}>
                         <label>Company Email</label>
                         <Input
                          name="RetypePassword"
                           placeholder="Retype Password"
                           className="inputclassname" 
                           type="password"
                           value={formData.RetypePassword}
                           onChange={this.handleChange}
                           />
                             <EyeInvisibleOutlined />
                           <Radio onChange={this.changRadio}>
                         <p>At lastest 8 characters</p>
                         </Radio>
                         <Radio onChange={this.changRadio}>
                            <p>At lastest 1 number</p>
                         </Radio>
                         <Radio onChange={this.changRadio}>
                            <p>Contains both lower [a,z] and uper letter [A,Z]</p>
                         </Radio>
                         <Radio onChange={this.changRadio}>
                            <p>Match Password</p>
                         </Radio>
                      </Col>
                    </Row>
                    <Radio onChange={this.changRadio}>
                        <p>
                            I agree with the Teams and Privacy Policy 
                        </p>
                    </Radio>
                    <Button>Sign UP</Button>
                    <p>Or Sign Up With</p>
                    <GoogleOutlined />
                    <AppleOutlined />
                </Form>
                I have an account<Link to="">Login</Link>
            </div>
        )
    }

}
export default ResetPassword