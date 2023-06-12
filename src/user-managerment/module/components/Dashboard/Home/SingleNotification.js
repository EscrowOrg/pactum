import React from 'react'
import { Link } from 'react-router-dom'

const SingleNotification = ({
    title="",
    description="",
    viewMorePath=""
}) => {
    return (
        <div className='flex flex-col gap-2 p-2 w-full border-b border-[rgba(245, 243, 246, 0.8)] pb-5 last:pb-2 last:border-none'>

            {/* title */}
            <div className='w-full flex justify-between items-center gap-2'>
                <h2 className='font-semibold text-sm text-black'>
                    {title}
                </h2>

                <Link
                className="font-normal text-xs text-[#475467]" 
                to={viewMorePath}>
                    See more
                </Link>
            </div>

            {/* brief description */}
            <h4 className='font-normal text-xs text-[#344054] w-full'>
                {description}
            </h4>
        </div>
    )
}

export default SingleNotification