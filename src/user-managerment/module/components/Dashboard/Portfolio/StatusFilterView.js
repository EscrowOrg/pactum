import React from 'react'
import { Radio } from 'antd';

const StatusFilterView = ({
    filterValue,
    setFilterValue,
    closeDrawer
}) => {
    return (
        <div className='w-full h-full flex flex-col gap-3 px-4'>

            {/* radio group */}
            <Radio.Group 
            className='flex flex-col gap-5'
            name="radiogroup" 
            value={filterValue}
            defaultValue={"All"}>

                {/* first radio */}
                <Radio 
                onClick={closeDrawer}
                onChange={({target: {value}})=>{
                    setFilterValue((prevState)=>{
                        return {
                            ...prevState,
                            status: value
                        }
                    })
                }}
                className='flex flex-row-reverse w-full justify-between items-center after:content-none'
                value={"All"}>
                    <span className='text-black font-semibold text-sm ml-auto'>
                        All
                    </span>
                </Radio>

                {/* second radio */}
                <Radio 
                onClick={closeDrawer}
                onChange={({target: {value}})=>{
                    setFilterValue((prevState)=>{
                        return {
                            ...prevState,
                            status: value
                        }
                    })
                }}
                className='flex flex-row-reverse w-full justify-between items-center after:content-none'
                value={"Success"}>
                    <span className='text-black font-semibold text-sm ml-auto'>
                        Success
                    </span>
                </Radio>

                {/* third radio */}
                <Radio 
                onClick={closeDrawer}
                onChange={({target: {value}})=>{
                    setFilterValue((prevState)=>{
                        return {
                            ...prevState,
                            status: value
                        }
                    })
                }}
                className='flex flex-row-reverse w-full justify-between items-center after:content-none'
                value={"Pending"}>
                    <span className='text-black font-semibold text-sm ml-auto'>
                        Pending
                    </span>
                </Radio>

                {/* fourth radio */}
                <Radio 
                onClick={closeDrawer}
                onChange={({target: {value}})=>{
                    setFilterValue((prevState)=>{
                        return {
                            ...prevState,
                            status: value
                        }
                    })
                }}
                className='flex flex-row-reverse w-full justify-between items-center after:content-none'
                value={"Failed"}>
                    <span className='text-black font-semibold text-sm ml-auto'>
                        Failed
                    </span>
                </Radio>
            </Radio.Group>
        </div>
    )
}

export default StatusFilterView