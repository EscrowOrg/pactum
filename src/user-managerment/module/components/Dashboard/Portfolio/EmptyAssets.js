import React from 'react'

const EmptyAssets = () => {
    return (
        <div className='flex w-full items-center flex-col gap-6 pt-3'>

            {/* image */}
            <img
            alt=""
            src="/images/dashboard/empty-assets.png"
            className='w-[93px]' />

            {/* text */}
            <h4 className='font-normal text-sm text-[#645B75] text-center'>
                No asset found with that name.
            </h4>
        </div>
    )
}

export default EmptyAssets