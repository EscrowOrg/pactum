import { useState } from 'react'
import { SearchInput } from '../../Input'

const AssetsListView = ({assetList, setAsset, closeDrawer}) => {

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
                    assetList.filter(asset=>asset?.currencyName?.toLowerCase()?.includes(searchInput?.toLowerCase()))?.map((asset, index)=>(
                        <div
                        key={index}
                        onClick={()=>{
                            setAsset({
                                name: asset.currencyName,
                                symbol: asset.currency,
                                network: asset.network,
                                image: asset.imageUrl
                            })
                            closeDrawer()
                        }} 
                        className='flex items-center gap-3 py-4 border-b border-[#F5F3F6] first:pt-0'>

                            <img
                            alt=""
                            src={asset.imageUrl}
                            className='h-[40px] w-[40px] rounded-[50%]' />

                            <div className='flex items-center gap-1'>
                                <h4 className='font-semibold text-sm text-black'>
                                    {asset.currencyName}
                                </h4>
                                
                                <h4 className='font-normal text-xs text-[#8D85A0]'>
                                    {asset.currency}
                                </h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AssetsListView