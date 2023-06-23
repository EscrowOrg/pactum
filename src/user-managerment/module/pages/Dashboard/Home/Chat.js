import React, { useState } from "react";
import PageWrapper from "../../../layouts/PageWrapper";
import { BackButton } from "../../../components/Button";
import { Copy } from "iconsax-react";
import { copyToClipBoard } from "../../../helpers/copyToClipboard";
import { HiOutlineSearch } from "react-icons/hi";
import ChatMessages from "../../../components/Dashboard/Home/ChatMessages";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
        id: 1,
        text: "",
      }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleMessageSend = () => {
    if (currentMessage.trim() === "") {
      return; // Don't send empty messages
    }

    const newMessage = {
      id: messages.length + 1,
      text: currentMessage,
      sender: "user",
    };

    setMessages([...messages, newMessage]);
    setCurrentMessage("");
  };

  return (
    <PageWrapper>
      {/* chat containter */}
      <div className="w-full h-full flex flex-col py-5 gap-8">
        {/* header */}
        <div className="flex justify-between px-5 pb-4 border-b">
          <div className="flex items-center gap-3 ">
            {/* back button */}
            <BackButton />

            {/* name of user */}
            <h3 className="font-semibold text-lg text-black">Asemota Joel</h3>
          </div>

          <div className="flex items-center gap-2 ">
            {/* user's phone number */}
            <h3 className="font-medium text-sm text-black">+234 33239204</h3>

            <Copy
              onClick={() => copyToClipBoard("+234 33239204")}
              variant="Bulk"
              size={16}
              color="#3F9491"
            />
          </div>
        </div>

        {/* body */}

        <ChatMessages />
        <div className="chat-container px-5">
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${
                  message.text === ""
                    ? "bg-blue text-black"
                    : " border bg-black text-white"
                } rounded-10 p-10 mb-10 self-${
                  message.sender === "user" ? "start" : "end"
                } max-w-70%`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <form>
            {/* message input */}
            <div className="bg-[#F5F3F6] rounded-md border border-[#F5F3F6] flex items-center justify-between gap-1 p-2.5 w-[380px] mt-auto">
              <input
                className="placeholder:font-normal placeholder:text-xs placeholder:text-[#ACA6BA] text-sm font-normal text-[#202223] rounded-lg bg-transparent outline-none w-full h-full"
                type={"text"}
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder={"Type your message..."}
              />

              <span
                onChange={handleMessageSend}
                className="text-[#ACA6BA] text-xs"
              >
                Send
              </span>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Chat;
