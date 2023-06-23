import React from "react";

const ChatMessages = () => {
  return (
    <div className="my-auto">
      <h3 className="w-full text-[#A39CB2] text-sm">YOU CAN GET STARTED WTH ANY OF THESE. TAP TO SEND.</h3>
      <div className="text-[#3A0CA3] font-bold text-sm mt-3 gap-4">
        <button className="border border-[#3A0CA3] rounded-[32px] h-[40px]  py-2 px-6 mr-2 mb-3">Hello there!</button>
        <button className="border border-[#3A0CA3] rounded-[32px] h-[40px]  py-2 px-6">Good afternoon!</button>
        <button className="border border-[#3A0CA3] rounded-[32px] h-[40px]  py-2 px-6 mr-2 mb-3">Are you available?</button>
        <button className="border border-[#3A0CA3] rounded-[32px] h-[40px]  py-2 px-6">Hi, can i proceed?</button>
      </div>
    </div>
  );
};

export default ChatMessages;
