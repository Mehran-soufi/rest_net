import React from "react";
import { FaGlobeAmericas, FaPhoneSquare, FaShieldAlt } from "react-icons/fa";

function Symbol() {
  return (
    <div className="w-full xl:h-[30vh] sm:h-[70vh] lg:h-[32vh] h-screen relative select-none">
      <div className="w-full h-full absolute -top-7 left-0 flex justify-center lg:items-start items-center">
        <div className="md:w-3/4 w-full flex lg:justify-between justify-center items-start flex-wrap">
          <div className="flex flex-col items-center gap-1">
            <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center">
              <span className="text-[#ee3f44]">
                <FaPhoneSquare size={30} />
              </span>
            </div>
            <div className="p-2 flex justify-center items-center">
              <p className="text-xl text-slate-600 font-bold uppercase">
                24-hour support
              </p>
            </div>
            <div className="p-2 flex justify-center items-center max-w-[250px]">
              <p className="text-lg text-black w-full text-center">
                We are available to answer your questions by text or phone 24
                hours a day.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center">
              <span className="text-[#ee3f44]">
                <FaShieldAlt size={30} />
              </span>
            </div>
            <div className="p-2 flex justify-center items-center">
              <p className="text-xl text-slate-600 font-bold uppercase">
                High Security
              </p>
            </div>
            <div className="p-2 flex justify-center items-center max-w-[250px]">
              <p className="text-lg text-black w-full text-center">
                Our platform is designed with the latest security technologies
                to keep your data safe.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center">
              <span className="text-[#ee3f44]">
                <FaGlobeAmericas size={30} />
              </span>
            </div>
            <div className="p-2 flex justify-center items-center">
              <p className="text-xl text-slate-600 font-bold uppercase">
                Global Coverage
              </p>
            </div>
            <div className="p-2 flex justify-center items-center max-w-[250px]">
              <p className="text-lg text-black w-full text-center">
                We provide worldwide support for customers across multiple
                regions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Symbol;
