import React from 'react'
import MarketListCard from './MarketListCard'
import { SearchInput } from '../../Input'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import { isEmpty } from '../../../helpers/isEmpty';
import { roundToN } from '../../../helpers/roundToN';

// ant icon
const antIcon = (
    <LoadingOutlined
    style={{
        fontSize: 26,
        color: '#3A0CA3'
    }}
    spin />
)

const MarketList = ({loading, data}) => {

    // DATA INITIALIZATION
    const selectedCoin = [
        "Tether",
        // "USDC",
        "Ethereum",
        "BNB",
        "Bitcoin",
        // "BUSD",
    ]

    return (
        <div className='w-full h-full flex flex-col gap-6 bg-white'>
            
            {/* search bar container */}
            <div className='flex gap-5 w-full'>
                        
                {/* search bar */}
                <SearchInput />
            </div>

            {/* list container */}
            <div className='flex flex-col gap-[2px] pb-5'>

                {
                    loading?
                    <div className='flex bg-gray-50 rounded-md m-auto w-full h-[60vh] justify-center items-center'>
                        <Spin indicator={antIcon} />
                    </div>:
                    !isEmpty(data)?
                    <>
                        {
                            data.filter((currency)=>selectedCoin.includes(currency.name)).map((curr)=>(
                                
                                <MarketListCard
                                key={curr?.id}
                                imageUrl={"/images/dashboard/bitcoin.png"}
                                coinName={curr?.name}
                                coinPairText={`${curr?.symbol}/${curr?.convertCurrency}`}
                                hasAppreciated={curr.percentChange1h>=0}
                                changeInPercent={roundToN(curr.percentChange1h, 2)}
                                currentPrice={new Intl.NumberFormat('en-US').format(roundToN(curr?.price, 2).toLocaleString())} />

                            ))
                        }
                    </>: 
                    <div className='flex bg-gray-50 rounded-md w-full h-[60vh] justify-center items-center font-semibold text-xs'>
                        Nothing here!
                    </div>
                }
                
            </div>
        </div>
    )
}

export default MarketList