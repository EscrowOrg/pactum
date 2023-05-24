import React from 'react'

const TransactionCard = ({
    Icon,
    transactionType,
    amount,
    asset,
    transactionMode,
    walletId
}) => {

    return (
        <div className='w-full flex items-center justify-between gap-3'>

            {/* icon and status */}
            <div className='inline-flex gap-3 items-center'>

                {/* icon label */}
                <span className='h-[40px] w-[40px] inline-flex items-center justify-center rounded-[50%] bg-[#FAFAFB]'>

                    {/* icon */}
                    {Icon}
                </span>

                {/* amount and status */}
                <div className='inline-flex flex-col gap-[2px]'>

                    <h3 className='text-sm font-semibold text-black'>
                        {`${transactionType}: ${amount} ${asset}`}
                    </h3>

                    {
                        transactionMode===1?
                        <span className='text-[#10B981] font-semibold text-xs'>
                            SUCCESS
                        </span>:
                        transactionMode===2?
                        <span className='text-[#D1292D] font-semibold text-xs'>
                            FAILED
                        </span>:
                        transactionMode===3?
                        <span className='text-[#EB9B00] font-semibold text-xs'>
                            PENDING
                        </span>:<></>
                    }
                </div>
            </div>

            {/* wallet amount and id */}
            <div className='inline-flex flex-col items-end gap-[2px]'>

                <h3 className='text-sm font-semibold text-black'>
                    {"$0.00"}
                </h3>

                <span className='text-[#645B75] font-semibold text-xs'>
                    {`Wallet ${walletId}`}
                </span>
            </div>
        </div>
    )
}

export default TransactionCard