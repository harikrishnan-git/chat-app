import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import Logout from "./Logout";

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
