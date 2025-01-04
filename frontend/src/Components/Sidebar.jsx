import React from "react";
import SearchInput from "./Sidebar/SearchInput";
import Conversations from "./Sidebar/Conversations";
import Logout from "./Sidebar/Logout";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full border-r-2 border-slate-600 p-5">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <Logout />
    </div>
  );
}
