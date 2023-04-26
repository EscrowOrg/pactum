import React from 'react'
import MarketListCard from './MarketListCard'
import { SearchInput } from '../../Input'

const MarketList = () => {
    return (
        <div className='w-full h-full flex flex-col gap-6 bg-white'>
            
            {/* search bar container */}
            <div className='flex gap-5 w-full'>
                        
                {/* search bar */}
                <SearchInput />
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