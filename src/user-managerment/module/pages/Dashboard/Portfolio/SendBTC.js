import React, { useState } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import { BackButton, PrimaryButton } from "../../../components/Button";
import BuyOrder from "../../../components/Dashboard/Listing/BuyOrder";
import SellOrder from "../../../components/Dashboard/Listing/SellOrder";
import { InfoCircle, ProfileCircle } from "iconsax-react";
import { TextLabelInput } from "../../../components/Input";

const SendBTC = () => {
  // STATES

  const [clickTabs, setClickTabs] = useState(2);

  // HANDLERS

  const handleClick = (index) => {
    setClickTabs(1);
  };

  const handleClick2 = (index) => {
    setClickTabs(2);
  };

  return (
    <PageWrapper>
      <div className="w-full h-full flex flex-col my-5 gap-8">
        <div className="flex items-center w-[92%] mx-auto">
          {/* back button */}
          <BackButton />
        </div>

        {/* body */}
        <div className="w-[92%] h-full flex flex-col mx-auto gap-8">
          {/* text captions */}
          <div className="flex flex-col w-full gap-2">
            <h3 className="text-2xl font-bold text-black">Send BTC</h3>

            <h4 className="text-sm font-normal text-[#645B75]">
              Send BTC to crypto account.
            </h4>
          </div>

          <div className="w-full mx-auto mb-2 flex items-center justify-between bg-[#F5F3F6] border-2 border-solid font-medium rounded-lg pl-0">
            {/* buy order tab */}
            <span
              onClick={handleClick}
              className={` w-1/2 py-2 px-2 text-center cursor-pointer transition-all duration-700 ${
                clickTabs === 1 ? "bg-[#48A9A6]  rounded-md  text-white" : ""
              }`}
            >
              To Crypto Address
            </span>

            {/* sell order tab */}
            <span
              onClick={handleClick2}
              className={`  w-1/2 py-2 px-2 text-center cursor-pointer transition-all duration-700 ${
                clickTabs === 2 ? "bg-[#48A9A6]  rounded-md  text-white" : ""
              }`}
            >
              To Pactum Users
            </span>
          </div>

          {/* destination address contents */}
          <div>
            
              <form>
                {/* Company's email address container */}
                <label className="flex flex-col gap-2 w-full">
                  {/* worth of assets in naira */}
                  <span className="font-medium text-xs text-black">
                    Destination Address
                  </span>

                  {/* input field */}
                  <TextLabelInput
                    label={
                      <ProfileCircle size={18} variant="Bulk" color="#ACA6BA" />
                    }
                    name={"amount"}
                    type="text"
                    placeholderText={"@talanvetrovs"}
                  />
                </label>

                {/* Company's email address container */}
                <label className="flex flex-col gap-2 w-full mt-8">
                  {/* worth of assets in naira */}
                  <span className="flex justify-between font-normal text-xs text-black">
                    <h4 className="font-medium text-xs text-black">Amount</h4>
                    <p className="text-[#645B75] font-normal text-xs">
                      Balance: 2,300 BTC
                    </p>
                  </span>

                  {/* input field */}
                  <TextLabelInput
                    label={
                      <>
                        |
                        <span className="text-[#EB9B00] font-semibold pl-1">
                          Max
                        </span>
                      </>
                    }
                    name={"amount"}
                    type="number"
                    placeholderText={400}
                  />
                </label>

                {/* network info */}
                <div className="flex items-center justify-center gap-1">
                  <p className="text-[#645B75] font-normal text-xs">
                    Network fee: Free
                  </p>
                  <InfoCircle variant="Bulk" size={18} color="#A39CB2" />
                </div>

                {/* info message */}
                <div className="flex items-center bg-[#FFF1D6] gap-2 py-2 px-6 w-full h-full my-12">
                  {/* icon */}
                  <InfoCircle variant="Bulk" size={18} color="#000000" />

                  <p className="w-[100%] font-semibold text-xs text-[#1B3F3E]">
                    Make sure the unique information of the user is accurate to
                    avoid lose of your funds.
                  </p>
                </div>

                {/* container */}
                <div className="flex w-full flex-col ">
                  {/* continue button */}
                  <div className="w-full flex flex-col items-stretch">
                    <PrimaryButton text={"Send 400BTC"} />
                  </div>
                </div>
              </form>
            
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default SendBTC;

// onClick={() => {
//     toast.success("Listing created successful!");
//     navigate("/listing");
//   }}
