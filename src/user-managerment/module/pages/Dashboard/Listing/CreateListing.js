import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../../layouts/PageWrapper';
import { BackButton, PrimaryButton } from '../../../components/Button';
import { toast } from 'react-toastify';
import DrawerSelectInput from '../../../components/Dashboard/Portfolio/DrawerSelectInput';
import StrictWrapper from '../../../layouts/Drawer/StrictWrapper';
import AssetsListView from '../../../components/Dashboard/Portfolio/AssetsListView';
import { TextLabelInput } from '../../../components/Input';
import "../../../layouts/Drawer/index.css"
import Drawer from '../../../layouts/Drawer';

const CreateListing = () => {

    // DATA INITIALIZATION
    const navigate = useNavigate()


    // STATES
    const [isOpen, setIsOpen] = useState(false);
    const [listingData, setListingData] = useState({
        asset: "",
        receivingBank: ""
    })


    // HANDLERS
    const toggleDrawer = () => {
        setIsOpen(isOpen => !isOpen)
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
                <div className='w-[92%] h-full flex flex-col mx-auto gap-8'>

                    {/* text captions */}
                    <div className='flex flex-col w-full gap-2'>

                        <h3 className='text-2xl font-bold text-black'>
                            Create Listing
                        </h3>

                        <h4 className='text-sm font-normal text-[#645B75]'>
                            You can create wallet for on each supported network only once.
                        </h4>
                    </div>

                    <form
                    className="flex flex-col gap-5 w-full h-full pb-5"
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
                            value={listingData?.asset || "Select asset"}
                            onClick={toggleDrawer} />
                        </label>

                        {/* Rate-Fiat Value */}
                        <label className="flex flex-col gap-2 w-full">

                            {/* title */}
                            <span
                            className="font-normal text-xs text-black">
                                Rate-Fiat Value
                            </span>

                            {/* input field */}
                            <TextLabelInput
                            label={"NAIRA"}
                            placeholderText={"Enter amount"} />
                        </label>

                        {/* Minimum Transaction Limit */}
                        <label className="flex flex-col gap-2 w-full">

                            {/* title*/}
                            <span
                            className="font-normal text-xs text-black">
                                Minimum Transaction Limit
                            </span>

                            {/* input field */}
                            <TextLabelInput
                            label={"NAIRA"}
                            placeholderText={"Enter amount"} />
                        </label>

                        {/* Maximum Transaction Limit */}
                        <label className="flex flex-col gap-2 w-full">

                            {/* title */}
                            <span
                            className="font-normal text-xs text-black">
                                Maximum Transaction Limit
                            </span>

                            {/* input field */}
                            <TextLabelInput
                            label={"NAIRA"}
                            placeholderText={"Enter amount"} />
                        </label>

                        {/* Listing Amount */}
                        <label className="flex flex-col gap-2 w-full">

                            {/* title */}
                            <span
                            className="font-normal text-xs text-black">
                                Listing Amount
                            </span>

                            {/* input field */}
                            <TextLabelInput
                            label={"NAIRA"}
                            placeholderText={"Enter amount"} />
                        </label>

                        {/* Receiving Bank */}
                        <label className="flex flex-col gap-2 w-full">

                            {/* label text */}
                            <span
                            className="font-normal text-xs text-black">
                                Receiving Bank
                            </span>

                            {/* input field */}
                            <DrawerSelectInput
                            value={listingData?.receivingBank || "Select receiving bank"} />
                        </label>

                        {/* container */}
                        <div className="flex w-full flex-col">

                            {/* continue button */}
                            <div className='w-full flex flex-col items-stretch'>
                                <PrimaryButton
                                onClick={()=>{
                                    toast.success("Listing created successful!")
                                    navigate("/listing")
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
                    setWalletData={setListingData} />
                </StrictWrapper>
            </Drawer>
        </PageWrapper>
    )
}

export default CreateListing