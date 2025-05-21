import Image from "next/image";
import React from "react";
import { FaCalendarAlt, FaEye } from "react-icons/fa";

function BlogCart() {
  return (
    <div className="w-full h-full rounded-lg border-2 border-slate-100 transition duration-200 ease-linear hover:bg-slate-100">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full h-3/4 relative">
          <Image
            src="/assets/country/thailand.jpg"
            alt=""
            fill
            className="rounded-ss-lg rounded-se-lg object-center object-cover"
          />
        </div>
        <div className="w-full h-1/4">
          <div className="w-full h-full flex flex-col justify-center items-center p-1">
            <h2 className="md:text-lg font-bold">Thailand beutull country</h2>
            <div className="flex justify-between items-center w-full px-2">
              <span className="text-slate-500 flex items-center gap-1 text-sm">
                <FaCalendarAlt />
                05/12/2025
              </span>
              <span className="text-slate-500 flex items-center gap-1 text-sm">
                <FaEye />
                56
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCart;
