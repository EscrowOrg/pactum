import { Star1 } from "iconsax-react";
import React, { useState } from "react";
import { PrimaryButton, PrimaryButtonLight } from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import Drawer from "../../../layouts/Drawer";
import StrictWrapper from "../../../layouts/Drawer/StrictWrapper";
import SendReview from "../../../components/Dashboard/Profile/SendReview";

const ReviewPactum = () => {
  const navigate = useNavigate();

  // STATES
  const [rate, setRate] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // HANDLERS
  const toggleReviewDrawer = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div>
      <h3 className="text-center text-xs ">
        Tap a star to rate it on the App Store.
      </h3>

      {/* star rate container */}
      <div className="flex justify-center items-center gap-3 py-8">
        {[...Array(5)].map((item, index) => {
          const givenRating = index + 1;
          return (
            <div
              key={index}
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
              }}
            >
              <div>
                <Star1
                  variant="Bulk"
                  color={
                    givenRating < rate || givenRating === rate
                      ? "#292D32"
                      : "rgb(192,192,192)"
                  }
                />
              </div>
            </div>
          );
        })}
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
        <StrictWrapper
          title={"Write a Review"}
          closeDrawer={() => setIsOpen(false)}
        >
          {/* Body content */}
          <SendReview />
        </StrictWrapper>
      </Drawer>
    </div>
  );
};

export default ReviewPactum;
