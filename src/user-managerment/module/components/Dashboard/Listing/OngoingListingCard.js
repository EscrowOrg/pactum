import React from 'react'
import CircularProgress from './CircularProgress'
import { useNavigate } from "react-router-dom";


const OngoingListingCard = () => {

     // DATA INITIALIZATION
     const navigate = useNavigate()


    return (
        <div 
        className='w-full border border-[#F5F3F6] bg-white rounded-lg py-3 px-4 flex flex-col gap-4'>

            {/* profile info */}
            <div className='w-full flex items-center justify-between pb-4 border-b border-[#F5F3F6]'>

                {/* image and name */}
                <div className="flex items-center gap-2">
                    
                    <CircularProgress
                    percent={70} />

                    <div className='flex flex-col gap-1'>
                        <h3 className='font-semibold text-black text-sm'>
                            Bitcoin
                        </h3>

                        <h4
                        className='text-[#8D85A0] text-xs font-normal'>
                            Listed On: 09/04/2023
                        </h4>
                    </div>
                </div>

                {/* price */}
                <div className='flex flex-col items-end gap-[2px]'>
                    <h4 
                    className='text-[#8D85A0] text-xs font-normal'>
                        Price
                    </h4>

                    <h4 className='text-lg font-bold text-[#2D6A68]'>
                        ₦300.00
                    </h4>
                </div>
            </div>

            {/* available order & min-max order */}
            <div className='w-full flex items-center justify-between'>
                <div className='flex flex-col gap-[2px]'>
                    <h3 className='font-normal text-xs text-[#8D85A0]'>
                        Listing Amount
                    </h3>

                    <h4 className='text-sm font-semibold text-black'>
                        ₦100,000.00
                    </h4>
                </div>

                <div className='flex flex-col gap-[2px] items-end'>
                    <h3 className='font-normal text-xs text-[#8D85A0]'>
                        Min - Max Order
                    </h3>

                    <h4 className='text-sm font-semibold text-black'>
                        ₦2,000.00 - ₦230,000.00
                    </h4>
                </div>
            </div>

            {/* buttons */}
            <div className='w-full flex items-center justify-between gap-5 pb-4'>
                
                {/* cancel button */}
                <span className='bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer w-full text-[#645B75] text-xs font-normal'>
                    Cancel
                </span>
                
                {/* view more button */}
                <span onClick={() =>navigate("/listing/overview/awdgtsqrhbdfwtyu" )} className='bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer w-full text-[#3A0CA3] text-xs font-normal'>
                    View More
                </span>
            </div>
        </div>
    )
}

export default OngoingListingCard