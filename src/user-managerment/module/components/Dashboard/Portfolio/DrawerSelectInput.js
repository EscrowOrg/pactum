import { ArrowDown2 } from 'iconsax-react'
import React from 'react'

const DrawerSelectInput = ({onClick, value="Select asset"}) => {
    return (
        <div
        onClick={onClick} 
        className='flex items-center gap-1 border border-[#DAD7E0] bg-white rounded-xl h-14 px-4'>
            <h3 className='text-xs font-normal text-black w-full'>
                {value}
            </h3>

            <ArrowDown2
            variant='TwoTone'
            size={16}
            color='#ACA6BA' />
        </div>
    )
}

export default DrawerSelectInput