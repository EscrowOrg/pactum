import React, {  useEffect, useState } from "react";
import { BackButton } from "../../Button";
import { Copy } from "iconsax-react";
import { copyToClipBoard } from "../../../helpers/copyToClipboard";
import  {  db} from "../../../../../firebase";
import { query,
  collection,
  orderBy,
  onSnapshot,
  limit, addDoc, serverTimestamp } from "firebase/firestore"; 
import { getUserId } from "../../../../../serivce/cookie.service";
import { AUTH_GET_USER_DETS } from "../../../../../serivce/apiRoutes.service";
import useMakeReq from "../../../hooks/Global/useMakeReq";
import { isEmpty } from "../../../helpers/isEmpty";
import { toast } from "react-toastify";



const SendMessage = ({ scroll }) => {

  // STATES
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [text, setText] = useState('');

  //   DATA INITIALIZATION
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe;
  }, []);

  const {
    data,
    makeAuthGetReq,
} = useMakeReq()

  useEffect(()=>{
    makeAuthGetReq(`${AUTH_GET_USER_DETS}/${getUserId()}`)
}, [])

useEffect(()=>{
  if(!isEmpty(data)) {
    setText(data?.data)
  }
}, [data])

  const sendMessage = async (event) => {
    event.preventDefault();
    if (currentMessage.trim() === "") {
      toast.error("Enter valid message");
      return;
    }
    await addDoc(collection(db, "messages"), {
      text: currentMessage,
       name: text.userName,
      createdAt: serverTimestamp(),
      userId: text.id
    });
    setCurrentMessage('');
  }
  return (
    <>
      {/* header */}
      <div className="flex justify-between px-5 pb-4 border-b">
        <div className="flex items-center gap-3 ">
          {/* back button */}
          <BackButton />

          {/* name of user */}
          <h3 className="font-semibold text-lg text-black">{text.fullName}</h3>
        </div>

        <div className="flex items-center gap-2 ">
          {/* user's phone number */}
          <h3 className="font-medium text-sm text-black">{text.phoneNumber}</h3>

          <Copy
            onClick={() => copyToClipBoard("+234 33239204")}
            variant="Bulk"
            size={16}
            color="#3F9491"
          />
        </div>
      </div>

      {/* send message container */}
      <form  onSubmit={sendMessage} className="send-message">
        {messages.map((message) => (
          <div
            className="ml-auto mt-3 mx-5 w-[110px] p-4 rounded-r-2xl rounded-br-none rounded-l-2xl bg-black text-white text-center text-xs break-all"
            key={message.id}
          >
            {message.text}
          </div>
        ))}

        <div className="  fixed bottom-4  overflow-hidden bg-[#F5F3F6] rounded-md border border-[#F5F3F6] flex items-center justify-between gap-1 p-3 w-[400px] mt-auto">
          {/* input field */}
          <input
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            id="messageInput"
            name="messageInput"
            type="text"
            className=" placeholder:font-normal placeholder:text-sm placeholder:text-[#ACA6BA] text-sm font-normal text-[#202223] rounded-lg bg-transparent outline-none w-full h-full"
            placeholder="Type your message..."
          />

          {/* send button */}
          <button type="submit"  className="text-[#ACA6BA] text-xs pointer">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default SendMessage;
