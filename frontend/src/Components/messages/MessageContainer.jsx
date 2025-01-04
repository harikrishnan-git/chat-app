import React from "react";
import MessageHeader from "./MessageHeader";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { IoIosSend, IoMdChatbubbles } from "react-icons/io";

export default function MessageContainer() {
  let NoChat = true;
  return (
    <div className="md:min-w-[450px] flex flex-col m:h-[450px] md:h-[600px]">
      {NoChat ? (
        <EmptyContiner />
      ) : (
        <>
          <MessageHeader />
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

const EmptyContiner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 John Doe ❄</p>
        <p>Select a chat to start messaging</p>
        <IoIosSend className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
