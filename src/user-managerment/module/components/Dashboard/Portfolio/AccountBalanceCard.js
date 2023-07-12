import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AUTH_GET_PORTFOLIO_BALANCE } from '../../../../../serivce/apiRoutes.service'
import { getUserId } from '../../../../../serivce/cookie.service'
import { isEmpty } from '../../../helpers/isEmpty'
import { roundToN } from '../../../helpers/roundToN'
import useMakeReq from '../../../hooks/Global/useMakeReq'
import BalanceCard from './BalanceCard'

const AccountBalanceCard = ({isVendor}) => {

    // DATA INITIALIZATION
    const navigate = useNavigate()
    const {
        getLoading,
        data,
        makeAuthGetReq,
    } = useMakeReq()


    // STATES
    const [amountInfo, setAmountInfo] = useState({
        btcValue: 0,
        usdValue: 0
    })


    // SIDE EFFECTS
    useEffect(()=>{
        makeAuthGetReq(`${AUTH_GET_PORTFOLIO_BALANCE}/${getUserId()}`)
    }, [])

    // populating data
    useEffect(()=>{
        if(!isEmpty(data)) {
            setAmountInfo({
                btcValue: roundToN(data?.data?.valueInBitcoin, 4) || 0,
                usdValue: roundToN(data?.data?.valueInDollar, 2) || 0
            })
        }
    }, [data])

    return (
        <>
            {
                !isVendor?
                <BalanceCard
                loading={getLoading}
                fiatValue={amountInfo.usdValue}
                btcValue={amountInfo.btcValue}
                onClick={()=>navigate("/portfolio/create-wallet")}
                title={"My Portfolio balance"}
                buttonText={"Create Wallet"} />:
                <div className='flex w-full gap-4'>
                    <BalanceCard
                    loading={getLoading}
                    fiatValue={amountInfo.usdValue}
                    btcValue={amountInfo.btcValue}
                    onClick={()=>navigate("/portfolio/create-wallet")}
                    padding='p-[24px_12px]'
                    buttonText={"Create Wallet"}
                    title={"Vendor balance"} />
                    <BalanceCard
                    fiatValue={0.00}
                    btcValue={"0.00"}
                    padding='p-[24px_16px]'
                    bgColor='bg-[#B4DFDE]'
                    textColor='text-[#1B3F3E]'
                    btnBgColor='bg-[#D9EFEE]'
                    btnTextColor='text-[#1B3F3E]'
                    buttonText={"View Users"}
                    title={"All Users balance"} />
                </div>
            }
        </>
    )
}

export default AccountBalanceCard