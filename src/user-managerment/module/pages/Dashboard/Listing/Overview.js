import React from "react";
import { BackButton } from "../../../components/Button";
import CircularProgress from "../../../components/Dashboard/Listing/CircularProgress";
import NoTransitionWrapper from "../../../components/Dashboard/Home/NoTransitionWrapper";
import OverviewPayment from "../../../components/Dashboard/Listing/OverviewPayment";

const Overviews = () => {
  // DATA INITIALIZATION
  const listPayments = [1, 2, 3, 4];

  return (
    <NoTransitionWrapper>
      <div className="w-full border border-[#F5F3F6] bg-white rounded-lg py-4 px-5 flex flex-col gap-4">
        <div className="flex gap-10">
          <BackButton />
          <h1 className="text-lg font-bold text-black pl-10 mt-2">#000001</h1>
        </div>

        <div>
          <h3 className="font-normal text-sm text-[#8D85A0] my-3">
            Listed On: 9/04/2023 - 10:43AM
          </h3>

          <div className="flex justify-between my-4">
            <div className="flex gap-10">
              <div className="">
                <h4 className="font-normal text-xs text-[#8D85A0] pb-2">
                  Asset
                </h4>
                <h4 className="text-base font-bold text-black">BTC</h4>
              </div>

              <div className="pl-16">
                <h4 className="font-normal text-xs text-[#8D85A0] pb-2">
                  Amount
                </h4>
                <h4 className="text-base font-bold text-black">#100 000.00</h4>
              </div>
            </div>

            <div>
              <CircularProgress percent={10} size={30} />
            </div>
          </div>

          <div className="flex justify-between my-4">
            <div className="flex gap-10">
              <div>
                <h4 className="font-normal text-xs text-[#8D85A0] pb-2">
                  Price
                </h4>
                <h4 className="text-base font-bold text-black">#2,000.00</h4>
              </div>

              <div className="pl-4">
                <h4 className="font-normal text-xs text-[#8D85A0] pb-2">
                  Receiving Bank
                </h4>
                <h4 className=" text-[#48A9A6] border-b border-solid border-[#48A9A6]">
                  Click to view
                </h4>
              </div>
            </div>

            {/* cancel button */}
            <span className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer  text-[#645B75] text-xs font-normal">
              Cancel
            </span>
          </div>

          {/* MIN-MAX LIMIT */}
          <h4 className="font-normal text-xs text-[#8D85A0] pb-2">
            Min-Max Limit
          </h4>
          <h4 className="text-base font-bold text-black">
            #2 000.00 - #230 000.00
          </h4>
        </div>

        {/* ALL PAYMENTS LISTS */}
        <div className="mt-8">
          <h4 className="text-base font-bold text-black pb-2">All Payments</h4>

          <div className="flex justify-between mt-2 py-3 border-b border-solid">
            <div>
              <p className="font-normal text-xs text-[#8D85A0] pb-1">
                09/06/38 - 10:56AM
              </p>
              <h4 className="text-base font-bold text-black">#100,000.00</h4>
              <h4 className="font-normal text-xs text-[#8D85A0] pt-1 ">
                ASEMOTA JOEL
              </h4>
            </div>

            {/* view more button */}
            <span className="bg-[#F4EFFE] rounded-[32px] h-[35px] px-4 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer text-[#3A0CA3] text-xs font-normal">
              View More
            </span>
          </div>

          <div>
            {listPayments.map((index) => (
              <p>
                <OverviewPayment key={index} />
              </p>
            ))}
          </div>
        </div>
      </div>
    </NoTransitionWrapper>
  );
};

export default Overviews;
