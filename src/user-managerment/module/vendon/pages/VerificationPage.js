import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import VerificationInput from "react-verification-input";
import { GENERATE_EMAIL_TOKEN, VERIFY_EMAIL_TOKEN } from "../../../../serivce/apiRoutes.service";
import { PrimaryButton, SkipButtonVendor } from "../../components/Button";
import LoadingSpinner from "../../components/Global/LoadingSpinner";
import { isEmpty } from "../../helpers/isEmpty";
import { deleteItemFromLocalStorage, getFromLocalStorage } from "../../helpers/localStorageMethods";
import useMakeReq from "../../hooks/Global/useMakeReq";
import PageWrapper from "../../layouts/PageWrapper";

const VendorVerificationPage = () => {

    // STATES
    const [verificationCode, setVerificationCode] = useState("")
    const [isComplete, setIsComplete] = useState(false)

    // DATA INITIALIZATION
    const navigate = useNavigate()
    const vendorEmail = getFromLocalStorage("vendorEmail")
    const vendorId = getFromLocalStorage("vendorUserId")
    const {
        loading: generateTokenLoading,
        data: generateTokenData,
        makePostRequest: generateToken,
        isSuccessful: isGenerateTokenSuccessful
    } = useMakeReq()
    const {
        loading: verifyTokenLoading,
        data: verifyTokenData,
        makePostRequest: verifyToken,
        isSuccessful: isVerifyTokenSuccessful
    } = useMakeReq()

    // HANDLERS 
    const handleVerifyToken = () =>{
        verifyToken(
            VERIFY_EMAIL_TOKEN, 
            {
                code: verificationCode,
                email: vendorEmail 
            }, 
        );
    }

    // SIDE EFFECTS
    useEffect(()=>{
        generateToken(
            GENERATE_EMAIL_TOKEN, 
            {
                userId: vendorId
            }, 
        );
    }, [])
    useEffect(()=>{
        if(isVerifyTokenSuccessful!==true && !(isEmpty(verifyTokenData))) {
            toast.error(verifyTokenData.message || "Couldn't verify token")
        } else if(isVerifyTokenSuccessful===true && !(isEmpty(verifyTokenData))) {
            toast.success(verifyTokenData.message || "Token verified!")
            deleteItemFromLocalStorage("vendorEmail")
            navigate("/vendor-verification-success")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [verifyTokenData, isVerifyTokenSuccessful])

    return (
        <PageWrapper>
            
            {
                generateTokenLoading?
                <LoadingSpinner viewPortHeight="h-[100vh]" />:
                !isEmpty(generateTokenData?.data)?
                <div className="w-full h-full flex flex-col py-10 px-4 gap-10">

                    {/* Skip Button */}
                    <SkipButtonVendor />

                    {/* caption */}
                    <div className="w-full flex flex-col gap-2 text-center">
                        <p className="text-black font-bold text-[22px]">
                            Enter verification code
                        </p>

                        <p className="text-sm font-normal text-[#645B75]">
                            Please enter the 6 digit code we sent to your email <span className="font-semibold text-sm text-[#141217]">{vendorEmail}</span>
                        </p>
                    </div>

                    {/* container */}
                    <div className="w-full h-full flex flex-col gap-5 justify-between">

                        {/* input container */}
                        <div
                        className="w-full flex flex-col items-center gap-4">

                            {/* verification input component */}
                            <VerificationInput
                            value={verificationCode}
                            onComplete={()=>setIsComplete(true)}
                            onChange={(inputCode)=>setVerificationCode(inputCode)}
                            length={6}
                            validChars="0-9"
                            autoFocus={true}
                            placeholder=""
                            classNames={{
                                container: "w-full flex items-center gap-3",
                                character: "w-[40px] h-[40px] inline-flex items-center justify-center rounded-xl border border-[#DAD7E0] bg-[#FAFAFB] font-bold text-lg",
                                characterInactive: "text-[#141217] font-bold text-lg",
                                characterSelected: "border-[#3A0CA3] border text-[#3A0CA3]",
                            }} />

                            {/* resend text */}
                            {
                                !isGenerateTokenSuccessful&&
                                // <p className="text-sm font-normal text-[#141217]">
                                //     Resend code <span className="font-bold text-[#3A0CA3]">00:00</span>
                                // </p>
                                <span
                                onClick={()=>{}} 
                                className="font-bold text-[#3A0CA3]">
                                    Resend
                                </span>
                            }
                        </div>

                        {/* Sign up button */}
                        <div className='w-full flex flex-col items-stretch'>

                            {/* button */}
                            <PrimaryButton
                            disabled={!isComplete || verificationCode.length<6}
                            onClick={handleVerifyToken}
                            loading={verifyTokenLoading}
                            text={"Sign up"} />
                        </div>
                    </div>
                </div>:
                <div className="w-[90%] mx-auto h-[100vh] flex flex-col gap-4 items-center justify-center">
                    <span className="text-base mx-auto text-red-500 font-semibold">
                        Something went wrong!
                    </span>
                    <PrimaryButton 
                    height="h-10"
                    text={"Go back"}
                    onClick={()=>navigate(-1)} />
                </div>
            }
        </PageWrapper>
    )
}

export default VendorVerificationPage