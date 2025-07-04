import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../Hooks/useLogin";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [passwd, setPasswd] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userName, passwd);
    setUserName("");
    setPasswd("");
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 nx-auto">
      <div className="w-full p-6 shadow-md rounded-lg bg-gray-400 bg-clip-padding backdrop-blur-xl bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          LOGIN
        </h1>
        <form>
          <label htmlFor="username" className="label p-2">
            <span className="text-base label-text">Username</span>
          </label>
          <label className="input input-bordered flex items-center gap-2 hover:cursor-text hover:border-blue-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              id="username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              type="text"
              className="grow"
              placeholder="Username"
            />
          </label>
          <label htmlFor="password" className="label p-2">
            <span className="text-base label-text ">Password</span>
          </label>
          <label className="input input-bordered flex items-center gap-2 hover:cursor-text hover:border-blue-200 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              value={passwd}
              onChange={(e) => {
                setPasswd(e.target.value);
              }}
              className="grow"
              placeholder="Password"
            />
          </label>
          <strong>
            <Link
              to="/signup"
              className="text-sm link link-primary inline-block mt-2"
            >
              Don't have an account?
            </Link>
          </strong>
          <br />
          <button
            className="btn btn-outline btn-primary"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "LOGIN"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
