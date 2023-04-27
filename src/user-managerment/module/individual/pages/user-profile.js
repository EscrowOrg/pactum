import React, { useState } from "react";
import PageWrapper from "../../layouts/PageWrapper";
import { TextInput } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/Button";
import PhoneINumberInput from "../../components/PhoneINumberInput";
import axios from "axios";
import BASE_URL from "../../../../serivce/url.serice";

const Profile = ()=>{

    // STATES
    const [formData, setFormData] = useState({
      fullName: "",
      userName: "",
      phoneNumber: "",
      address: "",
    })
  
  
    // DATA INITIALIZATION
    const navigate = useNavigate()
  
  
    // HANDLERS
    const  handleChange = (e)=>{
      const {name, value} = e.target;
        setFormData({
          ...formData,
          [name]: value
      })
    }
    const handleSubmit = async (e)=>{
      e.preventDefault()
      try {
        await axios.post(`${BASE_URL}`)
      } catch (error) {
        
      }
    }

  return(
    <PageWrapper>
      <div className="w-full h-full flex flex-col gap-8 px-4 py-10">

        {/* caption */}
        <div className="w-full flex flex-col gap-2">
          <p className="text-black font-bold text-2xl">
              Getting to know you.
          </p>

          <p className="text-sm font-normal text-[#645B75]">
              These information are necessary to get your account running effectively.
          </p>
        </div>

        {/* form */}
        <form
        className="flex flex-col gap-5 w-full h-full"
        onSubmit={handleSubmit}>

          {/* email input container */}
          <label className="flex flex-col gap-2 w-full">

            {/* label text */}
            <span className="font-normal text-xs text-black">
                Full Name
            </span>

            {/* input field */}
            <TextInput
            name={"fullName"}
            value={formData.fullName}
            onChange={handleChange}
            placeholderText={"Enter full name"} />
          </label>

          {/* company's size container */}
          <label className="flex flex-col gap-2 w-full">

            {/* label text */}
            <span
            className="font-normal text-xs text-black">
                Username
            </span>

            {/* input field */}
            <TextInput
            name={"userName"}
            value={formData.userName}
            onChange={handleChange}
            placeholderText={"Enter username"} />
          </label>

          {/* Phone number container */}
          <label className="flex flex-col gap-2 w-full">

            {/* label text */}
            <span
            className="font-normal text-xs text-black">
                Phone Number
            </span>

            {/* input field */}
            <PhoneINumberInput />
          </label>

          {/* company's physical address (optional) container */}
          <label className="flex flex-col gap-2 w-full">

            {/* label text */}
            <span
            className="font-normal text-xs text-black">
                Company Physical Address (Optional)
            </span>

            {/* input field */}
            <TextInput
            name={"address"}
            value={formData.address}
            onChange={handleChange}
            placeholderText={"Enter address"} />
          </label>

          {/* container */}
          <div className="flex w-full flex-col mt-auto items-center">

            {/* continue button */}
            <div className='w-full flex flex-col items-stretch'>
                <PrimaryButton
                onClick={()=>navigate("/individual-more-info")}
                disabled={!(formData.fullName && formData.userName && formData.address)}
                text={"Continue"} />
            </div>
          </div>
        </form>
      </div>
    </PageWrapper>
  )
}
export default Profile;


