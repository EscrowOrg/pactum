import React from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import { BackButton } from "../../../components/Button";
import {  Filter, MoneySend } from "iconsax-react";
import { useNavigate } from "react-router-dom";

const UserWalletAsset = () => {
  // DATA INITIALIAZATION
  const navigate = useNavigate();

  const UserAssets = [
    {
      name: "Sent: 400 DOGE",
      assetStatus: "SUCCESS",
      amountInFiat: "$102.38",
      isSuccessful: true,
    },
    {
      name: "Sent: 400 DOGE",
      assetStatus: "PENDING",
      amountInFiat: "$102.38",
      isSuccessful: false,
    },
    {
      name: "Sent: 400 DOGE",
      assetStatus: "FAILED",
      amountInFiat: "$102.38",
      isSuccessful: false,
    },
    {
      name: "Received: 400 DOGE",
      assetStatus: "FAILED",
      amountInFiat: "$102.38",
      isSuccessful: false,
    },
  ];
  return (
    <PageWrapper>
      <div className="w-full h-full">
        <div className="w-full p-5">
          <div className="w-full flex justify-between pb-5">
            <BackButton />

            {/* title */}
            <h3 className="font-bold text-lg mt-1">Assets Sent</h3>

            {/* transaction list button */}
            <Filter
              // onClick={toggleDrawer}
              variant="Bulk"
              size={28}
              color="#645B75"
            />
          </div>

          {/* body */}

          {/* list of assets */}
          <div className="">
            {UserAssets.map((asset, index) => (
              <div
                onClick={() => navigate("/vendor-user-wallet")}
                key={index}
                className="flex justify-between border-b w-full p-4  my-3"
              >
                <div className="flex items-center gap-1.5">
                  {/* user image */}
                  <div className="h-[32px] w-[32px] rounded-[50%] bg-[#FAFAFB] flex justify-center items-center">
                    <MoneySend size={16} variant="Bulk" color="#A39CB2" />
                  </div>

                  {/* user name and email */}
                  <div>
                    <h3 className="text-sm font-bold pb-0.5">{asset.name}</h3>
                    <p className="text-xs font-normal text-[#8D85A0]">
                      {asset.assetStatus}
                    </p>
                  </div>
                </div>

                {/* amount status */}
                <div className="flex items-center gap-2">
                  {/* amount */}
                  <>
                    {/* {asset.isSuccessful ? {color: "green"} : {color: "red"}} */}
                    <div className="inline-flex flex-col">
                      <h4 className="text-sm font-bold pb-0.5">
                        {asset.amountInFiat}
                      </h4>
                    </div>
                  </>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default UserWalletAsset;
