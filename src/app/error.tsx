"use client";
import React from "react";

// import './(main)/globals.css'


export default function Error() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="px-4 py-8 rounded-lg bg-white shadow-md shadow-[#0d4b72] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="xl:text-8xl lg:text-7xl md:text-6xl text-2xl font-bold text-rose-700">
            ERROR!
          </h2>
          <p className="lg:text-xl md:text-lg text-base text-slate-400">
            There seems to be a problem....
          </p>
          <button
            title="refresh page"
            onClick={handleRefresh}
            className="py-2 px-8 outline-none  border-none flex justify-center items-center
          border border-transparent rounded-full cursor-pointer text-white font-bold transition 
          duration-300 ease-linear hover:scale-95 
          bg-main"
          >
              Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
}
