import React, { useEffect, useState } from 'react'
import { BackButton, PrimaryButton } from '../../../components/Button'
import PageWrapper from '../../../layouts/PageWrapper'
import { useNavigate, useParams } from 'react-router-dom'
import SelectInput from '../../../components/SelectInput'
import { TextLabelInput } from '../../../components/Input'
import { InfoCircle, ProfileCircle } from 'iconsax-react'
import useMakeReq from '../../../hooks/Global/useMakeReq'
import { getUserId } from '../../../../../serivce/cookie.service'
import { isEmpty } from '../../../helpers/isEmpty'
import { toast } from 'react-toastify'
import { GET_ASSETS_MAPPING, GET_SINGLE_ACCOUNT, TRANSFER_INTERNAL_USERS } from '../../../../../serivce/apiRoutes.service'
import EmptyDataComp from '../../../components/Global/EmptyDataComp'
import LoadingSpinner from '../../../components/Global/LoadingSpinner'
import DrawerSelectInput from '../../../components/Dashboard/Portfolio/DrawerSelectInput'
import StrictWrapper from '../../../layouts/Drawer/StrictWrapper'
import AssetsListView from '../../../components/Dashboard/Portfolio/AssetsListView'
import Drawer from '../../../layouts/Drawer'

const SendCoin = () => {

    // DATA INITIALIZATION
    const navigate = useNavigate()
    const modeOptions = [
        { value: 1, label: 'Internal User' },
        { value: 2, label: 'External User' },
    ]
    const {
        data: sendInternalUserData,
        isSuccessful: isSendInternalUserSuccess,
        error: isSendInternalUserError,
        loading: sendInternalUserLoading,
        makePostRequest,
    } = useMakeReq()
    const {
        data: walletAssetData,
        getLoading: getAssetLoading,
        makeGetRequest,
    } = useMakeReq()
    const { coinId } = useParams()
    const {
        data: walletInfoData,
        makeGetRequest: getWalletInfo,
    } = useMakeReq()


    // STATES
    const [isOpen, setIsOpen] = useState(false);
    const [amount, setAmount] = useState("")
    const [recipientId, setRecipientID] = useState("")
    const [walletInfo, setWalletInfo] = useState({})
    const [mode, setMode] = useState({
        value: 1,
        label: "Internal User"
    })
    const [assetList, setAssetList] = useState([])
    const [asset, setAsset] = useState({
        name: "",
        symbol: "",
        assetId: null,
        networkName: "",
        networkId: null,
        image: ""
    })


    // HANDLERS
    const disableBtn = () => {
        return !((asset.assetId && amount && recipientId && amount>0 ) || sendInternalUserLoading || (parseInt(amount) > walletInfo?.balalance?.availableBalance ))
    }
    const toggleDrawer = (value) => {
        setIsOpen(isOpen => !isOpen)
    }
    const handleSendToInternalUser = () => {

        // getting user ID
        const uId = getUserId()

        // payload
        // Internal Users Transfer
        const payload = mode.value===1?{
            "userIdentifier": recipientId,
            "senderUserId": uId,
            "amount": amount,
            "currency": asset.assetId,
            "network": asset.networkId
        }:

        // External Users Transfer
        mode.value===2?{
            "asset": asset.assetId,
            "address": recipientId,
            "amount": amount,
            "networkChain": asset.networkId,
            "userId": uId
        }:null

        makePostRequest(TRANSFER_INTERNAL_USERS, payload);
    }


    // SIDE EFFECTS
    useEffect(()=>{
        makeGetRequest(GET_ASSETS_MAPPING)
        getWalletInfo(`${GET_SINGLE_ACCOUNT}/${coinId}`)
    }, [])

    // get assets data
    useEffect(()=>{
        if(!isEmpty(walletAssetData)) {
            setAssetList(walletAssetData)
        }
    }, [walletAssetData])

    // populating data
    useEffect(()=>{
        if(!isEmpty(walletInfoData)) {
            setWalletInfo(walletInfoData?.data)
        }
    }, [walletInfoData])

    // create wallet feedback
    useEffect(()=>{
        if(!isEmpty(sendInternalUserData)) {
            if(isSendInternalUserSuccess===true) {
                toast.success(sendInternalUserData.message, {
                    toastId: "success1"
                })
                navigate("/portfolio")
            } else if(isSendInternalUserSuccess===false) {
                toast.error(sendInternalUserData.message, {
                    toastId: "error1"
                })
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sendInternalUserData, isSendInternalUserSuccess])

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
                {
                    getAssetLoading?
                    <LoadingSpinner
                    viewPortHeight='h-[80vh]' />:
                    !isEmpty(assetList)?
                    <div className='h-full w-full flex flex-col mx-auto gap-8'>
                        
                        {/* text captions */}
                        <div className='flex flex-col gap-2 w-[92%] mx-auto'>

                            <h3 className='text-2xl font-bold text-black'>
                                {isEmpty(walletInfo)?"":`Send ${walletInfo.currency}`}
                            </h3>

                            <h4 className='text-sm font-normal text-[#645B75]'>
                                Send {isEmpty(walletInfo)?"":walletInfo.currency} to crypto account.
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
                                onChange={(e)=>setMode(e)}
                                value={mode}
                                options={modeOptions} />
                            </label>

                            {/* Destination Address/user identifier */}
                            <label className="flex flex-col gap-2 w-[92%] mx-auto">

                                {/* label text */}
                                <span
                                className="font-normal text-xs text-black">
                                    {
                                        mode.value===1?
                                        "Recipient's Username":
                                        mode.value===2?
                                        "Destination Address":null
                                    }
                                </span>

                                {/* input field */}
                                <TextLabelInput
                                paddingRight="pr-[15%]"
                                value={recipientId}
                                onChange={(e)=>setRecipientID(e.target.value)}
                                label={<ProfileCircle
                                    variant='Bulk'
                                    size={22}
                                    color='#ACA6BA' />}
                                placeholderText={`${mode.value===1?"Enter recipient's username":mode.value===2?"Enter recipient's crypto address":null}`} />
                            </label>

                            {/* currency/asset*/}
                            <label className="flex flex-col gap-2 w-[92%] mx-auto">

                                {/* label text */}
                                <span
                                className="font-normal text-xs text-black">
                                    {
                                        mode.value===1?
                                        "Currency":
                                        mode.value===2?
                                        "Asset":
                                        null
                                    }
                                </span>

                                {/* input field */}
                                <DrawerSelectInput
                                value={
                                    asset?.name || 
                                   ( mode.value===1?
                                    "Select Currency":
                                    mode.value===2?
                                    "Select Asset":
                                    null)
                                }
                                onClick={toggleDrawer} />
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
                                        Balance{isEmpty(walletInfo)?"":`: ${walletInfo.balance.availableBalance}`}
                                    </h5>
                                </div>

                                {/* input field */}
                                <TextLabelInput
                                paddingRight='pr-[35%]'
                                value={amount}
                                onChange={(e)=>setAmount(e.target.value)}
                                label={<>{isEmpty(walletInfo)?"":`${walletInfo.currency} | `} <span className='text-[#EB9B00] font-semibold'>Max</span></>}
                                type='number'
                                placeholderText={"Type in Amount"} />

                                {/* bottom label */}
                                {
                                    mode?.value === 2?
                                    <h4 className='text-[#645B75] font-normal text-xs w-full text-center justify-center flex items-center gap-2'>
                                        Network fee: 0.00004 BTC
                                        <InfoCircle
                                        variant='Bulk'
                                        size={12}
                                        color="#ACA6BA" />
                                    </h4>
                                    :null
                                }
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

                                {/* send button */}
                                <div className='w-full flex flex-col items-stretch'>
                                    {
                                        parseFloat(amount) > parseFloat(walletInfo?.balance?.availableBalance)?
                                        <PrimaryButton
                                        onClick={handleSendToInternalUser}
                                        loading={sendInternalUserLoading}
                                        disabled={true}
                                        text={"Insufficent funds"} />:
                                        disableBtn()?
                                        <PrimaryButton
                                        onClick={handleSendToInternalUser}
                                        loading={sendInternalUserLoading}
                                        disabled={disableBtn()}
                                        text={"Send"} />:
                                        <PrimaryButton
                                        onClick={handleSendToInternalUser}
                                        loading={sendInternalUserLoading}
                                        text={`Send ${amount}${asset.symbol}`} />
                                    }
                                </div>
                            </div>
                        </form>
                    </div>:
                    <EmptyDataComp
                    viewPortHeight='h-[80vh]' />
                }
            </div>

            {/* Assets Drawer */}
            <Drawer
            isOpen={isOpen}
            onClose={toggleDrawer}
            position="bottom">

                {/* drawer content container */}
                <StrictWrapper
                title={"Assets"}
                closeDrawer={toggleDrawer}>

                    {/* Body content */}
                    <AssetsListView
                    assetList={assetList}
                    closeDrawer={toggleDrawer}
                    setAsset={setAsset} />
                </StrictWrapper>
            </Drawer>
        </PageWrapper>
    )
}

export default SendCoin