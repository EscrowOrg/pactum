import React from 'react'
import OngoingListingCard from './OngoingListingCard'
import ClosedListingCard from './ClosedListingCard'
import PendingPaymentsCard from './PendingPaymentsCard'

const ListingBodyContent = ({activeTab, listData}) => {
    return (
        <div className='h-full w-full px-4 bg-gray-100 flex flex-col pt-3 pb-20 overflow-auto gap-5'>
            
            {
                
                listData.map((listD, index)=>(

                    // tab1 represents the pending payments tab
                    activeTab===1?
                    <PendingPaymentsCard
                    key={index} />:

                    // tab2 represents the ongoing listings tab
                    activeTab===2?
                    <OngoingListingCard
                    key={index} />:

                    // tab3 represents the closed listings tab
                    activeTab===3?
                    <ClosedListingCard
                    key={index} />:null
                ))
            }

        </div>
    )
}

export default ListingBodyContent


// bg-gray-100