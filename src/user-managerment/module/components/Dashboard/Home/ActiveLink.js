import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const ActiveLink = ({to, Icon, text}) => {

    // DATA INITIALIZATION
    const location = useLocation()
    const isActive = location.pathname.includes(to)
    const twStyle = "flex h-[44px] justify-center items-center gap-2 transition-all rounded px-4 hover:no-underline"

    return (
        <>
            <NavLink
            // isActive={()=>isActive}
            end
            to={to}
            className={({isActive})=>isActive?`hover:opacity-70 bg-[#3A0CA3] ${twStyle}`:`${twStyle} hover:bg-[#f9f5ff75]`}>

                {/* icon */}
                <Icon
                size={24}
                color="#A39CB2"
                variant="Bulk" />

                {/* text */}
                {
                    isActive&&
                    <span className='font-bold text-xs text-[#F4EFFE]'>
                        {text}
                    </span>
                }
            </NavLink>
        </>
    )
}

export default ActiveLink