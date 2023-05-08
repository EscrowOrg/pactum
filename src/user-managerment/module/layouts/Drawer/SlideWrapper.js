import React from 'react'

const SlideWrapper = ({children, title}) => {
    return (
        <div className="w-full h-screen flex items-end justify-center relative z-[2500]">

            {/* container */}
            <div className="w-full flex flex-col pt-8 pb-5 rounded-t-2xl gap-3 max-h-[95vh] h-fit relative bg-white z-[2520]">

                <span className='top-[5px] absolute right-[50%] translate-x-[50%] bg-[#BFBFBF] h-[3px] w-[133px] rounded-[4px]' />

                {/* caption */}
                <h3 className='font-bold text-lg text-black w-full text-center'>
                    {title}
                </h3>

                {/* body content */}
                {children}

            </div>
        </div>
    )
}

export default SlideWrapper