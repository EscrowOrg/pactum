import { MoneySend } from 'iconsax-react'
import React from 'react'

const TransactionCard = () => {
    return (
        <div className='w-full flex items-center justify-between gap-3'>

            {/* icon and status */}
            <div className='inline-flex gap-3 items-center'>

                {/* icon label */}
                <span className='h-[40px] w-[40px] inline-flex items-center justify-center rounded-[50%] bg-[#FAFAFB]'>

                    {/* icon */}
                    <MoneySend
                    size="24"
                    color="#A39CB2"
                    variant="Bulk" />
                </span>

                {/* amount and status */}
                <div className='inline-flex flex-col gap-[2px]'>

                    <h3 className='text-sm font-semibold text-black'>
                        Sent: 400 DOGE
                    </h3>

                    <span className='text-[#10B981] font-semibold text-xs'>
                        SUCCESS
                    </span>
                </div>
            </div>

            {/* wallet amount and id */}
            <div className='inline-flex flex-col items-end gap-[2px]'>

                <h3 className='text-sm font-semibold text-black'>
                    $102.38
                </h3>

                <span className='text-[#645B75] font-semibold text-xs'>
                    Wallet 1
                </span>
            </div>
        </div>
    )
}

export default TransactionCard