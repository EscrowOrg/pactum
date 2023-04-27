import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../layouts/PageWrapper";
import { BackButton, PrimaryButton } from "../components/Button";
import { PasswordInput } from "../components/Input";
import Checkbox from "../components/Checkbox";
import axios from "axios";
import BASE_URL from "../../../serivce/url.serice";

const ResetPassword = () => {

    // STATES
    const [data, setData] = useState({
        formData: {
            retypePassword: "",
            password: "",
            action: ""
        },
        open: false
    })


    // DATA INITIALIZATION
    const navigate = useNavigate()

    const passwordReset = async(e) =>{
        e.preventDefault()
        try {
            await axios.post(`${BASE_URL}`)
            navigate("/reset-password/success")
        } catch (error) {
            
        }
     }

    // HANDLERS
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setData({
            formData:{
                ...data.formData,
                [name]: value
            }
        })
    }
    const changRadio = (e)=>{
        setData({
            formData:{
                ...data.formData,
                action: e.target.value
            }
        })
    }

    return(
        <PageWrapper>
            <div className="w-full h-full flex flex-col gap-10 px-4 py-10">

                {/* Back Button */}
                <BackButton />

                {/* caption */}
                <div className="w-full flex flex-col gap-2">
                    <p className="text-black font-bold text-2xl">
                        Reset Password
                    </p>

                    <p className="text-sm font-normal text-[#645B75]">
                        Create your new password to gain access to your account again.
                    </p>
                </div>

                {/* form */}
                <form
                className="flex flex-col gap-5 w-full h-full"
                onSubmit={passwordReset}>

                        {/* password container */}
                        <label className="flex flex-col gap-2 w-full">

                            {/* label text */}
                            <span
                            className="font-normal text-xs text-black">
                                Password
                            </span>

                            {/* input field */}
                            <PasswordInput
                            name={"password"}
                            value={data.formData.password}
                            onChange={handleChange}
                            placeholderText={"Enter your password"} />
                        </label>

                        {/* password container */}
                        <label className="flex flex-col gap-2 w-full">

                            {/* label text */}
                            <span
                            className="font-normal text-xs text-black">
                                Repeat Password
                            </span>

                            {/* input field */}
                            <PasswordInput
                            name={"retypePassword"}
                            value={data.formData.retypePassword}
                            onChange={handleChange}
                            placeholderText={"Enter your password again"} />

                            {/* password strength */}
                            <div className="w-full flex flex-col gap-3 mt-2">

                                {/* characters contained */}
                                <label className="flex items-center gap-2 font-normal text-xs text-[#645B75]">
                                    <Checkbox
                                    value={true} />
                                    Contains at least 8+ Characters
                                </label>

                                {/* digits contained */}
                                <label className="flex items-center gap-2 font-normal text-xs text-[#645B75]">
                                    <Checkbox
                                    value={true} />
                                    Contains at least 1 number
                                </label>

                                {/* includes cases */}
                                <label className="flex items-center gap-2 font-normal text-xs text-[#645B75]">
                                    <Checkbox
                                    value={true} />
                                    Contains both lower (a-z) and upper case letters (A - Z)
                                </label>

                                {/* password match */}
                                <label className="flex items-center gap-2 font-normal text-xs text-[#645B75]">
                                    <Checkbox
                                    value={false} />
                                    Password match
                                </label>
                            </div>
                        </label>


                        {/* container */}
                        <div className="flex w-full flex-col mt-auto items-center gap-10">

                            {/* Login button */}
                            <div className='w-full flex flex-col items-stretch'>
                                <PrimaryButton
                                disabled={!(data.formData.password && data.formData.retypePassword)}
                                text={"Confirm Password"} />
                            </div>
                        </div>
                </form>
            </div>
        </PageWrapper>
    )
}

export default ResetPassword