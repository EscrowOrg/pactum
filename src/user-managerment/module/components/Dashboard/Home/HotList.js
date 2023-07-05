import React, { useEffect, useState } from 'react'
import HotlistCard from './HotlistCard'
import Drawer from '../../../layouts/Drawer'
import "../../../layouts/Drawer/index.css"
import StrictWrapper from '../../../layouts/Drawer/StrictWrapper'
import HotlistDrawerView from './HotlistDrawerView'
import useMakeReq from '../../../hooks/Global/useMakeReq'
import { isEmpty } from '../../../helpers/isEmpty'
import { GET_COIN_MARKETS } from '../../../../../serivce/apiRoutes.service'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import { roundToN } from '../../../helpers/roundToN'

// ant icon
const antIcon = (
    <LoadingOutlined
    style={{
        fontSize: 26,
        color: '#3A0CA3'
    }}
    spin />
)

const HotList = () => {

    // DATA INITIALIZATION
    const selectedCoin = [
        // "tether",
        // "usd-coin",
        "ethereum",
        "binancecoin",
        "bitcoin",
        // "binance-usd",
    ]
    const {
        data,
        getLoading,
        makeGetRequest
    } = useMakeReq()


    // STATES
    const [isOpen, setIsOpen] = useState(false);
    const [cryptoAssets, setCryptoAssets] = useState([])


    // HANDLERS
    const toggleDrawer = (value) => {
        // value?setIsOpen(value):setIsOpen(isOpen => !isOpen)
        setIsOpen(isOpen => !isOpen)
    }


    // SIDE EFFECTS
    useEffect(()=>{
        makeGetRequest(GET_COIN_MARKETS)
    }, [])

    useEffect(()=>{
        if(!isEmpty(data)) {
            setCryptoAssets(data)
        }
    }, [data])

    return (
        <div className='w-full flex flex-col gap-4'>
            
            {/* title */}
            <div className='w-full flex items-center justify-between py-[16px_4px]'>

                {/* caption */}
                <h3 className='text-black font-semibold text-base'>
                    Hot List 🔥
                </h3>

                {/* see all */}
                <h4
                onClick={toggleDrawer} 
                className='font-semibold text-sm text-[#3A0CA3] cursor-pointer hover:opacity-80'>
                    See all
                </h4>
            </div>

            <div className='w-full'>

                {
                    getLoading?
                    <div className='flex bg-gray-50 rounded-md m-auto w-full h-[25vh] justify-center items-center'>
                        <Spin indicator={antIcon} />
                    </div>:
                    !isEmpty(cryptoAssets)?
                    <div className='w-full grid grid-flow-col grid-rows-[auto_auto] overflow-x-auto gap-4'>
                        {
                            cryptoAssets?.filter((currency)=>selectedCoin.includes(currency.id))?.map((curr)=>(
                                
                                <HotlistCard
                                key={curr?.id}
                                pathId={curr?.id}
                                imageUrl={curr?.image}
                                currencyName={curr?.name}
                                currentValue={new Intl.NumberFormat('en-US').format(roundToN(curr?.current_price, 2))}
                                hasAppreciated={curr?.price_change_percentage_1h_in_currency>0}
                                changePercentage={roundToN(curr?.price_change_percentage_1h_in_currency, 2)} />
                            ))
                        }
                    </div>: 
                    <div className='flex bg-white rounded-md w-full h-[25vh] justify-center items-center font-semibold text-xs'>
                        Nothing here!
                    </div>
                }

            </div>

            {/* Drawer */}
            <Drawer
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            position="bottom">

                {/* drawer content container */}
                <StrictWrapper
                title={"Markets"}
                closeDrawer={() => setIsOpen(false)}>

                    {/* Body content */}
                    <HotlistDrawerView />                    
                </StrictWrapper>
            </Drawer>
        </div>
    )
}

export default HotList