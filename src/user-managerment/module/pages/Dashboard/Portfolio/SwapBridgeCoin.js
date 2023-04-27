import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageWrapper from '../../../layouts/PageWrapper'
import { BackButton, PrimaryButton } from '../../../components/Button'
import { ArrowSwapVertical, TransactionMinus } from 'iconsax-react'
import "./swapbridgecoin.scss"
import SwapSelecetBtn from '../../../components/Dashboard/Portfolio/SwapSelecetBtn'
import SwapCoinView from '../../../components/Dashboard/Portfolio/SwapCoinView'
import BridgeCoinView from '../../../components/Dashboard/Portfolio/BridgeCoinView'

const SwapBridgeCoin = () => {

    
    // STATES
    const [action, setAction] = useState(1)


    // DATA INTIALIZATION
    const navigate = useNavigate()

    return (
        <PageWrapper>
            <div className="w-full h-full flex flex-col py-5 gap-16 bg-[#FAFAFB]">

                {/* header */}
                <div className='flex items-center w-[92%] mx-auto justify-between'>

                    {/* back button */}
                    <BackButton />

                    {/* text */}
                    <div className='flex items-center gap-6'>
                        <h3
                        onClick={()=>setAction(1)} 
                        className={`cursor-pointer font-bold pb-2 text-lg ${action===1?"active-swap-class":"text-[#C3BFCD]"}`}>
                            Swap
                        </h3>

                        <h3
                        onClick={()=>setAction(2)} 
                        className={`cursor-pointer font-bold pb-2 text-lg ${action===2?"active-bridge-class":"text-[#C3BFCD]"}`}>
                            Bridge
                        </h3>
                    </div>

                    {/* transaction list button */}
                    <button
                    className="px-3 py-3 w-fit border border-[#DAD7E0] bg-[#FAFAFB] inline-flex items-center justify-center rounded-xl cursor-pointer hover:bg-gray-200">
                        <TransactionMinus
                        size="14"
                        color="#16053D" />
                    </button>
                </div>
                
                {/* body */}
                <div className='flex flex-col mx-auto gap-5 w-[92%] h-full'>

                    {
                        action===1?
                        <SwapCoinView />:
                        action===2?
                        <BridgeCoinView />:
                        <></>
                    }
                    
                </div>
            </div>
        </PageWrapper>
    )
}

export default SwapBridgeCoin