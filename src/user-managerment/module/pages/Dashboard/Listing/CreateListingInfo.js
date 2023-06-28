import React from 'react'
import PageWrapper from '../../../layouts/PageWrapper'
import { BackButton } from '../../../components/Button'

const CreateListingInfo = () => {
    return (
        <PageWrapper>
            <div className="w-full h-full flex flex-col py-5 gap-8">

                {/* header */}
                <div className="flex items-center w-[92%] mx-auto justify-between">

                    {/* back button */}
                    <BackButton />

                    {/* title */}
                    <h3 className='text-lg text-black font-bold'>
                        Info
                    </h3>

                    {/* emptyspace */}
                    <span
                    className='w-[7vw] h-[7vh]' />
                </div>

                {/* body */}
                <div className="w-[92%] h-full flex flex-col mx-auto gap-8">

                    {/* buy order */}
                    <div className='flex flex-col w-full gap-1'>

                        {/* title */}
                        <h4 className='text-sm text-black font-bold'>
                            BUY ORDER
                        </h4>

                        {/* description */}
                        <p className='text-xs font-normal text-[#645B75]'>
                            When you create a listing as a sell order, it will be advertised on the Peer2Peer sell page for sellers to see and make an order. In this case, you end up being the crypto buyer.
                        </p>
                    </div>

                    {/* sell order */}
                    <div className='flex flex-col w-full gap-1'>

                        {/* title */}
                        <h4 className='text-sm text-black font-bold'>
                            SELL ORDER
                        </h4>

                        {/* description */}
                        <p className='text-xs font-normal text-[#645B75]'>
                            When you create a listing as a buy order, it will be advertised on the Peer2Peer buy page for buyers to see and make an order. In this case, you end up being the crypto seller.
                        </p>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}

export default CreateListingInfo