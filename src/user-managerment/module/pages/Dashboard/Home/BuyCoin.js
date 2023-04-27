import { useState } from 'react'
import PageWrapper from '../../../layouts/PageWrapper'
import { RefreshCircle, TransactionMinus } from 'iconsax-react'
import { BackButton, PrimaryButton } from '../../../components/Button'
import SelectInput from '../../../components/SelectInput'
import { TextLabelInput } from '../../../components/Input'
import { useNavigate } from 'react-router-dom'

const BuyCoin = () => {

    // DATA INITIALIZATION
    const navigate = useNavigate()
    const options = [
        { value: 1, label: 'Trust Wallet' },
        { value: 2, label: 'MetaMask' },
      ]


    // STATES
    const [formData, setFormData] = useState({
        amount: "",
    })


    // HANDLERS
    const  handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <PageWrapper>
            <div className="w-full h-full flex flex-col py-5 gap-8">

                {/* header */}
                <div className='flex items-center w-[92%] mx-auto justify-between'>

                    {/* back button */}
                    <BackButton />

                    {/* text */}
                    <h3 className='font-bold text-lg text-black'>
                        Buy BTC
                    </h3>

                    {/* transaction list button */}
                    <button
                    className="px-3 py-3 w-fit border border-[#DAD7E0] bg-[#FAFAFB] inline-flex items-center justify-center rounded-xl cursor-pointer hover:bg-gray-200">
                        <TransactionMinus
                        size="14"
                        color="#16053D" />
                    </button>
                </div>
                
                {/* body */}
                <div className='w-[92%] h-full flex flex-col mx-auto gap-8 pb-5'>

                    {/* form */}
                    <form
                    className="flex flex-col gap-5 w-full h-full"
                    onSubmit={(e) => e.preventDefault()}>

                        {/* wallet */}
                        <label className="flex flex-col gap-2 w-full">

                            {/* label text */}
                            <span
                            className="font-normal text-xs text-black">
                                Receiving Wallet
                            </span>

                            {/* input field */}
                            <SelectInput
                            options={options} />
                        </label>

                        {/* Company's email address container */}
                        <label className="flex flex-col gap-2 w-full">

                            {/* worth of assets in naira */}
                            <span
                            className="font-normal text-xs text-black">
                                Worth of Asset in Naira
                            </span>

                            {/* input field */}
                            <TextLabelInput
                            label={<>NAIRA | <span className='text-[#EB9B00] font-semibold'>Max</span></>}
                            name={"amount"}
                            value={formData.amount}
                            onChange={handleChange}
                            placeholderText={"Enter amount"} />
                        </label>

                        {/* transaction details */}
                        <div className='flex items-center w-full justify-between text-sm'>

                            <div className='font-normal text-[#ACA6BA]'>
                                Price: <span className='text-[#141217] font-semibold'>₦400</span>
                            </div>

                            {/* circle */}
                            <div className="flex items-center text-[#DAD7E0] gap-1">
                                <RefreshCircle
                                variant='TwoTone'
                                size={24}
                                color="#16053D" />
                            </div>

                            <div className='font-normal text-[#ACA6BA]'>
                                You will receive: <span className='text-[#141217] font-semibold'>0.844BTC</span>
                            </div>
                        </div>

                        {/* summary */}
                        <div className='w-full border border-[#F5F3F6] rounded-lg flex flex-col gap-6 py-3 px-4 bg-[#FAFAFB]'>

                            {/* payment timeframe */}
                            <div className="flex items-center justify-between w-full">
                                <h3 className='font-normal text-xs text-[#8D85A0]'>
                                    Payment Timeframe
                                </h3>

                                <h3 className='font-semibold text-sm text-black'>
                                    15 min
                                </h3>
                            </div>

                            {/* min-max order */}
                            <div className="flex items-center justify-between w-full">
                                <h3 className='font-normal text-xs text-[#8D85A0]'>
                                    Min - Max Order
                                </h3>

                                <h3 className='font-semibold text-sm text-black'>
                                    ₦2 000.00 - ₦230 000.00
                                </h3>
                            </div>

                            {/* available order */}
                            <div className="flex items-center justify-between w-full">
                                <h3 className='font-normal text-xs text-[#8D85A0]'>
                                    Available Order
                                </h3>

                                <h3 className='font-semibold text-sm text-black'>
                                    ₦100 000.00
                                </h3>
                            </div>
                        </div>

                        {/* container */}
                        <div className="flex w-full flex-col mt-auto">

                            {/* continue button */}
                            <div className='w-full flex flex-col items-stretch'>
                                <PrimaryButton
                                onClick={()=>navigate("/home/buy-coin/hdfhjdfkjdjfkdjfk/order-statement")}
                                text={"Buy BTC"} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </PageWrapper>
    )
}

export default BuyCoin