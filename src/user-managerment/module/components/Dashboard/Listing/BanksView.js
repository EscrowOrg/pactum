import { useState } from 'react'
import { SearchInput } from '../../Input'
import { Bank } from 'iconsax-react'

const BanksView = ({
    listItem,
    closeDrawer,
    setBank
}) => {

    // STATES
    const [searchInput, setSearchInput] = useState("")
    
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
                    listItem?.filter(bank=>bank?.bankName?.toLowerCase()?.includes(searchInput?.toLowerCase()))?.map((bank, index)=>(
                        <div
                        key={index}
                        onClick={()=>{
                            setBank(bank)
                            closeDrawer()
                        }} 
                        className='flex items-center gap-4 py-4 border-b border-[#F5F3F6] first:pt-0'>
                            
                            {/* image */}
                            <span className='w-[40px] h-[40px] bg-gray-200 rounded-[50%] inline-flex items-center justify-center'>
                                <Bank
                                size="18"
                                variant='Bold'
                                color="#3A0CA3"
                                />
                            </span>
                            
                            {/* details */}
                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center gap-2'>
                                    <h4 className='font-semibold text-sm text-black'>
                                        {bank.bankName.toUpperCase()}
                                    </h4>
                                    
                                    <h4 className='font-normal text-xs text-[#8D85A0] mt-auto'>
                                        {bank.accountNumber}
                                    </h4>
                                </div>

                                {/* bank account name */}
                                <h4 className='font-semibold text-sm text-black'>
                                    {bank.accountName}
                                </h4>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BanksView