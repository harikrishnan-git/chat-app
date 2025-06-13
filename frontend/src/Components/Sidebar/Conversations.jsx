import React, { useState, useEffect } from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../Hooks/useGetConversation";

export default function Conversations() {
  const { loading, conversations } = useGetConversation();
  console.log("Conversations data:", conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto sm:h-[270px] md:h-[400px]">
      {conversations.map((data) => {
        return <Conversation key={data._id} data={data} />;
      })}
    </div>
  );
}
