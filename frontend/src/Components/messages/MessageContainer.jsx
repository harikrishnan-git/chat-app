import React, { useEffect } from "react";
import MessageHeader from "./MessageHeader";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { IoIosSend, IoMdChatbubbles } from "react-icons/io";
import useConversationStore from "../../zustand/useConversationStore";
import { useAuthContext } from "../../Context/AuthContext";

export default function MessageContainer() {
  const { selectedConversation, setSelectedConversation } =
    useConversationStore();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col m:h-[450px] md:h-[600px]">
      {!selectedConversation ? (
        <EmptyContainer />
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

const EmptyContainer = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <IoIosSend className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
