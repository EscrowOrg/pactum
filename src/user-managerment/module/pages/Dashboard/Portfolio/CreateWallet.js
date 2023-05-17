import { useEffect, useState } from 'react'
import PageWrapper from '../../../layouts/PageWrapper'
import { BackButton, PrimaryButton } from '../../../components/Button'
import { useNavigate } from 'react-router-dom'

import StrictWrapper from '../../../layouts/Drawer/StrictWrapper'
import Drawer from '../../../layouts/Drawer'
import "../../../layouts/Drawer/index.css"
import AssetsListView from '../../../components/Dashboard/Portfolio/AssetsListView'
import DrawerSelectInput from '../../../components/Dashboard/Portfolio/DrawerSelectInput'
import NetworkListView from '../../../components/Dashboard/Portfolio/NetworkListView'
import { toast } from 'react-toastify'
import useMakeReq from '../../../hooks/Global/useMakeReq'
import { CREATE_NEW_ASSETS_ACCOUNTS } from '../../../../../serivce/apiRoutes.service'
import { getUserId } from '../../../../../serivce/cookie.service'
import { isEmpty } from '../../../helpers/isEmpty'

const CreateWallet = () => {

    // DATA INITIALIZATION
    const navigate = useNavigate()
    const {
        data,
        isSuccessful,
        error,
        loading,
        makePostRequest
    } = useMakeReq()


    // STATES
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false)
    const [asset, setAsset] = useState({
        title: "",
        value: ""
    })
    const [network, setNetwork] = useState({
        title: "",
        value: ""
    })


    // HANDLERS
    const toggleDrawer = (value) => {
        setIsOpen(isOpen => !isOpen)
    }
    const toggleDrawer2 = (value) => {
        setIsOpen2(isOpen2 => !isOpen2)
    }
    const handleSubmit = () => {

        const uId = getUserId()

        makePostRequest(CREATE_NEW_ASSETS_ACCOUNTS,
            {
                "chain": +network.value,
                "asset": +asset.value,
                "userId": uId
            }
        )
    }


    // SIDE EFFECTS
    useEffect(()=>{
        if(!isEmpty(data)) {
            if(isSuccessful===true) {
                navigate("/portfolio")
            } else if(isSuccessful===false) {
                toast.error(data.message)
            }
        }
    }, [data, isSuccessful])

    useEffect(()=>{
        if(error) {
            console.log(error)
        }
    }, [error])

    return (
        <PageWrapper>
            <div className="w-full h-full flex flex-col py-5 gap-8">

                {/* header */}
                <div className='flex items-center w-[92%] mx-auto'>

                    {/* back button */}
                    <BackButton />
                </div>
                
                {/* body */}
                <div className='w-[92%] h-full flex flex-col mx-auto gap-8 pb-5'>

                    {/* text captions */}
                    <div className='flex flex-col w-full gap-2'>

                        <h3 className='text-2xl font-bold text-black'>
                            Create Wallet
                        </h3>

                        <h4 className='text-sm font-normal text-[#645B75]'>
                            You can create wallet for on each supported network only once.
                        </h4>
                    </div>

                    <form
                    className="flex flex-col gap-5 w-full h-full"
                    onSubmit={(e) => e.preventDefault()}>

                        {/* assets */}
                        <label className="flex flex-col gap-2 w-full">

                            {/* label text */}
                            <span
                            className="font-normal text-xs text-black">
                                Assets
                            </span>

                            {/* input field */}
                            <DrawerSelectInput
                            value={asset?.title || "Select asset"}
                            onClick={toggleDrawer} />
                        </label>

                        {/* Company's email address container */}
                        <label className="flex flex-col gap-2 w-full">

                            {/* label text */}
                            <span
                            className="font-normal text-xs text-black">
                                Network
                            </span>

                            {/* input field */}
                            <DrawerSelectInput
                            value={network?.title || "Select network protocol"}
                            onClick={toggleDrawer2} />
                        </label>

                        {/* container */}
                        <div className="flex w-full flex-col mt-auto">

                            {/* continue button */}
                            <div className='w-full flex flex-col items-stretch'>
                                <PrimaryButton
                                loading={loading}
                                disabled={!asset.value || !network.value || loading}
                                onClick={handleSubmit}
                                text={"Create"} />
                            </div>
                        </div>
                    </form>
                </div>
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
                    closeDrawer={toggleDrawer}
                    setAsset={setAsset} />
                </StrictWrapper>
            </Drawer>

            {/* Assets Drawer */}
            <Drawer
            isOpen={isOpen2}
            onClose={toggleDrawer2}
            position="bottom">

                {/* drawer content container */}
                <StrictWrapper
                px='px-0'
                title={"Choose Network"}
                closeDrawer={toggleDrawer2}>

                    {/* Body content */}
                    <NetworkListView
                    closeDrawer={toggleDrawer2}
                    setNetwork={setNetwork} />
                </StrictWrapper>
            </Drawer>
        </PageWrapper>
    )
}

export default CreateWallet