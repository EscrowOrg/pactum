import React, { useState } from 'react'
import BalanceCard from './BalanceCard'
import { ArrowDown2, ArrowSwapHorizontal, MoneyRecive, MoneySend, WalletAdd, WalletMinus } from 'iconsax-react'
import ActionBtn from './ActionBtn'
import { useNavigate } from 'react-router-dom'
import { HiOutlineSearch } from 'react-icons/hi'
import Drawer from '../../../layouts/Drawer'
import "../../../layouts/Drawer/index.css"
import SlideWrapper from '../../../layouts/Drawer/SlideWrapper'
import AssetsFilterView from './AssetsFilterView'

const UsersWalletCard = () => {

    // DATA INITIALIZATION
    const navigate = useNavigate()


    // STATES
    const [userType, setUserType] = useState("INDIVIDUAL")
    const [isOpen, setIsOpen] = useState(false);
    const [filterValue, setFilterValue] = useState("A-Z")


    // HANDLERS
    const toggleDrawer = (value) => {
        setIsOpen(isOpen => !isOpen)
    }

    return (
        <div className='w-full h-full flex flex-col gap-8'>

            {/* card */}
            {
                userType==="INDIVIDUAL"?
                <BalanceCard
                onClick={()=>navigate("/portfolio/create-wallet")}
                title={"My Portfolio balance"}
                buttonText={"Create Wallet"} />:
                userType==="VENDOR"?
                <div className='flex w-full gap-4'>
                    <BalanceCard
                    onClick={()=>navigate("/portfolio/create-wallet")}
                    padding='p-[24px_12px]'
                    buttonText={"Create Wallet"}
                    title={"Vendor balance"} />
                    <BalanceCard
                    padding='p-[24px_16px]'
                    bgColor='bg-[#B4DFDE]'
                    textColor='text-[#1B3F3E]'
                    btnBgColor='bg-[#D9EFEE]'
                    btnTextColor='text-[#1B3F3E]'
                    buttonText={"View Users"}
                    title={"All Users balance"} />
                </div>:<></>
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
            <div className='w-full flex flex-col gap-5'>

                {/* title */}
                <div className='flex items-center justify-between'>
                    <h3 className='text-black text-base font-semibold'>
                        My Assets
                    </h3>

                    {/* tools container */}
                    <div className='flex items-center gap-3'>

                        {/* search input */}
                        <div className='bg-[#F5F3F6] rounded-md border border-[#F5F3F6] flex items-center justify-between gap-1 py-[5px] px-2 w-[98px]'>
                            <HiOutlineSearch
                            className='text-[#ACA6BA]' />

                            <input 
                            className='placeholder:font-normal placeholder:text-xs placeholder:text-[#ACA6BA] text-xs font-normal text-[#202223] rounded-lg bg-transparent outline-none w-full h-full'
                            type={"search"}
                            placeholder={"Search"} />
                        </div>

                        {/* filter toggle */}
                        <div
                        onClick={toggleDrawer} 
                        className='text-[10px] text-black font-semibold inline-flex items-center gap-1 py-[5px] px-2 rounded-md bg-[#F5F3F6]'>
                            {filterValue}

                            <ArrowDown2
                            variant="TwoTone"
                            color="#292D32"
                            size={18} />
                        </div>
                    </div>
                </div>

                {/* list */}
                <div className='flex flex-col w-full'>

                    {/* container */}
                    <div
                    onClick={()=>navigate("/portfolio/checkout/kjkjkjfkdjkfjkdfd")} 
                    className='flex items-center justify-between w-full'>

                        {/* image section */}
                        <div className='flex items-center gap-3'>
                            <img
                            alt=""
                            src="/images/dashboard/binance.png"
                            className='h-[40px] w-[40px]' />

                            <div className='flex flex-col gap-[2px]'>
                                <h3 className='text-sm font-semibold text-black'>
                                    BNB
                                </h3>
                                <h3 className='text-[#8D85A0] text-xs font-normal'>
                                    1 Wallet
                                </h3>
                            </div>
                        </div>

                        {/* texts */}
                        <div className='flex flex-col items-end gap-[2px]'>
                            <h3 className='text-sm font-semibold text-black'>
                                0 BNB
                            </h3>
                            <h3 className='text-[#8D85A0] text-xs font-semibold'>
                                $0
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* filter Drawer */}
            <Drawer
            height='!h-auto'
            insertCurve={false}
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