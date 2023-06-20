import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../../../layouts/PageWrapper";
import { BackButton } from "../../../components/Button";
import "../../../layouts/Drawer/index.css";
import BuyOrder from "../../../components/Dashboard/Listing/BuyOrder";
import SellOrder from "../../../components/Dashboard/Listing/SellOrder";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import { isEmpty } from "../../../helpers/isEmpty";
import { GET_ASSETS_MAPPING } from "../../../../../serivce/apiRoutes.service";

const CreateListing = () => {

  // DATA INITIALIZATION
  const navigate = useNavigate();
  const {
    data: walletAssetData,
    getLoading: getAssetLoading,
    makeGetRequest,
  } = useMakeReq()


  // STATES
  const [assetList, setAssetList] = useState([])
  const [clickTabs, setClickTabs] = useState("buy-order");


  // HANDLERS
  const handleClick = (index) => {
    setClickTabs("buy-order");
  };

  const handleClick2 = (index) => {
    setClickTabs("sell-order");
  };


  // SIDE EFFECTS
  useEffect(()=>{
    makeGetRequest(GET_ASSETS_MAPPING)
  }, [])

  // get assets data
  useEffect(()=>{
    if(!isEmpty(walletAssetData)) {
        setAssetList(walletAssetData)
    }
  }, [walletAssetData])

  return (
    <PageWrapper>
      <div className="w-full h-full flex flex-col py-5 gap-8">
        {/* header */}
        <div className="flex items-center w-[92%] mx-auto">
          {/* back button */}
          <BackButton />
        </div>

        {/* body */}
        <div className="w-[92%] h-full flex flex-col mx-auto gap-8">

          {/* text captions */}
          <div className="flex flex-col w-full gap-2">
            <h3 className="text-2xl font-bold text-black">Create Listing</h3>

            <h4 className="text-sm font-normal text-[#645B75]">
              Put up ads in the P2P marketplace for other users.
            </h4>
          </div>

          <div className="w-full mx-auto mb-8 flex items-center justify-between bg-[#F5F3F6] border-2 border-solid font-medium rounded-lg pl-0">
            {/* buy order tab */}
            <span
              onClick={handleClick}
              className={` w-1/2 py-2 px-2 text-center cursor-pointer transition-all duration-700 ${
                clickTabs === "buy-order"
                  ? "bg-[#48A9A6]  rounded-md  text-white"
                  : ""
              }`}
            >
              Buy Order
            </span>

            {/* sell order tab */}
            <span
              onClick={handleClick2}
              className={`  w-1/2 py-2 px-2 text-center cursor-pointer transition-all duration-700 ${
                clickTabs === "sell-order"
                  ? "bg-green-500  rounded-md  text-white"
                  : ""
              }`}
            >
              Sell Order
            </span>
          </div>

          {/* buy and sell order contents */}
          {
            clickTabs === "buy-order" ? 
            <BuyOrder
            assetList={assetList} />:
            <SellOrder
            assetList={assetList} />
          }
        </div>
      </div>
    </PageWrapper>
  );
};

export default CreateListing;
