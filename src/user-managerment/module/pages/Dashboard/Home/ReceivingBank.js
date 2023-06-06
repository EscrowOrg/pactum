import { TickCircle } from "iconsax-react";
import React from "react";

const ReceivingBank = () => {
  return (
    <div>
      {/* Receiving Bank Details */}
      <div className=" flex justify-between border-b border-b-[#F5F3F6]">
        <div className=" mb-4">
          <h3 className="text-base font-bold">First Bank</h3>
          <p className="text-[#645B75] text-xs font-normal">
            1234567891 - Asemota Joel
          </p>
        </div>

        {/* ticked icon */}
        <div className="mt-2">
          <TickCircle variant="Bulk" size={18} color="#3F9491" />
        </div>
      </div>
      {/* bank details */}
      <div className=" py-4  border-b border-b-[#F5F3F6]">
        <h3 className="text-base font-bold">First Bank</h3>
        <p className="text-[#645B75] text-xs font-normal">
          1234567891 - Asemota Joel
        </p>
      </div>

      {/* bank details */}
      <div className=" py-4  border-b border-b-[#F5F3F6]">
        <h3 className="text-base font-bold">First Bank</h3>
        <p className="text-[#645B75] text-xs font-normal">
          1234567891 - Asemota Joel
        </p>
      </div>

      {/* bank details */}
      <div className=" py-4  border-b border-b-[#F5F3F6]">
        <h3 className="text-base font-bold">First Bank</h3>
        <p className="text-[#645B75] text-xs font-normal">
          1234567891 - Asemota Joel
        </p>
      </div>
    </div>
  );
};

export default ReceivingBank;
