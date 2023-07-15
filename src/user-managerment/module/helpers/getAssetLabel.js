export const getAssetLabel = (assetId) => {
    const coinLabel = ["USDT","BTC", "ETH", "BNB"]
    if(typeof assetId !== "number") {
        console.log("assetId must be a number")
        return undefined
    } else if(assetId>3) {
        console.log("assetId shouldn't be greater than '3'")
        return null
    }

    return coinLabel[assetId]
}