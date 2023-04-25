import React from 'react'
import { IoMdClose } from 'react-icons/io'

const StrictWrapper = ({
    title,
    closeDrawer,
    children
}) => {
    return (
        <div className="w-full h-full flex flex-col px-6 py-5 rounded-t-2xl bg-white relative gap-6">

            {/* Header */}
            <div className='flex w-full items-center justify-between gap-2 z-[10]'>

                {/* title */}
                <h3 className='text-black font-bold text-[22px]'>
                    {title}
                </h3>

                {/* close button */}
                <span
                onClick={closeDrawer} 
                className='inline-flex items-center justify-center w-[25px] h-[25px] bg-[#F5F3F6] rounded-[50%] hover:bg-gray-100 cursor-pointer'>
                    <IoMdClose
                    className='text-base text-[#141217]' />
                </span>
            </div>

            {/* Body */}
            <div className='h-full w-full flex flex-col z-[10] bg-white'>
                {children}
            </div>
        </div>
    )
}

export default StrictWrapper