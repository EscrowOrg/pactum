import { useEffect, useState } from 'react'
import NoTransitionWrapper from '../../../components/Dashboard/Home/NoTransitionWrapper'
import { BackButton, PrimaryButton, WarningButton1 } from '../../../components/Button'
import { More, TransactionMinus } from 'iconsax-react'
import SelectInput from '../../../components/SelectInput';
import PercentageChange from '../../../components/Dashboard/Home/PercentageChange';
import ChartBox from '../../../components/Dashboard/Home/ChartBox';
import MyModal from '../../../layouts/MyModal';
import { Link, useNavigate } from 'react-router-dom';

const Overview = () => {

    // STATES
    const [coinSelect, setCoinSelect] = useState(null)
    const [modalIsOpen, setModalIsOpen] = useState(false)


    // HANDLERS
    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen)
    }


    // DATA INITIALIZATION
    const navigate = useNavigate()
    const coinOptions = [
        { value: 1, label: 'Bitcoin' },
        { value: 2, label: 'Ethereum' },
        { value: 3, label: 'Binance' },
        { value: 4, label: 'Litcoin' },
    ] 


    // SIDE EFFECTS
    useEffect(()=>{
        setCoinSelect(coinOptions[0])
    }, [])

    return (
        <NoTransitionWrapper>

            {/* container */}
            <div className="w-full h-full flex flex-col py-5 gap-8">

                {/* header */}
                <div className='flex items-center w-[92%] mx-auto justify-between'>

                    {/* back button */}
                    <BackButton />

                    {/* text */}
                    <h3 className='font-bold text-lg text-black'>
                        Overview
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

                    {/* coin */}
                    <div
                    className='w-full flex items-center justify-between'>

                        {/* select input */}
                        <div className='w-[60%] flex flex-col items-stretch'>
                            <SelectInput
                            isDisabled
                            value={coinSelect}
                            onChange={(e)=>setCoinSelect(e)}
                            options={coinOptions} />
                        </div>

                        {/* icon */}
                        <img
                        alt=''
                        src={"/images/dashboard/bitcoin.png"}
                        className='h-[40px] w-[40px]' />
                    </div>

                    {/* price and other information */}
                    <div className='flex items-center justify-between w-full gap-2'>

                        {/* price and percentage change */}
                        <div className='flex flex-col gap-1'>

                            {/* price */}
                            <h3 className='text-black text-base font-bold'>
                                $29, 850.15 
                            </h3>

                            {/* percentage change */}
                            <PercentageChange
                            hasAppreciated={true}
                            changePercentage={+2.56} />
                        </div>

                        {/* volume, low and high */}
                        <div className='flex items-center gap-3'>

                            {/* 24h volume */}
                            <div className='flex flex-col gap-[2px]'>

                                {/* title */}
                                <h3 className='text-[#ACA6BA] text-[10px] font-normal'>
                                    24h Volume
                                </h3>

                                {/* value */}
                                <h5 className='text-[#141217] font-normal text-xs'>
                                    $65B
                                </h5>
                            </div>

                            {/* 24h low */}
                            <div className='flex flex-col gap-[2px]'>

                                {/* title */}
                                <h3 className='text-[#ACA6BA] text-[10px] font-normal'>
                                    24h low
                                </h3>

                                {/* value */}
                                <h5 className='text-[#141217] font-normal text-xs'>
                                    $37,023
                                </h5>
                            </div>

                            {/* 24h high */}
                            <div className='flex flex-col gap-[2px]'>

                                {/* title */}
                                <h3 className='text-[#ACA6BA] text-[10px] font-normal'>
                                    24h High
                                </h3>

                                {/* value */}
                                <h5 className='text-[#141217] font-normal text-xs'>
                                    $38,023
                                </h5>
                            </div>
                        </div>
                    </div>

                    {/* Chart */}
                    <ChartBox />

                    {/* about: info */}
                    <div className='flex flex-col bg-gray-100 py-3 px-4 gap-6 rounded-lg w-full relative'>

                        {/* circles */}
                        <span className='absolute bottom-[50%] translate-y-[50%] right-[-1.2rem] rounded-[50%] bg-white h-[32px] w-[32px]' />
                        <span className='absolute bottom-[50%] translate-y-[50%] left-[-1.2rem] rounded-[50%] bg-white h-[32px] w-[32px]' />

                        {/* info */}
                        <div className='flex flex-col w-full gap-5 pb-7 [border-bottom:1px_dashed_#DAD7E0]'>

                            {/* info */}
                            <div className='flex items-center justify-between'>
                                <h3 className='font-normal text-xs text-[#8D85A0]'>
                                    Open
                                </h3>

                                <h3 className='text-black text-sm font-semibold'>
                                    $240
                                </h3>
                            </div>

                            {/* close */}
                            <div className='flex items-center justify-between'>
                                <h3 className='font-normal text-xs text-[#8D85A0]'>
                                    Close
                                </h3>

                                <h3 className='text-black text-sm font-semibold'>
                                    $240
                                </h3>
                            </div>

                            {/* market cap */}
                            <div className='flex items-center justify-between'>
                                <h3 className='font-normal text-xs text-[#8D85A0]'>
                                    Market Cap
                                </h3>

                                <h3 className='text-black text-sm font-semibold'>
                                    $400,000
                                </h3>
                            </div>
                        </div>

                        {/* about */}
                        <div className='w-full flex flex-col gap-2'>

                            {/* title */}
                            <h2 className='text-black text-sm font-bold'>
                                About Bitcoin
                            </h2>

                            {/* description */}
                            <h3 className='font-normal text-xs text-[#141217]'>
                                Lorem ipsum dolor sit amet consectetur. Lacus tellus urna nibh ornare quis ac odio viverra. Eu facilisis pellentesque suspendisse placerat eget mi enim lectus condimentum. Rutrum leo sit turpis in feugiat egestas sit.
                            </h3>
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
                            height='h-14'
                            onClick={()=>navigate("/home/overview/coin-buy-sell?id=2")}
                            text={"Sell BTC"} />

                            <PrimaryButton
                            height='h-14'
                            onClick={()=>navigate("/home/overview/coin-buy-sell?id=1")}
                            text={"Buy BTC"} />

                            <span
                            onClick={toggleModal} 
                            className='w-[56px] h-[56px] bg-[#F4EFFE] inline-flex rounded-[50%] items-center justify-center my-auto hover:bg-gray-300 cursor-pointer'>
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
        </NoTransitionWrapper>
    )
}

export default Overview