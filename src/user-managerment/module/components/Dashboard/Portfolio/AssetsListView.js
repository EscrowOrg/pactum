import React from 'react'
import { SearchInput } from '../../Input'

const AssetsListView = ({setAsset, closeDrawer}) => {

    // DATA INITIALIZATION
    const listData = [
        {
            name: "Tether",
            alphabetCode: "USDT",
            imageUrl: "/images/dashboard/Tether.webp",
            assetId: 0,
        },
        {
            name: "USD Coin",
            alphabetCode: "USDC",
            imageUrl: "/images/dashboard/USD_Coin_icon.webp",
            assetId: 1,
        },
        {
            name: "Etheruem",
            alphabetCode: "ETH",
            imageUrl: "/images/dashboard/ethereum.png",
            assetId: 2,
        },
        {
            name: "Binance",
            alphabetCode: "BNB",
            imageUrl: "/images/dashboard/binance.png",
            assetId: 3,
        },
        {
            name: "Bitcoin",
            alphabetCode: "BTC",
            imageUrl: "/images/dashboard/bitcoin.png",
            assetId: 4,
        },
        {
            name: "Binance USD",
            alphabetCode: "BUSD",
            imageUrl: "/images/dashboard/binance.png",
            assetId: 5,
        },
    ]

    return (
        <div className='w-full h-full flex flex-col gap-5 bg-white'>
            
            {/* search bar container */}
            <div className='flex gap-5 w-full'>
                        
                {/* search bar */}
                <SearchInput />
            </div>

            {/* list container */}
            <div className='flex flex-col gap-1 pb-5'>
                {
                    listData.map((list, index)=>(
                        <div
                        key={index}
                        onClick={()=>{
                            setAsset({
                                title: list.name,
                                value: list.assetId
                            })
                            closeDrawer()
                        }} 
                        className='flex items-center gap-3 py-4 border-b border-[#F5F3F6] first:pt-0'>

                            <img
                            alt=""
                            src={list.imageUrl}
                            className='h-[40px] w-[40px] rounded-[50%]' />

                            <div className='flex items-center gap-1'>
                                <h4 className='font-semibold text-sm text-black'>
                                    {list.name}
                                </h4>
                                
                                <h4 className='font-normal text-xs text-[#8D85A0]'>
                                    {list.alphabetCode}
                                </h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AssetsListView