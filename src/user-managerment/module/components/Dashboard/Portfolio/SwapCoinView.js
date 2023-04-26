import React from 'react'
import SwapSelecetBtn from './SwapSelecetBtn'
import { ArrowSwapVertical } from 'iconsax-react'
import { PrimaryButton } from '../../Button'

const SwapCoinView = () => {
    return (
        <div
        className="flex flex-col gap-8 w-full h-full">

            {/* From*/}
            <label className="flex flex-col gap-2 w-full mx-auto">

                {/* label text */}
                <div className='w-full flex items-center justify-between'>
                    <span
                    className="font-normal text-xs text-black">
                        From
                    </span>

                    <h5 className='text-[#645B75] text-xs font-normal'>
                        Balance: 2,300 BNB
                    </h5>
                </div>

                {/* input field */}
                <SwapSelecetBtn />
            </label>

            {/* icon */}
            <div className='w-full flex items-center py-1 justify-center'>
                <ArrowSwapVertical
                variant='TwoTone'
                size={20}
                color="#292D32" />
            </div>

            {/* To*/}
            <label className="flex flex-col gap-2 w-full mx-auto">

                {/* label text */}
                <div className='w-full flex items-center justify-between'>
                    <span
                    className="font-normal text-xs text-black">
                        To
                    </span>

                    <h5 className='text-[#645B75] text-xs font-normal'>
                        Balance: 2,300 BNB
                    </h5>
                </div>

                {/* input field */}
                <SwapSelecetBtn />
            </label>

            {/* container */}
            <div className="flex flex-col mt-auto w-full mx-auto">

                {/* continue button */}
                <div className='w-full flex flex-col items-stretch'>
                    <PrimaryButton
                    text={"Swap"} />
                </div>
            </div>
        </div>
    )
}

export default SwapCoinView