import React, { useEffect, useMemo, useState } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import { BackButton } from "../../../components/Button";
import { Filter, MoneySend } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import BASE_URL from "../../../../../serivce/url.serice";
import { getUserData, getUserId } from "../../../../../serivce/cookie.service";
import { AUTH_GET_TRANSACTION_SENT_TO_SUBUSERS } from "../../../../../serivce/apiRoutes.service";
import { isEmpty } from "../../../helpers/isEmpty";
import { TransactionGroup } from "../../../helpers/enums";

const UserWalletAsset = () => {
  // STATES
  const [userAssets, setUserAssets] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  // HOOKS
  const skip = useMemo(() => {
    let output = currentPage * 10 - 1;
    return output < 0 ? 0 : output;
  }, [currentPage]);
  // const { data, makeGetRequest } = useMakeReq();
  const {
    data,
    getLoading,
    makeAuthGetReq,
  } = useMakeReq()
  

  const {vendorId} = getUserData()
  const uId = getUserId();
  const userId = getUserData()
  console.log(uId)
  console.log( userId)




  // DATA INITIALIAZATION
  const navigate = useNavigate();

  // USE EFFECT
  useEffect(() => {
   makeAuthGetReq(`${AUTH_GET_TRANSACTION_SENT_TO_SUBUSERS}/${uId}/900f860c-4c33-42cb-b5d5-96543b69b04e/${0}/${10}`)
  }, []);

  useEffect(() => {
    if (!isEmpty(data)) {
      setUserAssets(data?.data);
    }
  }, [data]);

  // const getUserAsset = async () => {
  //   try {
  //     await makeGetRequest(`${BASE_URL}/api/Vendor/GetTransactionSentToSubUsers/${userId}/`);
  //   } catch (error) {
  //     setGetAsset(error);
  //   }
  // };

  const UserAssets = [
    {
      name: "Sent: 400 DOGE",
      assetStatus: "SUCCESS",
      amountInFiat: "$102.38",
    },
    {
      name: "Sent: 400 DOGE",
      assetStatus: "PENDING",
      amountInFiat: "$102.38",
    },
    {
      name: "Sent: 400 DOGE",
      assetStatus: "FAILED",
      amountInFiat: "$102.38",
    },
    {
      name: "Received: 400 DOGE",
      assetStatus: "FAILED",
      amountInFiat: "$102.38",
    },
  ];

  const colors = ["#10B981", "#EB9B00", "#D1292D", "#D1292D"];
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
          <>
            {userAssets?.items.map((asset, index) => (
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
                    <h3 className="text-sm font-bold pb-0.5">{asset.transactionGroup === TransactionGroup.RECEIVE} {asset.transactionMode}</h3>
                    <p
                      className="text-xs font-bold"
                      style={{ color: colors[index] }}
                    >
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
          </>
        </div>
      </div>
    </PageWrapper>
  );
};

export default UserWalletAsset;
