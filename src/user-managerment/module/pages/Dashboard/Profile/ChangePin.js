import React, { useState } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import { BackButton, PrimaryButton } from "../../../components/Button";
import VerificationInput from "react-verification-input";
import { useNavigate } from "react-router-dom";

const ChangePin = () => {
  const navigate = useNavigate();

  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState("");

  // const handleSubmit = () => {
  //   navigate("/vendor-create-success");
  // };
  return (
    <PageWrapper>
      <div className="w-full h-full flex flex-col py-10 px-4 gap-10">
        <BackButton />

        {/* caption */}
        <div className="w-full flex flex-col gap-2 text-center">
          <p className="text-black font-bold text-[22px]">Change PIN</p>

          <p className="text-sm font-normal text-[#645B75]">
            Enter your old PIN.
          </p>
        </div>

        {/* input */}
        <div className="w-full h-full flex flex-col gap-5 justify-between">
          {/* input container */}
          <div className="w-full flex justify-center">
            {/* verification input component */}
            <VerificationInput
              value={formData.pin}
              onComplete={() => setIsComplete(true)}
              onChange={(inputCode) => setFormData(inputCode)}
              length={4}
              validChars="0-9"
              autoFocus={true}
              placeholder=""
              classNames={{
                container: "w-full flex items-center gap-3",
                character:
                  "w-[56px] h-[56px] inline-flex items-center justify-center rounded-xl border border-[#DAD7E0] bg-[#FAFAFB] font-bold text-[22px]",
                characterInactive: "text-[#141217] font-bold text-[22px]",
                characterSelected: "border-[#3A0CA3] border text-[#3A0CA3]",
              }}
            />
          </div>

          {/* Sign up button */}
          <div className="w-full flex flex-col items-stretch">
            {/* button */}
            <PrimaryButton
              // loading={loading}
              disabled={!isComplete || formData.length < 4}
              // onClick={handleSubmit}
              text={"Continue"}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ChangePin;
