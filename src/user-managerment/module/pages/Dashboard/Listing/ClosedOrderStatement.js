import React from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import { BackButton } from "../../../components/Button";
import { ArrowRight2, Copy, TransactionMinus } from "iconsax-react";
import { copyToClipBoard } from "../../../helpers/copyToClipboard";

const ClosedOrderStatement = () => {
  return (
    <PageWrapper>
      <div className="w-full h-full py-5 flex flex-col gap-8 overflow-x-hidden">
        {/* header */}
        <div className="flex justify-between w-[92%] mx-auto">
          {/* Back Button */}
          <BackButton />

          {/* title */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-black text-center">
              Order Statement
            </h3>

            <h3 className="font-normal text-xs text-[#8D85A0] text-center">
              09/06/38 - 10:56AM
            </h3>
          </div>

          {/* transaction list button */}
          <button className="px-3 py-3 w-fit border border-[#DAD7E0] bg-[#FAFAFB] inline-flex items-center justify-center rounded-xl cursor-pointer hover:bg-gray-200">
            <TransactionMinus size="14" color="#16053D" />
          </button>
        </div>

        {/* Body */}
        <div className="w-[92%] h-full flex flex-col mx-auto gap-8 pb-5">
          {/* Amount to be Received */}
          <div className="flex flex-col gap-3 items-center w-full">
            <h4 className="font-normal text-sm text-[#645B75]">
              Amount to be received.
            </h4>
            <p className="text-[#3F9491] text-[32px] font-bold">₦100 000.00</p>
            <h4 className="bg-[#091515] py-2 px-3 font-semibold text-sm text-[#F6FBFB] rounded">
              0.844BTC deducted
            </h4>
          </div>

          <div className="flex flex-col bg-[#FAFAFB] border border-solid border-[#F5F3F6] rounded-lg w-full relative gap-6 px-4 py-3">
            {/* circles */}
            <span className="absolute bottom-[53%] translate-y-[47%] right-[-1.2rem] rounded-[50%] bg-white h-[32px] w-[32px]" />
            <span className="absolute bottom-[53%] translate-y-[47%] left-[-1.2rem] rounded-[50%] bg-white h-[32px] w-[32px]" />

            {/* info */}
            <div className="border-dashed border-b-2 flex flex-col w-full gap-5 pb-5">
              <div className="flex items-center justify-between">
                <h5 className="font-normal text-xs text-[#8D85A0]">Listing</h5>

                <div className="flex items-center justify-center bg-[rgba(255,255,255,.2)] cursor-pointer">
                  <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                    #00001
                  </h3>

                  <ArrowRight2 variant="TwoTone" size={10} color="#F4EFFE" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <h4 className="font-normal text-xs text-[#8D85A0]">
                  Rate-Fiat Value
                </h4>
                <p className="text-black text-sm font-semibold inline-flex items-center gap-2">
                  ₦400
                </p>
              </div>

              <div className="flex items-center justify-between py-3">
                <h4 className="font-normal text-xs text-[#8D85A0]">Order ID</h4>
                <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                  hfsbg4u9ui093u290u02{" "}
                  <Copy
                    onClick={() => copyToClipBoard("hfsbg4u9ui093u290u02")}
                    variant="Bulk"
                    size={16}
                    color="#3F9491"
                  />
                </h3>
              </div>
            </div>

            {/* Receiving Bank Details */}
            <div className="flex flex-col w-full gap-5">
              <h4 className="text-center font-bold">Receiving Bank Details</h4>

              <div className="flex items-center justify-between">
                <h4 className="font-normal text-xs text-[#8D85A0]">
                  Bank Name
                </h4>

                <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                  First Bank
                </h3>
              </div>

              <div className="flex items-center justify-between">
                <h4 className="font-normal text-xs text-[#8D85A0]">
                  Account Number
                </h4>
                <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                  4890149295
                </h3>
              </div>

              <div className="flex items-center justify-between">
                <h4 className="font-normal text-xs text-[#8D85A0]">
                  Account Name
                </h4>
                <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                  Asemota Joel
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ClosedOrderStatement;
