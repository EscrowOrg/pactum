import React, { useState } from "react";
import { PrimaryButton } from "../../Button";
import { Star1 } from "iconsax-react";

const SendReview = () => {
  // STATES
  const [rate, setRate] = useState(0);

  return (
    <div className="w-full h-full flex flex-col px-4">


      <div className="flex justify-center items-center gap-3 py-3">
        {[...Array(5)].map((item, index) => {
          const givenRating = index + 1;
          return (
            <div key={index}
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

      <span className="text-center text-xs font-semibold pb-2">
        Tap a star to rate.
      </span>

      <form className="w-full mb-6">
        {/* title field*/}
        <input
          type="text"
          placeholder="Title"
          className="w-full outline-0 border-0 text-sm border-t py-2"
        />

        {/* review field */}
        <div className="w-full h-full">
          <textarea
            rows={10}
            cols={10}
            className="w-full outline-0 border-0 border-t pt-2 text-xs leading-loose"
            placeholder="Review (Optional)"
          ></textarea>
        </div>

        {/* button */}
        <div className="flex flex-col items-stretch w-full mb-8">
          <PrimaryButton
            // onClick={() => navigate(-1)}
            height="h-14"
            text={"Submit"}
          />
        </div>
      </form>
    </div>
  );
};

export default SendReview;
