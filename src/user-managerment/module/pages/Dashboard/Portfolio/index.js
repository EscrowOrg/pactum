import { useState, useEffect } from 'react'
import BottomNav from '../../../components/Dashboard/Home/BottomNav'
import NoTransitionWrapper from '../../../components/Dashboard/Home/NoTransitionWrapper'
import { ProfileAdd, TransactionMinus } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'
import EmptyWalletCard from '../../../components/Dashboard/Portfolio/EmptyWalletCard'
import UsersWalletCard from '../../../components/Dashboard/Portfolio/UsersWalletCard'
import useMakeReq from '../../../hooks/Global/useMakeReq'
import { isEmpty } from '../../../helpers/isEmpty'
import { GET_ASSETS_ACCOUNTS } from '../../../../../serivce/apiRoutes.service'
import { getUserId } from '../../../../../serivce/cookie.service'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';

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
        makeGetRequest
    } = useMakeReq()

    
    // USE EFFECTS
    useEffect(()=>{
        const uId = getUserId()
        makeGetRequest(`${GET_ASSETS_ACCOUNTS}/${uId}&USD`)
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
                    <button
                    onClick={()=>navigate("/portfolio/transactions")}
                    className="px-3 py-3 w-fit border border-[#DAD7E0] bg-[#FAFAFB] inline-flex items-center justify-center rounded-xl cursor-pointer hover:bg-gray-200">
                        <TransactionMinus
                        size="14"
                        color="#16053D" />
                    </button>

                    {/* user button */}
                    <div onClick={()=>navigate("/portfolio/new-user")} className='flex items-center bg-[#3A0CA3] gap-1 px-3 rounded-[32px] h-10 cursor-pointer'>

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