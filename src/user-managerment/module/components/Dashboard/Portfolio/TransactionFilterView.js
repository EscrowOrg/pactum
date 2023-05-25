import { useState } from 'react';
import { PrimaryButton, PrimaryButtonLight } from '../../Button'
import DrawerSelectInput from './DrawerSelectInput'
import { DatePicker } from 'antd';
import { getUserId } from '../../../../../serivce/cookie.service';
import BASE_URL from '../../../../../serivce/url.serice';

const TransactionFilterView = ({
    closeDrawer, 
    toggleDrawer1, 
    toggleDrawer2, 
    filterStatus,
    filterAsset,
    fetchData,
    setFilterCoin,
    setFilterStatus,
    setEndDate,
    setStartDate,
    startDate,
    endDate
}) => {

    // DATA INTIALIZATION
    const params = new URLSearchParams();


    // HANDLERS
    const handleReset = () => {

        // reset state values
        setStartDate(null)
        setEndDate(null)
        setFilterCoin({
            name: "",
            id: null
        })
        setFilterStatus({
            name: "",
            id: null
        })

        // close drawer
        closeDrawer()

        // Making api GET CAll
        fetchData()
    }
    const handleApplyFilter = () => {

        // close drawer
        closeDrawer()

        // appending to params object
        startDate && params.append('startDate', new Date(startDate.$d).toISOString());
        endDate && params.append('endDate', new Date(endDate.$d).toISOString());
        (filterStatus.id && filterStatus?.id!==4) && params.append('transactionMode', filterStatus.id);
        filterAsset.id && params.append('asset', filterAsset.id);
        params.append('userId', getUserId());
        
        // contructing request url
        const queryString = params.toString();
        const apiUrl = `${BASE_URL}/api/Wallet/GetTransactionByFilter`
        const urlWithQuery = `${apiUrl}?${queryString}`

        // Making api GET CAll
        fetchData(urlWithQuery)
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
                        value={startDate}
                        onChange={(data)=>setStartDate(data)}
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
                        value={endDate}
                        onChange={(data)=>setEndDate(data)}
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
                    value={filterStatus?.name || "Select"}
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
                    value={filterAsset?.name || "Select"}
                    onClick={toggleDrawer2} />
                </label>

                {/* buttons */}
                <div className='mt-auto flex items-center gap-6 w-full'>

                    <div className='flex flex-col items-stretch w-[40%]'>
                        <PrimaryButtonLight
                        onClick={handleReset}
                        height="h-14"
                        text={"Reset"} />
                    </div>

                    <div className='flex flex-col items-stretch w-[60%]'>
                        <PrimaryButton
                        onClick={handleApplyFilter}
                        height="h-14"
                        text={"Apply Filter"} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TransactionFilterView