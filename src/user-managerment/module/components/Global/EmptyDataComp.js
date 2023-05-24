import React from 'react'

const EmptyDataComp = ({bgColor = "bg-white", viewPortHeight="h-[25vh]"}) => {
    return (
        <div className={`flex rounded-md ${bgColor} w-full justify-center ${viewPortHeight} items-center font-semibold text-xs`}>
            Nothing here!
        </div>
    )
}

export default EmptyDataComp