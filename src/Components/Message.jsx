import React from "react";

function Message() {
  return (
    <div className="message flex gap-3 py-2 flex-row-reverse">
      <div className="messageInfo flex flex-col ">
        <img
          src="https://images.pexels.com/photos/22690392/pexels-photo-22690392/free-photo-of-woman-drinking-coffee-in-train.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Sender Image"
          className="w-5 h-5 sm:w-5 sm:h-5 xl:w-10 xl:h-10 rounded-full object-cover"
        />
        <span className=" text-slate-400 font-normal sm:font-normal xl:font-medium">
          Just Now
        </span>
      </div>
      <div className="messageContent max-w-4/5 flex flex-col gap-4 items-end">
        <p className="bg-slate-800 text-white px-4 py-2 rounded-lg rounded-tr-none max-w-content">
          Hello
        </p>
        <img
          src="https://images.pexels.com/photos/20068318/pexels-photo-20068318/free-photo-of-man-wearing-brown-jacket-in-a-narrow-alley.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          // className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  );
}

export default Message;
