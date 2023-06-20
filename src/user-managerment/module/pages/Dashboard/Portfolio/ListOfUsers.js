import React, { useState } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import { BackButton } from "../../../components/Button";
import { ProfileAdd } from "iconsax-react";
import { SearchInput } from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";

const ListOfUsers = () => {
  // STATES
  const [searchUsers, setSearchUsers] = useState("");

  const listOfUsersData = [
    {
      img: "/images/dashboard/profile-image.png",
      name: "Talan Vetrovs",
      username: " @talanvetrovs",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: false
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: " Martin Korsgaard",
      username: "@martinkorsgaard",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: false
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: "James Baptista",
      username: "  @jamesbaptista",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: true
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: " Martin Korsgaard",
      username: "@martinkorsgaard",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: false
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: "James Baptista",
      username: "  @jamesbaptista",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: true
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: " Martin Korsgaard",
      username: "@martinkorsgaard",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: false
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: "James Baptista",
      username: "  @jamesbaptista",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: true
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: "James Baptista",
      username: "  @jamesbaptista",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: true
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: " Martin Korsgaard",
      username: "@martinkorsgaard",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: false
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: "James Baptista",
      username: "  @jamesbaptista",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: true
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: " Martin Korsgaard",
      username: "@martinkorsgaard",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: false
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: "James Baptista",
      username: "  @jamesbaptista",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: true
    },
  ];

  //   DATA INITIALIZATION
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="w-full h-full">
        <div className="w-full p-5 bg-[#F4EFFE]">
          <div className="w-full flex justify-between pb-5">
            <BackButton />

            {/* title */}
            <h3 className="font-bold text-lg mt-1">Users</h3>

            <div
              onClick={() => navigate("/portfolio/new-user/add-user")}
              className="flex items-center bg-[#3A0CA3] gap-1 px-3 rounded-[32px] h-10 cursor-pointer"
            >
              <ProfileAdd color="#ffffff" size={18} variant="Bulk" />

              {/* add user button */}
              <h4 className="text-sm font-bold text-[#F4EFFE]">Add</h4>
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
        <div className="w-full h-full px-5 py-3 bg-[#FAFAFB]">
          <div className="flex justify-between">
            <h3 className="font-bold">{listOfUsersData.length} users</h3>
            <p>A-Z</p>
          </div>

          <div>
            {listOfUsersData.map((user, index) => (
              <div
                key={index}
                className="flex justify-between bg-white w-full px-2 py-2.5 rounded-md  my-3"
              >
                <div className="flex items-center gap-1.5">
                  <div className="h-[32px] w-[32px] rounded-[50%] bg-[#3A0CA3] ">
                    <img
                      alt=""
                      src="/images/dashboard/profile-image.png"
                      className="h-full w-full rounded-[50%]"
                    />
                  </div>
                  {/* user name and email */}
                  <div>
                    <h3 className="text-sm font-semibold pb-0.5">
                      {user.name}
                    </h3>
                    <p className="text-xs font-normal text-[#8D85A0]">
                      {user.username}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {/* amount */}
                  <div>
                    {user.isPending ? 
                      <h4 className="text-sm font-bold text-[#EB9B00]">
                        Pending
                      </h4>:
                      <div className="inline-flex flex-col">
                        <h4 className="text-sm font-bold pb-0.5">$0.00</h4>
                        <p className="text-xs font-normal text-[#8D85A0] text-right">
                          0 BTC
                        </p>
                      </div>
                    }
                  </div>

                  <SlArrowRight
                    size={10}
                    variant="Bulk"
                    className="text-[#A39CB2]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ListOfUsers;
