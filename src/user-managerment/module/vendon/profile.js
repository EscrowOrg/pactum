import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { COMPLETE_VENDOR_REGISTRATION } from "../../../serivce/apiRoutes.service";
import { PrimaryButton } from "../components/Button";
import { TextInput } from "../components/Input";
import PhoneINumberInput from "../components/PhoneINumberInput";
import { isEmpty } from "../helpers/isEmpty";
import { deleteItemFromLocalStorage, getFromLocalStorage } from "../helpers/localStorageMethods";
import useMakeReq from "../hooks/Global/useMakeReq";
import PageWrapper from "../layouts/PageWrapper";

const ProfileVendon = ()=>{

  // STATES
  const [formData, setFormData] = useState({
    userId: "",
    userName: "",
    companyName: "",
    companySize: "",
    phoneNumber: "",
    address: "",
  })


  // DATA INITIALIZATION
  const navigate = useNavigate()
  const {
    loading,
    data,
    makePostRequest,
    isSuccessful
} = useMakeReq()


  // HANDLERS
  const  handleChange = (e)=>{
    const {name, value} = e.target;
      setFormData({
        ...formData,
        [name]: value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    makePostRequest(
      COMPLETE_VENDOR_REGISTRATION, 
      {
        completeVendorRegistration: {
          userId: formData.userId,
          userName: formData.userName,
          companyName: formData.companyName,
          companySize: formData.companySize,
          phoneNumber: formData.phoneNumber,
          address: formData.address
        }
      }, 
    );
  }

    // SIDE EFFECTS
    useEffect(()=>{
      const uId = getFromLocalStorage("vendorUserId")
      if(!(isEmpty(uId))) {
        setFormData(prevState=>({
          ...prevState,
          userId: uId
        }))
      } else {
        toast.error("You have to sign up first!")
        navigate("/vendon-register")
      }
    }, [])

    useEffect(()=>{
      if(isSuccessful!==true && !(isEmpty(data))) {
          toast.error(data.message)
      } else if(isSuccessful===true && !(isEmpty(data))) {
          toast.success(data.message)
          deleteItemFromLocalStorage("vendorUserId")
          navigate("/vendor-create-p", { replace: true })
      }
  }, [data, isSuccessful])

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

          {/* username container */}
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

          {/* email input container */}
          <label className="flex flex-col gap-2 w-full">

            {/* label text */}
            <span className="font-normal text-xs text-black">
                Company Name
            </span>

            {/* input field */}
            <TextInput
            name={"companyName"}
            value={formData.companyName}
            onChange={handleChange}
            placeholderText={"Enter company name"} />
          </label>

          {/* company's size container */}
          <label className="flex flex-col gap-2 w-full">

            {/* label text */}
            <span
            className="font-normal text-xs text-black">
                Company Size
            </span>

            {/* input field */}
            <TextInput
            name={"companySize"}
            type="number"
            value={formData.companySize}
            onChange={handleChange}
            placeholderText={"Enter company size"} />
          </label>

          {/* Phone number container */}
          <label className="flex flex-col gap-2 w-full">

            {/* label text */}
            <span
            className="font-normal text-xs text-black">
                Phone Number
            </span>

            {/* input field */}
            <PhoneINumberInput
            value={formData.phoneNumber}
            onChange={(e)=>setFormData(prevState=>({...prevState, phoneNumber: e}))} />
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

            {/* signup button */}
            <div className='w-full flex flex-col items-stretch'>
                <PrimaryButton
                loading={loading}
                type="submit"
                disabled={loading || !(formData.userName && formData.companyName && formData.companySize && formData.phoneNumber)}
                text={"Continue"} />
            </div>
          </div>
        </form>
      </div>
    </PageWrapper>
  )
}
export default ProfileVendon;


