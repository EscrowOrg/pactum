export const getAssetLabel = (assetId) => {
  const coinLabel = ["USDT", "BTC", "ETH", "BNB"];
  const labelCoin = [
    {
      value:1 , 
      name: "USDC",
    },
    {
      value:2,
      name:"ETH"
    },
    {
      value:3,  
      name: "BNB",
    },
    {
      value: 4,
      name:"BTC"
    },
    {
      value: 5,
      name:"BUSD"
    },
    {
      value: 6,
      name:"USDT"
    },
  ];
  if (typeof assetId !== "number") {
    console.log("assetId must be a number");
    return undefined;
  } else if (assetId > 7) {
    console.log("assetId shouldn't be greater than '3'");
    return undefined;
  }

  return labelCoin.find(x=>x.value==assetId).name;
};
