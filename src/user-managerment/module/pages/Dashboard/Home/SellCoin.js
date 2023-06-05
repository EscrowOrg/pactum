import { useState } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import {ArrowRight2, Copy, RefreshCircle, TransactionMinus} from "iconsax-react";
import { BackButton, ErrorButton} from "../../../components/Button";
import {  TextLabelInput } from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import { copyToClipBoard } from "../../../helpers/copyToClipboard";
import Drawer from "../../../layouts/Drawer";
import StrictWrapper from "../../../layouts/Drawer/StrictWrapper";
// import Assets from "./Assets";
import ReceivingBank from "./ReceivingBank";

const SellCoin = () => {
  const [isSelected, setIsSelected] = useState(false);

  // DATA INITIALIZATION
  const navigate = useNavigate();
  const options = [
    { value: 1, label: "Trust Wallet" },
    { value: 2, label: "MetaMask" },
  ];

//   Drawer State
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    amount: "",
  });

  // HANDLERS
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  //Drawer HANDLERS
  const toggleDrawer = (value) => {
    // value?setIsOpen(value):setIsOpen(isOpen => !isOpen)
    setIsOpen(isOpen => !isOpen)
}

  return (
    <PageWrapper>
      <div className="w-full h-full flex flex-col py-5 gap-8">
        {/* header */}
        <div className="flex items-center w-[92%] mx-auto justify-between">
          {/* back button */}
          <BackButton />

          {/* text */}
          <h3 className="font-bold text-lg text-black">Sell BTC</h3>

          {/* transaction list button */}
          <button className="px-3 py-3 w-fit border border-[#DAD7E0] bg-[#FAFAFB] inline-flex items-center justify-center rounded-xl cursor-pointer hover:bg-gray-200">
            <TransactionMinus size="14" color="#16053D" />
          </button>
        </div>

        {/* body */}
        <div className="w-[92%] h-full flex flex-col mx-auto gap-8 pb-5">
          {/* form */}
          <form
            className="flex flex-col gap-5 w-full h-full"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* {/* wallet 
                        <label className="flex flex-col gap-2 w-full">

                            {/* label text 
                            <span
                            className="font-normal text-xs text-black">
                               Crypto Amount
                            </span>

                            {/* input field
                            <SelectInput
                            options={options} />
                        </label> */}

            {/* Company's email address container */}
            <label className="flex flex-col gap-2 w-full">
              {/* worth of assets in naira */}
              <span className="font-normal text-xs text-black">
                Crypto Amount
              </span>

              {/* input field */}
              <TextLabelInput
                label={
                  <>
                    BTC |
                    <span className="text-[#EB9B00] font-semibold">Max</span>
                  </>
                }
                name={"amount"}
                value={formData.amount}
                onChange={handleChange}
                placeholderText={"Enter crypto amount"}
              />
            </label>

            {/* transaction details */}
            <div className="flex items-center w-full justify-between text-sm">
              <div className="font-normal text-[#ACA6BA]">
                Price:
                <span className="text-[#141217] font-semibold">₦400</span>
              </div>
              {/* left line */}
              <hr className="w-16" />
              {/* circle */}
              <div className="flex items-center text-[#DAD7E0] gap-1">
                <RefreshCircle variant="TwoTone" size={24} color="#16053D" />
              </div>

              {/* right line */}
              <hr className="w-16" />

              <div className="font-normal text-[#ACA6BA]">
                You will receive:{" "}
                <span className="text-[#141217] font-semibold">...</span>
              </div>
            </div>

            {/* summary details */}
            {!isSelected ? (
              <div className="flex w-full flex-col gap-6">
                {/* info */}
                <div className="flex flex-col w-full gap-5 bg-gray-100 py-3 px-4 rounded-lg">
                  {/*  Payment Timeframe */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-normal text-xs text-[#8D85A0]">
                      Payment Timeframe
                    </h3>

                    <h3 className="text-black text-sm font-semibold">15 min</h3>
                  </div>

                  {/*  Min - Max Order Amount */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-normal text-xs text-[#8D85A0]">
                      Min - Max Order Amount
                    </h3>

                    <h3 className="text-black text-sm font-semibold">
                      0.989 - 4.583 BTC
                    </h3>
                  </div>

                  {/* fiat amount */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-normal text-xs text-[#8D85A0]">
                      Fiat Amount
                    </h3>

                    <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                      ₦---
                    </h3>
                  </div>

                  {/* username */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-normal text-xs text-[#8D85A0]">
                      Buyer
                    </h3>

                    <h3 className="text-black text-sm font-semibold">
                      jhoellasemota
                    </h3>
                  </div>
                </div>

                {/* Existing Bank details */}
                <div className="flex items-center w-full bg-[#6D34F0]">
                  {/* first cont */}
                  <div className="bg-[#6D34F0] flex flex-col gap-2 py-3 px-4 w-full">
                    <h5 className="text-[8px] font-normal text-[#D2C1FA]">
                      BANK DETAILS LAST USED
                    </h5>

                    <h5 className="font-bold text-base text-[#F4EFFE]">
                      First bank
                    </h5>

                    <h5 className="font-semibold text-[#F4EFFE] text-sm">
                      2682727911 - Asemota Joel
                    </h5>
                  </div>
                  <div
                    onClick={toggleDrawer}
                    className="flex items-center justify-center h-full w-16 bg-[rgba(255,255,255,.2)] cursor-pointer"
                  >
                    <ArrowRight2 variant="TwoTone" size={10} color="#F4EFFE" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col bg-gray-100 py-3 px-4 gap-6 rounded-lg w-full relative overflow-hidden">
                {/* circles */}
                <span className="absolute bottom-[55%] translate-y-[45%] right-[-1.2rem] rounded-[50%] bg-white h-[32px] w-[32px]" />
                <span className="absolute bottom-[55%] translate-y-[45%] left-[-1.2rem] rounded-[50%] bg-white h-[32px] w-[32px]" />

                {/* info */}
                <div className="flex flex-col w-full gap-5 pb-7 [border-bottom:1px_dashed_#DAD7E0]">
                  {/* receiving wallet */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-normal text-xs text-[#8D85A0]">
                      Receiving Wallet
                    </h3>

                    <h3 className="text-black text-sm font-semibold">$240</h3>
                  </div>

                  {/* price */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-normal text-xs text-[#8D85A0]">
                      Price
                    </h3>

                    <h3 className="text-black text-sm font-semibold">$240</h3>
                  </div>

                  {/* order id */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-normal text-xs text-[#8D85A0]">
                      Order ID
                    </h3>

                    <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                      hfsbg4u9ui093u290u02
                      <Copy
                        onClick={() => copyToClipBoard("hfsbg4u9ui093u290u02")}
                        variant="Bulk"
                        size={16}
                        color="#3F9491"
                      />
                    </h3>
                  </div>
                </div>

                {/* bank details */}
                <div className="flex flex-col w-full gap-5">
                  {/* bank name */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-normal text-xs text-[#8D85A0]">
                      Bank Name
                    </h3>

                    <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                      First Bank
                      <Copy
                        onClick={() => copyToClipBoard("First Bank")}
                        variant="Bulk"
                        size={16}
                        color="#3F9491"
                      />
                    </h3>
                  </div>

                  {/* account number */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-normal text-xs text-[#8D85A0]">
                      Account Number
                    </h3>

                    <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                      4890149295
                      <Copy
                        onClick={() => copyToClipBoard("4890149295")}
                        variant="Bulk"
                        size={16}
                        color="#3F9491"
                      />
                    </h3>
                  </div>

                  {/* account name */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-normal text-xs text-[#8D85A0]">
                      Account Name
                    </h3>

                    <h3 className="text-black text-sm font-semibold">
                      Asemota Joel
                    </h3>
                  </div>

                  {/* user name */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-normal text-xs text-[#8D85A0]">
                      User Name
                    </h3>

                    <h3 className="text-black text-sm font-semibold">
                      jhoellasemota
                    </h3>
                  </div>
                </div>
              </div>
            )}

            {/* container */}
            <div className="flex w-full flex-col mt-auto">
              {/* continue button */}
              <div className="w-full flex flex-col items-stretch">
                <ErrorButton
                  onClick={() =>
                    navigate(
                      "/home/sell-coin/jdhfkdjkfjdkfjdk/sell-order-statement"
                    )
                  }
                  text={"Sell BTC"}
                />
              </div>
            </div>
          </form>
        </div>

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
    </PageWrapper>
  );
};

export default SellCoin;


// () => setIsSelected(true)