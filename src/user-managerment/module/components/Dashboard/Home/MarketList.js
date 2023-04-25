import React from 'react'
import { HiOutlineSearch } from "react-icons/hi"
import MarketListCard from './MarketListCard'

const MarketList = () => {
    return (
        <div className='w-full h-full flex flex-col gap-6 bg-white'>
            
            {/* search bar container */}
            <div className='flex gap-5 w-full'>
                        
                {/* search bar */}
                <div className='bg-[#FAFAFB] rounded-lg border border-[#F5F3F6] flex items-center gap-2 pl-5 pr-2 h-[44px] w-full'>
                    <HiOutlineSearch
                    className='text-[#ACA6BA]' />

                    <input 
                    className='placeholder:font-normal placeholder:text-sm placeholder:text-[#ACA6BA] text-sm font-normal text-[#202223] rounded-lg bg-transparent outline-none w-full h-[95%]'
                    type="search" 
                    placeholder='Search' />
                </div>
            </div>

            {/* list container */}
            <div className='flex flex-col gap-[2px] pb-5'>
                <MarketListCard
                imageUrl={"/images/dashboard/bitcoin.png"}
                coinName={"Bitcoin"}
                coinPairText={"DOGE/USDT"}
                hasAppreciated={true}
                changeInPercent={+2.56}
                currentPrice={23000.00} />
                <MarketListCard
                imageUrl={"/images/dashboard/bitcoin.png"}
                coinName={"Bitcoin"}
                coinPairText={"DOGE/USDT"}
                hasAppreciated={true}
                changeInPercent={+2.56}
                currentPrice={23000.00} />
                <MarketListCard
                imageUrl={"/images/dashboard/bitcoin.png"}
                coinName={"Bitcoin"}
                coinPairText={"DOGE/USDT"}
                hasAppreciated={true}
                changeInPercent={+2.56}
                currentPrice={23000.00} />
                <MarketListCard
                imageUrl={"/images/dashboard/bitcoin.png"}
                coinName={"Bitcoin"}
                coinPairText={"DOGE/USDT"}
                hasAppreciated={true}
                changeInPercent={+2.56}
                currentPrice={23000.00} />
                <MarketListCard
                imageUrl={"/images/dashboard/bitcoin.png"}
                coinName={"Bitcoin"}
                coinPairText={"DOGE/USDT"}
                hasAppreciated={true}
                changeInPercent={+2.56}
                currentPrice={23000.00} />
                <MarketListCard
                imageUrl={"/images/dashboard/bitcoin.png"}
                coinName={"Bitcoin"}
                coinPairText={"DOGE/USDT"}
                hasAppreciated={true}
                changeInPercent={+2.56}
                currentPrice={23000.00} />
                <MarketListCard
                imageUrl={"/images/dashboard/bitcoin.png"}
                coinName={"Bitcoin"}
                coinPairText={"DOGE/USDT"}
                hasAppreciated={true}
                changeInPercent={+2.56}
                currentPrice={23000.00} />
                <MarketListCard
                imageUrl={"/images/dashboard/bitcoin.png"}
                coinName={"Bitcoin"}
                coinPairText={"DOGE/USDT"}
                hasAppreciated={true}
                changeInPercent={+2.56}
                currentPrice={23000.00} />
                <MarketListCard
                imageUrl={"/images/dashboard/bitcoin.png"}
                coinName={"Bitcoin"}
                coinPairText={"DOGE/USDT"}
                hasAppreciated={true}
                changeInPercent={+2.56}
                currentPrice={23000.00} />
            </div>
        </div>
    )
}

export default MarketList