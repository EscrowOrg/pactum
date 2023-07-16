import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import {
  ArrowSwapHorizontal,
  MoneyRecive,
  MoneySend,
  WalletAdd,
  WalletMinus,
} from "iconsax-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_GET_ASSETS_MAPPING, AUTH_GET_USER_DETS } from "../../../../../serivce/apiRoutes.service";
import { getUserId } from "../../../../../serivce/cookie.service";
import { isEmpty } from "../../../helpers/isEmpty";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import Drawer from "../../../layouts/Drawer";
import SlideWrapper from "../../../layouts/Drawer/SlideWrapper";
import StrictWrapper from "../../../layouts/Drawer/StrictWrapper";
import "../../../layouts/Drawer/index.css";
import AccountBalanceCard from "./AccountBalanceCard";
import ActionBtn from "./ActionBtn";
import AssetAccountList from "./AssetAccountList";
import AssetsFilterView from "./AssetsFilterView";
import ReceiveAssetList from "./RecieveAssetList";
import SelectWalletView from "./SelectWalletView";

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
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("");
  const [isSelectWalletOpen, setIsSelectWalletOpen] = useState(false);
  const [isSelectAssetOpen, setIsSelectAssetOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("A-Z");
  const [assetList, setAssetList] = useState([])
  const [asset, setAsset] = useState({
      name: "",
      symbol: "",
      assetId: null,
      networkName: "",
      networkId: null,
      image: ""
  })

  // HANDLERS
  const toggleDrawer = (value) => {
    setIsOpen((isOpen) => !isOpen);
  };
  const toggleSelectWalletDrawer = (value) => {
    setIsSelectWalletOpen((isSelectWalletOpen) => !isSelectWalletOpen);
  };
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
            toggleSelectWalletDrawer();
            setMode("send");
          }}
          Icon={MoneySend}
          text={"Send"}
        />

        <ActionBtn
          onClick={() => {
            toggleSelectAssetDrawer();
          }}
          Icon={MoneyRecive}
          text={"Receive"}
        />

        <ActionBtn
          onClick={() => navigate("/portfolio/swap-bridge")}
          Icon={ArrowSwapHorizontal}
          text={"Swap"}
        />

        <ActionBtn Icon={WalletAdd} text={"Buy"} />

        <ActionBtn Icon={WalletMinus} text={"Sell"} />
      </div>

      {/* My Assets */}
      <AssetAccountList
        toggleDrawer={toggleDrawer}
        filterValue={filterValue}
        assetAccounts={assetAccount}
      />

      {/* filter Drawer */}
      <Drawer
        height="!h-auto"
        insertCurve={false}
        type="slider"
        isOpen={isOpen}
        onClose={toggleDrawer}
        position="bottom"
      >
        {/* drawer content container */}
        <SlideWrapper title={"Filter by:"}>
          <AssetsFilterView
            filterValue={filterValue}
            setFilterValue={setFilterValue}
            closeDrawer={toggleDrawer}
          />
        </SlideWrapper>
      </Drawer>

      {/* Wallets Drawer */}
      <Drawer
        isOpen={isSelectWalletOpen}
        onClose={toggleSelectWalletDrawer}
        position="bottom"
      >
        {/* drawer content container */}
        <StrictWrapper
          title={"Select a wallet"}
          closeDrawer={toggleSelectWalletDrawer}
        >
          {/* Body content */}
          <SelectWalletView
            mode={mode}
            walletList={assetAccount}
            closeDrawer={toggleSelectWalletDrawer}
          />
        </StrictWrapper>
      </Drawer>

      {/* assets Drawer */}
      <Drawer
        isOpen={isSelectAssetOpen}
        onClose={toggleSelectAssetDrawer}
        position="bottom"
      >
        {/* drawer content container */}
        <StrictWrapper
          title={"Select an Asset"}
          closeDrawer={toggleSelectAssetDrawer}
        >
          {/* Body content */}
          <ReceiveAssetList
            assetList={assetList}
            closeDrawer={toggleDrawer}/>
        </StrictWrapper>
      </Drawer>
    </div>
  );
};

export default UsersWalletCard;
