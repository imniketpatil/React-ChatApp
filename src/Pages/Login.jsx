import React from "react";
import Add from "../images/addAvatar.png";
function Login() {
  return (
    <div className="bg-blue-400 h-screen flex items-center justify-center">
      <div className="flex flex-col gap-3 text-center bg-white py-5 px-14 rounded-l">
        <span className="text-blue-600 font-bold text-2xl">Dark Box</span>
        <span className="text-xs">Login</span>
        <form className="flex flex-col gap-3">
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

          <button
            type="button"
            className="bg-blue-400 p-2 mt-4 border-none text-white cursor-pointer font-bold"
          >
            Sign In
          </button>
        </form>
        <p className="py-1">
          Didn't Have an Account ? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
