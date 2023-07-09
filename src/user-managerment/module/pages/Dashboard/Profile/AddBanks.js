import React, { useEffect, useState } from 'react'
import PageWrapper from '../../../layouts/PageWrapper'
import { BackButton, PrimaryButton } from '../../../components/Button'
import { TextInput, TextLabelInput } from '../../../components/Input'
import { useNavigate } from 'react-router-dom'
import { getUserData } from '../../../../../serivce/cookie.service'
import useMakeReq from '../../../hooks/Global/useMakeReq'
import BASE_URL from '../../../../../serivce/url.serice'
import { toast } from 'react-toastify'
import { getFromLocalStorage } from '../../../helpers/localStorageMethods'
import { isEmpty } from '../../../helpers/isEmpty'

const AddBanks = () => {
  const navigate = useNavigate()

  // {(() =>navigate("/profile/add-bank/:list"))}
  const {userId} = getUserData();
  const [addBank, setAddBanks] = useState({
    bankName: "",
    accountNumber: "",
    accountName: "",
    fiatCurrency: 1
  });

  const {data, makePostRequest, isSuccessful} = useMakeReq()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddBanks({
      ...addBank,
      [name]: value,
    });
  };
  
useEffect(()=>{
  if(isSuccessful === true && data){
    toast.success(
      data.message || "Bank Details successfully added!"
    );
    navigate("/profile/list-bank");
  }else if (isSuccessful === false && data){
    toast.error(data.message || "Error creating a bank details")
  }
},[isSuccessful, data])


  const handleSubmit = async(e)=>{
    e.preventDefault();
    
    try {
      await makePostRequest(`${BASE_URL}/api/User/CreateBank`,{
        userId: userId,
        accountName: addBank.accountName,
        accountNumber: addBank.accountNumber,
        bankName: addBank.bankName,
        fiatCurrency: addBank.fiatCurrency,         
      })
      setAddBanks({})
    } catch (error) {
      setAddBanks(error)
    }
    
   
  }
  return (
    <PageWrapper>
           <div className="w-full h-full flex flex-col p-5">
        {/* back button */}
        <BackButton />

        {/* title */}
        <div className="my-5 w-full ">
          <h3 className="text-2xl font-bold pb-3">Add Bank</h3>
          <p className="text-[#645B75] w-[380px] text-sm font-normal">
          Enter your accurate bank details that buyers can pay into.
          </p>
        </div>

        <form className="flex flex-col gap-5 w-full h-full">
          {/* name input container */}
          <label className="flex flex-col gap-2 w-full">
            {/* label text */}
            <span className="font-medium text-xs text-black">Bank Name</span>

            {/* input field */}
            <TextInput name={"bankName"} placeholderText={"Enter bank name"} onChange={handleChange} />
          </label>

          {/* email input container */}
          <label className="flex flex-col gap-2 w-full">
            {/* label text */}
            <span className="font-medium text-xs text-black">
             Account Number
            </span>

            {/* input field */}
            <TextInput type='number' name={"accountNumber"} placeholderText={"Enter bank account number"} onChange={handleChange} />
          </label>

          {/* transacion limit input container */}
          <label className="flex flex-col gap-2 w-full">
            {/* label text */}
            <span className="font-medium text-xs text-black">
             Account Name
            </span>

            {/* input field */}
            <TextLabelInput
            name={"accountName"}
            //   label={"USDT"}
              type="type"
              placeholderText={"Enter bank account name"}
              onChange={handleChange}

            />
          </label>

          {/* button container */}
          <div className="flex w-full flex-col items-center mt-auto">
            {/* add user button */}
            <div className="w-full flex flex-col items-stretch">
              <PrimaryButton text={"Add Bank"} height="h-14" onClick={handleSubmit} />
            </div>
          </div>
        </form>
      </div>
    </PageWrapper>
  )
}

export default AddBanks