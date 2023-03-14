import { AppleOutlined, EyeInvisibleOutlined, GoogleOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, Radio, Row, Typography } from "antd";
import React,  { Component } from "react";
import { Link } from "react-router-dom";


const {Title} = Typography

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
            <div>
                <Title>Enter your email address to receive a link via mail to setup a new passwords</Title>
                <Form>
                    <Row gutter={32}>
                      <Col span={8}>
                         <label>Email Address</label>
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
                    <Button>Send Code</Button>
                </Form>
            </div>
        )
    }

}
export default ForgotPassword