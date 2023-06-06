import React, { useState } from "react";
import { SearchInput } from "../../../components/Input";
import MarketListCard from "../../../components/Dashboard/Home/MarketListCard";

const Assets = () => {
  // STATES
  const [searchInput, setSearchInput] = useState("");

//   const { imageUrl, coinName, coinPairText } = MarketListCard();

  return (
    <div>
      {/* search bar container */}
      <div className="flex gap-5 w-full">
        {/* search bar */}
        <SearchInput
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      {/* <div className="flex items-center gap-3">
        {/* icon 
        <img alt="" src={imageUrl} className="h-[40px] w-[40px]" />
        {/* texts 
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-black text-sm">{coinName}</h3>

          <h4 className="text-[#8D85A0] text-sm font-normal">{coinPairText}</h4>
        </div>
      </div> */}
    </div>
  );
};

export default Assets;
