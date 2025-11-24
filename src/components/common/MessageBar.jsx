import React from "react";

const MessageBar = ({ message, showBar }) => {
  if (!message) return null; 

  return (
    <div className="absolute py-2 flex text-center max-sm:text-[14px] flex-col gap-2 px-3 rounded-lg shadow-2xl top-10 left-1/2 -translate-x-1/2 z-50 bg-black">
      <p className="text-white font-medium px-2  text-nowrap">{message}</p>

      {showBar && (
        <span className="bg-white rounded-lg h-1 w-full inline-block animate-progress"></span>
      )}
    </div>
  );
};

export default MessageBar;
