import { useState, useEffect } from "react";
import VerificationInput from "react-verification-input";
import PageWrapper from "../../layouts/PageWrapper";
import { BackButton, PrimaryButton } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../../../serivce/url.serice";
import useMakeReq from "../../hooks/useMakeReq";
import { toast } from "react-toastify";
import { isEmpty } from "../../helpers/isEmpty";
import { deleteItemFromLocalStorage, getFromLocalStorage } from "../../helpers/localStorageMethods";

const IndividualCreatePin = () => {

  // STATES
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState({
      pin: "",
      userId: "",
  })


  // DATA INITIALIZATION
  const { 
    loading, 
    data, 
    makePostRequest, 
    error,
    isSuccessful 
  } = useMakeReq();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    makePostRequest(`${BASE_URL}/api/User/AddPin`, formData);
  };


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
      toast.error("You have to sign up first!")
      navigate("/individual-register")
    }
  }, [])

  // check if request for successful
  useEffect(() => {
      if(isSuccessful!==true && !(isEmpty(data))) {
          toast.error(data.message)
      }  else if(isSuccessful===true && !(isEmpty(data))) {
          toast.success(data.message)
          deleteItemFromLocalStorage("userId")
          navigate("/individual-create-success", { replace: true });
      }
  }, [data, isSuccessful])

  // check for error message
  useEffect(()=>{
    if(error) {
      toast.error(error)
    }
  }, [error])

  return (
    <PageWrapper>

      {/* container */}
      <div className="w-full h-full flex flex-col py-5 px-4 gap-10">

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
              value={formData.pin}
              onComplete={() => setIsComplete(true)}
              onChange={(inputCode) =>{ 
                setFormData((prevState)=>({
                  ...prevState, 
                  pin: inputCode
                }))
              }}
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
            loading={loading}
            disabled={!isComplete || formData.pin.length < 4 || loading}
            onClick={handleSubmit}
            text={"Add Pin"} />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default IndividualCreatePin;
