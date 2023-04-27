import { useState, useEffect } from 'react'
import BottomNav from '../../../components/Dashboard/Home/BottomNav'
import NoTransitionWrapper from '../../../components/Dashboard/Home/NoTransitionWrapper'
import { ProfileAdd, TransactionMinus } from 'iconsax-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import EmptyWalletCard from '../../../components/Dashboard/Portfolio/EmptyWalletCard'
import UsersWalletCard from '../../../components/Dashboard/Portfolio/UsersWalletCard'

const Portfolio = () => {

    // STATES
    const [isNewUser, setIsNewUser] = useState(true)


    // DATA INITIALIZATION
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    
    // HANDLERS
    useEffect(()=>{
        const userStatus = searchParams?.get("isNewUser");
        if(userStatus) {
            setIsNewUser(userStatus)
        } else {
            console.log("userStatus isn't present")
        }
    }, [])

    return (
        <NoTransitionWrapper>
            <div className="w-full h-full flex flex-col gap-4 py-5">
                
                {/* header */}
                <div className='flex items-center w-[92%] mx-auto justify-between'>

                    {/* title */}
                    <h4 className='text-lg font-bold text-black'>
                        My Portfolio
                    </h4>

                    {/* transaction list button */}
                    <button
                    onClick={()=>navigate("/portfolio/transactions")}
                    className="px-3 py-3 w-fit border border-[#DAD7E0] bg-[#FAFAFB] inline-flex items-center justify-center rounded-xl cursor-pointer hover:bg-gray-200">
                        <TransactionMinus
                        size="14"
                        color="#16053D" />
                    </button>

                    {/* user button */}
                    <div className='flex items-center bg-[#3A0CA3] gap-1 px-3 rounded-[32px] h-10'>

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
                <div className='w-[92%] h-full flex flex-col justify-center items-center mx-auto gap-8 pb-32'>

                    {/* container */}
                    {
                        isNewUser===true?
                        <EmptyWalletCard />:
                        <UsersWalletCard />
                    }
                    
                </div>

                {/* bottom nav */}
                <BottomNav />
            </div>
        </NoTransitionWrapper>
    )
}

export default Portfolio