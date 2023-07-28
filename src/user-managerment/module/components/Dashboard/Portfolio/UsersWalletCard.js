import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import {
  MoneyRecive,
  MoneySend,
  WalletAdd,
  WalletMinus
} from "iconsax-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_GET_ASSETS_MAPPING, AUTH_GET_USER_DETS } from "../../../../../serivce/apiRoutes.service";
import { getUserId } from "../../../../../serivce/cookie.service";
import { isEmpty } from "../../../helpers/isEmpty";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import Drawer from "../../../layouts/Drawer";
import StrictWrapper from "../../../layouts/Drawer/StrictWrapper";
import "../../../layouts/Drawer/index.css";
import AccountBalanceCard from "./AccountBalanceCard";
import ActionBtn from "./ActionBtn";
import AssetAccountList from "./AssetAccountList";
import ReceiveAssetList from "./RecieveAssetList";

// ant icon
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 26,
      color: "#3A0CA3",
    }}
    spin
  />
);

const UsersWalletCard = ({ assetAccount }) => {
  // DATA INITIALIZATION
  const navigate = useNavigate();
  const { getLoading, data, makeAuthGetReq } = useMakeReq();
  const {
    data: walletAssetData,
    getLoading: getAssetLoading,
    makeAuthGetReq: getAssets,
} = useMakeReq()

  // STATES
  const [isVendor, setIsVendor] = useState(false);
  const [mode, setMode] = useState("");
  const [isSelectAssetOpen, setIsSelectAssetOpen] = useState(false);
  const [assetList, setAssetList] = useState([])

  // HANDLERS
  const toggleSelectAssetDrawer = (value) => {
    setIsSelectAssetOpen((isSelectAssetOpen) => !isSelectAssetOpen);
  };

  // SIDE EFFECTS
  useEffect(() => {
    makeAuthGetReq(`${AUTH_GET_USER_DETS}/${getUserId()}`);
  }, []);
  useEffect(()=>{
    getAssets(AUTH_GET_ASSETS_MAPPING)
}, [])

// get assets data
useEffect(()=>{
    if(!isEmpty(walletAssetData)) {
        setAssetList(walletAssetData)
    }
}, [walletAssetData])
  // populating data
  useEffect(() => {
    if (!isEmpty(data)) {
      setIsVendor(data?.isVendor);
    }
  }, [data]);

  return (
    <div className="w-full h-full flex flex-col gap-8">
      {/* card */}
      {getLoading ? (
        <div className="flex bg-gray-50 rounded-md m-auto w-full min-h-[23vh] justify-center items-center">
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <AccountBalanceCard isVendor={isVendor} />
      )}

      {/* actions */}
      <div className="flex items-center justify-evenly gap-3 w-full">
        {/* button */}
        <ActionBtn
          onClick={() => {
            toggleSelectAssetDrawer();
            setMode("send");
          }}
          Icon={MoneySend}
          text={"Send"}
        />

        <ActionBtn
          onClick={() => {
            toggleSelectAssetDrawer();
            setMode("receive");
          }}
          Icon={MoneyRecive}
          text={"Receive"}
        />

        <ActionBtn 
        onClick={()=>navigate("/home/overview/coin-buy-sell?id=2&asset=ethereum")}
        Icon={WalletAdd} 
        text={"Buy"} />

        <ActionBtn 
        onClick={()=>navigate("/home/overview/coin-buy-sell?id=1&asset=ethereum")}
        Icon={WalletMinus} 
        text={"Sell"} />
      </div>

      {/* My Assets */}
      <AssetAccountList
        assetAccounts={assetAccount}
      />

      {/* assets Drawer */}
      <Drawer
        isOpen={isSelectAssetOpen}
        onClose={toggleSelectAssetDrawer}
        position="bottom"
      >
        {/* drawer content container */}
        <StrictWrapper
          title={`Asset to ${mode}`}
          closeDrawer={toggleSelectAssetDrawer}
        >
          {/* Body content */}
          <ReceiveAssetList
          mode={mode}
          loading={getAssetLoading}
          assetList={assetList}
          closeDrawer={toggleSelectAssetDrawer}/>
        </StrictWrapper>
      </Drawer>
    </div>
  );
};

export default UsersWalletCard;
