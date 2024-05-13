import React from "react";
import Attach from "../images/attach.png";
import Img from "../images/img.png";
function Input() {
  return (
    <div className="bg-slate-200 p-2 flex items-center justify-between">
      <input
        type="text"
        placeholder="Messages"
        className="px-2 py-1 bg-transparent w-14 sm:w-20 md:w-32 lg:w-48 xl:w-72 2xl:w-96 outline-none overflow-y-scroll"
      />
      <div className="flex items-center justify-center gap-1 lg:gap-2">
        <label htmlFor="file" className="hover:cursor-pointer">
          <img src={Img} alt="" className="h-6" />
        </label>
        <input type="file" className="hidden" id="file" />
        <label htmlFor="file" className="hover:cursor-pointer">
          <img src={Attach} alt="" className="h-6" />
        </label>
        <button className="px-2 lg:px-4 py-2 bg-slate-500 text-white">
          Send
        </button>
      </div>
    </div>
  );
}

export default Input;
