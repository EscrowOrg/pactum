import { useEffect, useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { roundToN } from '../../../helpers/roundToN'

const AssetAccountList = ({
    assetAccounts,
}) => {

    // STATES
    const [assetList, setAssetList] = useState([])
    const [searchInput, setSearchInput] = useState("")


    // DATA INITIALIZTION
    const navigate = useNavigate()


    // SIDE EFFECTS
    useEffect(()=>{
        setAssetList(assetAccounts)
    }, [assetAccounts])

    return (
        <div className='w-full flex flex-col gap-5 pb-24'>

            {/* title */}
            <div className='flex items-center justify-between'>
                <h3 className='text-black text-base font-semibold'>
                    My Wallets
                </h3>

                {/* search input */}
                <div className='bg-[#F5F3F6] rounded-md border border-[#F5F3F6] flex items-center justify-between gap-1 py-[5px] px-2 w-[98px]'>
                    <HiOutlineSearch
                    className='text-[#ACA6BA]' />

                    <input 
                    className='placeholder:font-normal placeholder:text-xs placeholder:text-[#ACA6BA] text-xs font-normal text-[#202223] rounded-lg bg-transparent outline-none w-full h-full'
                    type={"search"}
                    value={searchInput}
                    onChange={(e)=>setSearchInput(e.target.value)}
                    placeholder={"Search"} />
                </div>
            </div>

            {/* list */}
            <div className='flex flex-col w-full gap-4'>

                {
                    assetList.filter(asset=>asset?.currency?.toLowerCase()?.includes(searchInput?.toLowerCase()))?.map(((asset, index)=>(
                        <div
                        key={index}
                        onClick={()=>navigate(`/portfolio/checkout/${asset.id}`)} 
                        className='flex items-center justify-between w-full'>

                            {/* image section */}
                            <div className='flex items-center gap-3'>
                                <img
                                alt=""
                                src={asset.imageUrl}
                                className='h-[40px] w-[40px]' />

                                {/* title name */}
                                <div className='flex flex-col'>
                                    <h3 className='text-sm font-semibold text-black'>
                                        {asset.currency}
                                    </h3>
                                </div>
                            </div>

                            {/* texts */}
                            <div className='flex flex-col items-end gap-[2px]'>
                                <h3 className='text-sm font-semibold text-black'>
                                    {`${asset.balance.availableBalance} ${asset.currency}`}
                                </h3>
                                <h3 className='text-[#8D85A0] text-xs font-semibold'>
                                    $ {roundToN(asset.fiatValue, 1)}
                                </h3>
                            </div>
                        </div>
                    )))
                }
            </div>
        </div>
    )
}

export default AssetAccountList