import { useState } from 'react'
import PageWrapper from '../../../layouts/PageWrapper'
import { BackButton, PrimaryButton, WarningButton1 } from '../../../components/Button'
import { More, TransactionMinus } from 'iconsax-react'
import { Link, useNavigate } from 'react-router-dom'
import MyModal from '../../../layouts/MyModal'
import CheckoutChartInfo from '../../../components/Dashboard/Portfolio/CheckoutChartInfo'

const Checkout = () => {

    // STATES
    const [coinSelect, setCoinSelect] = useState(null)
    const [modalIsOpen, setModalIsOpen] = useState(false)


    // HANDLERS
    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen)
    }


    // DATA INITIALIZATION
    const navigate = useNavigate()

    return (
        <PageWrapper>

            {/* container */}
            <div className="w-full h-full flex flex-col py-5 gap-8">

                {/* header */}
                <div className='flex items-center w-[92%] mx-auto justify-between'>

                    {/* back button */}
                    <BackButton />

                    {/* text */}
                    <h3 className='font-bold text-lg text-black'>
                        Bitcoin
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
                <div className='w-[92%] flex flex-col mx-auto gap-8 pb-32'>

                    {/* chart info */}
                    <CheckoutChartInfo />        
                    
                    {/* wallet info */}
                    <div className='flex flex-col w-full gap-5'>

                        {/* title */}
                        <h3 className='text-xs font-semibold text-[#8A8A8A]'>
                            BITCOIN WALLETS
                        </h3>

                        {/* content */}
                        <div className='flex flex-col gap-[2px] w-full'>

                            {/* first row */}
                            <div className='flex items-center justify-between w-full py-4 first:pt-0 border-b border-[#F5F3F6]'>

                                {/* left */}
                                <h3 className='text-black text-sm font-semibold'>
                                    BNB Smart Chain (BEP20)
                                </h3>

                                {/* right */}
                                <div className='flex flex-col gap-[2px] items-end'>
                                    <h3 className='text-sm font-semibold text-black'>
                                        66 BTC
                                    </h3>
                                    <h4 className='text-[#645B75] text-xs font-semibold'>
                                        $40 000.00
                                    </h4>
                                </div>
                            </div>

                            {/* second row */}
                            <div className='flex items-center justify-between w-full py-4 border-b border-[#F5F3F6]'>

                                {/* left */}
                                <h3 className='text-black text-sm font-semibold'>
                                    EOS
                                </h3>

                                {/* right */}
                                <div className='flex flex-col gap-[2px] items-end'>
                                    <h3 className='text-sm font-semibold text-black'>
                                        66 BTC
                                    </h3>
                                    <h4 className='text-[#645B75] text-xs font-semibold'>
                                        $40 000.00
                                    </h4>
                                </div>
                            </div>

                            {/* third row */}
                            <div className='flex items-center justify-between w-full py-4 border-b border-[#F5F3F6]'>

                                {/* left */}
                                <h3 className='text-black text-sm font-semibold'>
                                    Avax C-Chain
                                </h3>

                                {/* right */}
                                <div className='flex flex-col gap-[2px] items-end'>
                                    <h3 className='text-sm font-semibold text-black'>
                                        66 BTC
                                    </h3>
                                    <h4 className='text-[#645B75] text-xs font-semibold'>
                                        $40 000.00
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* bottom nav */}
                <div className='w-full fixed bottom-0 right-[50%] translate-x-[50%] [box-shadow:0_-7px_17px_rgba(0,0,0,.1126)] max-w-md bg-white'>

                    {/* container */}
                    <div className='w-[92%] mx-auto min-h-[75px] flex items-center justify-center'>

                        {/* buttons */}
                        <div className='w-full grid grid-cols-[35%_35%_20%] gap-3 justify-center bg-white py-4'>

                            <WarningButton1
                            height='h-[48px]'
                            // onClick={()=>navigate("/home/overview/coin-buy-sell?id=2")}
                            text={"Sell BTC"} />

                            <PrimaryButton
                            height='h-[48px]'
                            // onClick={()=>navigate("/home/overview/coin-buy-sell?id=1")}
                            text={"Buy BTC"} />

                            <span
                            onClick={toggleModal} 
                            className='w-[45px] h-[45px] bg-[#F4EFFE] inline-flex rounded-[50%] items-center justify-center my-auto hover:bg-gray-300 cursor-pointer'>
                                <More
                                variant='TwoTone'
                                size="24"
                                color='#3A0CA3' />
                            </span>
                        </div>   
                    </div>      
                </div>
            </div>

            {/* Modal */}
            <MyModal
            modalIsOpen={modalIsOpen}
            toggleModal={toggleModal}>
                <div className='w-full bg-white rounded-xl p-4 gap-6 flex flex-col'>

                    <Link
                    to="/home/overview/coin-buy-sell?id=2"
                    className='hover:no-underline text-black text-sm font-semibold'>
                        Send BTC
                    </Link>

                    <Link
                    to="/home/overview/coin-buy-sell?id=1"
                    className='hover:no-underline text-black text-sm font-semibold'>
                        Receive BTC
                    </Link>

                    <Link
                    to="#"
                    className='hover:no-underline text-black text-sm font-semibold'>
                        Swap BTC
                    </Link>
                </div>
            </MyModal>
        </PageWrapper>
    )
}

export default Checkout