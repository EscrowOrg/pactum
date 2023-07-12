import { TransactionMinus } from 'iconsax-react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AUTH_GET_ASSETS_ACCOUNTS, CREATE_BUY_SESSION, GET_ADLISTING_DETAILS } from '../../../../../serivce/apiRoutes.service'
import { getUserId } from '../../../../../serivce/cookie.service'
import { BackButton, PrimaryButton } from '../../../components/Button'
import LoadingSpinner from '../../../components/Global/LoadingSpinner'
import { TextLabelInput } from '../../../components/Input'
import SelectInput from '../../../components/SelectInput'
import { getAssetLabel } from '../../../helpers/getAssetLabel'
import { isEmpty } from '../../../helpers/isEmpty'
import { roundToN } from '../../../helpers/roundToN'
import useMakeReq from '../../../hooks/Global/useMakeReq'
import PageWrapper from '../../../layouts/PageWrapper'

const BuyCoin = () => {

    // DATA INITIALIZATION
    const navigate = useNavigate()
    const {coinId} = useParams()
    const [searchParams] = useSearchParams();
    const assetId = searchParams?.get("asset")
    const { data,  getLoading, makeAuthGetReq, isSuccessful } = useMakeReq();
    const { 
        data: listingAdData,
        makeAuthGetReq: getListingAds,
        getLoading: isgetLIstingAdsLoading
    } = useMakeReq();
    const { 
        data: buyAssetData, 
        loading: isBuyLoading,  
        makePostRequest, 
        isSuccessful: isBuySuccess,
        error: buyError 
    } = useMakeReq();


    // STATES
    const [assetAccounts, setAssetAccounts] = useState([])
    const [singleListing, setSingleListing] = useState(null)
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
    const handleSubmit = () => {
        const uId = getUserId()
        makePostRequest(CREATE_BUY_SESSION,
            {
                userId: uId,
                adId: coinId,
                amount: formData.amount
            }
        )
    }

    // SIDE EFFECTS
    // get wallets
    useEffect(()=>{
        const uId = getUserId()
        makeAuthGetReq(`${AUTH_GET_ASSETS_ACCOUNTS}/${uId}&USD`)
    }, [])
    useEffect(()=>{
    if(!isEmpty(data)) {
        if(isSuccessful) {
            setAssetAccounts(data?.data?.map((wallet, index)=>({
                value: index+1,
                label: `${wallet?.currency} - $${roundToN(wallet?.fiatValue, 1)}`,
            })))
        }
    }
    }, [data, isSuccessful])

    // get ad details
    useEffect(()=>{
        getListingAds(`${GET_ADLISTING_DETAILS}/${coinId}`)
    }, [])
    useEffect(()=>{
    if(!isEmpty(listingAdData?.data)) {
        setSingleListing(listingAdData?.data)
    }
    }, [listingAdData])

    // creating buy order
    useEffect(()=>{
        if(!isEmpty(buyAssetData)) {
            if(isBuySuccess===true) {
                toast.success(buyAssetData?.message || "Purchase was successful!")
                navigate(`/home/buy-coin/${coinId}/order-statement`, {
                    replace: true
                })
            } else if(isBuySuccess===false) {
                toast.error(buyAssetData?.message || "Couldn't make the purchase")
            }
        }
    }, [buyAssetData, isBuySuccess])
    useEffect(()=>{
        if(buyError) {
            toast.error(buyError || "Couldn't make the purchase")
        }
    }, [buyError])
    
    return (
        <PageWrapper>
            <div className="w-full h-full flex flex-col py-5 gap-8">

                {/* header */}
                <div className='flex items-center w-[92%] mx-auto justify-between'>

                    {/* back button */}
                    <BackButton />

                    {/* text */}
                    <h3 className='font-bold text-lg text-black'>
                        Buy {getAssetLabel(+assetId)}
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
                            isDisabled={getLoading}
                            options={assetAccounts} />
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
                            type='number'
                            value={formData.amount}
                            onChange={handleChange}
                            placeholderText={"Enter amount"} />
                        </label>

                        {/* transaction details */}
                        {
                            isgetLIstingAdsLoading?
                            <LoadingSpinner
                            viewPortHeight="h-[20vh]" />:
                            !isEmpty(singleListing) ? 
                            <>
                                <div className='flex items-center w-full justify-center text-sm'>

                                    <div className='font-normal text-[#ACA6BA]'>
                                        Trade price: <span className='text-[#141217] font-semibold'>₦{singleListing?.tradePrice}</span>
                                    </div>

                                    {/* circle */}
                                    {/* <div className="flex items-center text-[#DAD7E0] gap-1">
                                        <RefreshCircle
                                        variant='TwoTone'
                                        size={24}
                                        color="#16053D" />
                                    </div>

                                    <div className='font-normal text-[#ACA6BA]'>
                                        You will receive: <span className='text-[#141217] font-semibold'>0.844BTC</span>
                                    </div> */}
                                </div>

                                {/* summary */}
                                <div className='w-full border border-[#F5F3F6] rounded-lg flex flex-col gap-6 py-3 px-4 bg-[#FAFAFB]'>

                                    {/* payment timeframe */}
                                    <div className="flex items-center justify-between w-full">
                                        <h3 className='font-normal text-xs text-[#8D85A0]'>
                                            Payment Timeframe
                                        </h3>

                                        <h3 className='font-semibold text-sm text-black'>
                                            {singleListing?.timeFrame} min
                                        </h3>
                                    </div>

                                    {/* min-max order */}
                                    <div className="flex items-center justify-between w-full">
                                        <h3 className='font-normal text-xs text-[#8D85A0]'>
                                            Min - Max Order
                                        </h3>

                                        <h3 className='font-semibold text-sm text-black'>
                                            {`₦${singleListing.lowerLimit}`} - {`₦${singleListing.upperLimit}`}
                                        </h3>
                                    </div>

                                    {/* available order */}
                                    <div className="flex items-center justify-between w-full">
                                        <h3 className='font-normal text-xs text-[#8D85A0]'>
                                            Available Order
                                        </h3>

                                        <h3 className='font-semibold text-sm text-black'>
                                            {`${singleListing.availableBalance}${getAssetLabel(+assetId)}`}
                                        </h3>
                                    </div>
                                </div>
                            </>:
                            <></>
                        }

                        {/* container */}
                        <div className="flex w-full flex-col mt-auto">

                            {/* continue button */}
                            <div className='w-full flex flex-col items-stretch'>
                                <PrimaryButton
                                disabled={!formData.amount}
                                loading={isBuyLoading}
                                onClick={handleSubmit}
                                text={`Buy ${getAssetLabel(+assetId)}`} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </PageWrapper>
    )
}

export default BuyCoin