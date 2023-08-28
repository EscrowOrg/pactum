import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { ProfileAdd } from 'iconsax-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AUTH_GET_ASSETS_ACCOUNTS } from '../../../../../serivce/apiRoutes.service'
import { getUserId, getUserRole } from '../../../../../serivce/cookie.service'
import { TransactionsListButton } from '../../../components/Button'
import BottomNav from '../../../components/Dashboard/Home/BottomNav'
import NoTransitionWrapper from '../../../components/Dashboard/Home/NoTransitionWrapper'
import EmptyWalletCard from '../../../components/Dashboard/Portfolio/EmptyWalletCard'
import UsersWalletCard from '../../../components/Dashboard/Portfolio/UsersWalletCard'
import { isEmpty } from '../../../helpers/isEmpty'
import useMakeReq from '../../../hooks/Global/useMakeReq'

// ant icon
const antIcon = (
    <LoadingOutlined
    style={{
        fontSize: 26,
        color: '#3A0CA3'
    }}
    spin />
)

const Portfolio = () => {

    // STATES
    const [assetAccounts, setAssetAccounts] = useState([])


    // DATA INITIALIZATION
    const navigate = useNavigate()
    const {
        data,
        getLoading,
        isSuccessful,
        loading,
        makeAuthGetReq
    } = useMakeReq()
    const roles = getUserRole()
    
    // USE EFFECTS
    useEffect(()=>{
        const uId = getUserId()
        makeAuthGetReq(`${AUTH_GET_ASSETS_ACCOUNTS}/${uId}&USD`)
    }, [])

    // getting data
    useEffect(()=>{
        if(!isEmpty(data)) {
            if(isSuccessful) {
                setAssetAccounts(data?.data)
            }
        }
    }, [data, isSuccessful])

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
                    <TransactionsListButton />

                    {/* user button */}
                    {roles === "VendorAdmin" && (
                       <div className='flex items-center bg-[#3A0CA3] gap-1 px-3 rounded-[32px] h-10 cursor-pointer'>

                       <ProfileAdd
                       color='#ffffff'
                       size={18}
                       variant='Bulk' />

                       <h4 className='text-sm font-bold text-[#F4EFFE]'>
                           New User
                       </h4>
                   </div>
                    )}
                    
                </div>
                
                {/* body */}
                <div className='w-[92%] h-full flex flex-col justify-center items-center mx-auto gap-8 pb-32'>

                    {/* container */}
                    {
                        getLoading===true?
                        <div className='flex bg-white rounded-md m-auto w-full h-[60vh] justify-center items-center'>
                            <Spin indicator={antIcon} />
                        </div>:
                        isEmpty(assetAccounts)?
                        <EmptyWalletCard />:
                        <UsersWalletCard
                        assetAccount={assetAccounts} />
                    }
                    
                </div>

                {/* bottom nav */}
                <BottomNav />
            </div>
        </NoTransitionWrapper>
    )
}

export default Portfolio