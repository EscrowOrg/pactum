import { useState, useEffect } from 'react'
import TransactionCard from './TransactionCard'
import { useNavigate } from 'react-router-dom'
import { getUserId } from '../../../../../serivce/cookie.service'
import { GET_TRANSACTIONS_USERID } from '../../../../../serivce/apiRoutes.service'
import { isEmpty } from '../../../helpers/isEmpty'
import useMakeReq from '../../../hooks/Global/useMakeReq'
import { 
    ArrowSwapHorizontal, 
    MoneyRecive, 
    MoneySend, 
    WalletAdd 
} from 'iconsax-react'
import LoadingSpinner from '../../Global/LoadingSpinner'

const RecentTransactions = () => {

    // STATES
    const [transactionList, setTransactionList] = useState([])


    // DATA INITIALIZATION
    const iconLists = [

        // sent
        <MoneySend
        size="24" 
        color="#A39CB2" 
        variant="Bulk" />,

        // received
        <MoneyRecive
        size="24" 
        color="#A39CB2" 
        variant="Bulk" />,

        // swapped
        <ArrowSwapHorizontal
        size="24" 
        color="#A39CB2" 
        variant="Bulk" />,

        // Bought
        <WalletAdd
        size="24" 
        color="#A39CB2" 
        variant="Bulk" />,

        // Sold
        <WalletAdd
        size="24" 
        color="#A39CB2" 
        variant="Bulk" />,
    ]
    const transactionTypeList = [
        "Sent",
        "Received",
        "Swapped",
        "Bought",
        "Sold",
    ]
    const navigate = useNavigate()
    const {
        data,
        isSuccessful,
        getLoading,
        makeGetRequest
    } = useMakeReq()


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
        <div className='w-full flex flex-col gap-4'>
            
            {/* title */}
            <div className='w-full flex items-center justify-between gap-2'>

                {/* caption */}
                <h3 className='text-black font-semibold text-base'>
                    Recent Transactions
                </h3>

                {/* see all */}
                <h4 
                onClick={()=>navigate("/portfolio/transactions")}
                className='font-semibold text-sm text-[#3A0CA3]'>
                    See all
                </h4>
            </div>

            {/* lists */}
            <div className='flex flex-col w-full gap-4'>

                {   
                    getLoading?
                    <LoadingSpinner
                    viewPortHeight='h-[20vh]' />:
                    !isEmpty(transactionList)?
                    transactionList.slice(0,7).map((transactData, index)=>(

                        <TransactionCard
                        key={index}
                        Icon={iconLists[transactData.transactionType]}
                        amount={transactData.amount}
                        asset={transactData.asset}
                        transactionType={transactionTypeList[transactData.transactionType]}
                        transactionMode={transactData.transactionMode}
                        walletId={transactData.virtualAccountId} />
                    ))
                    :<div className='flex h-full w-full items-center gap-8 justify-center flex-col my-20'>

                        <img
                        alt=""
                        className='w-[120px]'
                        src='/images/dashboard/empty-transaction.png' />

                            <h3 className='font-normal text-sm text-[#645B75] w-full text-center'>
                            No record found.
                        </h3>
                    </div>
                }
            </div>
        </div>
    )
}

export default RecentTransactions