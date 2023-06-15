import React, { useState } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import { BackButton } from "../../../components/Button";
import { ProfileAdd } from "iconsax-react";
import { SearchInput } from "../../../components/Input";
import { useNavigate } from "react-router-dom";

const NewUser = () => {

  // STATES
  const [searchUsers, setSearchUsers] = useState("");

//   DATA INITIALIZATION 
 const navigate = useNavigate()

  return (
    <PageWrapper>
      <div className="w-full p-5 bg-[#F4EFFE]">
        <div className="w-full flex justify-between pb-5">
          <BackButton />

          {/* title */}
          <h3 className="font-bold text-lg mt-1">Users</h3>

          <div onClick={()=>navigate("/portfolio/new-user/add-user")} className="flex items-center bg-[#3A0CA3] gap-1 px-3 rounded-[32px] h-10 cursor-pointer">
            <ProfileAdd color="#ffffff" size={18} variant="Bulk" />

            {/* add user button */}
            <h4  className="text-sm font-bold text-[#F4EFFE]">Add</h4>
          </div>
        </div>

        {/* search input */}
        <SearchInput
          value={searchUsers}
          onChange={(e) => setSearchUsers(e.target.value)}
          placeholderText={"Search users"}
        />
      </div>

      {/* body */}
      <div className="w-full flex items-center justify-center flex-col mt-32">
        <img
          alt=""
          className="w-[120px]"
          src="/images/dashboard/empty-transaction.png"
        />

        <h4 className="font-bold text-base my-4">No Users Saved</h4>
        <p className="text-[#645B75] text-sm w-72 text-center">
          You have not added any user to your account.
        </p>
      </div>
    </PageWrapper>
  );
};

export default NewUser;
