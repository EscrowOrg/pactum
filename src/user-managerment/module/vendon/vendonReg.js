import { AppleOutlined, EyeInvisibleOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button,  Col, Form, Input, Radio, } from "antd";
import React,  { Component } from "react";
import { Link } from "react-router-dom";
import "../index.scss"



class RegistrationVendon extends Component{
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
            <div className="registration-vendon">
                <Form className="inpup-form" >
                  <Col span={8} className="col-row-size">
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
                         <Radio onChange={this.changRadio}>
                         <p>At lastest 8 characters</p>
                         </Radio>
                         <br />
                         <Radio onChange={this.changRadio}>
                            <p>At lastest 1 number</p>
                         </Radio>
                         <br />
                         <Radio onChange={this.changRadio}>
                            <p>Contains both lower [a,z] and uper letter [A,Z]</p>
                         </Radio>
                        </Form.Item>
                      </Col>
                    <Form.Item>
                    <Radio onChange={this.changRadio}>
                        <p>
                            I agree with the Teams and Privacy Policy 
                        </p>
                    </Radio>
                    </Form.Item>
                    <Button>Sign UP</Button>
                    <p>Or Sign Up With</p>
                    <GoogleOutlined />
                    <AppleOutlined />
                    <br/>
                    I have an account? <Link to="/loginVendon">Login</Link>
                </Form>
            </div>
        )
    }

}
export default RegistrationVendon