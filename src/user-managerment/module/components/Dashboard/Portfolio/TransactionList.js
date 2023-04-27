import React from 'react'

const TransactionList = ({transactionData}) => {
    return (
        <div className='flex flex-col h-full w-full gap-[2px] pb-5'>
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
                <div className='flex h-full w-full items-center gap-8 justify-center flex-col mt-20'>

                    <img
                    alt=""
                    className='w-[120px]'
                    src='/images/dashboard/empty-transaction.png' />

                        <h3 className='font-normal text-sm text-[#645B75] w-full text-center'>
                        No record found.
                    </h3>
                </div>
            }
        </div>
    )
}

export default TransactionList