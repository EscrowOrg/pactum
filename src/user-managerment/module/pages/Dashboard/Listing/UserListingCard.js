import { useState } from 'react'
import "./activelistingtab.scss"

const UserListingCard = () => {

    // STATE
    const [activeTab, setActiveTab] = useState(3)


    // DATA INITIALIZATION
    const listData = [1,2,3,4,5,6,7]

    return (
        <div className='w-full h-full flex flex-col bg-white'>
            
            {/* heading tab */}
            <div className='flex items-center justify-between w-[90%] mx-auto'>

                <h3
                onClick={()=>setActiveTab(1)} 
                className={`pb-4 text-xs text-[#929292] font-normal [transition:all_.4s_linear] ${activeTab===1?"active-listing-tab":""}`}>
                    Ongoing
                </h3>

                <h3
                onClick={()=>setActiveTab(2)} 
                className={`pb-4 text-xs text-[#929292] font-normal [transition:all_.4s_linear] ${activeTab===2?"active-listing-tab":""}`}>
                    Completed
                </h3>

                <h3
                onClick={()=>setActiveTab(3)} 
                className={`pb-4 text-xs text-[#929292] font-normal [transition:all_.4s_linear] ${activeTab===3?"active-listing-tab":""}`}>
                    Closed
                </h3>
            </div>

            {/* body content */}
            <div className='h-full w-full px-4 bg-gray-100 flex flex-col pt-3 pb-20 overflow-auto gap-5'>

                {
                    listData.map((listD, index)=>(
                        <div 
                        key={index}
                        className='w-full border border-[#F5F3F6] bg-white rounded-lg py-3 px-4 flex flex-col gap-4'>

                            {/* profile info */}
                            <div className='w-full flex items-center justify-between pb-4 border-b border-[#F5F3F6]'>

                                {/* image and name */}
                                <div className="flex items-center gap-2">

                                    <img
                                    alt=""
                                    src={"/images/dashboard/bitcoin.png"}
                                    className="h-[40px] w-[40px] rounded-[50%]" />

                                    <div className='flex flex-col gap-1'>
                                        <h3 className='font-semibold text-black text-sm'>
                                            Bitcoin
                                        </h3>

                                        {/* paid label */}
                                        <div className='inline-flex items-center justify-center gap-[2px] bg-[rgba(11,104,244,.04)] rounded-md w-fit p-[2px_4px]'>
                                            <img
                                            alt=""
                                            src="/images/dashboard/checkmark-paid.png"
                                            className='h-[6px]' />

                                            <span className='text-[#0B6AF4] text-[8px] font-semibold'>
                                                PAID
                                            </span>
                                        </div>

                                        <h4
                                        className='text-[#8D85A0] text-xs font-normal'>
                                            Placed On Mar 20, 2022
                                        </h4>
                                    </div>
                                </div>

                                {/* price */}
                                <div className='flex flex-col items-end gap-[2px]'>
                                    <span className='py-[2px] px-[6px] inline-flex items-center justify-center rounded-[5px] bg-[#FFF3F2] font-normal text-[13px] text-[#F44336]'>
                                        Cancelled
                                    </span>
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
                            <div className='w-full flex items-center justify-between pb-4 border-b border-[#F5F3F6]'>
                                <div className='flex flex-col gap-[2px]'>
                                    <h3 className='font-normal text-xs text-[#8D85A0]'>
                                        Available Order
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

                            {/* listing amount and bank details */}
                            <div className='w-full flex items-center justify-between pb-4'>
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
                                        Bank
                                    </h3>

                                    <h4 className='text-sm font-semibold text-black'>
                                        First Bank
                                    </h4>
                                </div>
                            </div>

                            {/* buttons */}
                            <div className='w-full flex items-center justify-between px-4 gap-4 pb-4'>
                                
                                {/* cancel butto */}
                                <span className='border-[#F3F6F8] border rounded py-[7px] px-4 inline-flex items-center justify-center hover:bg-gray-100 cursor-pointer w-full'>
                                    Cancel
                                </span>
                                
                                {/* cancel butto */}
                                <span className='border-[#F3F6F8] border rounded py-[7px] px-4 inline-flex items-center justify-center hover:bg-gray-100 cursor-pointer w-full'>
                                    Track
                                </span>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default UserListingCard