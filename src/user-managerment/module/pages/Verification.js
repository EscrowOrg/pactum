import { useState } from "react";
import VerificationInput from "react-verification-input";
import PageWrapper from "../layouts/PageWrapper";
import { BackButton, PrimaryButton } from "../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../../serivce/url.serice";

const Verification = () => {

    // STATES
    const [verificationCode, setVerificationCode] = useState("")
    const [isComplete, setIsComplete] = useState(false)

    // DATA INITIALIZATION
    const navigate = useNavigate()

    const verified = async(e) =>{
        e.preventDefault()
        try {
            await axios.post(`${BASE_URL}`)
            navigate("/reset-password")       
         } catch (error) {
            
        }
     }

    return (
        <PageWrapper>
            
            {/* container */}
            <div className="w-full h-full flex flex-col py-10 px-4 gap-10">

                {/* Back Button */}
                <BackButton />

                {/* caption */}
                <div className="w-full flex flex-col gap-2 text-center">
                    <p className="text-black font-bold text-[22px]">
                        Enter verification code
                    </p>

                    <p className="text-sm font-normal text-[#645B75]">
                        Please enter the 4 digit code we sent to your email <span className="font-semibold text-sm text-[#141217]">admin@pactum.app</span>
                    </p>
                </div>

                {/* input */}
                <div className="w-full h-full flex flex-col gap-5 justify-between">

                    {/* input container */}
                    <div
                    className="w-full flex flex-col items-center gap-6">

                        {/* verification input component */}
                        <VerificationInput
                        value={verificationCode}
                        onComplete={()=>setIsComplete(true)}
                        onChange={(inputCode)=>setVerificationCode(inputCode)}
                        length={4}
                        validChars="0-9"
                        autoFocus={true}
                        placeholder=""
                        classNames={{
                            container: "w-full flex items-center gap-3",
                            character: "w-[56px] h-[56px] inline-flex items-center justify-center rounded-xl border border-[#DAD7E0] bg-[#FAFAFB] font-bold text-[22px]",
                            characterInactive: "text-[#141217] font-bold text-[22px]",
                            characterSelected: "border-[#3A0CA3] border text-[#3A0CA3]",
                        }} />

                        {/* resend text */}
                        <p className="text-sm font-normal text-[#141217]">
                            Resend code <span className="font-bold text-[#3A0CA3]">00:58</span>
                        </p>
                    </div>

                    {/* Sign up button */}
                    <div className='w-full flex flex-col items-stretch'>

                        {/* button */}
                        <PrimaryButton
                        disabled={!isComplete || verificationCode.length<4}
                        onClick={verified}
                        text={"Sign up"} />
                    </div>

                </div>
            </div>
        </PageWrapper>
    )
}

export default Verification