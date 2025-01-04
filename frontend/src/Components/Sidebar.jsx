import React from "react";
import SearchInput from "./Sidebar/SearchInput";
import Conversations from "./Sidebar/Conversations";

export default function Sidebar() {
  return (
    <div>
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      {/*<Logout />*/}
    </div>
  );
}
