import React, { useState } from 'react'
import HotlistCard from './HotlistCard'
import Drawer from '../../../layouts/Drawer'
import "../../../layouts/Drawer/index.css"
import StrictWrapper from '../../../layouts/Drawer/StrictWrapper'
import HotlistDrawerView from './HotlistDrawerView'

const HotList = () => {

    // STATES
    const [isOpen, setIsOpen] = useState(false);

    // HANDLERS
    const toggleDrawer = (value) => {
        // value?setIsOpen(value):setIsOpen(isOpen => !isOpen)
        setIsOpen(isOpen => !isOpen)
    }

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

            {/* cards */}
            <div className='w-full grid grid-flow-col grid-rows-[auto_auto] overflow-x-auto gap-4'>

                <HotlistCard
                imageUrl={"/images/dashboard/bitcoin.png"}
                currencyName={"Bitcoin"}
                currentValue={28604.60}
                hasAppreciated={true}
                changePercentage={+5.73} />

                <HotlistCard
                imageUrl={"/images/dashboard/ethereum.png"}
                currencyName={"Ethereum"}
                currentValue={1954.20}
                hasAppreciated={false}
                changePercentage={-12.42} />

                <HotlistCard
                imageUrl={"/images/dashboard/binance.png"}
                currencyName={"Binance"}
                currentValue={0.9998}
                hasAppreciated={false}
                changePercentage={-4.17} />

                <HotlistCard
                imageUrl={"/images/dashboard/litcoin.png"}
                currencyName={"Litcoin"}
                currentValue={89.92}
                hasAppreciated={true}
                changePercentage={+2.56} />

                <HotlistCard
                imageUrl={"/images/dashboard/bitcoin.png"}
                currencyName={"Bitcoin"}
                currentValue={28604.60}
                hasAppreciated={true}
                changePercentage={+5.73} />

                <HotlistCard
                imageUrl={"/images/dashboard/ethereum.png"}
                currencyName={"Ethereum"}
                currentValue={1954.20}
                hasAppreciated={false}
                changePercentage={-12.42} />

                <HotlistCard
                imageUrl={"/images/dashboard/binance.png"}
                currencyName={"Binance"}
                currentValue={0.9998}
                hasAppreciated={false}
                changePercentage={-4.17} />

                <HotlistCard
                imageUrl={"/images/dashboard/litcoin.png"}
                currencyName={"Litcoin"}
                currentValue={89.92}
                hasAppreciated={true}
                changePercentage={+2.56} />
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