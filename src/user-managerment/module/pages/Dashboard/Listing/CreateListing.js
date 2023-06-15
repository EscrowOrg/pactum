import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../../../layouts/PageWrapper";
import { BackButton } from "../../../components/Button";
import "../../../layouts/Drawer/index.css";
import BuyOrder from "../../../components/Dashboard/Listing/BuyOrder";
import SellOrder from "../../../components/Dashboard/Listing/SellOrder";

const CreateListing = () => {
  // DATA INITIALIZATION
  const navigate = useNavigate();

  // STATES
  const [isOpen, setIsOpen] = useState(false);
  const [listingData, setListingData] = useState({
    asset: "",
    receivingBank: "",
  });
  const [clickTabs, setClickTabs] = useState("buy-order");
  // HANDLERS
  const toggleDrawer = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleClick = (index) => {
    setClickTabs("buy-order");
  };

  const handleClick2 = (index) => {
    setClickTabs("sell-order");
  };

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
          <div>{clickTabs === "buy-order" ? <BuyOrder /> : <SellOrder />}</div>

          {/* <form
            className="flex flex-col gap-5 w-full h-full pb-5"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* assets 
            <label className="flex flex-col gap-2 w-full">
              {/* label text 
              <span className="font-medium text-xs text-black">Assets</span>

              {/* input field 
              <DrawerSelectInput
                value={listingData?.asset || "Select asset"}
                onClick={toggleDrawer}
              />
            </label>

            {/* Listing Amount 
            <label className="flex flex-col gap-2 w-full">
              {/* title 
              <span className="font-medium text-xs text-black">
                Listing Amount
              </span>

              {/* input field 
              <TextLabelInput
                label={"BTC"}
                placeholderText={"400,000"} 
              />
            </label>

            {/* Rate-Fiat Value 
            <label className="flex flex-col gap-2 w-full">
              {/* title *
              <span className="font-normal text-xs text-black">
                Rate-Fiat Value
              </span>

              {/* input field 
              <TextLabelInput
                label={"NAIRA"}
                placeholderText={"757.89"}
              />
            </label>

            {/* Minimum Transaction Limit 
            <label className="flex flex-col gap-2 w-full">
              {/* title*
              <span className="font-medium text-xs text-black">
                Minimum Transaction Limit
              </span>

              {/* input field *
              <TextLabelInput
                label={"NAIRA"}
                placeholderText={"200,000"}
              />
            </label>

            {/* Maximum Transaction Limit *
            <label className="flex flex-col gap-2 w-full">
              {/* title *
              <span className="font-medium text-xs text-black">
                Maximum Transaction Limit
              </span>

              {/* input field *
              <TextLabelInput
                label={"NAIRA"}
                placeholderText={"1,000,000"}
              />
            </label>

            {/* Receiving Bank *
            <label className="flex flex-col gap-2 w-full">
              {/* label text *
              <span className="font-medium text-xs text-black">
                Receiving Bank
              </span>

              {/* input field *
              <DrawerSelectInput
                value={listingData?.receivingBank || "First Bank - 1234567891"}
              />
            </label>

            {/* container *
            <div className="flex w-full flex-col">
              {/* continue button *
              <div className="w-full flex flex-col items-stretch">
                <PrimaryButton
                  onClick={() => {
                    toast.success("Listing created successful!");
                    navigate("/listing");
                  }}
                  text={"Create"}
                />
              </div>
            </div>
                </form> */}
        </div>
      </div>

      {/* Assets Drawer 
      <Drawer isOpen={isOpen} onClose={toggleDrawer} position="bottom">
        {/* drawer content container 
        <StrictWrapper title={"Assets"} closeDrawer={toggleDrawer}>
          {/* Body content *
          <AssetsListView
            closeDrawer={toggleDrawer}
            setWalletData={setListingData}
          />
        </StrictWrapper>
                </Drawer> */}
    </PageWrapper>
  );
};

export default CreateListing;
