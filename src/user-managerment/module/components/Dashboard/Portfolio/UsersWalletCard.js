import { useEffect, useState } from 'react'
import { 
    ArrowSwapHorizontal, 
    MoneyRecive, 
    MoneySend, 
    WalletAdd, 
    WalletMinus 
} from 'iconsax-react'
import ActionBtn from './ActionBtn'
import { useNavigate } from 'react-router-dom'
import Drawer from '../../../layouts/Drawer'
import "../../../layouts/Drawer/index.css"
import SlideWrapper from '../../../layouts/Drawer/SlideWrapper'
import AssetsFilterView from './AssetsFilterView'
import AssetAccountList from './AssetAccountList'
import AccountBalanceCard from './AccountBalanceCard'
import useMakeReq from '../../../hooks/Global/useMakeReq'
import { getUserId } from '../../../../../serivce/cookie.service'
import { isEmpty } from '../../../helpers/isEmpty'
import { GET_USER_DETS } from '../../../../../serivce/apiRoutes.service'
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

const UsersWalletCard = ({assetAccount}) => {

    // DATA INITIALIZATION
    const navigate = useNavigate()
    const {
        getLoading,
        data,
        makeGetRequest,
    } = useMakeReq()


    // STATES
    const [isVendor, setIsVendor] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [filterValue, setFilterValue] = useState("A-Z")


    // HANDLERS
    const toggleDrawer = (value) => {
        setIsOpen(isOpen => !isOpen)
    }


    // SIDE EFFECTS
    useEffect(()=>{
        makeGetRequest(`${GET_USER_DETS}/${getUserId()}`)
    }, [])

    // populating data
    useEffect(()=>{
        if(!isEmpty(data)) {
            setIsVendor(data?.isVendor)
        }
    }, [data])

    return (
        <div className='w-full h-full flex flex-col gap-8'>

            {/* card */}
            {
                getLoading?
                <div className='flex bg-gray-50 rounded-md m-auto w-full min-h-[23vh] justify-center items-center'>
                    <Spin indicator={antIcon} />
                </div>:
                <AccountBalanceCard
                isVendor={isVendor} />
            }

            {/* actions */}
            <div className='flex items-center justify-evenly gap-3 w-full'>

                {/* button */}
                <ActionBtn
                Icon={MoneySend}
                text={"Send"} />

                <ActionBtn
                Icon={MoneyRecive}
                text={"Receive"} />

                <ActionBtn
                onClick={()=>navigate("/portfolio/swap-bridge")}
                Icon={ArrowSwapHorizontal}
                text={"Swap"} />

                <ActionBtn
                Icon={WalletAdd}
                text={"Buy"} />

                <ActionBtn
                Icon={WalletMinus}
                text={"Sell"} />
            </div>

            {/* My Assets */}
            <AssetAccountList
            toggleDrawer={toggleDrawer}
            filterValue={filterValue}
            assetAccounts={assetAccount} />

            {/* filter Drawer */}
            <Drawer
            height='!h-auto'
            insertCurve={false}
            type="slider"
            isOpen={isOpen}
            onClose={toggleDrawer}
            position="bottom">

                {/* drawer content container */}
                <SlideWrapper
                title={"Filter by:"}>
                    <AssetsFilterView
                    filterValue={filterValue}
                    setFilterValue={setFilterValue}
                    closeDrawer={toggleDrawer} />
                </SlideWrapper>
            </Drawer>
        </div>
    )
}

export default UsersWalletCard