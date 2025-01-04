import React from "react";
import { BiLogOut } from "react-icons/bi";

export default function Logout() {
  return (
    <div className="mt-auto ">
      <button>
        <BiLogOut className="h-6 w-6 text-white cursor-pointer" />
      </button>
    </div>
  );
}
