import React from "react";
import GenderRadio from "./GenderRadio";

export default function Signup() {
  return (
    <div className="flex flex-col justify-center items-center minw-96 mx-auto">
      <div className="h-full w-full bg-gray-500 rounded-md bg-clip-padding px-16 backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 p-12">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign up
        </h1>
        <form>
          <label htmlFor="Fullname" className="label ">
            <span className="text-base label text">FULL NAME</span>
          </label>
          <label className="w-full h-10 p-2 input-bordered input hover:border-blue-300">
            <i class="fa-solid fa-circle-user mr-3"></i>
            <input id="Fullname" type="text" placeholder="John Doe" />
          </label>
          <label htmlFor="Username" className="label pu-2">
            <span className="text-base label text">Username</span>
          </label>
          <label className="w-full h-10 p-2 input-bordered input hover:border-blue-300">
            <i class="fa-solid fa-user mr-3"></i>
            <input id="Username" type="text" placeholder="John123" />
          </label>
          <label htmlFor="Password" className="label pu-2">
            <span className="text-base label text">Password</span>
          </label>
          <label className="w-full h-10 p-2 input-bordered input hover:border-blue-300">
            <i class="fa-solid fa-circle-user mr-3"></i>
            <input id="Password" type="text" placeholder="Enter password" />
          </label>
          <label htmlFor="confirmPassword" className="label pu-2">
            <span className="text-base label text">Confirm Password</span>
          </label>
          <label className="w-full h-10 p-2 input-bordered input hover:border-blue-300">
            <i class="fa-solid fa-circle-user mr-3"></i>
            <input
              id="confirmPassword"
              type="text"
              placeholder="Reenter password"
            />
          </label>
          <GenderRadio />
          <a href="#" className="link link-primary">
            Already Have An Account?
          </a>
          <div className="mt-3">
            <button className="btn btn-outline btn-primary">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}
