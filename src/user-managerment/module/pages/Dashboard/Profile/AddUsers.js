import React from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import { BackButton, PrimaryButton } from "../../../components/Button";
import { TextInput, TextLabelInput } from "../../../components/Input";

const AddUsers = () => {
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
            <TextInput name={"nameOfUser"} placeholderText={"Enter full name"} />
          </label>

          {/* email input container */}
          <label className="flex flex-col gap-2 w-full">
            {/* label text */}
            <span className="font-medium text-xs text-black">
              Email Address
            </span>

            {/* input field */}
            <TextInput name={"emailAddress"} placeholderText={"Enter email address"} />
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
            />
          </label>

          {/* button container */}
          <div className="flex w-full flex-col items-center mt-auto">
            {/* add user button */}
            <div className="w-full flex flex-col items-stretch">
              <PrimaryButton text={"Add User"} height="h-14" />
            </div>
          </div>
        </form>
      </div>
    </PageWrapper>
  );
};

export default AddUsers;
