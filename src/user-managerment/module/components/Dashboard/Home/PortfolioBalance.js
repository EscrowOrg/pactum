import { Eye, EyeSlash } from 'iconsax-react'
import { useEffect, useState } from 'react'
import { AUTH_GET_PORTFOLIO_BALANCE } from '../../../../../serivce/apiRoutes.service'
import { getUserId } from '../../../../../serivce/cookie.service'
import { isEmpty } from '../../../helpers/isEmpty'
import { roundToN } from '../../../helpers/roundToN'
import useMakeReq from '../../../hooks/Global/useMakeReq'

const PortfolioBalance = ({usdValue, btcValue, loading}) => {

    // DATA INITIALIZATION
    const {
        getLoading,
        data,
        makeAuthGetReq,
    } = useMakeReq()


    // STATES
    const [isHidden, setIsHidden] = useState(false)
    const [amountInfo, setAmountInfo] = useState({
        btcValue: 0,
        usdValue: 0
    })


    // HANDLERS
    const toggleBalanceVisibility = () => {
        setIsHidden(!isHidden)
    }


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
        <div className='flex flex-col gap-2 text-[#F4EFFE]'>
            <div className=' inline-flex items-center gap-2'>
                <h3 className='text-[22px] font-bold text-[#F4EFFE]'>
                    {
                        getLoading?
                        "loading...":
                        isHidden?
                        "••••••••••":
                        `$${new Intl.NumberFormat('en-US').format(amountInfo.usdValue)}`
                    }
                </h3>

                {
                    getLoading?
                    <EyeSlash
                    size="24"
                    color="#F4EFFE"
                    variant="Bulk" />:
                    isHidden?
                    <Eye
                    onClick={toggleBalanceVisibility}
                    size="24"
                    color="#F4EFFE"
                    variant="Bulk" />:
                    <EyeSlash
                    onClick={toggleBalanceVisibility}
                    size="24"
                    color="#F4EFFE"
                    variant="Bulk" />
                }
            </div>

            <h4 className='font-semibold text-xs'>
                BTC Equivalent: {getLoading?"loading...":isHidden?"_ _ _":amountInfo.btcValue}
            </h4>
        </div>
    )
}

export default PortfolioBalance