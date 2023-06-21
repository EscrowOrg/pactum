import React from "react";
import { Radio } from "antd";
import { TickCircle } from "iconsax-react";

const UserFilterStatus = ({
  setFilterCoin,
  filterCoinId,
  filterStatus,
  setFilterStatus,
  closeDrawer,
}) => {
  return (
    <div className="w-full h-full flex flex-col gap-3 px-4">
      {/* radio group */}
      <Radio.Group
        className="flex flex-col gap-5"
        name="radiogroup"
        value={filterStatus.name || "A-Z"}
        defaultValue={"A-Z"}
      >
        {/* first filter option */}
        <div
          onClick={closeDrawer}
          onChange={({ target: { value } }) => {
            setFilterStatus({
              name: value,
              id: 1,
            });
          }}
          className="flex w-full justify-between items-center after:content-none border-b pb-3"
          value={"A-Z"}
        >
          <span className="text-black font-semibold text-sm ml-2">A-Z</span>
          <TickCircle
            variant="Bulk"
            size={18}
            color="#48A9A6"
            className="ml-auto"
          />
        </div>

        {/* second filter option */}
        <div
          onClick={closeDrawer}
          onChange={({ target: { value } }) => {
            setFilterStatus({
              name: value,
              id: 2,
            });
          }}
          className="flex w-full justify-between items-center after:content-none border-b pb-3"
          value={"Success"}
        >
          <span className="text-black font-semibold text-sm ml-2">
            Recently Added
          </span>
        </div>

        {/* third filter option */}
        <div
          onClick={closeDrawer}
          onChange={({ target: { value } }) => {
            setFilterStatus({
              name: value,
              id: 3,
            });
          }}
          className="flex w-full justify-between items-center after:content-none"
          value={"Pending"}
        >
          <span className="text-black font-semibold text-sm ml-2">
            Highest Balance
          </span>
        </div>
      </Radio.Group>
    </div>
  );
};

export default UserFilterStatus;
