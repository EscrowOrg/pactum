import { Eye, EyeSlash } from 'iconsax-react'
import { useState } from 'react'

const PortfolioBalance = ({usdValue, btcValue, loading}) => {

    // STATES
    const [isHidden, setIsHidden] = useState(false)


    // HANDLERS
    const toggleBalanceVisibility = () => {
        setIsHidden(!isHidden)
    }
    return (
        <div className='flex flex-col gap-2 text-[#F4EFFE]'>
            <div className=' inline-flex items-center gap-2'>
                <h3 className='text-[22px] font-bold text-[#F4EFFE]'>
                    {
                        loading?
                        "loading...":
                        isHidden?
                        "••••••••••":
                        `$${new Intl.NumberFormat('en-US').format(usdValue)}`
                    }
                </h3>

                {
                    loading?
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
                BTC Equivalent: {loading?"loading...":isHidden?"_ _ _":btcValue}
            </h4>
        </div>
    )
}

export default PortfolioBalance