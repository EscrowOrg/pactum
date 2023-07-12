import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AUTH_CHANGE_PASSWORD } from "../../../../../serivce/apiRoutes.service";
import { getUserData } from "../../../../../serivce/cookie.service";
import { BackButton, PrimaryButton } from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import { PasswordInput } from "../../../components/Input";
import { isEmpty } from "../../../helpers/isEmpty";
import { getFromLocalStorage } from "../../../helpers/localStorageMethods";
import {
  hasDigit,
  hasLowerCase,
  hasUpperCase,
} from "../../../helpers/testForCase";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import PageWrapper from "../../../layouts/PageWrapper";

const ChangePassword = () => {
  const navigate = useNavigate();

  // get userId
  const { userId, token } = getUserData();
  // console.log(userId, token)

  // STATES
  const [changePasswordRequests, setChangePasswordRequest] = useState({
    emailAddress: "",
    password: "",
    userId: "",
    token: "",
    newPassword: "",
    repeatPassword: "",
  });

  // DATA INITIALIZATION
  const { data, makeAuthPostReq, isSuccessful } = useMakeReq();

  // SIDE EFFECT
  useEffect(() => {
    if (isSuccessful === true && data) {
      toast.success(
        data.message || "Your password has been changed successfully!"
      );
      navigate("loginIndividual");
    } else if (isSuccessful === false && data) {
      toast.error(data.message || "Old Password is incorrect. Try again!");
      // saveToLocalStorage("userId", data.data)
    }
  }, []);

  useEffect(() => {
    const userId = getFromLocalStorage("userId");
    if (!isEmpty(userId)) {
      toast.error("Complete your registration!");
      navigate("/individual-profile");
    }
  }, []);

  // HANDLERS
  const handleDisabledSubmitBtn = () => {
    const disable =
      isEmpty(changePasswordRequests.newPassword) ||
      isEmpty(changePasswordRequests.newPassword) ||
      !hasDigit(changePasswordRequests.newPassword) ||
      !hasLowerCase(changePasswordRequests.newPassword) ||
      !hasUpperCase(changePasswordRequests.newPassword) ||
      changePasswordRequests.password.length < 8;

    return disable;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makeAuthPostReq(`${AUTH_CHANGE_PASSWORD}`, {
      changePasswordRequests: {
        userId: userId,
        token: token,
        newPassword: changePasswordRequests.newPassword,
      },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChangePasswordRequest({
      ...changePasswordRequests,
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
              value={changePasswordRequests.password}
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
              name={"newPassword"}
              value={changePasswordRequests.newPassword}
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
              name={"repeatPassword"}
              value={changePasswordRequests.repeatPassword}
              onChange={handleChange}
              placeholderText={"Enter your password"}
            />
          </label>

          {/* password strength */}
          <div className="w-full flex flex-col gap-3 mt-2">
            {/* characters contained */}
            <label className="flex items-center gap-2 font-normal text-xs text-[#645B75]">
              <Checkbox
                disabled={true}
                value={changePasswordRequests.newPassword?.length >= 8}
              />
              Contains at least 8+ Characters
            </label>

            {/* digits contained */}
            <label className="flex items-center gap-2 font-normal text-xs text-[#645B75]">
              <Checkbox
                disabled={true}
                value={hasDigit(changePasswordRequests.newPassword)}
              />
              Contains at least 1 number
            </label>

            {/* includes cases */}
            <label className="flex items-center gap-2 font-normal text-xs text-[#645B75]">
              <Checkbox
                disabled={true}
                value={
                  hasLowerCase(changePasswordRequests.newPassword) &&
                  hasUpperCase(changePasswordRequests.newPassword)
                }
              />
              Contains both lower (a-z) and upper case letters (A - Z)
            </label>

            {/* new password match */}
            <label className="flex items-center gap-2 font-normal text-xs text-[#645B75]">
              <Checkbox
                disabled={true}
                value={hasDigit(changePasswordRequests.newPassword)}
              />
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
