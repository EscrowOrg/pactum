import React, { useState } from "react";
import { PrimaryButton } from "../../Button";
import { Star1 } from "iconsax-react";

const SendReview = () => {
  // STATES
  const [showRate, setShowRate] = useState(true);

  return (
    <div className="w-full h-full flex flex-col py-5 px-4">
      <div>
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

      <span className="text-center text-xs">
        Tap a star to rate it on the App Store.
      </span>
      <form className="w-full h-full">
        {/* title field*/}
        <input
          type="text"
          placeholder="Title"
          className="w-full outline-0 border-0 text-sm"
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
        <div className="flex flex-col items-stretch w-full">
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
