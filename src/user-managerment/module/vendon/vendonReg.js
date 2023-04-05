import { AppleOutlined,  GoogleOutlined } from "@ant-design/icons";
import { Button,  Col, Form, Input, Radio, } from "antd";
import React,  {  useState } from "react";
import { Link } from "react-router-dom";
import "./vendon.scss"



const RegistrationVendon = ()=>{
    const [formData, setFormData] = useState({
            companyEmail: "",
            password: "",
            action: ""
    })
   const  handleChange = (e)=>{
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
                       value={formData.password}
                       onChange={handleChange}
                     />
                        <Radio.Group onChange={changRadio} className="radio-form1">
                                <Radio>
                                <p>At lastest 8 characters</p>
                                </Radio>
                                <Radio value={1}>
                                <p>At lastest 1 number</p>
                                </Radio>
                                <Radio value={2}>
                                    <p>Contains both lower [a,z] and uper letter [A,Z]</p>
                                </Radio>
                        </Radio.Group>
                    </Form.Item>
                  </Col>
                 <div className="radio-form2">
                    <Radio onChange={changRadio}>
                        <p>
                            I agree with the Teams and Privacy Policy 
                        </p>
                    </Radio>
                 </div>
                 <div className="sign-up">
                  <Button>Sign UP</Button>
                 </div>
                 <div className="socals">
                    <p>Or Sign Up With</p>
                    <GoogleOutlined  className="google"/>
                    <AppleOutlined className="app" />
                 </div>
            </Form>
            <div className="login">
              I have an account? <Link to="/loginIndividual">Login</Link>
            </div>
        </div>
    )
}
export default RegistrationVendon

