import React from "react";

function Chats() {
  return (
    <div className="px-2 py-2.5 flex items-center gap-4 cursor-pointer border-b-2 border-slate-600 hover:bg-slate-800">
      <img
        className="h-10 w-10 rounded-full object-cover"
        src="https://images.pexels.com/photos/20068318/pexels-photo-20068318/free-photo-of-man-wearing-brown-jacket-in-a-narrow-alley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="User Image"
      />
      <div className="userChatInfo flex flex-col">
        <span className="text-slate-50 text-lg font-medium">Niket</span>
        <p className="text-slate-300 text-base">Hello</p>
      </div>
    </div>
  );
}

export default Chats;
