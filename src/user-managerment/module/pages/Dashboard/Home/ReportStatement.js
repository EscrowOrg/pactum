import React from "react";
import { PrimaryButton } from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const ReportStatement = () => {
  const navigate = useNavigate();
  return (
    <form className="w-full h-full flex flex-col px-4">
      {/* title field*/}
      <input
        type="text"
        placeholder="Title"
        className="w-full outline-0 border-0 text-sm"
      />

      {/* report field  */}
      <div className="w-full h-full">
        {/* <input
          type="text"
          placeholder="Enter report details including order ID"
          className="w-full outline-0 border-0 border-t pt-2 text-xs"
        /> */}
           <textarea
          rows={20}
          cols={30}
          className="w-full outline-0 border-0 border-t pt-2 text-xs leading-loose"
          placeholder="Review (Optional)"
        ></textarea>
      </div>

      {/* button */}
      <div className="flex flex-col items-stretch w-full">
        <PrimaryButton
          // onClick={() => navigate(-1)}
          height="h-14"
          text={"Submit"}
        />
      </div>
    </form>
  );
};

export default ReportStatement;
