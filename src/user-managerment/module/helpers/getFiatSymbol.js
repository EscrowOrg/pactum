export const getFiatSymbol = (fiatId) => {
    const fiatLabel = [undefined,"₦", "$", "€"]
    if(typeof fiatId !== "number") {
        console.log("fiatId must be a number")
        return undefined
    } else if(fiatId>3) {
        console.log("fiatId shouldn't be greater than '3'")
        return undefined
    }

    return fiatLabel[fiatId]
}