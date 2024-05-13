import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
function Sidebar() {
  return (
    <div className="bg-slate-700 w-[30%]">
      <Navbar />
      <Search />
      <Chats />
      <Chats />
      <Chats />
      <Chats />
      <Chats />
    </div>
  );
}

export default Sidebar;
