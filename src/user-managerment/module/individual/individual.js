import { AppleOutlined, EyeInvisibleOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button,  Col, Form, Input, Radio} from "antd";
import React,  { Component } from "react";
import { Link } from "react-router-dom";
import "../index.scss"


class RegistrationIndividual extends Component{

    state = {
        formData: {
            emailAddress: "",
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
                  <Col span={8}>
                    <Form.Item>
                    <label>Email Address</label>
                      <Input
                         name="emailAddress"
                         placeholder="Email Address"
                         className="inputclassname" 
                          type="email"
                         value={formData.emailAddress}
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
                         />
                         <EyeInvisibleOutlined />
                         <Radio>
                            <p>At lastest 8 characters</p>
                         </Radio>
                         <Radio>
                            <p>At lastest 1 number</p>
                         </Radio>
                         <Radio>
                            <p>Contains both lower [a,z] and uper letter [A,Z]</p>
                         </Radio>
                      </Form.Item>
                      </Col>
                    <Radio>
                        <p>
                            I agree with the Teams and Privacy Policy 
                        </p>
                    </Radio>
                    <Button>Sign UP</Button>
                    <p>Or Sign Up With</p>
                    <GoogleOutlined />
                    <AppleOutlined />
                </Form>
                I have an account?<Link to="">Login</Link>
            </div>
        )
    }

}
export default RegistrationIndividual