import React, { useState } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import { BackButton } from "../../../components/Button";
import { SearchInput } from "../../../components/Input";
import { ArrowDown, ArrowDown2, ArrowDown3 } from "iconsax-react";
import { SlArrowDown } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";

const UserWallet = ({ toggleDrawer}) => {
  // STATES
  const [searchInput, setSearchInput] = useState("");
  const [filterValue, setFilterValue] = useState("A-Z")

  return (
    <PageWrapper>
      <div className="w-full h-full py-4">
        <div className="flex items-center mb-5">
          <BackButton />
          <h3 className="mx-auto font-bold text-base">Talan Vetrovs</h3>
        </div>

        {/* user info */}
        <div className="text-center mb-4">
          <div class="h-[48px] w-[48px] rounded-[50%] bg-[#3A0CA3] mx-auto mb-2">
            <img
              alt=""
              src="/images/dashboard/profile-image.png"
              class="h-full w-full rounded-[50%] "
            />
          </div>
          <h3 className="font-semibold">Talan Vetrovs</h3>
          <p className="text-[#707281] text-xs ">talanvetrovs@hotmail.com</p>
        </div>

        {/* transaction limit */}
        <div className="bg-[#FAFAFB] flex items-center justify-center w-full h-[38px]">
          <h4 className="text-sm">Transaction limit is $12 000</h4>
        </div>

        <hr className="mt-4" />

        {/* title */}
        <div className="flex items-center justify-between">
          <h3 className="text-black text-base font-semibold"> Assets</h3>

          {/* tools container */}
          <div className="flex items-center gap-3">
            {/* search input */}
            <div className="bg-[#F5F3F6] rounded-md border border-[#F5F3F6] flex items-center justify-between gap-1 py-[5px] px-2 w-[98px]">
              <HiOutlineSearch className="text-[#ACA6BA]" />

              <input
                className="placeholder:font-normal placeholder:text-xs placeholder:text-[#ACA6BA] text-xs font-normal text-[#202223] rounded-lg bg-transparent outline-none w-full h-full"
                type={"search"}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder={"Search"}
              />
            </div>

            {/* filter toggle */}
            <div
              onClick={toggleDrawer}
              className="text-[10px] text-black font-semibold inline-flex items-center gap-1 py-[5px] px-2 rounded-md bg-[#F5F3F6]"
            >
              {filterValue}

              <ArrowDown2 variant="TwoTone" color="#292D32" size={14} />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default UserWallet;
