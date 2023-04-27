import React from 'react'
import PercentageChange from './PercentageChange'
import { Link } from 'react-router-dom'

const MarketListCard = ({
    imageUrl,
    coinName,
    coinPairText,
    hasAppreciated,
    changeInPercent,
    currentPrice
}) => {
    return (
        <Link
        to={"/home/overview/jkdfjdkfdkfjdfjd"} 
        className='w-full flex gap-2 items-center justify-between py-4 border-b border-[#F5F3F6] hover:no-underline'>
            
            {/* first container */}
            <div className='flex items-center gap-3'>

                {/* icon */}
                <img
                alt=''
                src={imageUrl}
                className='h-[40px] w-[40px]' />

                {/* texts */}
                <div className='flex flex-col gap-1'>
                    <h3 className='font-semibold text-black text-sm'>
                        {coinName}
                    </h3>

                    <h4 className='text-[#8D85A0] text-sm font-normal'>
                        {coinPairText}
                    </h4>
                </div>
            </div>

            {/* second container */}
            <div className='flex flex-col gap-1 items-end'>

                {/* price */}
                <h3 className='font-semibold text-sm text-black'>
                    {`$${currentPrice.toLocaleString('en-US')}`}
                </h3>

                {/* percentage change */}
                <PercentageChange
                hasAppreciated={hasAppreciated}
                changePercentage={changeInPercent} />
            </div>
        </Link>
    )
}

export default MarketListCard