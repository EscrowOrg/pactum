import React, { useEffect, useState } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import { BackButton, PrimaryButton } from "../../../components/Button";
import { PasswordInput, TextInput, TextLabelInput } from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import { getUserData } from "../../../../../serivce/cookie.service";
import BASE_URL from "../../../../../serivce/url.serice";
import { toast } from "react-toastify";
import { getFromLocalStorage } from "../../../helpers/localStorageMethods";
import { isEmpty } from "../../../helpers/isEmpty";

const AddUser = () => {

const navigate = useNavigate();

const [createVendorUserRequest, setcreateVendorUserRequest] = useState({
  userName: "",
  email: "",
  amount: "",
  phoneNumber: "",
  address: "",
  password: ""
});

useEffect(()=>{
  if(isSuccessful === true && data){
    toast.success(
      data.message || "Successfully Created Bank"
    );
    navigate("profile/add-bank/:list");
  }else if (isSuccessful === false && data){
    toast.error(data.message || "Error creating a bank details")
  }
},[])

useEffect(() => {
  const userId = getFromLocalStorage("userId");
  if (!isEmpty(userId)) {
    toast.error("Complete your registration!");
    navigate("/individual-profile");
  }
}, []);
const {data, makePostRequest, isSuccessful} = useMakeReq();
const{vendorId} = getUserData();
 const handleSubmit = async (e) =>{
  e.preventDefault();
  try {
      await makePostRequest(`${BASE_URL}/api/Vendor/CreateVendorUsers`,{
      createVendorUserRequest: {
         vendorId: vendorId,
         userName: createVendorUserRequest.userName,
         email: createVendorUserRequest.email,
         phoneNumber: createVendorUserRequest.phoneNumber,
         password: createVendorUserRequest.password,
         address: createVendorUserRequest.address
      }
    })
    setcreateVendorUserRequest({})
  } catch (error) {
    setcreateVendorUserRequest({error})
  }
 }

 const handleChange = (e) => {
  const { name, value } = e.target;
  setcreateVendorUserRequest({
    ...createVendorUserRequest,
    [name]: value,
  });
};
  return (
    <PageWrapper>
      <div className="w-full h-full flex flex-col p-5">
        {/* back button */}
        <BackButton />

        {/* title */}
        <div className="my-5 w-full ">
          <h3 className="text-2xl font-bold pb-3">Add User</h3>
          <p className="text-[#645B75] w-[350px] text-sm font-normal">
            Provide information of the user you want to invite and add.
          </p>
        </div>

        <form className="flex flex-col gap-5 w-full h-full">
          {/* name input container */}
          <label className="flex flex-col gap-2 w-full">
            {/* label text */}
            <span className="font-medium text-xs text-black">Name of User</span>

            {/* input field */}
            <TextInput name={"userName"} value={createVendorUserRequest.userName} placeholderText={"Enter full name"} onChange={handleChange} />
          </label>

          {/* email input container */}
          <label className="flex flex-col gap-2 w-full">
            {/* label text */}
            <span className="font-medium text-xs text-black">
              Email Address
            </span>

            {/* input field */}
            <TextInput name={"email"} placeholderText={"Enter email address"} onChange={handleChange} value={createVendorUserRequest.email} />
          </label>

          {/* transacion limit input container */}
          <label className="flex flex-col gap-2 w-full">
            {/* label text */}
            <span className="font-medium text-xs text-black">
              Transaction Limit
            </span>

            {/* input field */}
            <TextLabelInput
            name={"amount"}
              label={"USDT"}
              type="number"
              placeholderText={"Enter amount"}
              onChange={handleChange}
            />

          </label>
          <label className="flex flex-col gap-2 w-full">
             <span className="font-medium text-xs text-black">
                Address
             </span>

             <TextInput
               name={"address"}
               placeholderText={"Enter Address"}
               onChange={handleChange}
               value={createVendorUserRequest.address}
             />
          </label>
          <label className="flex flex-col gap-2 w-full" >
                <span className="font-medium text-xs text-black">
                     Phone Number
                </span>

                <TextLabelInput
                 name={"phoneNumber"}
                 type="number"
                 placeholderText={"Enter phone number"}
                 onChange={handleChange}
                 value={createVendorUserRequest.phoneNumber}
                />
          </label>
           <label className="flex flex-col gap-2 w-full">
               <span className="font-medium text-xs text-black">
                  Password
               </span>
               <PasswordInput
                 name={"password"}
                 value={createVendorUserRequest.password}
                 placeholderText={"Enter password"}
                 onChange={handleChange}
               />
           </label>
          {/* button container */}
          <div className="flex w-full flex-col items-center mt-auto">
            {/* add user button */}
            <div className="w-full flex flex-col items-stretch">
              <PrimaryButton text={"Add User"} height="h-14" onClick={handleSubmit} />
            </div>
          </div>
        </form>
      </div>
    </PageWrapper>
  );
};

export default AddUser;
