import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../Hooks/useLogout";

export default function Logout() {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto ">
      <button onClick={logout}>
        {!loading ? (
          <BiLogOut className="h-7 w-7 text-white cursor-pointer" />
        ) : (
          <span className="loading loading-spinner"></span>
        )}
      </button>
    </div>
  );
}
