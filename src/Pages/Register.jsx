import React, { useState } from "react";
import Add from "../images/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Navigate, useNavigate, Link } from "react-router-dom";

function Register() {
  const [error, setError] = useState(false);
  const [signup, setSignup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              name,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              name,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});

            // Move the setSignup(true) call here
            setSignup(true);
            navigate("/");
          });
        }
      );
    } catch {
      setError(true);
    }
  };

  return (
    <div className="bg-blue-400 h-screen flex items-center justify-center flex-col">
      <div className="flex flex-col gap-3 text-center bg-white py-5 px-14 rounded-l">
        {signup && !error && (
          <div
            className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3"
            role="alert"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
            </svg>
            <p>Account Successfully Created</p>
          </div>
        )}

        {!signup && error && (
          <div
            className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3"
            role="alert"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
            </svg>
            <p>Something Went Wrong</p>
          </div>
        )}
        <span className="text-blue-600 font-bold text-2xl">Dark Box</span>
        <span className="text-xs">Register</span>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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
            type="submit"
            className="bg-blue-400 p-2 border-none text-white cursor-pointer font-bold"
          >
            Sign Up
          </button>
        </form>
        <p className="py-1">
          You already have an account?{" "}
          <Link to="/login/" className="text-blue-900 font-bold underline ">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
