import React from 'react'

const TransactionList = ({transactionData}) => {
    return (
        <div className='flex flex-col gap-[2px] pb-5'>
            {
                transactionData && transactionData?.length!==0?
                transactionData.map((transactData, index)=>(
                    <div
                    key={index} 
                    className='w-full flex items-center justify-between gap-3 py-3 border-b border-[#F5F3F6]'>

                        {/* icon and status */}
                        <div className='inline-flex gap-3 items-center'>

                            {/* icon label */}
                            <span className='h-[40px] w-[40px] inline-flex items-center justify-center rounded-[50%] bg-[#FAFAFB]'>

                                {/* icon */}
                                {transactData.Icon}
                            </span>

                            {/* amount and status */}
                            <div className='inline-flex flex-col gap-[2px]'>

                                <h3 className='text-sm font-semibold text-black'>
                                    {`${transactData.type}: ${transactData.amount} ${transactData.coin}`}
                                </h3>
                                
                                {
                                    transactData.status==="SUCCESS"?
                                    <span className='text-[#10B981] font-semibold text-xs'>
                                        SUCCESS
                                    </span>:
                                    transactData.status==="FAILED"?
                                    <span className='text-[#D1292D] font-semibold text-xs'>
                                        FAILED
                                    </span>:
                                    transactData.status==="PENDING"?
                                    <span className='text-[#EB9B00] font-semibold text-xs'>
                                        PENDING
                                    </span>:<></>
                                }
                            </div>
                        </div>

                        {/* wallet amount and id */}
                        <div className='inline-flex flex-col items-end gap-[2px]'>

                            <h3 className='text-sm font-semibold text-black'>
                                {transactData.fiatEquiv}
                            </h3>

                            <span className='text-[#645B75] font-semibold text-xs'>
                                {transactData.walletType}
                            </span>
                        </div>
                    </div>
                )):
                <></>
            }
        </div>
    )
}

export default TransactionList