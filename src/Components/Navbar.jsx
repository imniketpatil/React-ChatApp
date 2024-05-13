import React from "react";

function Navbar() {
  return (
    <div className="flex items-center bg-slate-900 h-16 p-2 justify-between">
      <span className="hidden lg:block text-slate-100 font-bold lg:text-xl px-1">
        Dark Box
      </span>
      <div className="flex gap-8  lg:gap-5">
        <div className="flex   flex-row gap-3 lg:gap-2">
          <img
            className="text-slate-100 bg-slate-100 h-8 w-8 rounded-full object-cover"
            src="https://images.pexels.com/photos/20068318/pexels-photo-20068318/free-photo-of-man-wearing-brown-jacket-in-a-narrow-alley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user"
          />

          <span className="text-slate-100 text-sm self-center	">Niket</span>
        </div>
        <button className="text-slate-100 bg-slate-700 text-xs rounded-sm h-6 self-center px-1">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
