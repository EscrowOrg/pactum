import React, { useRef } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import SendMessage from "../../../components/Dashboard/Home/SendMessage";

const ChatBox = () => {
  // STATES
  const scroll = useRef();

  return (
    <PageWrapper>
      {/* ChatBox containter */}
      <div className="w-full h-full py-5 gap-8">
        {/* send message  */}
        <span></span>
        <SendMessage  />
      </div>
    </PageWrapper>
  );
};

export default ChatBox;
