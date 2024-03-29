import { More } from 'iconsax-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AUTH_GET_SINGLE_ACCOUNT } from '../../../../../serivce/apiRoutes.service'
import { BackButton, PrimaryButton, TransactionsListButton, WarningButton1 } from '../../../components/Button'
import CheckoutChartInfo from '../../../components/Dashboard/Portfolio/CheckoutChartInfo'
import EmptyDataComp from '../../../components/Global/EmptyDataComp'
import LoadingSpinner from '../../../components/Global/LoadingSpinner'
import { isEmpty } from '../../../helpers/isEmpty'
import useMakeReq from '../../../hooks/Global/useMakeReq'
import MyModal from '../../../layouts/MyModal'
import PageWrapper from '../../../layouts/PageWrapper'

const Checkout = () => {

    // DATA INITIALIZATION
    const navigate = useNavigate()
    const { coinId } = useParams()
    const {
        getLoading,
        data,
        makeAuthGetReq,
    } = useMakeReq()
    const assetsLabels = {
        USDT: "tether",
        BTC: "bitcoin",
        ETH: "ethereum",
        BNB: "binancecoin"
    }


    // STATES
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [walletInfo, setWalletInfo] = useState({})


    // HANDLERS
    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen)
    }

    
    // SIDE EFFECTS
    useEffect(()=>{
        makeAuthGetReq(`${AUTH_GET_SINGLE_ACCOUNT}/${coinId}`)
    }, [])

    // populating data
    useEffect(()=>{
        if(!isEmpty(data)) {
            setWalletInfo(data?.data)
        }
    }, [data])

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
                        {isEmpty(walletInfo)?"":walletInfo.currency}
                    </h3>

                    {/* transaction list button */}
                    <TransactionsListButton />
                </div>

                {
                    getLoading?
                    <LoadingSpinner
                    viewPortHeight="h-[95vh]" />:
                    !isEmpty(walletInfo)?
                    <>
                
                        {/* body */}
                        <div className='w-[92%] flex flex-col mx-auto gap-8'>

                            {/* chart info */}
                            <CheckoutChartInfo />        
                            
                            {/* wallet info */}
                            <div className='flex flex-col w-full gap-5'>

                                {/* title */}
                                <h3 className='text-xs font-semibold text-[#8A8A8A]'>
                                    {`${walletInfo.currency} WALLETS`}
                                </h3>

                                {/* content */}
                                <div className='flex flex-col gap-[2px] w-full'>

                                    {/* first row */}
                                    {/* <div className='flex items-center justify-between w-full py-4 first:pt-0 border-b border-[#F5F3F6]'>

                                        <h3 className='text-black text-sm font-semibold'>
                                            BNB Smart Chain (BEP20)
                                        </h3>

                                        <div className='flex flex-col gap-[2px] items-end'>
                                            <h3 className='text-sm font-semibold text-black'>
                                                66 BTC
                                            </h3>
                                            <h4 className='text-[#645B75] text-xs font-semibold'>
                                                $40 000.00
                                            </h4>
                                        </div>
                                    </div> */}

                                    {/* second row */}
                                    {/* <div className='flex items-center justify-between w-full py-4 border-b border-[#F5F3F6]'>

                                        <h3 className='text-black text-sm font-semibold'>
                                            EOS
                                        </h3>

                                        <div className='flex flex-col gap-[2px] items-end'>
                                            <h3 className='text-sm font-semibold text-black'>
                                                66 BTC
                                            </h3>
                                            <h4 className='text-[#645B75] text-xs font-semibold'>
                                                $40 000.00
                                            </h4>
                                        </div>
                                    </div> */}

                                    {/* third row */}
                                    {/* <div className='flex items-center justify-between w-full py-4 border-b border-[#F5F3F6]'>

                                        <h3 className='text-black text-sm font-semibold'>
                                            Avax C-Chain
                                        </h3>

                                        <div className='flex flex-col gap-[2px] items-end'>
                                            <h3 className='text-sm font-semibold text-black'>
                                                66 BTC
                                            </h3>
                                            <h4 className='text-[#645B75] text-xs font-semibold'>
                                                $40 000.00
                                            </h4>
                                        </div>
                                    </div> */}

                                    {/* account balance */}
                                    <div className='flex items-center justify-between w-full py-4 border-b border-[#F5F3F6]'>

                                        {/* left */}
                                        <h3 className='text-black text-sm font-semibold'>
                                            Account Balance
                                        </h3>

                                        {/* right */}
                                        <h3 className='text-sm font-semibold text-black'>
                                            {`${walletInfo.balance.accountBalance} ${walletInfo.currency}`}
                                        </h3>
                                    </div>

                                    {/* available balance */}
                                    <div className='flex items-center justify-between w-full py-4 border-b border-[#F5F3F6]'>

                                        {/* left */}
                                        <h3 className='text-black text-sm font-semibold'>
                                            Available Balance
                                        </h3>

                                        {/* right */}
                                        <h3 className='text-sm font-semibold text-black'>
                                            {`${walletInfo.balance.availableBalance} ${walletInfo.currency}`}
                                        </h3>
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
                                    onClick={()=>navigate(`/home/overview/coin-buy-sell?id=1&asset=${assetsLabels[`${walletInfo.currency}`]}`)}
                                    text={"Sell BTC"} />

                                    <PrimaryButton
                                    height='h-[48px]'
                                    onClick={()=>navigate(`/home/overview/coin-buy-sell?id=2&asset=${assetsLabels[`${walletInfo.currency}`]}`)}
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
                    </>:
                    <EmptyDataComp
                    viewPortHeight="h-[95vh]" />
                }
            </div>

            {/* Modal */}
            <MyModal
            modalIsOpen={modalIsOpen}
            toggleModal={toggleModal}>
                <div className='w-full bg-white rounded-xl p-4 gap-6 flex flex-col'>

                    <Link
                    onClick={toggleModal}
                    to={`/portfolio/checkout/${Object.keys(assetsLabels).indexOf(walletInfo.currency) || 0}/send`}
                    className='hover:no-underline text-black text-sm font-semibold'>
                        Send BTC
                    </Link>

                    <Link
                    onClick={toggleModal}
                    to={`/portfolio/checkout/${Object.keys(assetsLabels).indexOf(walletInfo.currency) || 0}/receive`}
                    className='hover:no-underline text-black text-sm font-semibold'>
                        Receive BTC
                    </Link>

                    <Link
                    onClick={toggleModal}
                    to="/portfolio/swap-bridge"
                    className='hover:no-underline text-black text-sm font-semibold'>
                        Swap BTC
                    </Link>
                </div>
            </MyModal>
        </PageWrapper>
    )
}

export default Checkout