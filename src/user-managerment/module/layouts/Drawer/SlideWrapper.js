import React from 'react'

const SlideWrapper = ({children, title}) => {
    return (
        <div className="w-full max-h-[95vh] h-full flex flex-col pt-8 pb-5 rounded-t-2xl relative gap-3">

            <span className='top-[5px] absolute right-[50%] translate-x-[50%] bg-[#BFBFBF] h-[3px] w-[133px] rounded-[4px]' />

            {/* cpation */}
            <h3 className='font-bold text-lg text-black w-full text-center'>
                {title}
            </h3>

            {/* body content */}
            {children}
        </div>
    )
}

export default SlideWrapper