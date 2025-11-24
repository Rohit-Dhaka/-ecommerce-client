import React from "react";

const Loader = () => {
  return (
    <div className=" absolute top-0 left-0 w-full h-full inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm z-[9999]">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
