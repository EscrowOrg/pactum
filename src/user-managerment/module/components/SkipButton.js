import React from 'react'
import { Link } from 'react-router-dom'

const SkipButton = () => {
    return (
        <Link
        to={"/onboradings"}
        className='text-[#3A0CA3] font-semibold text-sm hover:no-underline focus:no-underline hover:text-[text-[#3A0CA3] flex justify-end bg-transparent h-fit'>
            Skip
        </Link>
    )
}

export default SkipButton