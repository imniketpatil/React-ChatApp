import React from "react";
import Message from "./Message";

function Messages() {
  return (
    <div
      className="bg-slate-300 p-2 h-full overflow-y-scroll"
      style={{ maxHeight: "calc(100% - 120px)" }}
    >
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default Messages;
