import React, { useEffect, useState } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import { BackButton, PrimaryButton } from "../../../components/Button";
import { PasswordInput } from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import { isEmpty } from "../../../helpers/isEmpty";
import {
  hasDigit,
  hasLowerCase,
  hasUpperCase,
} from "../../../helpers/testForCase";
import useMakeReq from "../../hooks/Global/useMakeReq";
import BASE_URL from "../../../../../serivce/url.serice";
import { getFromLocalStorage } from "../../../helpers/localStorageMethods";
import { toast } from "react-toastify";

const ChangePassword = () => {
  // STATES
  const [formData, setFormData] = useState({
    emailAddress: "",
    password: "",
  });

  // DATA INITIALIZATION
  const {
    // loading,
    // data,
    makePostRequest,
    // error,
    // isSuccessful
  } = useMakeReq();

   // SIDE EFFECT
  // check if userId exists in the webStorageAPI
  useEffect(()=>{
    const uId = getFromLocalStorage("userId")
    if(!(isEmpty(uId))) {
      setFormData(prevState=>({
        ...prevState,
        userId: uId
      }))
    } else {
      toast.error("Your old password is incorrect")
      // navigate("/individual-register")
    }
  }, [])
  // HANDLERS
  const handleDisabledSubmitBtn = () => {
    const disable =
      isEmpty(formData.emailAddress) ||
      isEmpty(formData.password) ||
      !hasDigit(formData.password) ||
      !hasLowerCase(formData.password) ||
      !hasUpperCase(formData.password) ||
      formData.password.length < 8;

    return disable;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makePostRequest(`${BASE_URL}/api/User/ChangePassword`, formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <PageWrapper>
      <div className="w-full h-full flex flex-col p-5">
        {/* back button */}
        <BackButton />

        {/* title */}
        <div className="w-full my-5">
          <h3 className="text-2xl font-bold pb-3">Change Password</h3>
          <p className="text-[#645B75] w-[350px] text-sm font-normal">
            Enter your old password and new password to update your password.
          </p>
        </div>

        <form className="flex flex-col gap-5 w-full h-full">
          {/* label text */}
          <label className="flex flex-col gap-2 w-full">
            <span className="font-normal text-xs text-black">Old Password</span>

            {/* old password field */}
            <PasswordInput
              name={"password"}
              value={formData.password}
              onChange={handleChange}
              placeholderText={"Enter your old password"}
            />
          </label>
          {/* password container */}
          <label className="flex flex-col gap-2 w-full">
            {/* label text */}
            <span className="font-normal text-xs text-black">New Password</span>

            {/* new password field */}
            <PasswordInput
              name={"password"}
              value={formData.password}
              onChange={handleChange}
              placeholderText={"Enter your password"}
            />
          </label>

          {/*repeat new password container */}
          <label className="flex flex-col gap-2 w-full">
            {/* label text */}
            <span className="font-normal text-xs text-black">
              Repeat New Password
            </span>

            {/* input field */}
            <PasswordInput
              name={"password"}
              value={formData.password}
              onChange={handleChange}
              placeholderText={"Enter your password"}
            />
          </label>

          {/* password strength */}
          <div className="w-full flex flex-col gap-3 mt-2">
            {/* characters contained */}
            <label className="flex items-center gap-2 font-normal text-xs text-[#645B75]">
              <Checkbox disabled={true} value={formData.password.length >= 8} />
              Contains at least 8+ Characters
            </label>

            {/* digits contained */}
            <label className="flex items-center gap-2 font-normal text-xs text-[#645B75]">
              <Checkbox disabled={true} value={hasDigit(formData.password)} />
              Contains at least 1 number
            </label>

            {/* includes cases */}
            <label className="flex items-center gap-2 font-normal text-xs text-[#645B75]">
              <Checkbox
                disabled={true}
                value={
                  hasLowerCase(formData.password) &&
                  hasUpperCase(formData.password)
                }
              />
              Contains both lower (a-z) and upper case letters (A - Z)
            </label>

            {/* new password match */}
            <label className="flex items-center gap-2 font-normal text-xs text-[#645B75]">
              <Checkbox disabled={true} value={hasDigit(formData.password)} />
              New password match
            </label>
          </div>

          {/* button container */}
          <div className="flex w-full flex-col items-center mt-auto">
            {/* add user button */}
            <div className="w-full flex flex-col items-stretch">
              <PrimaryButton
              onClick={handleSubmit}
                text={"Update Password"}
                height="h-14"
                disabled={handleDisabledSubmitBtn()}
              />
            </div>
          </div>
        </form>
      </div>
    </PageWrapper>
  );
};

export default ChangePassword;
