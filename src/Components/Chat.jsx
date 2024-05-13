import React from "react";
import Cam from "../images/cam.png";
import Add from "../images/add.png";
import More from "../images/more.png";

function Chat() {
  return (
    <div className="chat w-[70%]">
      <div className="chatInfo h-16 bg-slate-700 flex justify-between items-center p-4">
        <span className="text-slate-200 font-semibold text-xl">Niket</span>
        <div className="chaIcons flex items-center gap-2 ">
          <img src={Cam} alt="Camera" className="cursor-pointer h-6 w-6" />
          <img src={Add} alt="Add" className="cursor-pointer h-6 w-6" />
          <img src={More} alt="More" className="cursor-pointer h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
