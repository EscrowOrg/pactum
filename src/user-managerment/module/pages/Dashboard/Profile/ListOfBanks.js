import { Add, Trash } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_DELETE_BANK, AUTH_GET_BANKS } from "../../../../../serivce/apiRoutes.service";
import { getUserData } from "../../../../../serivce/cookie.service";
import { BackButton } from "../../../components/Button";
import RemoveBank from "../../../components/Dashboard/Profile/RemoveBank";
import EmptyDataComp from "../../../components/Global/EmptyDataComp";
import LoadingSpinner from "../../../components/Global/LoadingSpinner";
import { isEmpty } from "../../../helpers/isEmpty";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import AltModal from "../../../layouts/AltModal";
import PageWrapper from "../../../layouts/PageWrapper";

const ListOfBanks = (closeModal) => {

  // STATES
  const [removeBankModalState, setRemoveBankModalState] = useState(false);
  const [bankDetails, setBankDetails] = useState([]);
  const [selectedBank, setSelectedBank] = useState({
    bankName: "",
    accountName: "",
    accountNumber: "",
    bankId: null
  })

  //  DATA INITIALIZATION
  const navigate = useNavigate();
  // getBanks
  const {
    data, 
    makeAuthGetReq,
    getLoading
  } = useMakeReq();
  // deleteBanks
  const {
    data: deleteBankRes, 
    makeAuthPostReq: deleteBank, 
    loading: deleteBankLoading,
    isSuccessful: isDeleteBankSuccess
  } = useMakeReq();
  const {role, userId} = getUserData() || {};

  // HANDLERS
  const toggleRemoveBankModal = () => {
    setRemoveBankModalState(!removeBankModalState);
  };
  const handleDeleteBank = () => {
    deleteBank(AUTH_DELETE_BANK, {
      "bankId": selectedBank.bankId!=null?selectedBank.bankId:""
    })
  }

  // SIDE EFFECTS
  useEffect(()=>{
    console.log("Before")
    makeAuthGetReq(`${AUTH_GET_BANKS}/${userId}/${role}`)
    console.log("After")
  }, [])
  useEffect(()=>{
    if(!isEmpty(data)) {
        setBankDetails(data?.data)
    }
}, [data])
//   useEffect(()=>{
//     if(isDeleteBankSuccess) {
//       toast.success("Bank deleted successfully!")
//       makeAuthGetReq(`${AUTH_GET_BANKS}/${userId}/${role}`)
//     }
// }, [isDeleteBankSuccess])

  return (
    <PageWrapper>

      {/* header */}
      <div className="w-full p-5 bg-[#F4EFFE]">
        <div className="w-full flex justify-between items-center">
          <BackButton />

          {/* title */}
          <h3 className="font-bold text-lg ">
            Banks
          </h3>

          {/* button */}
          <div
          onClick={() => navigate("/profile/add-bank")}
          className="flex items-center bg-[#3A0CA3] gap-1 px-3 rounded-[32px] h-10 cursor-pointer">

            {/* icon */}
            <Add color="#ffffff" size={18} variant="Linear" />

            {/* add user button */}
            <h4 className="text-sm font-bold text-[#F4EFFE]">Add</h4>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="mt-2 bg-[#F4EFFE] h-full py-2 px-5">
        {
          getLoading?
          <LoadingSpinner
          bgColor="bg-transparent"
          viewPortHeight="h-[75vh]" />:
          !isEmpty(bankDetails)?
          bankDetails.map((bank)=>(
            <div key={bank.id} className="bg-[#fff] border rounded-[8px] my-2">
              <div className="flex justify-between items-center p-3">
                <div>
                  <h3 className="font-bold text-sm">{bank.bankName}</h3>
                  <p className="text-[#645B75] text-xs">
                    {bank.accountNumber} - {bank.accountName}
                  </p>
                </div>

                {/* delete icon */}
                <div
                  onClick={() => {
                    setSelectedBank({
                      bankName: bank.bankName,
                      accountName: bank.accountName,
                      accountNumber: bank.accountNumber,
                      bankId: bank.id
                    })
                    toggleRemoveBankModal();
                  }}
                  className="cursor-pointer"
                >
                  <Trash variant="TwoTone" size={14} />
                </div>
              </div>
            </div>
          )):
          <EmptyDataComp
          bgColor="bg-transparent"
          viewPortHeight="h-[75vh]" />
        }
      </div>

        {/* modal */}
      <AltModal
        modalIsOpen={removeBankModalState}
        toggleModal={toggleRemoveBankModal}
      >
        {/* content */}
        <RemoveBank 
        deleteUserBank={handleDeleteBank}
        bankName={selectedBank?.bankName}
        accountName={selectedBank?.accountName}
        accountNumber={selectedBank?.accountNumber}
        closeModal={toggleRemoveBankModal} />
      </AltModal>
    </PageWrapper>
  );
};

export default ListOfBanks;
