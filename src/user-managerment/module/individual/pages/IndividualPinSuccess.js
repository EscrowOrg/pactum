import React from "react";
import PageWrapper from "../../layouts/PageWrapper";
import { PrimaryButton, SecondaryButton } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../../../serivce/url.serice";

const IndividualPinSuccess = () => {
  // DATA INITIALIZATION
  const navigate = useNavigate();
  const getMessages = async (e) => {
    try {
      await axios.get(`${BASE_URL}`);
    } catch (error) {}
  };
  return (
    <PageWrapper>
      <div className="w-full h-full flex flex-col gap-10 px-4 py-10 justify-between">
        {/* message */}
        <div className="flex flex-col w-full items-center gap-4 px-6 mt-16">
          {/* icon */}
          <img
            alt=""
            src="/images/onboarding/vendor-pin-success.png"
            className="w-[190px]"
          />

          {/* title */}
          <p className="text-[22px] text-black font-bold text-center">
            Awesome! Your account is now set up.
          </p>

          {/* message */}
          <p className="text-sm font-normal text-[#645B75] text-center">
            Verify your account to avoid transaction limits.
          </p>
        </div>

        {/* button */}
        <div className="w-full flex flex-col items-stretch gap-6">
          <PrimaryButton text={"Verify Identity"} onSubmit={getMessages} />
          <SecondaryButton
            text={"Skip for Later"}
            onClick={() => navigate("/loginIndividual")}
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default IndividualPinSuccess;
