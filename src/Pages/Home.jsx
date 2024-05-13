import React from "react";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";

function Home() {
  return (
    <div className=" bg-blue-400 h-screen flex items-center justify-center">
      <div className=" flex border border-none rounded-md w-4/6 h-4/5 overflow-hidden">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
