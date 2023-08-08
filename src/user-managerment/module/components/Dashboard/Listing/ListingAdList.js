import React from 'react'
import { isEmpty } from '../../../helpers/isEmpty'
import EmptyDataComp from '../../Global/EmptyDataComp'
import ListingAdCard from './ListingAdCard'

const ListingAdList = ({listingAds, coinId, coinSelect}) => {
    return (
        <>
            {
                !isEmpty(listingAds)?
                listingAds.map((listingAd, index)=>(
                    <ListingAdCard
                    defaultAssetLabel={coinId}
                    key={index}
                    adID={listingAd.adId}
                    merchantName={listingAd.merchantName}
                    username={listingAd.username}
                    tradePrice={listingAd.tradePrice}
                    availableBalance={listingAd.availableBalance}
                    lowerLimit={listingAd.lowerLimit}
                    upperLimit={listingAd.upperLimit}
                    tradeMade={listingAd.tradeMade}
                    percentageUsed={listingAd.percentageUsed}
                    listingType={listingAd.listingType}
                    assetId={listingAd.assets}
                    asset={coinSelect} />
                )):
                <EmptyDataComp
                bgColor="bg-transparent"
                viewPortHeight="h-[60vh]" />
            }
            
        </>
    )
}

export default ListingAdList