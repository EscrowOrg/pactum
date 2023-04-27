import React from 'react'
import { PrimaryButton } from '../../Button'
import SwapSelecetBtn from './SwapSelecetBtn'
import { InfoCircle } from 'iconsax-react'
import { TextLabelInput } from '../../Input'
import SelectInput from '../../SelectInput'

const BridgeCoinView = () => {

    // DATA INITIALIZATION
    const coinOptions = [
        { value: 1, label: 'BTC' },
        { value: 2, label: 'ETH' },
        { value: 3, label: 'BNB' },
    ]

    return (
        <div
        className="flex flex-col gap-8 w-full h-full">

            {/* select input */}
            <label className="flex flex-col gap-2 w-[50%]">
                <SelectInput
                isDisabled
                value={coinOptions[0]}
                options={coinOptions} />
            </label>
            
            {/* Amount*/}
            <label className="flex flex-col gap-2 w-full">

                {/* label text */}
                <div className='w-full flex items-center justify-between'>
                    <span
                    className="font-normal text-xs text-black">
                        Amount
                    </span>

                    <h5 className='text-[#645B75] text-xs font-normal'>
                        Balance: 2,300 BNB
                    </h5>
                </div>

                {/* input field */}
                <TextLabelInput
                label={<>NAIRA | <span className='text-[#EB9B00] font-semibold'>Max</span></>}
                name={"amount"}
                type='number'
                placeholderText={"Type in Amount"} />

                {/* bottom label */}
                <h4 className='text-[#645B75] font-normal text-xs w-full text-center justify-center flex items-center gap-2'>
                    Network fee: 0.00004 BTC
                    <InfoCircle
                    variant='Bulk'
                    size={12}
                    color="#ACA6BA" />
                </h4>
            </label>

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
                    text={"Bridge"} />
                </div>
            </div>
        </div>
    )
}

export default BridgeCoinView