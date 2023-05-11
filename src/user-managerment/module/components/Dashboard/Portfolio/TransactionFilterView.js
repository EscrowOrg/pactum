import { PrimaryButton, PrimaryButtonLight } from '../../Button'
import DrawerSelectInput from './DrawerSelectInput'
import { DatePicker } from 'antd';

const TransactionFilterView = ({
    closeDrawer, 
    toggleDrawer1, 
    toggleDrawer2, 
    filterData
}) => {

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
        </div>
    )
}

export default TransactionFilterView