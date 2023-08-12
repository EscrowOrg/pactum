import { ArrowDown2 } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  AUTH_GET_ASSETS_ACCOUNTS,
  AUTH_TRANSFER_INTERNAL_USERS,
} from "../../../../../serivce/apiRoutes.service";
import { getUserId } from "../../../../../serivce/cookie.service";
import {
  BackButton,
  PrimaryButton,
  PrimaryButtonLight,
} from "../../../components/Button";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import PageWrapper from "../../../layouts/PageWrapper";
import { isEmpty } from "../../../helpers/isEmpty";
import { useMemo } from "react";
import LoadingSpinner from "../../../components/Global/LoadingSpinner";
import EmptyDataComp from "../../../components/Global/EmptyDataComp";

const UserWallet = () => {
  // STATES
  const [searchInput, setSearchInput] = useState("");
  const [filterValue, setFilterValue] = useState("A-Z");
  const [isDrawer1Open, setIsDrawer1Open] = useState(false);
  const [Wallet, setWallet] = useState(null);
  const { data, getLoading, makeAuthGetReq, isSuccessful } = useMakeReq();
  const { makeAuthPostReq } = useMakeReq();

  // DATE INITIALIAZATION
  const navigate = useNavigate();
  const { id } = useParams();

  // HANDLERS
  const toggleDrawer1 = () => {
    setIsDrawer1Open((isDrawer1Open) => !isDrawer1Open);
  };

  // USE EFFECT
  useEffect(() => {
    getWallet();
  }, []);

  useEffect(() => {
    if (!isEmpty(data)) {
      setWallet(data?.data);
    }
  }, [data]);

  const getWallet = async () => {
    try {
      const uId = getUserId();
      await makeAuthGetReq(`${AUTH_GET_ASSETS_ACCOUNTS}/${uId}&USD`);
      setWallet(data && data.data);
    } catch (error) {
      setWallet(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uId = getUserId();

    // Internal Users Transfer
    const payload = {
      userIdentifier: Wallet.id,
      senderUserId: uId,
      amount: Wallet.Balance.accountBalance,
      currency: Wallet.currency,
      network: Wallet.accountingCurrency,
    };
    try {
      await makeAuthPostReq(AUTH_TRANSFER_INTERNAL_USERS, payload);
      console.log(data);
      setWallet(data && data.data);
    } catch (error) {
      setWallet(error);
    }
  };

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
          <div className="my-4 w-full">
            {getLoading ? (
              <LoadingSpinner viewPortHeight="h-[80vh]" />
            ) : !isEmpty(Wallet) ? (
              <>
                {Wallet?.map((Wallet, index) => (
                  <div
                    onClick={() =>
                      navigate(`/vendor-user-wallet-asset/${id}`)
                    }
                    key={index}
                    className="flex justify-between border-b w-full py-3 "
                  >
                    <div className="flex items-center gap-1.5">
                      {/* user image  */}
                      <div className="h-[32px] w-[32px] rounded-[50%]">
                        <img
                          alt=""
                          src={Wallet.imageUrl}
                          className="h-full w-full rounded-[50%]"
                        />
                      </div>

                      {/* crypto coin and wallet numbers  */}
                      <div>
                        <h3 className="text-sm font-bold pb-0.5">
                          {Wallet.currency}
                        </h3>
                      </div>
                    </div>

                    {/* amount status  */}
                    <div className="flex items-center gap-2">
                      {/* amount  */}
                      <div className="inline-flex flex-col">
                        <h4 className="text-sm font-bold pb-0.5 text-right">
                          {Wallet.balance.availableBalance}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <EmptyDataComp viewPortHeight="h-[80vh]" />
            )}
          </div>

          {/* buttons */}
          <div className="flex items-center gap-6 w-full mt-72 mb-4">
            <div className="flex flex-col items-stretch w-[40%]">
              <PrimaryButtonLight height="h-14" text={"Change Limit"} />
            </div>

            <div className="flex flex-col items-stretch w-[60%]">
              <PrimaryButton
                onClick={() => navigate(`/vendor-user-send-asset/${id}`)}
                // onClick={handleSubmit}
                height="h-14"
                text={"Send Asset"}
              />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default UserWallet;
