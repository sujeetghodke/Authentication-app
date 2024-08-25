import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError } from "../utils";

function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-400">
      <div className="bg-white px-8 py-12 shadow-black shadow-2xl rounded-2xl flex flex-col">
        <form className="flex flex-col gap-2" action="">
          <h1 className="text-4xl font-semibold mb-5 text-center">
            Login page
          </h1>
          <div>
            <label className="text-lg font-semibold" htmlFor="email">
              Email{" "}
            </label>
            <input
              className="size-full text-lg p-2 outline-none border-b-2 border-b-black placeholder:italic"
              type="email"
              name="email"
              placeholder="Enter your email"
              // value={signupInfo.email}
            />
          </div>
          <div>
            <label className="text-lg font-semibold" htmlFor="password">
              Password{" "}
            </label>
            <input
              className="size-full text-lg p-2 outline-none border-b-2 border-b-black placeholder:italic"
              type="password"
              name="password"
              placeholder="Enter your password"
              // value={signupInfo.password}
            />
          </div>
          <button
            className="bg-purple-800 border-none text-white text-xl rounded-lg p-2 cursor-pointer my-2"
            type="submit"
          >
            Signup
          </button>
          <span className="font-semibold">
            Dont't hvae an account ?
            <Link className="text-purple-800" to="/signup">
              Signup
            </Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
