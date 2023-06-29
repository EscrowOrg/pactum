import React from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import { BackButton } from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { Add, ProfileAdd } from "iconsax-react";

const Banks = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <div className="w-full p-5 bg-[#F4EFFE]">
        <div className="w-full flex justify-between items-center">
          <BackButton />

          {/* title */}
          <h3 className="font-bold text-lg ">Banks</h3>

          <div
            onClick={() => navigate("/profile/add-bank")}
            className="flex items-center bg-[#3A0CA3] gap-1 px-3 rounded-[32px] h-10 cursor-pointer"
          >
            <Add color="#ffffff" size={18} variant="TwoTone" />

            {/* add user button */}
            <h4 className="text-sm font-bold text-[#F4EFFE]">Add</h4>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="w-full flex  justify-center items-center flex-col mt-40">
        <img
          alt=""
          className="w-[120px]"
          src="/images/dashboard/empty-transaction.png"
        />

        <h4 className="font-bold text-base my-4">No Banks Saved</h4>
        <p className="text-[#645B75] text-sm w-[280px] text-center">
          You have not added any bank to your profile.
        </p>
      </div>
    </PageWrapper>
  );
};

export default Banks;
