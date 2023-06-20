import React from "react";
import {
  BackButton,
  PrimaryButton,
  PrimaryButtonLight,
} from "../../../components/Button";
import PageWrapper from "../../../layouts/PageWrapper";

const UserInviteStatus = (toggleRemovePhotoModal, closeModal) => {
  return (
    <PageWrapper>
      <div className="w-full h-full p-4  overflow-hidden">
        <div className="flex items-center mb-5">
          <BackButton />
          <h3 className="mx-auto font-bold text-base">Talan Vetrovs</h3>
        </div>

        {/* user info */}
        <div className="text-center mb-4 w-full">
          <div className="h-[48px] w-[48px] rounded-[50%] bg-[#3A0CA3] mx-auto mb-2">
            <img
              alt=""
              src="/images/dashboard/profile-image.png"
              className="h-full w-full rounded-[50%] "
            />
          </div>
          <h3 className="font-semibold">Talan Vetrovs</h3>
          <p className="text-[#707281] text-xs ">talanvetrovs@hotmail.com</p>
        </div>

        {/* status */}
        <span className="flex justify-center text-sm font-semibold text-[#EB9B00] w-full">
          Pending
        </span>

        {/* buttons */}
        <div className=" flex items-center gap-6 mt-20 w-full h-full">
          <div className="flex flex-col items-stretch w-[40%]">
            <PrimaryButtonLight
              // onClick={handleReset}
              height="h-14"
              text={"Change Limit"}
            />
          </div>

          <div className="flex flex-col items-stretch w-[60%]">
            <PrimaryButton
            onClick={()=>{
                closeModal()
                toggleRemovePhotoModal()
            }}
              // onClick={handleApplyFilter}
              height="h-14"
              text={"Revoke"}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default UserInviteStatus;
