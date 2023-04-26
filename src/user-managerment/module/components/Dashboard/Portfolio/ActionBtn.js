import React from 'react'

const ActionBtn = ({
    Icon,
    text,
}) => {
    return (
        <div className='flex flex-col gap-[6px] items-center'>

            <span className='inline-flex items-center justify-center border border-[#D9EFEE] bg-[#F6FBFB] h-[52px] w-[52px] rounded-xl'>
                <Icon
                variant='Bulk'
                size={32}
                color='#3F9491' />
            </span>

            <h6 className='font-normal text-sm text-black text-center'>
                {text}
            </h6>
        </div>
    )
}

export default ActionBtn