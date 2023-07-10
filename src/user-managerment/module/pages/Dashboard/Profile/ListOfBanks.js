import React, { useEffect, useState } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../../components/Button";
import { Add, Trash } from "iconsax-react";
import AltModal from "../../../layouts/AltModal";
import RemoveBank from "../../../components/Dashboard/Profile/RemoveBank";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import { getUserData } from "../../../../../serivce/cookie.service";
import BASE_URL from "../../../../../serivce/url.serice";

const ListOfBanks = (closeModal) => {
  // STATES
  const [removePhotoModalState, setRemovePhotoModal] = useState(false);

  const navigate = useNavigate();
   const [BankDetails, setBankDetails] = useState([]);

  // HANDLERS
  const toggleRemovePhotoModal = () => {
    setRemovePhotoModal(!removePhotoModalState);
  };
  const {data, makeGetRequest} = useMakeReq();
  const {role, userId} = getUserData();
  useEffect(()=>{
    getBanks()
  }, [data])

  const getBanks = async ()=>{
    try {
      await makeGetRequest(`${BASE_URL}/api/User/GetBankByUserId/${userId}/${role}`)
      setBankDetails(data?.data);
     
    } catch (error) {
      setBankDetails(error)
    }
  }
  return (
    <PageWrapper>
      <div className="w-full p-5 bg-[#F4EFFE]">
        <div className="w-full flex justify-between items-center">
          <BackButton />

          {/* title */}
          <h3 className="font-bold text-lg ">Banks</h3>

          <div
            onClick={() => navigate("/profile/add-bank")}
            className="flex items-center bg-[#3A0CA3] gap-1 px-3 rounded-[32px] h-10 cursor-pointer"
          >
            <Add color="#ffffff" size={18} variant="TwoTone" />

            {/* add user button */}
            <h4 className="text-sm font-bold text-[#F4EFFE]">Add</h4>
          </div>
        </div>
      </div>
      <div className="mt-2 bg-[#F4EFFE] h-full py-2 px-5">
        {BankDetails && BankDetails.length && BankDetails.map((bankdetail)=>{
          return(
            <div key={bankdetail.id} className="bg-[#fff] border rounded-[8px] my-2">
            <div className="flex justify-between items-center p-3">
              <div>
                <h3 className="font-bold text-sm">{bankdetail.bankName}</h3>
                <p className="text-[#645B75] text-xs">
                  {bankdetail.accountNumber} - {bankdetail.accountName}
                </p>
              </div>

              {/* delete icon */}
              <div
                onClick={() => {
                  // closeModal()
                  toggleRemovePhotoModal();
                }}
                className="cursor-pointer"
              >
                <Trash variant="TwoTone" size={14} />
              </div>
            </div>
          </div>
          )
        })}
      </div>

      <AltModal
        modalIsOpen={removePhotoModalState}
        toggleModal={toggleRemovePhotoModal}
      >
        {/* content */}
        <RemoveBank closeModal={toggleRemovePhotoModal} />
      </AltModal>
    </PageWrapper>
  );
};

export default ListOfBanks;
