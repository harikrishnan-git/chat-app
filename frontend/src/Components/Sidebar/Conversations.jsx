import React from "react";
import Conversation from "./Conversation";

export default function Conversations() {
  return (
    <div className="py-2 flex flex-col overflow-auto sm:h-[270px] md:h-[400px]">
      <Conversation></Conversation>
      <Conversation></Conversation>
      <Conversation></Conversation>
      <Conversation></Conversation>
      <Conversation></Conversation>
      <Conversation></Conversation>
      <Conversation></Conversation>
    </div>
  );
}
