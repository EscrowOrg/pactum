import React from "react";
import NoTransitionWrapper from "../../../components/Dashboard/Home/NoTransitionWrapper";
import { BackButton, ErrorButton, PrimaryButton } from "../../../components/Button";
import { TransactionMinus } from "iconsax-react";

const PendingOrderStatement = () => {
  return (
    <NoTransitionWrapper>
      <div className="w-full  py-6 px-5 flex flex-col gap-4">
        <div className="flex justify-between">
          {/* Back Button */}
          <BackButton />

          <div>
            <h3 className="text-lg font-bold text-black">Order Statement</h3>
            <p className="font-normal text-sm text-[#8D85A0] pb-1">
              09/06/38 - 10:56AM
            </p>
          </div>

          {/* transaction list button */}
          <button className="px-3 py-3 w-fit border border-[#DAD7E0] bg-[#FAFAFB] inline-flex items-center justify-center rounded-xl cursor-pointer hover:bg-gray-200">
            <TransactionMinus size="14" color="#16053D" />
          </button>
        </div>

        <p className="text-sm font-normal  bg-gray-50 p-3">
          Ensure you have receive payment for this money in your bank account
          before marking as paid.
        </p>

        {/* Amount to be Received */}
        <div className="text-center mt-3">
          <h4 className="text-sm"> Amount to be received.</h4>
          <p className="font-bold text-4xl text-[#3F9491] mt-2">₦100 000.00</p>
          <h4 className="bg-black border border-solid text-white rounded w-2/3 ml-16 mt-2 p-2">
            You will be deducted 0.844BTC
          </h4>
        </div>

        <div className=" bg-[#FAFAFB] border border-solid border-[#F5F3F6] rounded px-3 my-2">
          <div className="border-dashed  border-b-2">
            <span className="flex justify-between my-5">
              <h5  className="font-medium text-sm text-[#8D85A0]">Listing</h5>
              <p className="font-semibold font-medium"> #00001</p>
            </span>

            <span className="flex justify-between my-5">
              <h4  className="font-medium text-sm text-[#8D85A0]">Rate-Fiat Value</h4>
              <p className="font-semibold font-medium">₦400</p>
            </span>

            <span className="flex justify-between my-5">
              <h4  className="font-medium text-sm text-[#8D85A0]">Order ID</h4>
              <p className="font-semibold font-medium">hfsbg4u9ui093u290u02</p>
            </span>
          </div>

          {/* Receiving Bank Details */}
          <div>
            <h4 className="text-center font-bold py-4"> Receiving Bank Details</h4>

            <span className="flex justify-between my-5">
              <h4  className="font-medium text-sm text-[#8D85A0]"> Bank Name</h4>
              <p className="font-semibold font-medium">First Bank</p>
            </span>

            <span className="flex justify-between my-5">
              <h4  className="font-medium text-sm text-[#8D85A0]">Account Number</h4>
              <p className="font-semibold font-medium">4890149295</p>
            </span>

            <span className="flex justify-between my-5">
              <h4 className="font-medium text-sm text-[#8D85A0]">Account Name</h4>
              <p className="font-semibold font-medium">Asemota Joel</p>
            </span>

          </div>
        </div>

      <div className="flex justify-between"> 
        {/* Report Button */}
      <ErrorButton text={"Report"} className={"p-10"}/>

      {/* Mark as Received Button */}
        <PrimaryButton text={"Mark as Received"}/>
      </div>
      </div>
    </NoTransitionWrapper>
  );
};

export default PendingOrderStatement;
