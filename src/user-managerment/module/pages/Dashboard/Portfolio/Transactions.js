import { useEffect, useState } from 'react'
import PageWrapper from '../../../layouts/PageWrapper'
import { ArrowSwapHorizontal, Filter, WalletAdd } from 'iconsax-react'
import { BackButton } from '../../../components/Button'
import Tabs, { Tab } from 'react-best-tabs'
import TransactionList from '../../../components/Dashboard/Portfolio/TransactionList'
import Drawer from '../../../layouts/Drawer'
import "../../../layouts/Drawer/index.css"
import StrictWrapper from '../../../layouts/Drawer/StrictWrapper'
import TransactionFilterView from '../../../components/Dashboard/Portfolio/TransactionFilterView'
import SlideWrapper from '../../../layouts/Drawer/SlideWrapper'
import AssetsPopup from '../../../components/Dashboard/Portfolio/AssetsPopup'
import StatusFilterView from '../../../components/Dashboard/Portfolio/StatusFilterView'
import useMakeReq from '../../../hooks/Global/useMakeReq'
import { isEmpty } from '../../../helpers/isEmpty'
import { GET_TRANSACTIONS_USERID } from '../../../../../serivce/apiRoutes.service'
import { getUserId } from '../../../../../serivce/cookie.service'

const Transactions = () => {

    // DATA INITIALIZATION
    const {
        data,
        isSuccessful,
        getLoading,
        makeGetRequest
    } = useMakeReq()

    
    // STATES
    const [isOpen, setIsOpen] = useState(false);
    const [isDrawer1Open, setIsDrawer1Open] = useState(false);
    const [isDrawer2Open, setIsDrawer2Open] = useState(false);
    const [transactionList, setTransactionList] = useState([])
    const [filterData, setFilterData] = useState({
        status: "All",
        coins: "All"
    });


    // HANDLERS
    const toggleDrawer = () => {
        setIsOpen(isOpen => !isOpen)
    }
    const toggleDrawer1 = () => {
        setIsDrawer1Open(isDrawer1Open => !isDrawer1Open)
    }
    const toggleDrawer2 = () => {
        setIsDrawer2Open(isDrawer2Open => !isDrawer2Open)
    }


    // SIDE EFFECTS
    useEffect(()=>{
        makeGetRequest(`${GET_TRANSACTIONS_USERID}${getUserId()}`)
    }, [])
    useEffect(()=>{
        if(!isEmpty(data) && isSuccessful===true) {
            setTransactionList(data.data)
        }
    }, [data, isSuccessful])

    return (
        <PageWrapper>
            <div className="w-full h-full flex flex-col gap-4 py-5">
                
                {/* header */}
                <div className='flex items-center w-[92%] mx-auto justify-between'>

                    {/* back button */}
                    <BackButton />

                    {/* title */}
                    <h4 className='text-lg font-bold text-black'>
                        Transactions
                    </h4>

                    {/* transaction list button */}
                    <Filter
                    onClick={toggleDrawer}
                    variant='Bulk'
                    size={28}
                    color='#645B75' />
                </div>
                
                {/* body */}
                <div className='w-[92%] h-full flex flex-col justify-center items-center mx-auto gap-8 pb-32'>
                    
                    {/* Tabs Container */}
                    <Tabs
                    activeTab="1" >

                        <Tab
                        title={"All"} >
                            <TransactionList
                            loading={getLoading}
                            transactionData={transactionList} />
                        </Tab>
                        <Tab
                        title={"Send"} >
                            <TransactionList
                            loading={getLoading}
                            transactionData={transactionList?.filter(transaction=>transaction?.transactionType===1)} />
                        </Tab>
                        <Tab
                        title={"Receive"} >
                            <TransactionList
                            loading={getLoading}
                            transactionData={transactionList?.filter(transaction=>transaction?.transactionType===2)} />
                        </Tab>
                        <Tab
                        title={"Swap"} >
                            <TransactionList
                            loading={getLoading}
                            transactionData={transactionList?.filter(transaction=>transaction?.transactionType===3)} />
                        </Tab>
                    </Tabs>
                </div>
            </div>

            {/* Drawer */}
            <Drawer
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            position="bottom">

                {/* drawer content container */}
                <StrictWrapper
                title={"Filter by:"}
                closeDrawer={() => setIsOpen(false)}>

                    {/* Body content */}
                    <TransactionFilterView
                    toggleDrawer1={toggleDrawer1}
                    toggleDrawer2={toggleDrawer2}
                    closeDrawer={toggleDrawer} />                    
                </StrictWrapper>
            </Drawer>

                        
            {/* select status drawer */}
            <Drawer
            height='!h-auto'
            insertCurve={false}
            type="slider"
            isOpen={isDrawer1Open}
            onClose={toggleDrawer1}
            position="bottom">

                {/* drawer content container */}
                <SlideWrapper
                title={"Select Status:"}>
                    <StatusFilterView
                    filterValue={filterData.status}
                    setFilterValue={setFilterData}
                    closeDrawer={toggleDrawer1} />
                </SlideWrapper>
            </Drawer>
            
            {/* select coin drawer */}
            <Drawer
            height='!h-auto'
            insertCurve={false}
            type="slider"
            isOpen={isDrawer2Open}
            onClose={toggleDrawer2}
            position="bottom">

                {/* drawer content container */}
                <SlideWrapper
                title={"Select Coin:"}>
                    <AssetsPopup
                    selectedValue={filterData.coins}
                    setFilterValue={setFilterData}
                    closeDrawer={toggleDrawer2}  />
                </SlideWrapper>
            </Drawer>
        </PageWrapper>
    )
}

export default Transactions