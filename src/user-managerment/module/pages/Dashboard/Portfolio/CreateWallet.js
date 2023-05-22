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
import { CREATE_NEW_ASSETS_ACCOUNTS, GET_ASSETS_MAPPING } from '../../../../../serivce/apiRoutes.service'
import { getUserId } from '../../../../../serivce/cookie.service'
import { isEmpty } from '../../../helpers/isEmpty'
import LoadingSpinner from '../../../components/Global/LoadingSpinner'
import EmptyDataComp from '../../../components/Global/EmptyDataComp'

const CreateWallet = () => {

    // DATA INITIALIZATION
    const navigate = useNavigate()
    const {
        data: createWalletData,
        isSuccessful: isCreateSuccess,
        error: isCreateError,
        loading: createWalletLoading,
        makePostRequest,
    } = useMakeReq()
    const {
        data: walletAssetData,
        getLoading: getAssetLoading,
        makeGetRequest,
    } = useMakeReq()


    // STATES
    const [isOpen, setIsOpen] = useState(false);
    const [assetList, setAssetList] = useState([])
    const [asset, setAsset] = useState({
        name: "",
        symbol: "",
        network: "",
        image: ""
    })


    // HANDLERS
    const toggleDrawer = (value) => {
        setIsOpen(isOpen => !isOpen)
    }
    const handleSubmit = () => {

        const uId = getUserId()

        makePostRequest(CREATE_NEW_ASSETS_ACCOUNTS,
            {
                "chain": +asset.network,
                "asset": +asset.symbol,
                "userId": uId
            }
        )
    }


    // SIDE EFFECTS
    useEffect(()=>{
        makeGetRequest(GET_ASSETS_MAPPING)
    }, [])

    // get assets data
    useEffect(()=>{
        if(!isEmpty(walletAssetData)) {
            setAssetList(walletAssetData)
        }
    }, [walletAssetData])

    // create wallet feedback
    useEffect(()=>{
        if(!isEmpty(createWalletData)) {
            if(isCreateSuccess===true) {
                navigate("/portfolio")
            } else if(isCreateSuccess===false) {
                toast.error(createWalletData.message)
            }
        }
    }, [createWalletData, isCreateSuccess])

    // create wallet error
    useEffect(()=>{
        if(isCreateError) {
            console.log(isCreateError)
        }
    }, [isCreateError])

    return (
        <PageWrapper>
            <div className="w-full h-full flex flex-col py-5 gap-8">

                {/* header */}
                <div className='flex items-center w-[92%] mx-auto'>

                    {/* back button */}
                    <BackButton />
                </div>
                
                {/* body */}
                {
                    getAssetLoading?
                    <LoadingSpinner
                    viewPortHeight='h-[80vh]' />:
                    !isEmpty(assetList)?
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
                                value={asset?.name || "Select asset"}
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
                                disabled={true}
                                value={asset.network || "Select"} />
                            </label>

                            {/* container */}
                            <div className="flex w-full flex-col mt-auto">

                                {/* continue button */}
                                <div className='w-full flex flex-col items-stretch'>
                                    <PrimaryButton
                                    loading={createWalletLoading}
                                    disabled={!asset.name || createWalletLoading}
                                    onClick={handleSubmit}
                                    text={"Create"} />
                                </div>
                            </div>
                        </form>
                    </div>
                    :<EmptyDataComp
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

export default CreateWallet