import React from 'react'
import { SlArrowRight } from 'react-icons/sl'
import { useNavigate } from 'react-router'

const RegisterAsCard = ({
    iconPath,
    url,
    title,
    subTitle
}) => {

    // DATA INITIALIZATION
    const navigate = useNavigate()
    
    return (
        <div 
        onClick={()=>navigate(url)}
        className='cursor-pointer border border-[#D9EFEE] flex flex-col gap-4 px-5 py-6 rounded-lg bg-[#F6FBFB]'>

            {/* iconImage and arrowIcon */}
            <div className='flex items-center gap-2 justify-between'>

                {/* icon iamge */}
                <img
                alt=""
                className='w-[40px] h-[40px]'
                src={iconPath} />

                {/* arrow icon */}
                <SlArrowRight
                className='text-sm' />
            </div>

            {/* title and subtitle */}
            <div className='flex flex-col gap-2 w-full'>

                {/* title */}
                <p className='font-bold text-black text-lg'>
                    {title}
                </p>

                {/* subtitle */}
                <p className='font-normal text-sm text-black'>
                    {subTitle}
                </p>
            </div>
        </div>
    )
}

export default RegisterAsCard