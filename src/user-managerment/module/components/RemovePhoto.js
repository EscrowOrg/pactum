import React from "react";

const RemovePhoto = () => {
  return (
    <div className="text-center">
      <div className="pt-3.5 pb-5 px-3">
        <h3 className="font-bold text-base">Remove this photo?</h3>
        <p className="text-sm font-medium">
          This will delete your current profile photo.
        </p>
      </div>
      {/* Remove button */}
      <h4 className="w-full text-[#D1292D] font-bold border-t border-solid py-2">
        Remove
      </h4>
      {/* Cancle button */}
      <h4 className="font-semibold border-t border-solidborder-t border-solid pt-3 pb-1">
        Cancel
      </h4>
    </div>
  );
};

export default RemovePhoto;
