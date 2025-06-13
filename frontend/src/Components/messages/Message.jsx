import React from "react";
import { useAuthContext } from "../../Context/AuthContext";
import useConversationStore from "../../zustand/useConversationStore";

export default function message({ msg }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversationStore();
  const isSender = msg.senderId === authUser._id;
  const chatClass = isSender ? "chat-end" : "chat-start";
  const profilePic = isSender
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = isSender ? "bg-blue-500" : "";
  const senderName = isSender
    ? authUser.fullName
    : selectedConversation?.name || "Unknown User";

  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div className="chat-header">{senderName}</div>
      <div className={`chat-bubble ${bubbleBgColor}`}>{msg.message}</div>
      <time className="ml-1 text-xs opacity-50">12:45</time>
    </div>
  );
}
