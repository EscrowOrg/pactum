import React from 'react'
import { SearchInput } from '../../Input'

const AssetsListView = ({setWalletData, closeDrawer}) => {

    // DATA INITIALIZATION
    const listData = [
        {
            name: "Bitcoin",
            alphabetCode: "BTC",
            imageUrl: "/images/dashboard/bitcoin.png"
        },
        {
            name: "Binance",
            alphabetCode: "BNB",
            imageUrl: "/images/dashboard/binance.png"
        },
        {
            name: "Etheruem",
            alphabetCode: "ETH",
            imageUrl: "/images/dashboard/ethereum.png"
        },
        {
            name: "Litcoin",
            alphabetCode: "LTC",
            imageUrl: "/images/dashboard/litcoin.png"
        },
        {
            name: "Bitcoin",
            alphabetCode: "BTC",
            imageUrl: "/images/dashboard/bitcoin.png"
        },
        {
            name: "Binance",
            alphabetCode: "BNB",
            imageUrl: "/images/dashboard/binance.png"
        },
        {
            name: "Etheruem",
            alphabetCode: "ETH",
            imageUrl: "/images/dashboard/ethereum.png"
        },
        {
            name: "Litcoin",
            alphabetCode: "LTC",
            imageUrl: "/images/dashboard/litcoin.png"
        },
        {
            name: "Bitcoin",
            alphabetCode: "BTC",
            imageUrl: "/images/dashboard/bitcoin.png"
        },
        {
            name: "Binance",
            alphabetCode: "BNB",
            imageUrl: "/images/dashboard/binance.png"
        },
        {
            name: "Etheruem",
            alphabetCode: "ETH",
            imageUrl: "/images/dashboard/ethereum.png"
        },
        {
            name: "Litcoin",
            alphabetCode: "LTC",
            imageUrl: "/images/dashboard/litcoin.png"
        },
        {
            name: "Bitcoin",
            alphabetCode: "BTC",
            imageUrl: "/images/dashboard/bitcoin.png"
        },
        {
            name: "Binance",
            alphabetCode: "BNB",
            imageUrl: "/images/dashboard/binance.png"
        },
        {
            name: "Etheruem",
            alphabetCode: "ETH",
            imageUrl: "/images/dashboard/ethereum.png"
        },
        {
            name: "Litcoin",
            alphabetCode: "LTC",
            imageUrl: "/images/dashboard/litcoin.png"
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
                        onClick={()=>setWalletData(walletData=>{
                            const obj = {
                                ...walletData,
                                asset: list.alphabetCode
                            }
                            closeDrawer()
                            return obj
                        })} 
                        className='flex items-center gap-3 py-4 border-b border-[#F5F3F6] first:pt-0'>

                            <img
                            alt=""
                            src={list.imageUrl}
                            className='h-[40px] w-[40px]' />

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