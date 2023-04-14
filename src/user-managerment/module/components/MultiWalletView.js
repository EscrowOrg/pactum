import React from 'react'
import { PrimaryButton } from './Button'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const MultiWalletView = ({
    title,
    message,
    buttonText,
    path,
    onNext,
}) => {

    // DATA INITIALIZATION
    const navigate = useNavigate()

    return (
        <div
        className='w-full h-full flex items-center justify-center overflow-hidden'>

            {/* illustration */}
            <div className='flex items-center justify-center w-full h-full relative'>
                <img
                alt=""
                src="/images/onboarding/iphone13.png"
                className='w-[282px] absolute top-[58px]' />
            </div>


            {/* container */}
            <div className='w-full flex items-center justify-center absolute bottom-0 right-[50%] translate-x-[50%] h-[47vh]'>

                {/* sub container */}
                <div className='w-full flex flex-col relative h-full'>

                    {/* blurred div */}
                    <div className='w-full h-full bg-white [filter:blur(19.5px)] z-1 absolute top-0' />

                    {/* text and buttons */}
                    <div className='flex flex-col items-stretch w-full h-[90%] text-center gap-6 bg-white justify-center z-5 absolute bottom-0 px-4'>

                        {/* texts container */}
                        <div className='gap-3 flex flex-col w-full items-center'>

                            {/* title */}
                            <p className='font-bold text-2xl text-black w-full'>
                                {title}
                            </p>

                            {/* description */}
                            <p className='text-[#C3BFCD] font-normal text-sm w-full'>
                                {message}
                            </p>
                        </div>

                        {/* button */}
                        {
                            path?
                            <PrimaryButton
                            onClick={()=>navigate(path)}
                            text={buttonText} />:
                            <PrimaryButton
                            onClick={onNext}
                            text={buttonText} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MultiWalletView