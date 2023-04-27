import React from 'react'
import { SearchInput } from '../../Input'
import { TickCircle } from 'iconsax-react'

const AssetsPopup = ({setFilterValue, closeDrawer, selectedValue}) => {

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
        <div className='w-full h-full flex flex-col gap-5 bg-white overflow-scroll'>
            
            {/* search bar container */}
            <div className='flex gap-5 w-full px-4'>
                        
                {/* search bar */}
                <SearchInput />
            </div>

            {/* list container */}
            <div className='flex flex-col gap-1 pb-5 h-full overflow-auto px-4'>

                <div
                onClick={()=>{
                    setFilterValue(prevState=>{
                        return {
                            ...prevState,
                            coins: "All"
                        }
                    })
                    closeDrawer()
                }}
                className='flex items-center gap-3 py-4 border-b border-[#F5F3F6] first:pt-0'>

                    <img
                    alt=""
                    src={"/images/dashboard/all-star.png"}
                    className='h-[40px] w-[40px]' />

                    <h4 className='font-semibold text-sm text-black'>
                        ALL COINS
                    </h4>

                    {
                        selectedValue==="All" &&
                        <TickCircle
                        variant='Bulk'
                        size={18}
                        color='#48A9A6'
                        className='ml-auto' />
                    }
                </div>
                {
                    listData.map((list, index)=>(
                        <div
                        key={index}
                        onClick={()=>{
                            setFilterValue(prevState=>{
                                return {
                                    ...prevState,
                                    coins: list.alphabetCode
                                }
                            })
                            closeDrawer()
                        }}
                        className='flex items-center gap-3 py-4 border-b border-[#F5F3F6] first:pt-0 w-full'>

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

                            {/* icon */}
                            {
                                selectedValue===list.alphabetCode &&
                                <TickCircle
                                variant='Bulk'
                                size={18}
                                color='#48A9A6'
                                className='ml-auto' />
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AssetsPopup