import { ArrowDown, ArrowSwapHorizontal, ExportCurve, Gallery } from 'iconsax-react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AUTH_RECIEVE_CRYPTO } from '../../../../../serivce/apiRoutes.service'
import { getUserId } from '../../../../../serivce/cookie.service'
import { BackButton } from '../../../components/Button'
import EmptyDataComp from '../../../components/Global/EmptyDataComp'
import LoadingSpinner from '../../../components/Global/LoadingSpinner'
import { copyToClipBoard } from '../../../helpers/copyToClipboard'
import { isEmpty } from '../../../helpers/isEmpty'
import useMakeReq from '../../../hooks/Global/useMakeReq'
import PageWrapper from '../../../layouts/PageWrapper'

const ReceiveCoin = () => {

    // DATA INITIALIZATION
    const navigate = useNavigate()
    const { coinId } = useParams()
    const userId = getUserId()
    const {
        getLoading,
        data,
        makeAuthGetReq,
    } = useMakeReq()


    // STATES
    const [receiveInfo, setReceiveInfo] = useState({})


    // SIDE EFFECTS
    useEffect(()=>{
        makeAuthGetReq(`${AUTH_RECIEVE_CRYPTO}/${userId}&${coinId}`)
    }, [])

    // populating data
    useEffect(()=>{
        if(!isEmpty(data)) {
            setReceiveInfo(data?.data)
        }
    }, [data])


    return (
        <PageWrapper>

            {/* container */}
            <div className="w-full h-full flex flex-col py-5 gap-5">

                {/* header */}
                <div className='flex items-center w-[92%] mx-auto justify-between'>

                    {/* back button */}
                    <BackButton />
                </div>
                
                {
                    getLoading?
                    <LoadingSpinner
                    viewPortHeight="h-[95vh]" />:
                    !isEmpty(receiveInfo)?
                    <>

                        {/* body */}
                        <div className='h-full w-full flex flex-col mx-auto gap-8 pb-12'>
                            
                            {/* text captions */}
                            <div className='flex flex-col gap-2 w-[92%] mx-auto'>

                                <h3 className='text-2xl font-bold text-black'>
                                    Receive {receiveInfo.assetName}
                                </h3>

                                <h4 className='text-sm font-normal text-[#645B75]'>
                                    Recieve {receiveInfo.assetName} to crypto account.
                                </h4>
                            </div>

                            {/* arrow container */}
                            <div className='w-full flex items-center justify-center gap-4'>

                                {/* icon */}
                                <span className='inline-flex items-center justify-center h-[83px] w-[83px] rounded-[50%] bg-[#FAFAFB]'>
                                    <ArrowDown
                                    variant='TwoTone'
                                    color='#141217'
                                    size={38} />
                                </span>
                            </div>

                            {/* deposit and arrival information */}
                            <div className='mx-auto w-[92%] bg-[#FAFAFB] flex flex-col gap-6 border border-[#F5F3F6] rounded-lg py-3 px-4'>

                                {/* minimum deposit */}
                                <div className='flex w-full items-center justify-between'>
                                    <h3 className='font-normal text-xs text-[#8D85A0]'>
                                        Minimum Deposit
                                    </h3>

                                    <h4 className='text-sm font-semibold text-black'>
                                        {`>${receiveInfo.minimumDeposit} ${receiveInfo.assetName}`}
                                    </h4>
                                </div>

                                {/* expected arrival */}
                                <div className='flex w-full items-center justify-between'>
                                    <h3 className='font-normal text-xs text-[#8D85A0]'>
                                        Expected Arrival
                                    </h3>

                                    <h4 className='text-sm font-semibold text-black'>
                                        15 network confirmations
                                    </h4>
                                </div>
                            </div>
                            
                            {/* network */}
                            <div className='w-[92%] mx-auto flex flex-col gap-2'>

                                {/* title */}
                                <h4 className='text-black font-normal text-xs'>
                                    Network
                                </h4>

                                {/* network info */}
                                <div className='flex items-center justify-between py-3 px-2 w-full'>
                                    <h3 className='font-semibold text-sm text-black'>
                                        {receiveInfo.network}
                                    </h3>

                                    <ArrowSwapHorizontal
                                    variant="TwoTone"
                                    size={18}
                                    color="#292D32" />
                                </div>
                            </div>

                            {/* wallet address */}
                            <div className='p-6 flex flex-col gap-4 w-full bg-[#F5F3F6]'>

                                {/* address information */}
                                <div className='w-full flex-col flex gap-2'>

                                    {/* title */}
                                    <h4 className='text-xs font-normal text-black'>
                                        Bitcoin Wallet Address
                                    </h4>

                                    {/* copy container */}
                                    <div className='flex items-center justify-between py-3 px-2 bg-white gap-2 w-full  rounded-2xl'>

                                        {/* address */}
                                        <h5 className='w-[73%] break-words text-black font-semibold text-sm'>
                                            {receiveInfo.address}
                                        </h5>

                                        {/* copy button */}
                                        <span
                                        onClick={()=>copyToClipBoard(receiveInfo.address)}
                                        className='flex cursor-pointer hover:opacity-80 items-center justify-center bg-[#F4EFFE] rounded-[32px] py-2 px-4 text-sm text-[#3A0CA3] font-bold'>
                                            Copy
                                        </span>
                                    </div>
                                </div>

                                {/* share and save */}
                                <div className='flex items-center gap-4'>

                                    {/* share */}
                                    <div className='items-center flex flex-col gap-1'>

                                        {/* icon */}
                                        <span className='inline-flex items-center justify-center h-[48px] w-[48px] rounded-[50%] bg-white'>
                                            <ExportCurve
                                            variant='TwoTone'
                                            color='#000000'
                                            size={20} />
                                        </span>

                                        {/* text */}
                                        <h3 className='text-[#191D23] text-sm font-normal'>
                                            Share via...
                                        </h3>
                                    </div>

                                    {/* save */}
                                    <div className='items-center flex flex-col gap-1'>

                                        {/* icon */}
                                        <span className='inline-flex items-center justify-center h-[48px] w-[48px] rounded-[50%] bg-white'>
                                            <Gallery
                                            variant='TwoTone'
                                            color='#000000'
                                            size={20} />
                                        </span>

                                        {/* text */}
                                        <h3 className='text-[#191D23] text-sm font-normal'>
                                            Save Image
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>:
                    <EmptyDataComp
                    viewPortHeight="h-[95vh]" />
                }
            </div>
        </PageWrapper>
    )
}

export default ReceiveCoin