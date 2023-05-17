import { ArrowRight2, NotificationBing } from 'iconsax-react'
import React, { useEffect, useState } from 'react'
import PortfolioBalance from './PortfolioBalance'
import useMakeReq from '../../../hooks/Global/useMakeReq'
import { getUserId } from '../../../../../serivce/cookie.service'
import { GET_PORTFOLIO_BALANCE } from '../../../../../serivce/apiRoutes.service'
import { isEmpty } from '../../../helpers/isEmpty'
import { roundToN } from '../../../helpers/roundToN'

const HomeHeader = () => {

    // DATA INITIALIZATION
    const {
        getLoading,
        data,
        makeGetRequest,
    } = useMakeReq()
    

    // STATES
    const [amountInfo, setAmountInfo] = useState({
        btcValue: 0,
        usdValue: 0
    })


    // SIDE EFFECTS
    useEffect(()=>{
        makeGetRequest(`${GET_PORTFOLIO_BALANCE}/${getUserId()}`)
    }, [])

    // populating data
    useEffect(()=>{
        if(!isEmpty(data)) {
            setAmountInfo({
                btcValue: roundToN(data?.data?.valueInBitcoin, 4) || 0,
                usdValue: roundToN(data?.data?.valueInDollar, 2) || 0
            })
        }
    }, [data])

    return (
        <div className='w-full flex items-center justify-center bg-[#6D34F0] min-h-[190px] relative'>

            {/* pattern */}
            <img
            alt=""
            src="/images/dashboard/header-pattern.png"
            className='absolute z-[1] bottom-[50%] translate-y-[50%] right-[50%] translate-x-[50%]' />

            
            {/* container */}
            <div className='w-[92%] flex flex-col gap-4 relative z-20'>

                {/* title and notification bell */}
                <div className='flex justify-between gap-2 items-center w-full'>

                    {/* text */}
                    <p className='text-lg text-[#F4EFFE] font-bold'>
                        Hey Joel! 😎
                    </p>

                    {/* notification icon */}
                    <span className='w-[40px] h-[40px] flex items-center justify-center rounded-xl bg-white'>
                        <NotificationBing
                        size="20"
                        color="#6D34F0"
                        variant="TwoTone" />
                    </span>
                </div>

                {/* portfolio balance and more details */}
                <div className='flex items-end justify-between w-full'>

                    {/* balance info */}
                    <div className='flex flex-col gap-2 text-[#F4EFFE]'>

                        {/* caption */}
                        <h4 className='font-normal text-xs'>
                            My Portfolio balance
                        </h4>

                        {/* balance */}
                        <PortfolioBalance
                        loading={getLoading}
                        usdValue={amountInfo?.usdValue}
                        btcValue={amountInfo?.btcValue} />
                    </div>

                    {/* expand details */}
                    <div className='flex items-center gap-2'>
                        <span className='text-[#F4EFFE] text-sm font-bold'>
                            Expand Portfolio
                        </span>

                        <ArrowRight2
                        size="24"
                        color="#F4EFFE"
                        variant="TwoTone" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader