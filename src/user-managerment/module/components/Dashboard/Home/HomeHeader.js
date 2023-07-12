import {
    ArrowRight2,
    NotificationBing
} from 'iconsax-react'
import {
    useEffect,
    useState
} from 'react'
import { useNavigate } from 'react-router-dom'
import { GET_USER_DETS } from '../../../../../serivce/apiRoutes.service'
import { getUserId } from '../../../../../serivce/cookie.service'
import { isEmpty } from '../../../helpers/isEmpty'
import useMakeReq from '../../../hooks/Global/useMakeReq'
import PortfolioBalance from './PortfolioBalance'

const HomeHeader = () => {

    // DATA INITIALIZATION
    const {
        data,
        makeAuthGetReq,
        makePostRequest
    } = useMakeReq()
    const navigate = useNavigate()
  //const {token, userId}= getUserData();

    // STATES
    const [name, setName] = useState("")


    // SIDE EFFECTS
    useEffect(()=>{
        makeAuthGetReq(`${GET_USER_DETS}/${getUserId()}`)
    }, [])

    // populating data
    useEffect(()=>{
        if(!isEmpty(data)) {
            setName(data?.data?.userName)
        }
    }, [data])
    
    return (
        <div className='w-full flex items-center justify-center bg-[#6D34F0] min-h-[190px] relative'>

            {/* pattern */}
            <img
            alt=""
            src="/images/dashboard/header-pattern.png"
            className='absolute z-[1] bottom-[50%] translate-y-[50%] right-[50%] translate-x-[50%]' />

            
            {/* container */}
            <div className='w-[92%] flex flex-col gap-4 relative z-20'>

                {/* title and notification bell */}
                <div className='flex justify-between gap-2 items-center w-full'>

                    {/* text */}
                    <p className='text-lg text-[#F4EFFE] font-bold'>
                        {
                            name?
                            `Hey ${name}! 😎`:
                            "Hey! 😎"
                        }
                    </p>
                    {/* notification icon */}
                    <span
                    onClick={()=>navigate("/home/notification")} 
                    className='w-[40px] h-[40px] flex items-center justify-center rounded-xl bg-white'>
                        <NotificationBing
                        size="20"
                        color="#6D34F0"
                        variant="TwoTone" />
                    </span>
                </div>

                {/* portfolio balance and more details */}
                <div className='flex items-end justify-between w-full'>

                    {/* balance info */}
                    <div className='flex flex-col gap-2 text-[#F4EFFE]'>

                        {/* caption */}
                        <h4 className='font-normal text-xs'>
                            My Portfolio balance
                        </h4>

                        {/* balance */}
                        <PortfolioBalance />
                    </div>

                    {/* expand details */}
                    <div className='flex items-center gap-2'>
                        <span
                        onClick={()=>navigate("/home/overview/coin-buy-sell?id=1&asset=binancecoin")} 
                        className='text-[#F4EFFE] text-sm font-bold'>
                            P2P Trading
                        </span>

                        <ArrowRight2
                        size="18"
                        color="#F4EFFE"
                        variant="TwoTone" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader