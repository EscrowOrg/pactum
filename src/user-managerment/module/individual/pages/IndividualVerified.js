import React from 'react'
import PageWrapper from '../../layouts/PageWrapper'
import { PrimaryButton } from '../../components/Button'
import { useNavigate } from 'react-router-dom'

const IndividualVerified = () => {

    // DATA INITIALIZATION
    const navigate = useNavigate()

    return (
        <PageWrapper>
            <div className="w-full h-full flex flex-col gap-10 px-4 py-10 justify-between">

                {/* message */}
                <div className='flex flex-col w-full items-center gap-4 px-6 mt-16'>

                    {/* icon */}
                    <img
                    alt=""
                    src="/images/onboarding/vendor-verified-success.png"
                    className='w-[190px]' />
                    
                    {/* title */}
                    <p className='text-[22px] text-black font-bold text-center'>
                        Awesome! Your email is now verified.
                    </p>

                    {/* message */}
                    <p className='text-sm font-normal text-[#645B75] text-center'>
                        One more step! Let us set you up.
                    </p>
                </div>

                {/* button */}
                <div className='w-full flex flex-col items-stretch'>
                    <PrimaryButton
                    onClick={()=>navigate("/individual-profile")}
                    text={"Okay, let’s go!"} />
                </div>
            </div>
        </PageWrapper>
    )
}

export default IndividualVerified