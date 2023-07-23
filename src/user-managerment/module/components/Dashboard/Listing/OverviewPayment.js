import React from "react";
import { useNavigate } from "react-router-dom";
const OverviewPayment = () => {
  const navigate = useNavigate()
  return (
    <div>
      {/* PAYMENT LISTS */}
      <div className="flex justify-between mt-2 py-3 border-b border-solid">
        <div>
          <p className="font-normal text-xs text-[#8D85A0] pb-1">
            09/06/38 - 10:56AM
          </p>
          <div className="flex gap-1">
            <h4 className="text-base font-bold text-black">#100,000.00(BTC)</h4>
              <span className="w-2 h-2 bg-[#EB9B00] rounded mt-2"></span>
            </div>
          <h4 className="font-normal text-xs text-[#8D85A0] pt-1">
            ASEMOTA JOEL
          </h4>
        </div>

        {/* view more button */}
        <span onClick={()=>navigate("/listing/closed-listing-order/id:14")} className="bg-[#F4EFFE] rounded-[32px] h-[35px] mt-2 px-4 inline-flex items-center justify-center hover:bg-gray-200 cursor-pointer text-[#3A0CA3] text-xs font-normal">
          View More
        </span>
      </div>
    </div>
  );
};

export default OverviewPayment;
