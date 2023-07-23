import React, { useEffect, useState } from "react";
import NoTransitionWrapper from "../../../components/Dashboard/Home/NoTransitionWrapper";
import { BackButton } from "../../../components/Button";
import { useParams } from "react-router-dom";
import PageWrapper from "../../../layouts/PageWrapper";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import { AUTH_GET_OVERVIEW_ORDERS } from "../../../../../serivce/apiRoutes.service";
import { isEmpty } from "../../../helpers/isEmpty";

const ListingMoreInfo = () => {
  const [bankDetails, setBankDetails] = useState();
  const { data, getLoading, makeAuthGetReq, isSuccessful } = useMakeReq();

  // DATA INITIALIZATION
  // const navigate = useNavigate();

  const { id } = useParams();
// console.log(id)
  // USE EFFECT
  // useEffect(() => {
  //   makeAuthGetReq(`${AUTH_GET_OVERVIEW_ORDERS}/${id}`);
  // }, []);

  // useEffect(() => {
  //   if (!isEmpty(data)) {
  //     if (isSuccessful) {
  //       console.log(data?.data);
  //       setBankDetails(data?.data);
  //     }
  //   }
  // }, [data, isSuccessful]);
  return (
    <PageWrapper>
      <div className="w-full h-full p-5 flex flex-col gap-8 overflow-x-hidden">
        {/* header */}
        <div className="flex w-[92%] mx-auto">
          {/* Back Button */}
          <BackButton />

          {/* title */}
          <h3 className=" flex items-center mx-auto text-lg font-bold text-black text-center">
            More Info
          </h3>

          {/* transaction list button */}
          {/* <button className="px-3 py-3 w-fit border border-[#DAD7E0] bg-[#FAFAFB] inline-flex items-center justify-center rounded-xl cursor-pointer hover:bg-gray-200">
          <TransactionMinus size="14" color="#16053D" />
        </button> */}
        </div>

        {/* Body */}

        <div className="flex flex-col bg-[#FAFAFB] border border-solid border-[#F5F3F6] rounded-lg w-full relative gap-6 p-4">
          {/* info */}

          <div className="flex items-center justify-between">
            <h4 className="font-normal text-xs text-[#8D85A0]">
              Payment Timeframe
            </h4>
            <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
              15 min
            </h3>
          </div>

          <span className="w-[320px] mx-auto border-dashed border-b-2"></span>
          {/* Receiving Bank Details */}
          <div className="flex flex-col w-full gap-5">
            <div className="flex items-center justify-between">
              <h4 className="font-normal text-xs text-[#8D85A0]">Bank Name</h4>

              <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
              {/* {bankDetails.bankName} */}
              </h3>
            </div>

            <div className="flex items-center justify-between">
              <h4 className="font-normal text-xs text-[#8D85A0]">
                Account Number
              </h4>
              <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                4890149295
              </h3>
            </div>

            <div className="flex items-center justify-between">
              <h4 className="font-normal text-xs text-[#8D85A0]">
                Account Name
              </h4>
              <h3 className="text-black text-sm font-semibold inline-flex items-center gap-2">
                Asemota Joel
              </h3>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ListingMoreInfo;
