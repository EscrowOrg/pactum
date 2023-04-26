import { useState } from 'react'
import { PrimaryButton, PrimaryButtonLight } from '../../Button'
import { useNavigate } from 'react-router-dom'
import DrawerSelectInput from './DrawerSelectInput'
import { DatePicker, Radio } from 'antd';
import Drawer from '../../../layouts/Drawer';
import SlideWrapper from '../../../layouts/Drawer/SlideWrapper';
import StatusFilterView from './StatusFilterView';
import AssetsListView from './AssetsListView';
import AssetsPopup from './AssetsPopup';

const TransactionFilterView = ({closeDrawer}) => {

    // STATES
    const [isDrawer1Open, setIsDrawer1Open] = useState(false);
    const [isDrawer2Open, setIsDrawer2Open] = useState(false)
    const [filterData, setFilterData] = useState({
        status: "All",
        coins: "All"
    })


    // HANDLERS
    const toggleDrawer1 = () => {
        setIsDrawer1Open(isDrawer1Open => !isDrawer1Open)
    }
    const toggleDrawer2 = () => {
        setIsDrawer2Open(isDrawer2Open => !isDrawer2Open)
    }

    return (
        <div className='w-full h-full flex flex-col'>
            
            {/* form container */}
            <form
            className="flex flex-col gap-5 w-full h-full"
            onSubmit={(e) => e.preventDefault()}>
                
                {/* start and end date */}
                <div className='flex items-center w-full gap-5'>

                    {/* start date */}
                    <label className="flex flex-col gap-2 w-full">

                        {/* label text */}
                        <span
                        className="font-normal text-xs text-black">
                            Date from:
                        </span>

                        {/* input field */}
                        <DatePicker
                        className='h-14 rounded-xl text-base'
                        size={"large"} />
                    </label>

                    {/* start date */}
                    <label className="flex flex-col gap-2 w-full">

                        {/* label text */}
                        <span
                        className="font-normal text-xs text-black">
                            To:
                        </span>

                        {/* input field */}
                        <DatePicker
                        className='h-14 rounded-xl text-base'
                        size={"large"} />
                    </label>
                </div>

                {/* status */}
                <label className="flex flex-col gap-2 w-full">

                    {/* label text */}
                    <span
                    className="font-normal text-xs text-black">
                        Status:
                    </span>

                    {/* input field */}
                    <DrawerSelectInput
                    value={filterData?.status}
                    onClick={toggleDrawer1} />
                </label>

                {/* coins */}
                <label className="flex flex-col gap-2 w-full">

                    {/* label text */}
                    <span
                    className="font-normal text-xs text-black">
                        Coins:
                    </span>

                    {/* input field */}
                    <DrawerSelectInput
                    value={filterData?.coins}
                    onClick={toggleDrawer2} />
                </label>

                {/* buttons */}
                <div className='mt-auto flex items-center gap-6 w-full'>

                    <div className='flex flex-col items-stretch w-[40%]'>
                        <PrimaryButtonLight
                        height="h-14"
                        text={"Reset"} />
                    </div>

                    <div className='flex flex-col items-stretch w-[60%]'>
                        <PrimaryButton
                        onClick={closeDrawer}
                        height="h-14"
                        text={"Apply Filter"} />
                    </div>
                </div>
            </form>
            
            {/* select status drawer */}
            <Drawer
            height='!h-auto'
            insertCurve={false}
            isOpen={isDrawer1Open}
            onClose={toggleDrawer1}
            position="bottom">

                {/* drawer content container */}
                <SlideWrapper
                title={"Select Status:"}>
                    <StatusFilterView
                    filterValue={filterData.status}
                    setFilterValue={setFilterData}
                    closeDrawer={toggleDrawer1} />
                </SlideWrapper>
            </Drawer>
            
            {/* select coin drawer */}
            <Drawer
            height='!h-auto'
            insertCurve={false}
            isOpen={isDrawer2Open}
            onClose={toggleDrawer2}
            position="bottom">

                {/* drawer content container */}
                <SlideWrapper
                title={"Select Coin:"}>
                    <AssetsPopup
                    selectedValue={filterData.coins}
                    setFilterValue={setFilterData}
                    closeDrawer={toggleDrawer2}  />
                </SlideWrapper>
            </Drawer>
        </div>
    )
}

export default TransactionFilterView