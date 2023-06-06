import React from "react";
import { PrimaryButton } from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const ReportStatement = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full">
      {/* label  */}
      <div className="mb-1">
        <label className=" w-full text-[#A39CB2] text-sm">Title</label> <br />
      </div>

      {/* input   */}
      <div className="h-96 w-full">
        <input
          type="text"
          placeholder="Enter report details including order ID"
          className="w-full outline-0 border-0 border-t pt-2 text-xs"
        />
      </div>

      {/* button */}
      <div className="flex flex-col items-stretch w-full mt-10">
        <PrimaryButton
          onClick={() => navigate(-1)}
          height="h-14"
          text={"Submit"}
        />
      </div>
    </div>
  );
};

export default ReportStatement;
