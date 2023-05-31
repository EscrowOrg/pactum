import { InfoCircle } from 'iconsax-react'
import React, { useEffect, useState } from 'react'

const NetworkListView = ({
    setNetwork,
    closeDrawer
}) => {

    // STATES
    const [asset, setAsset] = useState({
        name: "",
        valueId: "",
        symbol: ""
    })


    // DATA INITIALIZATION
    const listData = [
        {
            name: "Ethereum (ERC20)",
            isAvailable: true,
            chainId: 0
        },
        {
            name: "BNB Smart Chain (BEP20)",
            isAvailable: true,
            chainId: 1
        },
        {
            name: "Bitcoin",
            isAvailable: true,
            chainId: 2
        }
    ]


    // SIDE EFFECT
    useEffect(()=>{

    }, [])

    return (
        <div className='w-full h-full flex flex-col gap-5 bg-white'>

            {/* message */}
            <div className='flex items-start bg-[#FAFAFB] gap-2 py-2 px-6 w-full relative left-0'>

                {/* icon */}
                <InfoCircle
                variant='Bulk'
                size={16}
                color="#ACA6BA" />

                {/* text */}
                <h4 className='w-[90%] font-normal text-sm text-[#645B75]'>
                    Please note that you can only create wallet on networks just once. Also, only supported networks on Pactum are displayed.
                </h4>
            </div>

            {/* list container */}
            <div className='flex flex-col gap-1 pb-5 px-6'>
                {
                    listData.map((list, index)=>(
                        <div
                        key={index}
                        onClick={()=>{
                            setNetwork({
                                title: list.name,
                                value: list.chainId
                            })
                            closeDrawer()
                        }} 
                        className='flex items-center gap-3 py-4 border-b border-[#F5F3F6] first:pt-0'>

                            <h4 className={`font-semibold text-sm ${list.isAvailable?"text-black":"text-[#C3BFCD]"}`}>
                                {list.name}
                            </h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NetworkListView