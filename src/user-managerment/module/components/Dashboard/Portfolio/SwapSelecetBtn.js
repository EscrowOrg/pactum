import { ArrowDown2 } from 'iconsax-react'
import React from 'react'

const SwapSelecetBtn = () => {
    return (
        <div
        className='flex items-center justify-between gap-1 border border-[#DAD7E0] bg-white rounded-xl py-4 px-3'>

            {/* coin image and name*/}
            <div className='inline-flex items-center gap-1'>

                {/* container */}
                <div className="inline-flex items-center gap-1">
                    <img
                    alt=""
                    src="/images/dashboard/bitcoin.png"
                    className='w-10 h-10' />

                    {/* text */}
                    <div className="inline-flex flex-col gap-[2px]">
                        <h3 className='text-sm font-semibold text-black'>
                            Bitcoin
                        </h3>

                        <h4 className='text-[#8D85A0] text-xs font-normal'>
                            BEP20
                        </h4>
                    </div>
                </div>

                <ArrowDown2
                variant='TwoTone'
                size={16}
                color='#ACA6BA' />
            </div>

            {/* label */}
            <div className='inline-flex items-center gap-1 text-sm font-semibold text-black'>
            0.897 | <span className='text-[#EB9B00]'>Max</span>
            </div>
        </div>
    )
}

export default SwapSelecetBtn