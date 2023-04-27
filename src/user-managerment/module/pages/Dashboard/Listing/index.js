import { useEffect, useState } from 'react'
import BottomNav from '../../../components/Dashboard/Home/BottomNav'
import NoTransitionWrapper from '../../../components/Dashboard/Home/NoTransitionWrapper'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ProfileAdd } from 'iconsax-react'
import EmptyListingCard from '../../../components/Dashboard/Listing/EmptyListingCard'
import UserListingCard from './UserListingCard'

const Listing = () => {

    // STATES
    const [hasListing, setHasListing] = useState(true)


    // DATA INITIALIZATION
    const navigate = useNavigate()

    return (
        <NoTransitionWrapper>
            <div className="w-full h-full flex flex-col gap-8 py-5">
                
                {/* header */}
                <div className='flex items-center w-[92%] mx-auto justify-between'>

                    {/* title */}
                    <h4 className='text-lg font-bold text-black'>
                        My Portfolio
                    </h4>

                    {/* user button */}
                    <div
                    onClick={()=>navigate("/listing/create-listing")} 
                    className='flex items-center bg-[#48A9A6] gap-1 px-3 rounded-[32px] h-10'>

                        <ProfileAdd
                        color='#ffffff'
                        size={18}
                        variant='Bulk' />

                        <h4 className='text-sm font-bold text-[#F4EFFE]'>
                            New User
                        </h4>
                    </div>
                </div>

                {/* body */}
                <div className='w-full h-full flex flex-col justify-center items-center mx-auto gap-8 pb-32'>
                    
                    
                    {/* container */}
                    {
                        hasListing!==true?
                        <EmptyListingCard />:
                        <UserListingCard />
                    }

                </div>                

                {/* bottom nav */}
                <BottomNav />
            </div>
        </NoTransitionWrapper>
    )
}

export default Listing