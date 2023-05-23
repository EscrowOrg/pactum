import React from 'react'
import LoadingSpinner from '../../Global/LoadingSpinner'
import { isEmpty } from '../../../helpers/isEmpty'
import { ArrowSwapHorizontal, MoneyRecive, MoneySend, WalletAdd } from 'iconsax-react'

const TransactionList = ({transactionData, loading}) => {

    // DATA INITIALIZATION
    const iconLists = [

        // sent
        <MoneySend
        size="24" 
        color="#A39CB2" 
        variant="Bulk" />,

        // received
        <MoneyRecive
        size="24" 
        color="#A39CB2" 
        variant="Bulk" />,

        // swapped
        <ArrowSwapHorizontal
        size="24" 
        color="#A39CB2" 
        variant="Bulk" />,

        // Bought
        <WalletAdd
        size="24" 
        color="#A39CB2" 
        variant="Bulk" />,

        // Sold
        <WalletAdd
        size="24" 
        color="#A39CB2" 
        variant="Bulk" />,
    ]
    const statusList = [
        "SUCCESS",
        "FAILED",
        "PENDING",
    ]
    const transactionTypeList = [
        "Sent",
        "Received",
        "Swapped",
        "Bought",
        "Sold",
    ]

    return (
        <div className='flex flex-col h-full w-full gap-[2px] pb-5'>
            {   
                loading?
                <LoadingSpinner
                viewPortHeight='h-[70vh]' />:
                !isEmpty(transactionData)?
                    transactionData.map((transactData, index)=>(
                        <div
                        key={index} 
                        className='w-full flex items-center justify-between gap-3 py-3 border-b border-[#F5F3F6]'>

                            {/* icon and status */}
                            <div className='inline-flex gap-3 items-center'>

                                {/* icon label */}
                                <span className='h-[40px] w-[40px] inline-flex items-center justify-center rounded-[50%] bg-[#FAFAFB]'>

                                    {/* icon */}
                                    {iconLists[transactData.transactionType]}
                                </span>

                                {/* amount and status */}
                                <div className='inline-flex flex-col gap-[2px]'>

                                    <h3 className='text-sm font-semibold text-black'>
                                        {`${transactionTypeList[transactData.transactionType]}: ${transactData.amount} ${transactData.asset}`}
                                    </h3>
                                    
                                    {
                                        transactData.transactionMode===1?
                                        <span className='text-[#10B981] font-semibold text-xs'>
                                            SUCCESS
                                        </span>:
                                        transactData.transactionMode===2?
                                        <span className='text-[#D1292D] font-semibold text-xs'>
                                            FAILED
                                        </span>:
                                        transactData.transactionMode===3?
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
                                    {`Wallet ${transactData.virtualAccountId}`}
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