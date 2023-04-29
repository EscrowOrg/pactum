import { useState } from 'react'
import { BackButton, PrimaryButton, PrimaryButtonLight } from '../../../components/Button'
import { ArrowRight2, Copy, InfoCircle, TransactionMinus } from 'iconsax-react'
import PageWrapper from '../../../layouts/PageWrapper'
import { useNavigate } from 'react-router-dom'
import { copyToClipBoard } from '../../../helpers/copyToClipboard'

const SellOrderStatements = () => {

    // STATES
    const [isSelected, setIsSelected] = useState(false)

    // DATA INITIALIZATION
    const navigate = useNavigate()

    return (
        <PageWrapper>
            <div className="w-full h-full flex flex-col py-5 gap-8">

                {/* header */}
                <div className='flex items-center w-[92%] mx-auto justify-between'>

                    {/* back button */}
                    <BackButton />

                    {/* text */}
                    <div className='flex flex-col items-center'>
                        <h3 className='font-bold text-lg text-black'>
                            Order Statement
                        </h3>

                        <h3 className='text-xs font-normal text-[#141217]'>
                            Closes in <span className='text-[#D1292D] font-normal'>05:58</span>
                        </h3>
                    </div>

                    {/* transaction list button */}
                    <button
                    className="px-3 py-3 w-fit border border-[#DAD7E0] bg-[#FAFAFB] inline-flex items-center justify-center rounded-xl cursor-pointer hover:bg-gray-200">
                        <TransactionMinus
                        size="14"
                        color="#16053D" />
                    </button>
                </div>

                {/* important message */}
                <div className='flex items-start bg-[#F6FBFB] gap-2 py-2 px-6 w-full'>

                    {/* icon */}
                    <InfoCircle
                    variant='Bulk'
                    size={16}
                    color="#48A9A6" />

                    {/* text */}
                    <h4 className='w-[90%] font-normal text-sm text-[#1B3F3E]'>
                        Asset has been withdrawn to Pactum escrow, ensure to make payment of the exact amount in record time.
                    </h4>
                </div>

                {/* body */}
                <div className='w-[92%] h-full flex flex-col mx-auto gap-8 pb-5'>

                    {/* main info */}
                    <div className='flex flex-col gap-3 items-center w-full'>

                        <h5 className='font-normal text-sm text-[#645B75]'>
                            Amount to be received.
                        </h5>

                        <h3 className='text-[#3F9491] text-[32px] font-bold'>
                            ₦100,000.00
                        </h3>

                        <h3 className='bg-[#091515] py-2 px-3 font-semibold text-sm text-[#F6FBFB] rounded'>
                            You will be deducted 0.844BTC
                        </h3>
                    </div>

                    {/* summary details */}
                    {
                        !isSelected?
                        <div className='flex w-full flex-col gap-6'>

                            {/* info */}
                            <div className='flex flex-col w-full gap-5 bg-gray-100 py-3 px-4 rounded-lg'>

                                {/* receiving wallet */}
                                <div className='flex items-center justify-between'>
                                    <h3 className='font-normal text-xs text-[#8D85A0]'>
                                        Receiving Wallet
                                    </h3>

                                    <h3 className='text-black text-sm font-semibold'>
                                        $240
                                    </h3>
                                </div>

                                {/* price */}
                                <div className='flex items-center justify-between'>
                                    <h3 className='font-normal text-xs text-[#8D85A0]'>
                                        Price
                                    </h3>

                                    <h3 className='text-black text-sm font-semibold'>
                                        $240
                                    </h3>
                                </div>

                                {/* order id */}
                                <div className='flex items-center justify-between'>
                                    <h3 className='font-normal text-xs text-[#8D85A0]'>
                                        Order ID
                                    </h3>

                                    <h3 className='text-black text-sm font-semibold inline-flex items-center gap-2'>
                                        hfsbg4u9ui093u290u02

                                        <Copy
                                        onClick={()=>copyToClipBoard("hfsbg4u9ui093u290u02")} 
                                        variant='Bulk'
                                        size={16}
                                        color="#3F9491" />
                                    </h3>
                                </div>

                                
                                {/* username */}
                                <div className='flex items-center justify-between'>
                                    <h3 className='font-normal text-xs text-[#8D85A0]'>
                                        Buyer Username
                                    </h3>

                                    <h3 className='text-black text-sm font-semibold'>
                                        jhoellasemota
                                    </h3>
                                </div>
                            </div>

                            {/* Existing Bank details */}
                            <div className='flex items-center w-full bg-[#6D34F0]'>

                                {/* first cont */}
                                <div className='bg-[#6D34F0] flex flex-col gap-2 py-3 px-4 w-full'>

                                    <h5 className='text-[8px] font-normal text-[#D2C1FA]'>
                                        YOUR PAYMENT DETAILS
                                    </h5>

                                    <h5 className='font-bold text-base text-[#F4EFFE]'>
                                        First bank
                                    </h5>

                                    <h5 className='font-semibold text-[#F4EFFE] text-sm'>
                                        2682727911
                                    </h5>
                                </div>
                                <div
                                onClick={()=>setIsSelected(true)} 
                                className='flex items-center justify-center h-full w-16 bg-[rgba(255,255,255,.2)] cursor-pointer'>
                                    <ArrowRight2
                                    variant='TwoTone'
                                    size={10}
                                    color='#F4EFFE' />
                                </div>
                            </div>
                        </div>:
                        <div className='flex flex-col bg-gray-100 py-3 px-4 gap-6 rounded-lg w-full relative overflow-hidden'>

                            {/* circles */}
                            <span className='absolute bottom-[55%] translate-y-[45%] right-[-1.2rem] rounded-[50%] bg-white h-[32px] w-[32px]' />
                            <span className='absolute bottom-[55%] translate-y-[45%] left-[-1.2rem] rounded-[50%] bg-white h-[32px] w-[32px]' />

                            {/* info */}
                            <div className='flex flex-col w-full gap-5 pb-7 [border-bottom:1px_dashed_#DAD7E0]'>

                                {/* receiving wallet */}
                                <div className='flex items-center justify-between'>
                                    <h3 className='font-normal text-xs text-[#8D85A0]'>
                                        Receiving Wallet
                                    </h3>

                                    <h3 className='text-black text-sm font-semibold'>
                                        $240
                                    </h3>
                                </div>

                                {/* price */}
                                <div className='flex items-center justify-between'>
                                    <h3 className='font-normal text-xs text-[#8D85A0]'>
                                        Price
                                    </h3>

                                    <h3 className='text-black text-sm font-semibold'>
                                        $240
                                    </h3>
                                </div>

                                {/* order id */}
                                <div className='flex items-center justify-between'>
                                    <h3 className='font-normal text-xs text-[#8D85A0]'>
                                        Order ID
                                    </h3>

                                    <h3 className='text-black text-sm font-semibold inline-flex items-center gap-2'>
                                        hfsbg4u9ui093u290u02

                                        <Copy
                                        onClick={()=>copyToClipBoard("hfsbg4u9ui093u290u02")} 
                                        variant='Bulk'
                                        size={16}
                                        color="#3F9491" />
                                    </h3>
                                </div>
                            </div>

                            {/* bank details */}
                            <div className='flex flex-col w-full gap-5'>

                                {/* bank name */}
                                <div className='flex items-center justify-between'>
                                    <h3 className='font-normal text-xs text-[#8D85A0]'>
                                        Bank Name
                                    </h3>

                                    <h3 className='text-black text-sm font-semibold inline-flex items-center gap-2'>
                                        First Bank

                                        <Copy
                                        onClick={()=>copyToClipBoard("First Bank")} 
                                        variant='Bulk'
                                        size={16}
                                        color="#3F9491" />
                                    </h3>
                                </div>

                                {/* account number */}
                                <div className='flex items-center justify-between'>
                                    <h3 className='font-normal text-xs text-[#8D85A0]'>
                                        Account Number
                                    </h3>

                                    <h3 className='text-black text-sm font-semibold inline-flex items-center gap-2'>
                                        4890149295

                                        <Copy
                                        onClick={()=>copyToClipBoard("4890149295")} 
                                        variant='Bulk'
                                        size={16}
                                        color="#3F9491" />
                                    </h3>
                                </div>

                                {/* account name */}
                                <div className='flex items-center justify-between'>
                                    <h3 className='font-normal text-xs text-[#8D85A0]'>
                                        Account Name
                                    </h3>

                                    <h3 className='text-black text-sm font-semibold'>
                                        Asemota Joel
                                    </h3>
                                </div>

                                {/* user name */}
                                <div className='flex items-center justify-between'>
                                    <h3 className='font-normal text-xs text-[#8D85A0]'>
                                        User Name
                                    </h3>

                                    <h3 className='text-black text-sm font-semibold'>
                                        jhoellasemota
                                    </h3>
                                </div>
                            </div>
                        </div>
                    }

                    {/* buttons */}
                    <div className='mt-auto flex items-center gap-6 w-full'>

                        <div className='flex flex-col items-stretch w-[40%]'>
                            <PrimaryButtonLight
                            onClick={()=>navigate(-1)}
                            height="h-14"
                            text={"Cancel"} />
                        </div>

                        <div className='flex flex-col items-stretch w-[60%]'>
                            <PrimaryButton
                            onClick={()=>navigate("/home/sell-coin/success/kjfdkjfkdjkfdkjfkj")}
                            height="h-14"
                            text={"Transfer Done"} />
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}

export default SellOrderStatements