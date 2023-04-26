import React from 'react'
import { BackButton, PrimaryButton } from '../../../components/Button'
import PageWrapper from '../../../layouts/PageWrapper'
import { useNavigate } from 'react-router-dom'
import SelectInput from '../../../components/SelectInput'
import { TextLabelInput } from '../../../components/Input'
import { InfoCircle, ProfileCircle } from 'iconsax-react'

const SendCoin = () => {

    // DATA INITIALIZATION
    const navigate = useNavigate()
    const modeOptions = [
        { value: 1, label: 'first' },
        { value: 2, label: 'second' },
        { value: 3, label: 'third' },
    ]
    const networkOptions = [
        { value: 1, label: 'eos' },
        { value: 2, label: 'solana' },
        { value: 3, label: 'polygon' },
    ]

    return (
        <PageWrapper>

            {/* container */}
            <div className="w-full h-full flex flex-col py-5 gap-5">

                {/* header */}
                <div className='flex items-center w-[92%] mx-auto justify-between'>

                    {/* back button */}
                    <BackButton />
                </div>
                
                {/* body */}
                <div className='h-full w-full flex flex-col mx-auto gap-8'>
                    
                    {/* text captions */}
                    <div className='flex flex-col gap-2 w-[92%] mx-auto'>

                        <h3 className='text-2xl font-bold text-black'>
                            Send BTC
                        </h3>

                        <h4 className='text-sm font-normal text-[#645B75]'>
                            Send BTC to crypto account.
                        </h4>
                    </div>

                    {/* form container */}
                    <form
                    className="flex flex-col gap-5 w-full h-full pb-5"
                    onSubmit={(e) => e.preventDefault()}>

                        {/* mode */}
                        <label className="flex flex-col gap-2 w-[92%] mx-auto">

                            {/* label text */}
                            <span
                            className="font-normal text-xs text-black">
                                Mode
                            </span>

                            <SelectInput
                            options={modeOptions} />
                        </label>

                        {/* Destination Address */}
                        <label className="flex flex-col gap-2 w-[92%] mx-auto">

                            {/* label text */}
                            <span
                            className="font-normal text-xs text-black">
                                Destination Address
                            </span>

                            {/* input field */}
                            <TextLabelInput
                            label={<ProfileCircle
                                variant='Bulk'
                                size={22}
                                color='#ACA6BA' />}
                            name={"amount"}
                            placeholderText={"Enter recipient crypto address"} />
                        </label>

                        {/* network*/}
                        <label className="flex flex-col gap-2 w-[92%] mx-auto">

                            {/* label text */}
                            <span
                            className="font-normal text-xs text-black">
                                Network
                            </span>

                            <SelectInput
                            options={networkOptions} />
                        </label>

                        {/* Amount*/}
                        <label className="flex flex-col gap-2 w-[92%] mx-auto">

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

                        {/* important message */}
                        <div className='flex items-start bg-[#FAFAFB] gap-2 py-2 px-6 w-full'>

                            {/* icon */}
                            <InfoCircle
                            variant='Bulk'
                            size={16}
                            color="#ACA6BA" />

                            {/* text */}
                            <h4 className='w-[90%] font-normal text-sm text-[#1B3F3E]'>
                                Asset has been withdrawn to Pactum escrow, ensure to make payment of the exact amount in record time.
                            </h4>
                        </div>

                        {/* container */}
                        <div className="flex flex-col mt-8 w-[92%] mx-auto">

                            {/* continue button */}
                            <div className='w-full flex flex-col items-stretch'>
                                <PrimaryButton
                                text={"Send 400BTC"} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </PageWrapper>
    )
}

export default SendCoin