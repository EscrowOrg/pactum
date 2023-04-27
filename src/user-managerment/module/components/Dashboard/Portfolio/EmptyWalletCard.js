import React from 'react'
import { InfoButton } from '../../../components/Button'
import { useNavigate } from 'react-router-dom'

const EmptyWalletCard = () => {

    // DATA INITIALIZATION
    const navigate = useNavigate()

    return (
        <div className='w-full flex flex-col gap-6 items-center'>

            {/* image */}
            <img
            src="/images/dashboard/empty-portf.png"
            alt=""
            className='w-[171px]' />

            {/* texts */}
            <div className='flex flex-col items-center gap-2'>
                <h3 className='text-black font-bold text-lg text-center'>
                    No wallet has been created
                </h3>

                <h4 className='font-normal text-sm text-[#645B75] text-center'>
                    Wallets are used to store your assets, you can new wallets per network.
                </h4>
            </div>

            {/* button */}
            <div className='flex flex-col items-stretch w-full'>
                <InfoButton
                onClick={()=>navigate("/portfolio/create-wallet")}
                text="Create Wallet" />
            </div>
        </div>
    )
}

export default EmptyWalletCard