import React from 'react'
import TransactionCard from './TransactionCard'

const RecentTransactions = () => {
    return (
        <div className='w-full flex flex-col gap-4'>
            
            {/* title */}
            <div className='w-full flex items-center justify-between gap-2'>

                {/* caption */}
                <h3 className='text-black font-semibold text-base'>
                    Recent Transactions
                </h3>

                {/* see all */}
                <h4 className='font-semibold text-sm text-[#3A0CA3]'>
                    See all
                </h4>
            </div>

            {/* lists */}
            <div className='flex flex-col w-full gap-4'>

                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
            </div>
        </div>
    )
}

export default RecentTransactions