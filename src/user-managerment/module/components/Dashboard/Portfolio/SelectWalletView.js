import { useEffect, useState } from 'react'
import { SearchInput } from '../../Input'
import { useNavigate } from 'react-router-dom'
import { roundToN } from '../../../helpers/roundToN'
import { isEmpty } from '../../../helpers/isEmpty'
import EmptyDataComp from '../../Global/EmptyDataComp'

const SelectWalletView = ({walletList, mode}) => {

    // STATES
    const [searchInput, setSearchInput] = useState("")


    // DATA INITIALIZATION
    const navigate = useNavigate()

    return (
        <div className='w-full h-full flex flex-col gap-5 bg-white'>
            
            {/* search bar container */}
            <div className='flex gap-5 w-full'>
                        
                {/* search bar */}
                <SearchInput
                value={searchInput}
                onChange={(e)=>setSearchInput(e.target.value)} />
            </div>

            {/* list container */}
            <div className='flex flex-col gap-1 pb-5'>
                {
                    !isEmpty(walletList)?
                    walletList?.filter(wallet=>wallet?.currency?.toLowerCase()?.includes(searchInput?.toLowerCase()))?.map((wallet, index)=>(
                        <div
                        key={index}
                        onClick={()=>navigate(`/portfolio/checkout/${wallet.id}/${mode || "send"}`)} 
                        className='flex items-center justify-between gap-3 py-4 border-b border-[#F5F3F6] first:pt-0 w-full'>

                            {/* image section */}
                            <div className='flex items-center gap-3'>
                                <img
                                alt=""
                                src={wallet.imageUrl}
                                className='h-[40px] w-[40px] rounded-[50%]' />

                                {/* title name */}
                                <div className='flex flex-col'>
                                    <h3 className='text-sm font-semibold text-black'>
                                        {wallet.currency}
                                    </h3>
                                </div>
                            </div>

                            {/* texts */}
                            <div className='flex flex-col items-end gap-[2px]'>
                                <h3 className='text-sm font-semibold text-black'>
                                    {`${wallet.balance.availableBalance} ${wallet.currency}`}
                                </h3>
                                <h3 className='text-[#8D85A0] text-xs font-semibold'>
                                    $ {roundToN(wallet.fiatValue, 1)}
                                </h3>
                            </div>
                        </div>
                    ))
                    :<EmptyDataComp
                    viewPortHeight="h-[60vh]" />
                }
            </div>
        </div>
    )
}

export default SelectWalletView