import React from "react";
import Button from "./Button";
import { FaPodcast } from "react-icons/fa";

function HeroPodcast() {
  return (
    <div className="w-full xl:h-[70vh] h-[50vh] my-8 hero-podcast select-none cursor-pointer">
      <div className="w-full h-full bg-gradient-to-br from-black/60 to-transparent">
        <div className="w-3/4 h-4/5 p-4 flex flex-col justify-center items-center gap-8">
          <p className="text-white font-bold xl:text-8xl lg:text-7xl md:text-5xl text-2xl">
            Restnet Podcast
          </p>
          <p className="xl:text-2xl sm:text-xl text-base text-slate-300">
            Listen to our fascinating podcasts in the field of tourism.
          </p>
          <span className="bg-main rounded-full text-white py-2 xl:px-8 px-4">
            restnet podcast
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroPodcast;
