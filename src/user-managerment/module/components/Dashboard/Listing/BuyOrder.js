import React, { useState } from "react";
import DrawerSelectInput from "../Portfolio/DrawerSelectInput";
import { TextLabelInput } from "../../Input";
import { PrimaryButton } from "../../Button";
import Drawer from "../../../layouts/Drawer";
import StrictWrapper from "../../../layouts/Drawer/StrictWrapper";
import AssetsListView from "../Portfolio/AssetsListView";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ReceivingBank from "../../../pages/Dashboard/Home/ReceivingBank";

const BuyOrder = () => {
  // DATA INITIALIZATION
  const navigate = useNavigate();

  // STATES
  const [isOpen, setIsOpen] = useState(false);
  const [listingData, setListingData] = useState({
    asset: "",
    receivingBank: "",
  });

  // HANDLERS
  const toggleDrawer = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div>
      <form
        className="flex flex-col gap-5 w-full h-full pb-5"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* assets  */}
        <label className="flex flex-col gap-2 w-full">
          {/* label text  */}
          <span className="font-medium text-xs text-black">Assets</span>

          {/* input field  */}
          <DrawerSelectInput
            value={listingData?.asset || "Select asset"}
            onClick={toggleDrawer}
          />
        </label>

        {/* Listing Amount  */}
        <label className="flex flex-col gap-2 w-full">
          {/* title  */}
          <span className="font-medium text-xs text-black">Listing Amount</span>

          {/* input field  */}
          <TextLabelInput label={""} placeholderText={"400,000"} type="number" style={{display: 'none'}}/>
        </label>

        {/* Rate-Fiat Value  */}
        <label className="flex flex-col gap-2 w-full">
          {/* title */}
          <span className="font-normal text-xs text-black">
            Rate-Fiat Value
          </span>

          {/* input field  */}
          <TextLabelInput label={"NAIRA"} placeholderText={"757.89"}  type="number" />
        </label>

        {/* Minimum Transaction Limit  */}
        <label className="flex flex-col gap-2 w-full">
          {/* title* */}
          <span className="font-medium text-xs text-black">
            Minimum Transaction Limit
          </span>

          {/* input field  */}
          <TextLabelInput label={"NAIRA"} placeholderText={"200,000"}  type="number"/>
        </label>

        {/* Maximum Transaction Limit  */}
        <label className="flex flex-col gap-2 w-full">
          {/* title */}
          <span className="font-medium text-xs text-black">
            Maximum Transaction Limit
          </span>

          {/* input field */}
          <TextLabelInput label={"NAIRA"} placeholderText={"1,000,000"}  type="number"/>
        </label>

        
        {/* Payment Timeframe  */}
        <label className="flex flex-col gap-2 w-full">
          {/* title */}
          <span className="font-medium text-xs text-black">
            Payment Timeframe
          </span>

          {/* input field */}
          <TextLabelInput label={"MINUTES"} placeholderText={"15"}  type="number"/>
        </label>

        {/* Receiving Bank  */}
        <label onClick={toggleDrawer} className="flex flex-col gap-2 w-full">
          {/* label text  */}
          <span className="font-medium text-xs text-black">Receiving Bank</span>

          {/* input field */}
          <DrawerSelectInput
            value={listingData?.receivingBank || "First Bank - 1234567891"}
          />
        </label>

        {/* container */}
        <div className="flex w-full flex-col">
          {/* continue button */}
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
      </form>

      {/* Assets Drawer  */}
      <Drawer isOpen={isOpen} onClose={toggleDrawer} position="bottom">
        {/* drawer content container  */}
        <StrictWrapper title={"Assets"} closeDrawer={toggleDrawer}>
          {/* Body content  */}
          <AssetsListView
            closeDrawer={toggleDrawer}
            setWalletData={setListingData}
          />
        </StrictWrapper>
      </Drawer>

         {/* Drawer */}
         <Drawer
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            position="bottom">

                 {/* drawer content container */}
                <StrictWrapper
                title={"Receiving Bank"}
                closeDrawer={() => setIsOpen(false)}>

                     {/* Body content  */}
                    <ReceivingBank />                    
                </StrictWrapper>
            </Drawer> 
    </div>
  );
};

export default BuyOrder;
