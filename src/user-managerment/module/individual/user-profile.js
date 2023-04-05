import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { Button,  Col, Form, Input,  Space, } from "antd";
import { PhoneFilled, SettingOutlined } from "@ant-design/icons";
import "./logis.scss"

//const {Option} = Select;


// const slectedItme = (
//     <Select defaultValue="+234">
//     <Option></Option>
//   </Select>
// );

const Profile = ()=>{
    const [formData, setFormData] = useState({
        firstName: "",
        userName: "",
        address: "",
        phoneNumber: ""
})
const  handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value

    })
}
// const changRadio = (e)=>{
//      setFormData({
//         ...formData,
//         action: e.target.value

//      })
// }



 return(
    <div className="profile-form">
        <div className="profile-text">
            <div className="head">

            </div>
        </div>
        <Form className="inpup-form" >
              <Col span={8} className="col-row-size">
                  <Form.Item>
                     <label>First Name</label>
                     <Input
                      name="firstName"
                       placeholder="Enter First Name"
                       className="inputclassname" 
                       type="text"
                       value={formData.firstName}
                       onChange={handleChange}
                       />
                    </Form.Item>
                 </Col>
                  
                  <Col span={8}>
                    <Form.Item>
                    <label>UserName</label>
                     <Input
                       name="userName"
                       placeholder="Enter your userName"
                       className="inputclassname"
                       type="text"
                       value={formData.userName}
                       onChange={handleChange}
                     />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item>
                    <label>Address</label>
                     <Input
                       name="userName"
                       placeholder="Enter your Address"
                       className="inputclassname"
                       type="text"
                       value={formData.address}
                       onChange={handleChange}
                     />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item>
                        <label>Phone Number</label>
                        <Space>
                        <Input addonAfter={<SettingOutlined />} defaultValue="+234" />
                         <Input
                          addonAfter={
                            <PhoneFilled
                              placeholder="Enter your phone number"
                              style={{
                                width: 150,
                              }}
                              defaultValue="+234"
                            />
                          }
                          value={formData.phoneNumber}
                          name="phoneNumber"
                          onChange={handleChange}
                         />
                        </Space>
                    </Form.Item>
                  </Col>
                 <div className="sign-up">
                  <Button>Sign UP</Button>
                 </div>
            </Form>
           
    </div>
 )
}
export default Profile;


