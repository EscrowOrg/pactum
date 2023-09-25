import React, { useState } from 'react'
import { TickCircle } from 'iconsax-react'
import { SearchInput } from '../../Input'

const AssetsPopup = ({
    setFilterCoin,
    filterCoinId, 
    closeDrawer,
}) => {

    // STATES
    const [searchInput, setSearchInput] = useState("")

    // DATA INITIALIZATION
    const listData = [
        {
            name: "Bitcoin",
            symbol: "BTC",
            imageUrl: "/images/dashboard/bitcoin.png",
            id: 4
        },
        {
            name: "Binance",
            symbol: "BNB",
            imageUrl: "/images/dashboard/binance.png",
            id: 3
        },
        {
            name: "Ethereum",
            symbol: "ETH",
            imageUrl: "/images/dashboard/ethereum.png",
            id: 2
        },
        {
            name: "Binance USD",
            symbol: "BUSD",
            imageUrl: "https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766",
            id: 5
        },
        // {
        //     name: "USD Coin",
        //     symbol: "USDC",
        //     imageUrl: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
        //     id: 1
        // },
        {
            name: "Tether",
            symbol: "USDT",
            imageUrl: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
            id: 6
        },
    ]

    return (
        <div className='w-full h-full flex flex-col gap-5 bg-white overflow-scroll'>
            
            {/* search bar container */}
            <div className='flex gap-5 w-full px-4'>
                        
                {/* search bar */}
                <SearchInput
                value={searchInput}
                onChange={(e)=>setSearchInput(e.target.value)} />
            </div>

            {/* list container */}
            <div className='flex flex-col gap-1 pb-5 h-full overflow-auto px-4'>

                <div
                onClick={()=>{
                    setFilterCoin({
                        name: "All",
                        id: null
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
                        filterCoinId===null &&
                        <TickCircle
                        variant='Bulk'
                        size={18}
                        color='#48A9A6'
                        className='ml-auto' />
                    }
                </div>
                {
                    listData.filter(asset=>asset.name.toLowerCase().includes(searchInput.toLowerCase())).map((list, index)=>(
                        <div
                        key={index}
                        onClick={()=>{
                            setFilterCoin({
                                name: list.symbol,
                                id: list.id
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
                                    {list.symbol}
                                </h4>
                            </div>

                            {/* icon */}
                            {
                                filterCoinId===list.id &&
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