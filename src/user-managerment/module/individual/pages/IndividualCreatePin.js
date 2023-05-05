import { useState, useEffect } from "react";
import VerificationInput from "react-verification-input";
import PageWrapper from "../../layouts/PageWrapper";
import { BackButton, PrimaryButton } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../../../serivce/url.serice";
import useMakeReq from "../../hooks/useMakeReq";
import { toast } from "react-toastify";
import { isEmpty } from "../../helpers/isEmpty";

const IndividualCreatePin = () => {
  // STATES
  const [pin, setPin] = useState("");
  const [isComplete, setIsComplete] = useState(false);

const [formData, setFormData] = useState({
    pin: "",
    userId: "",
})

  const { loading, data, makePostRequest, isSuccessful } = useMakeReq();

  // DATA INITIALIZATION
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    makePostRequest(`${BASE_URL}/api/User/AddPin`, formData);

    // if(pin===8567) {
    //     navigate("/individual-create-success")
    // }
    // navigate("/individual-create-success");
  };

  useEffect(() => {
    if(isSuccessful!==true && !(isEmpty(data))) {
        toast.error(data.message)
    }  else if(isSuccessful===true && !(isEmpty(data))) {
        toast.success(data.message)
        navigate("/individual-create-success");
    }
  })
  return (
    <PageWrapper>
      {/* container */}
      <div className="w-full h-full flex flex-col py-10 px-4 gap-10">
        {/* Back Button */}
        <BackButton />

        {/* caption */}
        <div className="w-full flex flex-col gap-2 text-center">
          <p className="text-black font-bold text-[22px]">Create your PIN</p>

          <p className="text-sm font-normal text-[#645B75]">
            Create a 4 digit PIN to further secure your account and access your
            account faster.
          </p>
        </div>

        {/* input */}
        <div className="w-full h-full flex flex-col gap-5 justify-between">
          {/* input container */}
          <div className="w-full flex justify-center">
            {/* verification input component */}
            <VerificationInput
              value={pin}
              onComplete={() => setIsComplete(true)}
              onChange={(inputCode) => setPin(inputCode)}
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
              disabled={!isComplete || pin.length < 4}
              onClick={handleSubmit}
              text={"Add Pin"}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default IndividualCreatePin;
