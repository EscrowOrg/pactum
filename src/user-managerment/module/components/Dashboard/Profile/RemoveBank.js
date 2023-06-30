import React from "react";

const RemoveBank = ({ closeModal, RemoveBank }) => {
  return (
    <div className="w-full bg-white rounded-xl  gap-6 flex flex-col">
      {/* Container */}
      <div className="flex flex-col w-full">
        {/* title */}
        <div className="pt-3.5 pb-4 px-3 w-full">
          <h3 className="font-semibold text-base w-full text-center">
            Remove bank?
          </h3>

          <div className="">
            <p className="text-xs font-semibold  ml-auto w-[214px]">
              This will delete First bank (12345678912 - Asemota Joel)
            </p>
          </div>
        </div>

        {/* Remove button */}
        <h4
          onClick={RemoveBank}
          className="w-full text-[#D1292D] font-semibold text-base border-t py-2 text-center"
        >
          Remove
        </h4>

        {/* Cancel button */}
        <span
          onClick={closeModal}
          className="font-normal text-base border-t py-2 w-full text-center my-auto"
        >
          Cancel
        </span>
      </div>
    </div>
  );
};

export default RemoveBank;
