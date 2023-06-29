import { Star, Star1 } from "iconsax-react";
import React, { useState } from "react";
import { PrimaryButton, PrimaryButtonLight } from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import Drawer from "../../../layouts/Drawer";
import SlideWrapper from "../../../layouts/Drawer/SlideWrapper";
import StrictWrapper from "../../../layouts/Drawer/StrictWrapper";
import SendChat from "../../../components/Dashboard/Profile/SendChat";
import SendReview from "../../../components/Dashboard/Profile/SendReview";

const ReviewPactum = () => {
  const navigate = useNavigate();
  // STATESA
  const [showRate, setShowRate] = useState(true);
//   const [reviewDrawer, setReviewDrawer] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


   // HANDLERS
   const toggleReviewDrawer = () => {
    setIsOpen((isOpen) => !isOpen);
  };


  //   const starRate = [1, 2, 3, 4, 5];

  return (
    <div>
      <h3 className="text-center text-xs ">
        Tap a star to rate it on the App Store.
      </h3>

      {/* {starRate.map((rate, index) =>
        showPassword ? (
          <div
            key={rate}
            className="flex inline-flex mx-auto justify-center items-center gap-3 py-8"
          >
            <Star1
              onClick={() => setShowPassword(!showPassword)}
              className="text-2xl cursor-pointer"
            />
          </div>
        ) : (
         <div className="flex inline-flex mx-auto justify-center items-center gap-3 py-8">
             <Star1
            variant="Bulk"
            color="#292D32"
            onClick={() => setShowPassword(!showPassword)}
            className="text-2xl cursor-pointer"
          />
         </div>
        )
      )} */}

      {/* {showPassword ? (
  starRate.map((rate, index) => (
   <div key={rate} className="flex flex-row-reverse justify-center items-center gap-3 py-8">
     <Star1
      
      onClick={() => setShowPassword(!showPassword)}
      className="text-2xl cursor-pointer"
    />
   </div>
  ))
) : (
  <Star1
    variant="Bulk"
    color="#292D32"
    onClick={() => setShowPassword(!showPassword)}
    className="text-2xl cursor-pointer"
  />
)} */}
      {/* Icon{
                showPassword?
                <Star1
                onClick={()=>setShowPassword(!showPassword)}
                className="text-2xl  cursor-pointer" />:
                <Star1 variant="Bulk" color="#292D32"
                onClick={()=>setShowPassword(!showPassword)}
                className="text-2xl cursor-pointer" />
            } */}
      <div className="flex justify-center items-center gap-3 py-8">
        {showRate ? (
          <Star1
            onClick={() => setShowRate(!showRate)}
            className="text-2xl  cursor-pointer"
          />
        ) : (
          <Star1
            variant="Bulk"
            color="#292D32"
            onClick={() => setShowRate(!showRate)}
            className="text-2xl cursor-pointer"
          />
        )}
        {showRate ? (
          <Star1
            onClick={() => setShowRate(!showRate)}
            className="text-2xl  cursor-pointer"
          />
        ) : (
          <Star1
            variant="Bulk"
            color="#292D32"
            onClick={() => setShowRate(!showRate)}
            className="text-2xl cursor-pointer"
          />
        )}
        {showRate ? (
          <Star1
            onClick={() => setShowRate(!showRate)}
            className="text-2xl  cursor-pointer"
          />
        ) : (
          <Star1
            variant="Bulk"
            color="#292D32"
            onClick={() => setShowRate(!showRate)}
            className="text-2xl cursor-pointer"
          />
        )}
        {showRate ? (
          <Star1
            onClick={() => setShowRate(!showRate)}
            className="text-2xl  cursor-pointer"
          />
        ) : (
          <Star1
            variant="Bulk"
            color="#292D32"
            onClick={() => setShowRate(!showRate)}
            className="text-2xl cursor-pointer"
          />
        )}
        {showRate ? (
          <Star1
            onClick={() => setShowRate(!showRate)}
            className="text-2xl  cursor-pointer"
          />
        ) : (
          <Star1
            variant="Bulk"
            color="#292D32"
            onClick={() => setShowRate(!showRate)}
            className="text-2xl cursor-pointer"
          />
        )}
      </div>

      {/* buttons */}
      <div className="mt-auto flex justify-center items-center gap-6 w-full">
        <div className="flex flex-col items-stretch w-[40%]">
          <PrimaryButtonLight
            onClick={() => navigate(-1)}
            height="h-14"
            text={"Not Now"}
          />
        </div>

        <div className="flex flex-col items-stretch w-[40%]">
          <PrimaryButton
            onClick={toggleReviewDrawer}
            height="h-14"
            text={"Submit"}
          />
        </div>
      </div>


        <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="bottom"
      >
         {/* drawer content container */}
         <StrictWrapper title={"Write a Review"} closeDrawer={() => setIsOpen(false)}>
            {/* Body content */}
            <SendReview />
          </StrictWrapper>
      </Drawer>
    </div>
  );
};

export default ReviewPactum;
