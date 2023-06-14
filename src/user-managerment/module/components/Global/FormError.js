import React from 'react'
import { BiErrorCircle } from "react-icons/bi"

const FormError = ({text}) => {
    return (
        <div className="flex gap-1 items-center text-red-500 text-xs ">
            <BiErrorCircle className="text-sm w-[5%]" />
            <p className='font-light mt-0 w-[95%]'>
                {text}
            </p>
        </div>
    )
}

export default FormError