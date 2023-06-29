import React, { useState } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import Drawer from "../../../layouts/Drawer";
import { useNavigate } from "react-router-dom";
import StrictWrapper from "../../../layouts/Drawer/StrictWrapper";
import SendChat from "../../../components/Dashboard/Profile/SendChat";

const SendUsChat = () => {
  // STATES
  const [isOpen, setIsOpen] = useState(false);

  // DATA INITIALIZATION
  const navigate = useNavigate();

  // HANDLERS
  const toggleDrawer = (value) => {
    // value?setIsOpen(value):setIsOpen(isOpen => !isOpen)
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <PageWrapper>
        {/* <span onClick={toggleDrawer}>Send a chat</span> */}
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="bottom"
      >
         {/* drawer content container */}
         <StrictWrapper title={"Send us a Chat"} closeDrawer={() => setIsOpen(false)}>
            {/* Body content */}
            <SendChat />
          </StrictWrapper>
      </Drawer>
    </PageWrapper>
  );
};

export default SendUsChat;
