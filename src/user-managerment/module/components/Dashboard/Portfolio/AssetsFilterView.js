import React from 'react'
import { Radio } from 'antd';

const AssetsFilterView = ({
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
            defaultValue={"A-Z"}>

                {/* first radio */}
                <Radio 
                onClick={closeDrawer}
                onChange={({target: {value}})=>setFilterValue(value)}
                className='flex flex-row-reverse w-full justify-between items-center after:content-none'
                value={"A-Z"}>
                    <span className='text-black font-semibold text-sm ml-auto'>
                        A-Z
                    </span>
                </Radio>

                {/* second radio */}
                <Radio 
                onClick={closeDrawer}
                onChange={({target: {value}})=>setFilterValue(value)}
                className='flex flex-row-reverse w-full justify-between items-center after:content-none'
                value={"High"}>
                    <span className='text-black font-semibold text-sm ml-auto'>
                        High
                    </span>
                </Radio>

                {/* third radio */}
                <Radio 
                onClick={closeDrawer}
                onChange={({target: {value}})=>setFilterValue(value)}
                className='flex flex-row-reverse w-full justify-between items-center after:content-none'
                value={"Low"}>
                    <span className='text-black font-semibold text-sm ml-auto'>
                        Low
                    </span>
                </Radio>
            </Radio.Group>
        </div>
    )
}

export default AssetsFilterView