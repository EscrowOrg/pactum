import React, { useState } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import { BackButton } from "../../../components/Button";
import { ArrowDown2, ProfileAdd } from "iconsax-react";
import { SearchInput } from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
import Drawer from "../../../layouts/Drawer";
import SlideWrapper from "../../../layouts/Drawer/SlideWrapper";
import UserFilterStatus from "../../../components/Dashboard/Profile/UserFilterStatus";

const MyUsers= () => {
  // STATES
  const [searchUsers, setSearchUsers] = useState("");
  const [filterValue, setFilterValue] = useState("A-Z");
  
    // STATES
    // const [isOpen, setIsOpen] = useState(false);
    const [isDrawer1Open, setIsDrawer1Open] = useState(false);
   
    const [filterStatus, setFilterStatus] = useState({
        name: "",
        id: null
    })

    //   DATA INITIALIZATION
  const navigate = useNavigate();

    // HANDLERS
    // const toggleDrawer = () => {
    //     setIsOpen(isOpen => !isOpen)
    // }
    const toggleDrawer1 = () => {
        setIsDrawer1Open(isDrawer1Open => !isDrawer1Open)
    }

  const listOfUsersData = [
    {
      img: "/images/dashboard/profile-image.png",
      name: "Talan Vetrovs",
      username: " @talanvetrovs",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: false,
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: " Martin Korsgaard",
      username: "@martinkorsgaard",
      amountInFiat: "$14,000.00",
      amountInCrypto: "0BTC",
      isPending: false,
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: "James Baptista",
      username: "  @jamesbaptista",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: true,
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: " Martin Korsgaard",
      username: "@martinkorsgaard",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: false,
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: "James Baptista",
      username: "  @jamesbaptista",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: true,
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: " Martin Korsgaard",
      username: "@martinkorsgaard",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: false,
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: "James Baptista",
      username: "  @jamesbaptista",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: true,
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: "James Baptista",
      username: "  @jamesbaptista",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: true,
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: " Martin Korsgaard",
      username: "@martinkorsgaard",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: false,
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: "James Baptista",
      username: "  @jamesbaptista",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: true,
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: " Martin Korsgaard",
      username: "@martinkorsgaard",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: false,
    },
    {
      img: "/images/dashboard/profile-image.png",
      name: "James Baptista",
      username: "  @jamesbaptista",
      amountInFiat: "$0.00",
      amountInCrypto: "0BTC",
      isPending: true,
    },
  ];

  return (
    <PageWrapper>
      <div className="w-full h-full">
        <div className="w-full p-5 bg-[#F4EFFE]">
          <div className="w-full flex justify-between pb-5">
            <BackButton />

            {/* title */}
            <h3 className="font-bold text-lg mt-1">Users</h3>

            {/* add user container */}
            <div
              onClick={() => navigate("/vendor-add-user")}
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
            {/*number of users  */}
            <h3 className="font-bold">{listOfUsersData.length} users</h3>

            {/* filter toggle */}
            <div
              onClick={toggleDrawer1}
              className="text-[10px] text-black font-semibold inline-flex items-center gap-1 py-[5px] px-2 rounded-md bg-[#F5F3F6]"
            >
              {filterValue}

              <ArrowDown2 variant="TwoTone" color="#292D32" size={14} />
            </div>
          </div>

          {/* list of users */}
          <div>
            {listOfUsersData.map((user, index) => (
              <div
                onClick={() => navigate("/vendor-user-wallet")}
                key={index}
                className="flex justify-between bg-white w-full px-2 py-2.5 rounded-md  my-3"
              >
                <div className="flex items-center gap-1.5">
                  {/* user image */}
                  <div className="h-[32px] w-[32px] rounded-[50%] bg-[#3A0CA3] ">
                    <img
                      alt=""
                      src={user.img}
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

                {/* amount status */}
                <div className="flex items-center gap-2">
                  {/* amount */}
                  <>
                    {user.isPending ? (
                      <h4 className="text-sm font-bold text-[#EB9B00]">
                        Pending
                      </h4>
                    ) : (
                      <div className="inline-flex flex-col">
                        <h4 className="text-sm font-bold pb-0.5">$0.00</h4>
                        <p className="text-xs font-normal text-[#8D85A0] text-right">
                          0 BTC
                        </p>
                      </div>
                    )}
                  </>

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

       {/* select filter drawer */}
       <Drawer
            relationshipStatus="alone"
            height='!h-auto'
            insertCurve={false}
            type="slider"
            isOpen={isDrawer1Open}
            onClose={toggleDrawer1}
            position="bottom">

                {/* drawer content container */}
                <SlideWrapper
                title={"Filter by:"}>
                    <UserFilterStatus
                    filterValue={filterValue}
                    setFilterValue={setFilterValue}
                    filterStatus={filterStatus}
                    setFilterStatus={setFilterStatus}
                    closeDrawer={toggleDrawer1} />
                </SlideWrapper>
            </Drawer>
            
    </PageWrapper>
  );
};

export default MyUsers;
