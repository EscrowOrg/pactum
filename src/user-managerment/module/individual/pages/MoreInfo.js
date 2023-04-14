import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../../layouts/PageWrapper";
import { BackButton, PrimaryButton } from "../../components/Button";
import { TextInput } from "../../components/Input";

const MoreInfo = () => {

    // DATA INITIALIZATION
    const navigate = useNavigate()


    // STATES
    const [formData, setFormData] = useState({
        occupation: "",
        isCryptoHobby: "",
        action: ""
    })


    // HANDLERS
    const  handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const changRadio = (e)=>{
            setFormData({
            ...formData,
            action: e.target.value
            })
    }

    return (
        <PageWrapper>
            <div className="w-full h-full flex flex-col gap-10 px-4 py-10">

                {/* Back Button */}
                <BackButton />

                {/* caption */}
                <p className="text-black font-bold text-2xl">
                    Sign Up as a Vendor
                </p>

                {/* form */}
                <form
                className="flex flex-col gap-5 w-full h-full"
                onSubmit={(e) => e.preventDefault()}>

                    {/* Company's email address container */}
                    <label className="flex flex-col gap-2 w-full">

                        {/* label text */}
                        <span
                        className="font-normal text-xs text-black">
                            Occupation
                        </span>

                        {/* input field */}
                        <TextInput
                        name={"occupation"}
                        value={formData.occupation}
                        onChange={handleChange}
                        placeholderText={"Enter occupation"} />
                    </label>

                    {/* password container */}
                    <label className="flex flex-col gap-2 w-full">

                        {/* label text */}
                        <span
                        className="font-normal text-xs text-black">
                            Is Crypto a hobby or a life plan or an enthusiast?
                        </span>

                        {/* input field */}
                        <TextInput
                        name={"isCryptoHobby"}
                        value={formData.isCryptoHobby}
                        onChange={handleChange}
                        placeholderText={"Select option"} />
                    </label>

                    {/* container */}
                    <div className="flex w-full flex-col mt-auto">

                        {/* continue button */}
                        <div className='w-full flex flex-col items-stretch'>
                            <PrimaryButton
                            onClick={()=>navigate("/individual-create-p")}
                            text={"Continue"} />
                        </div>
                    </div>
                </form>
            </div>
        </PageWrapper>
    )
}

export default MoreInfo