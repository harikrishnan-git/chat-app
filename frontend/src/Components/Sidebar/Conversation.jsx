import React from "react";

export default function Conversations() {
  return (
    <div className="">
      <div className="flex">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">John Doe</p>
            <span className="text-base">🥀</span>
          </div>
        </div>
      </div>
      <div className="divider h-1"></div>
    </div>
  );
}
