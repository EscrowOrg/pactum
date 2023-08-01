import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isEmpty } from '../../../helpers/isEmpty'
import EmptyDataComp from '../../Global/EmptyDataComp'
import LoadingSpinner from '../../Global/LoadingSpinner'
import { SearchInput } from '../../Input'

const ReceiveAssetList = ({assetList, closeDrawer, mode, loading}) => {

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
                    loading?
                    <LoadingSpinner
                    bgColor="bg-transparent"
                    viewPortHeight="h-[60vh]" />:
                    !isEmpty(assetList)?
                    assetList?.filter(asset=>asset?.currencyName?.toLowerCase()?.includes(searchInput?.toLowerCase()))?.map((asset, index)=>(
                        <div
                        key={index}
                        onClick={()=>{
                            navigate(`/portfolio/checkout/${asset.currency}/${mode || "receive"}`)
                            closeDrawer()
                        }} 
                        className='flex items-center gap-3 py-4 border-b border-[#F5F3F6] first:pt-0 cursor-pointer'>

                            <img
                            alt=""
                            src={asset.imageUrl}
                            className='h-[40px] w-[40px] rounded-[50%]' />

                            <div className='flex items-center gap-1'>
                                <h4 className='font-semibold text-sm text-black'>
                                    {asset.currencyName}
                                </h4>
                                
                                <h4 className='font-normal text-xs text-[#8D85A0] mt-auto'>
                                    {asset.symbol}
                                </h4>
                            </div>
                        </div>
                    )):
                    <EmptyDataComp
                    bgColor="bg-transparent"
                    viewPortHeight="h-[60vh]" />
                }
            </div>
        </div>
    )
}

export default ReceiveAssetList