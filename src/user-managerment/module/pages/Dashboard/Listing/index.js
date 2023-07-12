import { ProfileAdd } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../../../components/Dashboard/Home/BottomNav'
import NoTransitionWrapper from '../../../components/Dashboard/Home/NoTransitionWrapper'
import UserListingCard from './UserListingCard'

const Listing = () => {

    // DATA INITIALIZATION
    const navigate = useNavigate()

    return (
        <NoTransitionWrapper>
            <div className="w-full h-full flex flex-col gap-8 py-5">
                
                {/* header */}
                <div className='flex items-center w-[92%] mx-auto justify-between'>

                    {/* title */}
                    <h4 className='text-lg font-bold text-black'>
                        Listings
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
                            Create
                        </h4>
                    </div>
                </div>

                {/* body */}
                <div className='w-full h-full flex flex-col justify-center items-center mx-auto gap-8 pb-5'>
                    
                    
                    {/* container */}
                    <UserListingCard />

                </div>                

                {/* bottom nav */}
                <BottomNav />
            </div>
        </NoTransitionWrapper>
    )
}

export default Listing