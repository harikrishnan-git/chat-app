import React from "react";
import { IoIosSend } from "react-icons/io";

export default function MessageInput() {
  return (
    <div className="">
      <form action="" method="post" className="flex m-1">
        <input
          type="text"
          placeholder="Enter your message"
          className="input input-bordered input-primary flex-1"
        />
        <button className="btn btn-primary rounded px-2 ml-1">
          <IoIosSend className="h-8 w-8" />
        </button>
      </form>
    </div>
  );
}
