import React from 'react'
import PageWrapper from '../../../layouts/PageWrapper'
import { BackButton, PrimaryButton } from '../../../components/Button'
import { TextInput, TextLabelInput } from '../../../components/Input'
import { useNavigate } from 'react-router-dom'

const AddBanks = () => {
  const navigate = useNavigate()
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
            <TextInput name={"nameOfBank"} placeholderText={"Enter bank name"} />
          </label>

          {/* email input container */}
          <label className="flex flex-col gap-2 w-full">
            {/* label text */}
            <span className="font-medium text-xs text-black">
             Account Number
            </span>

            {/* input field */}
            <TextInput type='number' name={"accountNumber"} placeholderText={"Enter bank account number"} />
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
            />
          </label>

          {/* button container */}
          <div className="flex w-full flex-col items-center mt-auto">
            {/* add user button */}
            <div className="w-full flex flex-col items-stretch">
              <PrimaryButton text={"Add Bank"} height="h-14" onClick={(() =>navigate("/profile/add-bank/:list"))} />
            </div>
          </div>
        </form>
      </div>
    </PageWrapper>
  )
}

export default AddBanks