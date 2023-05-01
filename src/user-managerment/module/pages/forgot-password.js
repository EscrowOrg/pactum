import { useState } from "react";
import PageWrapper from "../layouts/PageWrapper";
import { BackButton, PrimaryButton } from "../components/Button";
import { TextInput } from "../components/Input";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../../serivce/url.serice";
import axios from "axios";

const ForgotPassword = () => {

    // STATES
    const [formData, setFormData] = useState({
        formData: {
            email: "",
            action: ""
        },
        open: false
    })


    // DATA INITIALIZATION
    const navigate = useNavigate()
    const getPine = (e) =>{
        e.preventDefault()
        // try {
        //     await axios.post(`${BASE_URL}`)
        //     navigate("/verification")
        // } catch (error) {
        //     console.log(error)
        // }
     }

    // HANDLERS
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData({
            formData:{
                ...formData,
                [name]: value
            }
        })
    }

    return (
        <PageWrapper>
            
            {/* container */}
            <div className="w-full h-full flex flex-col py-10 px-4 gap-10">

                {/* Back Button */}
                <BackButton />

                {/* caption */}
                <div className="w-full flex flex-col gap-2">
                    <p className="text-black font-bold text-2xl">
                        Forgot Password
                    </p>

                    <p className="text-sm font-normal text-[#645B75]">
                        Enter your email address to receive a link via mail to set up a new password.
                    </p>
                </div>

                {/* form */}
                <form
                className="flex flex-col justify-between gap-5 w-full h-full"
                onSubmit={getPine}>

                    {/* email input container */}
                    <label className="flex flex-col gap-2 w-full">

                        {/* label text */}
                        <span className="font-normal text-xs text-black">
                            Email Address
                        </span>

                        {/* input field */}
                        <TextInput
                        name={"email"}
                        value={formData.email}
                        onChange={handleChange}
                        placeholderText={"Enter email address"} />
                    </label>

                    {/* Sign up button */}
                    <div className='w-full flex flex-col items-stretch'>

                        {/* button */}
                        <PrimaryButton
                        //onClick={()=>navigate("/verification")}
                        disabled={!formData.formData.email}
                        text={"Sign up"} />
                    </div>
                </form>
            </div>
        </PageWrapper>
    )
}

export default ForgotPassword