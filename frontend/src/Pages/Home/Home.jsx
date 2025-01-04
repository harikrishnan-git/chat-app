import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MessageContainer from "../../Components/messages/MessageContainer";

export default function Home() {
  return (
    <div className="flex shadow-md rounded-lg bg-gray-400 bg-clip-padding backdrop-blur-xl bg-opacity-0 sm:h-[450px] md:h-[600px] ">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}
