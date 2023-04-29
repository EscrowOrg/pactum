import { useState } from 'react'
import PageWrapper from '../../../layouts/PageWrapper'
import { ArrowSwapHorizontal, Filter, MoneyRecive, MoneySend, WalletAdd } from 'iconsax-react'
import { BackButton } from '../../../components/Button'
import Tabs, { Tab } from 'react-best-tabs'
import TransactionList from '../../../components/Dashboard/Portfolio/TransactionList'
import Drawer from '../../../layouts/Drawer'
import "../../../layouts/Drawer/index.css"
import StrictWrapper from '../../../layouts/Drawer/StrictWrapper'
import TransactionFilterView from '../../../components/Dashboard/Portfolio/TransactionFilterView'

const Transactions = () => {

    // DATA INITIALIZATION
    const transactionList = [
        {
            type: "Sent",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "SUCCESS",
            Icon: <MoneySend size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Received",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "FAILED",
            Icon: <MoneyRecive size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Swapped",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "PENDING",
            Icon: <ArrowSwapHorizontal size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Bought",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "SUCCESS",
            Icon: <WalletAdd size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Sold",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "FAILED",
            Icon: <WalletAdd size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Sent",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "SUCCESS",
            Icon: <MoneySend size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Received",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "FAILED",
            Icon: <MoneyRecive size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Swapped",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "PENDING",
            Icon: <ArrowSwapHorizontal size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Bought",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "SUCCESS",
            Icon: <WalletAdd size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Sold",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "FAILED",
            Icon: <WalletAdd size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Sent",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "SUCCESS",
            Icon: <MoneySend size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Received",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "FAILED",
            Icon: <MoneyRecive size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Swapped",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "PENDING",
            Icon: <ArrowSwapHorizontal size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Bought",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "SUCCESS",
            Icon: <WalletAdd size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Sold",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "FAILED",
            Icon: <WalletAdd size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Sent",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "SUCCESS",
            Icon: <MoneySend size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Received",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "FAILED",
            Icon: <MoneyRecive size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Swapped",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "PENDING",
            Icon: <ArrowSwapHorizontal size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Bought",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "SUCCESS",
            Icon: <WalletAdd size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Sold",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "FAILED",
            Icon: <WalletAdd size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Sent",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "SUCCESS",
            Icon: <MoneySend size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Received",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "FAILED",
            Icon: <MoneyRecive size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Swapped",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "PENDING",
            Icon: <ArrowSwapHorizontal size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Bought",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "SUCCESS",
            Icon: <WalletAdd size="24" color="#A39CB2" variant="Bulk" />
        },
        {
            type: "Sold",
            amount: 400,
            coin: "DOGE",
            fiatEquiv: "$102.38",
            walletType: "Wallet 1",
            status: "FAILED",
            Icon: <WalletAdd size="24" color="#A39CB2" variant="Bulk" />
        },
    ]

    
    // STATES
    const [isOpen, setIsOpen] = useState(false);


    // HANDLERS
    const toggleDrawer = () => {
        setIsOpen(isOpen => !isOpen)
    }

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
                            transactionData={transactionList} />
                        </Tab>
                        <Tab
                        title={"Send"} >
                            <TransactionList
                            transactionData={transactionList.filter(transaction=>transaction.type==="Sent")} />
                        </Tab>
                        <Tab
                        title={"Receive"} >
                            <TransactionList
                            transactionData={transactionList.filter(transaction=>transaction.type==="Received")} />
                        </Tab>
                        <Tab
                        title={"Swap"} >
                            <TransactionList
                            transactionData={transactionList.filter(transaction=>transaction.type==="Swapped")} />
                        </Tab>
                    </Tabs>
                </div>
            </div>

            {/* Drawer */}
            <Drawer
            isOpen={isOpen}
            onClose={()=>setIsOpen(false)}
            position="bottom">

                {/* drawer content container */}
                <StrictWrapper
                title={"Filter by:"}
                closeDrawer={toggleDrawer}>

                    {/* Body content */}
                    <TransactionFilterView
                    closeDrawer={()=>setIsOpen(false)} />                    
                </StrictWrapper>
            </Drawer>
        </PageWrapper>
    )
}

export default Transactions