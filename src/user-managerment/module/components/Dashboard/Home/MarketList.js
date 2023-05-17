import { useState, useEffect } from 'react'
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

    // STATES
    const [assetData, setAssetData] = useState([])
    const [searchInput, setSearchInput] = useState("")


    // DATA INITIALIZATION
    const selectedCoin = [
        "tether",
        "usd-coin",
        "ethereum",
        "binancecoin",
        "bitcoin",
        "binance-usd",
    ]


    // SIDE EFFECTS
    useEffect(()=>{
        setAssetData(data?.filter((currency)=>selectedCoin.includes(currency.id)))
    }, [data])

    return (
        <div className='w-full h-full flex flex-col gap-6 bg-white'>
            
            {/* search bar container */}
            <div className='flex gap-5 w-full'>
                        
                {/* search bar */}
                <SearchInput
                value={searchInput}
                onChange={(e)=>setSearchInput(e.target.value)} />
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
                            assetData.filter((asset)=>asset?.name.toLowerCase()?.includes(searchInput?.toLowerCase()))?.map((curr)=>(
                                
                                <MarketListCard
                                key={curr?.id}
                                imageUrl={curr?.image}
                                coinName={curr?.name}
                                coinPairText={`${curr?.symbol?.toUpperCase()}/USD`}
                                hasAppreciated={curr?.price_change_percentage_1h_in_currency>0}
                                changeInPercent={roundToN(curr?.price_change_percentage_1h_in_currency, 2)}
                                currentPrice={new Intl.NumberFormat('en-US').format(roundToN(curr?.current_price, 2))} />

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