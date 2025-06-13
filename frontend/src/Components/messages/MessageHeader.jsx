import React from "react";
import useConversationStore from "../../zustand/useConversationStore";

export default function MessageHeader() {
  const { selectedConversation } = useConversationStore();
  return (
    <div className="bg-slate-500 px-4 py-2 mb-2">
      <span className="label-text">To:</span>
      <span className="text-gray-900 font-bold">
        {selectedConversation.fullName || "Unknown User"}
      </span>
    </div>
  );
}
