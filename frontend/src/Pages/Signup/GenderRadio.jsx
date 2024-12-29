import React from "react";

export default function GenderCheckbox() {
  return (
    <div>
      <label htmlFor="Gender" className="label p-2 label-text mt-2">
        Choose your Gender
      </label>
      <div className=" flex items-start">
        <label className="label cursor-pointer">
          <input
            type="radio"
            id="Gender"
            name="radio-2"
            className="radio radio-primary hover:border-blue-300 "
            defaultChecked
          />
          <span className="label-text ml-1">Male</span>
        </label>
        <label className="label cursor-pointer">
          <input
            type="radio"
            id="Gender"
            name="radio-2"
            className="radio radio-primary hover:border-blue-300 ml-6"
          />
          <span className="label-text m-1 ml-1">Female</span>
        </label>
      </div>
    </div>
  );
}
