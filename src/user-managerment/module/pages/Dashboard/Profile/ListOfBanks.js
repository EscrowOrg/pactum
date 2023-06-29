import React, { useState } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../../components/Button";
import { Add, Trash } from "iconsax-react";

const ListOfBanks = (closeModal) => {
  const navigate = useNavigate();

  const BankDetails = [1, 2, 3, 4, 5, 6, 7, 8];

  // const [changePhotoDrawerState, setChangePhotoDrawer] = useState(false);
  // const [removePhotoModalState, setRemovePhotoModal] = useState(false);

   // HANDLERS
//    const toggleChangePhotoDrawer = () => {
//     setChangePhotoDrawer(!changePhotoDrawerState);
//   };
// const toggleRemovePhotoModal = () => {
//     setRemovePhotoModal(!removePhotoModalState);
// };

// closeModal()

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
        {BankDetails.map((bankdetail, index) => (
          <div
            key={index}
            className="bg-[#fff] border rounded-[8px] my-2"
          >
            <div className="flex justify-between items-center p-3">
              <div>
                <h3 className="font-bold text-sm">First Bank</h3>
                <p className="text-[#645B75] text-xs">1234567891 - Asemota Joel</p>
              </div>

              {/* delete icon */}
              <div onClick={()=>{
                    // closeModal()
                    // toggleRemovePhotoModal()
                }}>
                   <Trash variant="TwoTone" size={14} />
                </div>
             
            </div>
          </div>
        ))}
      </div>

         {/* MODALS */}
        {/* Change Photo Modal
        <Drawer
        relationshipStatus="alone"
        height='!h-auto'
        insertCurve={false}
        type="slider"
        isOpen={changePhotoDrawerState}
        onClose={toggleChangePhotoDrawer}
        position="bottom">

            {/* content *
            <SlideWrapper
            closeDrawer={toggleChangePhotoDrawer}
            title={"Change Photo:"}>

                <SettingsChangePhoto 
                // files={files}
                // setFiles={setFiles}
                closeModal={toggleChangePhotoDrawer}
                toggleRemovePhotoModal={toggleRemovePhotoModal} />
            </SlideWrapper>
        </Drawer>

        {/* Remove Photo Modal 
        <AltModal
        modalIsOpen={removePhotoModalState} 
        toggleModal={toggleRemovePhotoModal}>

            {/* content 
            <RemovePhotoView
            closeModal={toggleRemovePhotoModal} />
        </AltModal> */}

       {/* Remove Photo Modal */}
       {/* <AltModal
        // modalIsOpen={removePhotoModalState} 
        toggleModal={toggleRemovePhotoModal}>

           {/* content  
            <RemovePhotoView
            closeModal={toggleRemovePhotoModal} />
        </AltModal> */}
    </PageWrapper>
  );
};

export default ListOfBanks;
