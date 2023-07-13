import { useState } from 'react'
import "./activelistingtab.scss"
import ListingBodyContent from "../../../components/Dashboard/Listing/ListingBodyContent"

const UserListingCard = () => {

    // STATE
    const [activeTab, setActiveTab] = useState(3)


    // DATA INITIALIZATION
    const listData = [1,2,3,4,5,6,7]

    return (
        <div className='w-full h-full flex flex-col bg-white'>
            
            {/* heading tab */}
            <div className='flex items-center justify-between w-[90%] mx-auto'>

                <h3
                onClick={()=>setActiveTab(1)} 
                className={`pb-4 text-xs text-[#929292] font-normal cursor-pointer [transition:all_.4s_linear] ${activeTab===1?"active-listing-tab act-tb1":""}`}>
                    Pending Orders 
                </h3>

                <h3
                onClick={()=>setActiveTab(2)} 
                className={`pb-4 text-xs text-[#929292] font-normal cursor-pointer [transition:all_.4s_linear] ${activeTab===2?"active-listing-tab act-tb2":""}`}>
                    Ongoing Listings
                </h3>

                <h3
                onClick={()=>setActiveTab(3)} 
                className={`pb-4 text-xs text-[#929292] font-normal cursor-pointer [transition:all_.4s_linear] ${activeTab===3?"active-listing-tab act-tb3":""}`}>
                    Closed Listings
                </h3>
            </div>

            <ListingBodyContent
            activeTab={activeTab}
            listData={listData} />
        </div>
    )
}

export default UserListingCard