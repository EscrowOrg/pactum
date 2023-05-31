import React from 'react'
import PercentageChange from './PercentageChange'
import { Link } from 'react-router-dom'

const HotlistCard = ({
    imageUrl,
    currencyName,
    currentValue,
    hasAppreciated,
    changePercentage,
    pathId
}) => {
    return (
        <Link
        to={`/home/overview/${pathId}`} 
        className='flex flex-col gap-3 p-3 rounded-2xl border border-gray-100 w-[180px]'>

            {/* logo and percentage change */}
            <div className='w-full flex items-center justify-between gap-1'>

                {/* icon */}
                <img
                alt=''
                src={imageUrl}
                className='h-[40px] w-[40px]' />

                {/* percentage change */}
                <PercentageChange
                hasAppreciated={hasAppreciated}
                changePercentage={changePercentage} />
            </div>

            {/* name and current value */}
            <div className='flex flex-col gap-[2px]'>

                {/* currency's name */}
                <h3 className='text-[#8D85A0] text-sm font-normal'>
                    {currencyName}
                </h3>

                {/* current value */}
                <h3 className='font-semibold text-sm text-black'>
                    ${currentValue<1?currentValue:currentValue.toLocaleString('en-US')}
                </h3>
            </div>
        </Link>
    )
}

export default HotlistCard