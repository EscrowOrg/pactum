import React, { useState } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import {
  BackButton,
  PrimaryButton,
  PrimaryButtonLight,
} from "../../../components/Button";
import { ArrowDown2 } from "iconsax-react";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Drawer from "../../../layouts/Drawer";
import SlideWrapper from "../../../layouts/Drawer/SlideWrapper";
import UserFilterStatus from "../../../components/Dashboard/Profile/UserFilterStatus";

const UserWallet = ({}) => {
  // STATES
  const [searchInput, setSearchInput] = useState("");
  const [filterValue, setFilterValue] = useState("A-Z");

  const [isOpen, setIsOpen] = useState(false);
  const [isDrawer1Open, setIsDrawer1Open] = useState(false);
  const [isDrawer2Open, setIsDrawer2Open] = useState(false);
  const [transactionList, setTransactionList] = useState([]);
  const [filterStatus, setFilterStatus] = useState({
    name: "",
    id: null,
  });

  // DATE INITIALIAZATION
  const navigate = useNavigate();

  // HANDLERS
  // const toggleDrawer = () => {
  //   setIsOpen((isOpen) => !isOpen);
  // };
  const toggleDrawer1 = () => {
    setIsDrawer1Open((isDrawer1Open) => !isDrawer1Open);
  };

  const UserWallets = [
    {
      img: "/images/dashboard/bitcoin.png",
      name: "Bitcoin",
      numOfwallets: "44 Wallets",
      amountInCrypto: "66 BTC",
      amountInFiat: "$40 000.00",
      isPending: false,
    },
    {
      img: "/images/dashboard/binance.png",
      name: "BNB",
      numOfwallets: "5 Wallets",
      amountInCrypto: "66 BNB",
      amountInFiat: "$40 000.00",
      isPending: false,
    },
    {
      img: "/images/dashboard/bitcoin.png",
      name: "DogeCoin",
      numOfwallets: "1 Wallets",
      amountInCrypto: "66 DOGE",
      amountInFiat: "$40 000.00",
      isPending: false,
    },
    {
      img: "/images/dashboard/ethereum.png",
      name: "Ethereum",
      numOfwallets: "4 Wallets",
      amountInCrypto: "66 ETH",
      amountInFiat: "$40 000.00",
      isPending: false,
    },
    {
      img: "/images/dashboard/litcoin.png",
      name: "Litcoin",
      numOfwallets: "6 Wallets",
      amountInCrypto: "66 LTC",
      amountInFiat: "$40 000.00",
      isPending: false,
    },
  ];
  return (
    <PageWrapper>
      <div className="w-full h-full my-4">
        <div className="flex items-center mb-5">
          <BackButton />
          <h3 className="mx-auto font-bold text-base">Talan Vetrovs</h3>
        </div>

        {/* user info */}
        <div className="text-center mb-4">
          {/* user image */}
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

        {/* transaction limit */}
        <div className="bg-[#FAFAFB] flex items-center justify-center w-full h-[38px]">
          <h4 className="text-sm">Transaction limit is $12 000</h4>
        </div>

        <hr className="mt-4" />

        <div className="px-5 w-full">
          {/* title */}
          <div className="flex items-center justify-between pt-3">
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
                onClick={toggleDrawer1}
                className="text-[10px] text-black font-semibold inline-flex items-center gap-1 py-[5px] px-2 rounded-md bg-[#F5F3F6]"
              >
                {filterValue}

                <ArrowDown2 variant="TwoTone" color="#292D32" size={14} />
              </div>
            </div>
          </div>

          {/* User Wallet */}
          <div className="my-4">
            {UserWallets.map((wallet, index) => (
              <div
                onClick={() => navigate("/vendor-user-wallet/id:7")}
                key={index}
                className="flex justify-between border-b w-full py-3 "
              >
                <div className="flex items-center gap-1.5">
                  {/* user image */}
                  <div className="h-[32px] w-[32px] rounded-[50%]">
                    <img
                      alt=""
                      src={wallet.img}
                      className="h-full w-full rounded-[50%]"
                    />
                  </div>

                  {/* crypto coin and wallet numbers */}
                  <div>
                    <h3 className="text-sm font-bold pb-0.5">{wallet.name}</h3>
                    <p className="text-xs font-normal text-[#8D85A0]">
                      {wallet.numOfwallets}
                    </p>
                  </div>
                </div>

                {/* amount status */}
                <div className="flex items-center gap-2">
                  {/* amount */}
                  <div className="inline-flex flex-col">
                    <h4 className="text-sm font-bold pb-0.5 text-right">
                      {wallet.amountInCrypto}
                    </h4>
                    <p className="text-xs font-normal text-[#8D85A0] text-right">
                      {wallet.amountInFiat}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* buttons */}
        <div className="flex items-center gap-6 w-full mb-3 mt-4 ">
          <div className="flex flex-col items-stretch w-[40%]">
            <PrimaryButtonLight
              height="h-14"
              text={"Change Limit"}
            />
          </div>

          <div className="flex flex-col items-stretch w-[60%]">
            <PrimaryButton
              // onClick={() => {}}
              height="h-14"
              text={"Revoke"}
            />
          </div>
        </div>
      </div>

      {/* select filter drawer */}
      <Drawer
        relationshipStatus="alone"
        height="!h-auto"
        insertCurve={false}
        type="slider"
        isOpen={isDrawer1Open}
        onClose={toggleDrawer1}
        position="bottom"
      >
        {/* drawer content container */}
        <SlideWrapper title={"Filter by:"}>
          <UserFilterStatus
            filterValue={filterValue}
            setFilterValue={setFilterValue}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            closeDrawer={toggleDrawer1}
          />
        </SlideWrapper>
      </Drawer>
    </PageWrapper>
  );
};

export default UserWallet;
