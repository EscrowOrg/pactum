import { ArrowRight2 } from 'iconsax-react'
import { Link } from 'react-router-dom'
import React from 'react'

const SettingOptionCards = ({
    Icon,
    children,
    title,
    pathTo="#"
}) => {
    return (
        <Link
        to={pathTo} 
        className='hover:no-underline flex gap-2 items-center justify-between w-full'>

            {/* label */}
            <div className='flex items-center gap-2'>
                <span className='w-[32px] h-[32px] inline-flex items-center justify-center rounded-[50%] bg-[#F4EFFE]'>
                    <Icon
                    variant="Bulk"
                    color="#3A0CA3"
                    size={18} />
                </span>

                <h3 className='text-black font-semibold text-base'>
                    {title}
                </h3>
            </div>

            {/* arrow */}
            <div className='flex items-center gap-2'>
                {children}
                <ArrowRight2
                size={14}
                variant='TwoTone'
                color='#A39CB2' />
            </div>
        </Link>
    )
}

export default SettingOptionCards