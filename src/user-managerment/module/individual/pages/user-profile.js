import React, { useEffect, useState } from "react";
import PageWrapper from "../../layouts/PageWrapper";
import { TextInput } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/Button";
import PhoneINumberInput from "../../components/PhoneINumberInput";
import BASE_URL from "../../../../serivce/url.serice";
import { getFromLocalStorage } from "../../helpers/localStorageMethods";
import useMakeReq from "../../hooks/useMakeReq";
import { toast } from "react-toastify";
import { isEmpty } from "../../helpers/isEmpty";

const Profile = ()=>{

    // STATES
    const [formData, setFormData] = useState({
      userId: "",
      fullName: "",
      userName: "",
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
        `${BASE_URL}/api/User/CompleteRegistration`, 
        {
          completeRegistration: {
            userId: formData.userId,
            fullName: formData.fullName,
            userName: formData.userName,
            phoneNumber: formData.phoneNumber,
            address: formData.address
          }
        }, 
      );
    }


    // SIDE EFFECTS
    useEffect(()=>{
      const uId = getFromLocalStorage("userId")
      if(!(isEmpty(uId))) {
        setFormData(prevState=>({
          ...prevState,
          userId: uId
        }))
      } else {
        toast.error("You have to sign up first!")
        navigate("/individual-register")
      }
    }, [])

    useEffect(()=>{
      if(isSuccessful!==true && !(isEmpty(data))) {
          toast.error(data.message)
      } else if(isSuccessful===true && !(isEmpty(data))) {
          toast.success(data.message)
          navigate("/individual-create-p", { replace: true })
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

          {/* fullname input container */}
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
                Address (Optional)
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
                loading={loading}
                type="submit"
                disabled={loading || !(formData.fullName && formData.userName && formData.phoneNumber)}
                text={"Continue"} />
            </div>
          </div>
        </form>
      </div>
    </PageWrapper>
  )
}
export default Profile;


