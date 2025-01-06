import React from "react";
import GenderRadio from "./GenderRadio";
import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../Hooks/useSignup";

export default function Signup() {
  const [inputs, setInputs] = useState({
    fullName: "",
    UserName: "",
    Password: "",
    ConfirmPassword: "",
    Gender: "male",
  });

  const { loading, signup } = useSignup();

  const handleClick = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

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
            <input
              id="Fullname"
              type="text"
              placeholder="John Doe"
              value={inputs.fullName}
              onChange={(e) => {
                setInputs({ ...inputs, fullName: e.target.value });
              }}
            />
          </label>
          <label htmlFor="Username" className="label pu-2">
            <span className="text-base label text">Username</span>
          </label>
          <label className="w-full h-10 p-2 input-bordered input hover:border-blue-300">
            <i class="fa-solid fa-user mr-3"></i>
            <input
              id="Username"
              type="text"
              placeholder="John123"
              value={inputs.UserName}
              onChange={(e) => {
                setInputs({ ...inputs, UserName: e.target.value });
              }}
            />
          </label>
          <label htmlFor="Password" className="label pu-2">
            <span className="text-base label text">Password</span>
          </label>
          <label className="w-full h-10 p-2 input-bordered input hover:border-blue-300">
            <i className="fa-solid fa-circle-user mr-3"></i>
            <input
              id="Password"
              type="password"
              placeholder="Enter password"
              value={inputs.Password}
              onChange={(e) => {
                setInputs({ ...inputs, Password: e.target.value });
              }}
            />
          </label>
          <label htmlFor="confirmPassword" className="label pu-2">
            <span className="text-base label text">Confirm Password</span>
          </label>
          <label className="w-full h-10 p-2 input-bordered input hover:border-blue-300">
            <i class="fa-solid fa-circle-user mr-3"></i>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Reenter password"
              value={inputs.ConfirmPassword}
              onChange={(e) => {
                setInputs({ ...inputs, ConfirmPassword: e.target.value });
              }}
            />
          </label>
          <GenderRadio inputs={inputs} setInputs={setInputs} />
          <Link to="/login" className="link link-primary">
            Already Have An Account?
          </Link>
          <div className="mt-3">
            <button
              className="btn btn-outline btn-primary"
              onClick={handleClick}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
