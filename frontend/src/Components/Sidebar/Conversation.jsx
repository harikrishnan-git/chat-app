import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Conversation(data) {
  return (
    <div className="">
      <div className="flex">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={data.data.profilePic} />
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200 mx-5 text-xl">
              {data.data.fullName}
            </p>
          </div>
        </div>
      </div>
      <div className="divider h-1"></div>
    </div>
  );
}
