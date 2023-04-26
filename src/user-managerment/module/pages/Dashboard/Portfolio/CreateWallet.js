import { useState } from 'react'
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

const CreateWallet = () => {

    // DATA INITIALIZATION
    const navigate = useNavigate()


    // STATES
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false)
    const [walletData, setWalletData] = useState({
        asset: "",
        network: ""
    })


    // HANDLERS
    const toggleDrawer = (value) => {
        setIsOpen(isOpen => !isOpen)
    }
    const toggleDrawer2 = (value) => {
        setIsOpen2(isOpen2 => !isOpen2)
    }

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
                            value={walletData?.asset || "Select asset"}
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
                            value={walletData?.network || "Select network protocol"}
                            onClick={toggleDrawer2} />
                        </label>

                        {/* container */}
                        <div className="flex w-full flex-col mt-auto">

                            {/* continue button */}
                            <div className='w-full flex flex-col items-stretch'>
                                <PrimaryButton
                                onClick={()=>{
                                    toast.success("Wallet created successfully")
                                    navigate("/portfolio?isNewUser=false")
                                }}
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
                    setWalletData={setWalletData} />
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
                    setWalletData={setWalletData} />
                </StrictWrapper>
            </Drawer>
        </PageWrapper>
    )
}

export default CreateWallet