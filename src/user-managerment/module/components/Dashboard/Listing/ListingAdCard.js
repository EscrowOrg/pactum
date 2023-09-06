import { AiOutlineUser } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { ListingType } from '../../../helpers/enums'
import { getAssetLabel } from '../../../helpers/getAssetLabel'
import { getFiatSymbol } from '../../../helpers/getFiatSymbol'
import { isEmpty } from '../../../helpers/isEmpty'
import { ErrorButton, PrimaryButton } from '../../Button'

const ListingAdCard = ({
    merchantName,
    username,
    tradePrice,
    availableBalance,
    lowerLimit,
    upperLimit,
    tradeMade,
    percentageUsed,
    listingType,
    imageUrl,
    adID,
    asset,
    assetId,
    fiatCurrency,
    defaultAssetLabel
}) => {

    // DATA INITIALIZATION
    const navigate = useNavigate()
    
    return (
        <div
            className="w-full border border-[#F5F3F6] bg-white rounded-lg py-3 px-4 flex flex-col gap-4"
        >

            {/* profile info */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-[#F5F3F6]">

            {/* name */}
            <div className="flex items-center gap-2">
                {
                    isEmpty(imageUrl)?
                    <span className="w-[30px] h-[30px] inline-flex justify-center items-center rounded-[50%] border-2 border-gray-500 text-gray-500 text-xl">
                        <AiOutlineUser />
                    </span>:
                    <img
                    alt=""
                    src={imageUrl}
                    className="h-[40px] w-[40px] rounded-[50%]"
                    />
                }

                <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-black text-sm">
                    {merchantName}
                </h3>

                <h4 className="text-[#8D85A0] text-xs font-normal">
                    {username}
                </h4>
                </div>
            </div>

            {/* price */}
            <div className="flex flex-col items-end gap-[2px]">
                <h4 className="text-[#8D85A0] text-xs font-normal">
                Price
                </h4>

                <h4 className="text-lg font-bold text-[#2D6A68]">
                ₦{tradePrice.toLocaleString('en-US')}
                </h4>
            </div>
            </div>

            {/* available order & min-max order */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-[#F5F3F6]">
            <div className="flex flex-col gap-[2px]">
                <h3 className="font-normal text-xs text-[#8D85A0]">
                Quantity Available
                </h3>

                <h4 className="text-sm font-semibold text-black">
                {`${availableBalance} ${getAssetLabel(assetId)}`}
                </h4>
            </div>

            <div className="flex flex-col gap-[2px] items-end">
                <h3 className="font-normal text-xs text-[#8D85A0]">
                Min - Max Order
                </h3>

                <h4 className="text-sm font-semibold text-black">
                {`${getFiatSymbol(+fiatCurrency)}${lowerLimit.toLocaleString("en-US")} - ${getFiatSymbol(+fiatCurrency)}${upperLimit.toLocaleString("en-US")}`}
                </h4>
            </div>
            </div>

            {/* trade percentage */}
            <div className="w-full flex items-center justify-between pb-4">
            <div className="flex flex-col gap-[2px]">
                <h3 className="font-normal text-xs text-[#8D85A0]">
                Trade
                </h3>

                <h4 className="text-sm font-semibold text-[#645B75]">
                {tradeMade}{" "}
                <span className="text-[#8D85A0] font-normal">{`(${percentageUsed}% Completion)`}</span>
                </h4>
            </div>

            {listingType===ListingType.SELL ? (
                <ErrorButton
                onClick={() =>
                    navigate(`/home/sell-coin/${adID}?asset=${asset?.value}`)
                }
                height="h-10"
                text="Sell"
                />
            ) : (
                <PrimaryButton
                onClick={() =>
                    navigate(`/home/buy-coin/${adID}?asset=${asset?.value}`)
                }
                height="h-10"
                text="Buy"
                />
            )}
            </div>
        </div>
    )
}

export default ListingAdCard