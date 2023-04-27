import React from 'react'
import PageWrapper from '../layouts/PageWrapper'
import { PrimaryButton } from '../components/Button'
import { useNavigate } from 'react-router-dom'
import BASE_URL from '../../../serivce/url.serice'
import axios from 'axios'

const PasswordChangeSuccess = () => {

    // DATA INITIALIZATION
    const navigate = useNavigate()

    const passwordChange = async(e) =>{
        e.preventDefault()
        try {
            await axios.post(`${BASE_URL}`)
            navigate("/home")
        } catch (error) {
            
        }
     }

    return (
        <PageWrapper>
            <div className="w-full h-full flex flex-col gap-10 px-4 py-10 justify-between">

                {/* message */}
                <div className='flex flex-col w-full items-center gap-4 px-6 mt-16'>

                    {/* icon */}
                    <img
                    alt=""
                    src="/images/onboarding/password-reset-success.png"
                    className='w-[190px]' />
                    
                    {/* title */}
                    <p className='text-[22px] text-black font-bold text-center'>
                        Awesome! Password change was successful. 
                    </p>

                    {/* message */}
                    <p className='text-sm font-normal text-[#645B75] text-center'>
                        You can write down your password in your secret diary but if you forget again, we are here to help.
                    </p>
                </div>


                {/* button */}
                <div className='w-full flex flex-col items-stretch'>

                    <PrimaryButton
                    onClick={passwordChange}
                    text={"Go to Home"} />

                </div>
            </div>
        </PageWrapper>
    )
}

export default PasswordChangeSuccess