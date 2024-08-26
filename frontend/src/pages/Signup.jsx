import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleError, handleSuccess } from "../utils";

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };
  console.log("SignupInfo -> ", signupInfo);

  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("All fields are  required");
      // return alert("All fields are  required");
    }
    try {
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      handleError(err);
    }
  };
  return (
    <div
      onSubmit={handleSignup}
      className="h-screen flex items-center justify-center bg-gray-400"
    >
      <div className="bg-white px-8 py-12 shadow-black shadow-2xl rounded-2xl flex flex-col">
        <form className="flex flex-col gap-2" action="">
          <h1 className="text-4xl font-semibold mb-5 text-center">
            Signup page
          </h1>
          <div>
            <label className="text-lg font-semibold" htmlFor="name">
              Name{" "}
            </label>
            <input
              onChange={handleChange}
              className="size-full text-lg p-2 outline-none border-b-2 border-b-black placeholder:italic"
              type="text"
              name="name"
              autoFocus
              placeholder="Enter your name"
              value={signupInfo.name}
            />
          </div>
          <div>
            <label className="text-lg font-semibold" htmlFor="email">
              Email{" "}
            </label>
            <input
              onChange={handleChange}
              className="size-full text-lg p-2 outline-none border-b-2 border-b-black placeholder:italic"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={signupInfo.email}
            />
          </div>
          <div>
            <label className="text-lg font-semibold" htmlFor="password">
              Password{" "}
            </label>
            <input
              onChange={handleChange}
              className="size-full text-lg p-2 outline-none border-b-2 border-b-black placeholder:italic"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={signupInfo.password}
            />
          </div>
          <button
            className="bg-purple-800 border-none text-white text-xl rounded-lg p-2 cursor-pointer my-2"
            type="submit"
          >
            Signup
          </button>
          <span className="font-semibold">
            Already have an account ?
            <Link className="text-purple-800" to="/login">
              Login
            </Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;
