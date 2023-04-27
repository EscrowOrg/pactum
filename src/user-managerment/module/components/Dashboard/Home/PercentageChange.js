import { ArrowDown2 } from 'iconsax-react'
import React from 'react'

const PercentageChange = ({
    hasAppreciated,
    changePercentage
}) => {

    return (
        <div className={`inline-flex w-fit items-center justify-center gap-1 py-1 px-2 rounded-[32px] ${hasAppreciated?"bg-[#ECFDF5]":"bg-[#FBE9EA]"}`}>

            {/* icon */}
            <ArrowDown2
            size="24"
            color={hasAppreciated?"#10B981":"#D1292D"}
            variant="Bulk" />

            {/* data */}
            <span className={`text-xs ${hasAppreciated?"text-[#10B981]":"text-[#D1292D]"} font-semibold`}>
                {
                    hasAppreciated?`+${changePercentage}%`:`${changePercentage}%`
                }
            </span>
        </div>
    )
}

export default PercentageChange