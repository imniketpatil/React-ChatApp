import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // Correct usage of useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value; // Corrected index
    const password = e.target[1].value; // Corrected index

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch {
      setError(true);
    }
  };

  return (
    <div className="bg-blue-400 h-screen flex items-center justify-center">
      <div className="flex flex-col gap-3 text-center bg-white py-5 px-14 rounded-l">
        <span className="text-blue-600 font-bold text-2xl">Dark Box</span>
        <span className="text-xs">Login</span>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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
            type="submit"
            className="bg-blue-400 p-2 mt-4 border-none text-white cursor-pointer font-bold"
          >
            Sign In
          </button>
        </form>
        <p className="py-1">
          Didn't Have an Account ?{" "}
          <Link to="/register" className="text-blue-900 font-bold underline ">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
