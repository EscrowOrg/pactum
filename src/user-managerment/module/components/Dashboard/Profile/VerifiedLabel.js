import React from 'react'

const VerifiedLabel = () => {
    return (
        <span className='inline-flex items-center gap-[2px] bg-[#10B981] rounded-2xl px-2 text-xs font-normal text-[#ECFDF5] h-[27px]'>
            <img
            alt=""
            src="/images/dashboard/verified-check.png"
            className='w-[14px]' />
            Verified
        </span>
    )
}

export default VerifiedLabel