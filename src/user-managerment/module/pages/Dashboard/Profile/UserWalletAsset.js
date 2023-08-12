import React, { useEffect, useMemo, useState } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import { BackButton } from "../../../components/Button";
import { Filter, MoneySend } from "iconsax-react";
import { useNavigate, useParams } from "react-router-dom";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import { getUserId } from "../../../../../serivce/cookie.service";
import { AUTH_GET_TRANSACTION_SENT_TO_SUBUSERS } from "../../../../../serivce/apiRoutes.service";
import { isEmpty } from "../../../helpers/isEmpty";
import { TransactionGroup, TransactionMode } from "../../../helpers/enums";
import LoadingSpinner from "../../../components/Global/LoadingSpinner";
import EmptyDataComp from "../../../components/Global/EmptyDataComp";

const UserWalletAsset = () => {
  // STATES
  const [userAssets, setUserAssets] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  // HOOKS
  const skip = useMemo(() => {
    let output = currentPage * 10 - 1;
    return output < 0 ? 0 : output;
  }, [currentPage]);
  const { data, getLoading, makeAuthGetReq } = useMakeReq();

  const uId = getUserId();
  const {id} = useParams()
  // const userId = getUserData();

  // DATA INITIALIAZATION
  const navigate = useNavigate();

  // USE EFFECT
  useEffect(() => {
    makeAuthGetReq(
      `${AUTH_GET_TRANSACTION_SENT_TO_SUBUSERS}/${uId}/${id}/${skip}/${10}`
    );
  }, []);

  useEffect(() => {
    if (!isEmpty(data)) {
      setUserAssets(data?.data);
    }
  }, [data]);

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
          {getLoading ? (
          <LoadingSpinner viewPortHeight="h-[80vh]" />
        ) : !isEmpty(userAssets) ? (
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
                  <h3 className="text-sm font-bold pb-0.5">
                    {asset.transactionGroup === TransactionGroup.SEND ? (
                      <span className="font-semibold text-xs">SENT</span>
                    ) : asset.transactionGroup ===
                      TransactionGroup.RECEIVE ? (
                      <span className="font-semibold text-xs">RECEIVED</span>
                    ) : asset.transactionGroup === TransactionGroup.SWAP ? (
                      <span className="font-semibold text-xs">SWAPED</span>
                    ) : asset.transactionGroup === TransactionGroup.BUY ? (
                      <span className="font-semibold text-xs">BOUGHT</span>
                    ) : asset.transactionGroup === TransactionGroup.SELL ? (
                      <span className="font-semibold text-xs">SOLD</span>
                    ) : (
                      <></>
                    )}
                    {`: ${asset.amount} ${asset.asset}`}
                  </h3>

                  {asset.transactionMode === TransactionMode.SUCCESS ? (
                    <span className="text-[#10B981] font-semibold text-xs">
                      SUCCESS
                    </span>
                  ) : asset.transactionMode === TransactionMode.FAILED ? (
                    <span className="text-[#D1292D] font-semibold text-xs">
                      FAILED
                    </span>
                  ) : asset.transactionMode === TransactionMode.PENDING ? (
                    <span className="text-[#EB9B00] font-semibold text-xs">
                      PENDING
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              {/* amount status */}
              <div className="flex items-center gap-2">
                {/* amount */}
                <div className="inline-flex flex-col">
                  <h4 className="text-sm font-bold pb-0.5">
                    {`$${asset.amount}`}
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
      </div>
    </PageWrapper>
  );
};

export default UserWalletAsset;
