import React from "react";
import { Radio } from "antd";

const UserFilterStatus = ({ filterValue, setFilterValue, closeDrawer }) => {
  return (
    <div className="w-full h-full flex flex-col gap-3 px-4">
      {/* radio group */}
      <Radio.Group
        className="flex flex-col gap-5"
        name="radiogroup"
        value={filterValue}
        defaultValue={"A-Z"}
      >
        {/* map over array of values */}
        {["A-Z", " Recently Added", " Highest Balance"].map((value) => (
          <Radio
            key={value}
            onChange={({ target: { value } }) => {
              setFilterValue(value);
              closeDrawer();
            }}
            className="flex flex-row-reverse w-full justify-between items-center after:content-none"
            value={value}
          >
            <span className="text-black font-semibold text-sm ml-auto">
              {value}
            </span>
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
};

export default UserFilterStatus;
