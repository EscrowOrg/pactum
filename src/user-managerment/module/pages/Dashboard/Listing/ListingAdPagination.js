import React from 'react'
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi'

const ListingAdPagination = ({
    currentPage,
    skip,
    totalCount,
    setCurrentPage
}) => {
    return (
        <div className="mx-auto px-2 w-[92%] flex items-center justify-between gap-2 mt-auto pb-3">

            {/* previous */}
            <button
            disabled={currentPage===0}
            onClick={()=>{
                setCurrentPage(currentPage-1)
            }} 
            className="text-[#3A0CA3] text-sm font-semibold disabled:text-gray-300 disabled:font-normal inline-flex items-center gap-1">
                <HiArrowSmLeft />
                previous
            </button>

            {/* page number */}
            <span className="text-sm font-semibold text-[#3A0CA3]">
                Page {currentPage+1}
            </span>

            {/* next */}
            <button
            onClick={()=>{
                setCurrentPage(currentPage+1)
            }}
            disabled={skip+1<=totalCount} 
            className="text-[#3A0CA3] text-sm font-semibold disabled:text-gray-300 disabled:font-normal inline-flex items-center gap-1">
                Next
                <HiArrowSmRight />
            </button>
        </div>
    )
}

export default ListingAdPagination