import React from "react";
import ClosedListingCard from "./ClosedListingCard";
import OngoingListingCard from "./OngoingListingCard";
import PendingPaymentsCard from "./PendingPaymentsCard";

const ListingBodyContent = ({ activeTab }) => {
  return (
    <div
      className={`h-full w-full px-4 bg-gray-100 border-t-[4px]  border-gray-100" flex flex-col pt-3 pb-20 overflow-auto gap-5`}
    >
      {
        // tab1 represents the pending payments tab
        activeTab === 1 ? (
          <PendingPaymentsCard />
        ) : // tab2 represents the ongoing listings tab
        activeTab === 2 ? (
          <OngoingListingCard />
        ) : // tab3 represents the closed listings tab
        activeTab === 3 ? (
          <ClosedListingCard />
        ) : null
      }
    </div>
  );
};

export default ListingBodyContent;

// bg-gray-100
