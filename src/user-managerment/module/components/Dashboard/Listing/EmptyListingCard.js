import React from 'react'

const EmptyListingCard = () => {
    return (
        <div className='w-[92%] mx-auto flex flex-col gap-6 items-center'>

            {/* image */}
            <img
            src="/images/dashboard/empty-transaction.png"
            alt=""
            className='w-[120px]' />

            {/* texts */}
            <div className='flex flex-col items-center gap-2 w-[80%]'>
                <h3 className='text-black font-bold text-lg text-center'>
                    No listing has been created
                </h3>

                <h4 className='font-normal text-sm text-[#645B75] text-center'>
                    You are yet to create any listing. You can create as many listings for an asset.
                </h4>
            </div>
        </div>
    )
}

export default EmptyListingCard