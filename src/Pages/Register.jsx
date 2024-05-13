import React from "react";
import Add from "../images/addAvatar.png";
function Register() {
  return (
    <div className="bg-blue-400 h-screen flex items-center justify-center">
      <div className="flex flex-col gap-3 text-center bg-white py-5 px-14 rounded-l">
        <span className="text-blue-600 font-bold text-2xl">Dark Box</span>
        <span className="text-xs">Register</span>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            className="border-b-2 border-blue-500 p-3 placeholder:text-slate-300 outline-none"
          />
          <input
            type="email"
            placeholder="E-Mail"
            className="border-b-2 border-blue-500 p-3 placeholder:text-slate-300 outline-none"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="border-b-2 border-blue-500 p-3 placeholder:text-slate-300 outline-none"
          />
          <label
            htmlFor="file"
            className="py-3 cursor-pointer flex items-center gap-2 text-slate-300"
          >
            <img src={Add} alt="File Image" className="w-8" />
            <span>Add Avatar</span>
          </label>
          <input type="file" id="file" className="mx-auto p-3 hidden" />
          <button
            type="button"
            className="bg-blue-400 p-2 border-none text-white cursor-pointer font-bold"
          >
            Sign Up
          </button>
        </form>
        <p className="py-1">
          You already have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
