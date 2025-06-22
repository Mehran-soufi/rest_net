"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { FaDollarSign, FaStar } from "react-icons/fa";
import { IoAirplaneOutline } from "react-icons/io5";
import { MdMoveDown } from "react-icons/md";
import { LuMoveRight } from "react-icons/lu";


export default function OrderPage() {
  const router = useRouter();
  const pathName = usePathname();
  const lastPathSegment = pathName?.split("/").filter(Boolean).pop();

  const backHandler = () => {
    router.push("/account");
  };

  return (
    <div className="w-full flex flex-wrap items-start justify-between">
      <div className="w-full flex md:hidden items-center justify-start  border-b border-slate-300 py-2">
        <button
          className="flex items-center gap-1 outline-none"
          onClick={backHandler}
        >
          <IoIosArrowRoundBack className="text-slate-800" size={30} />
          <p>{lastPathSegment}</p>
        </button>
      </div>
      <div className="w-full flex flex-col gap-4 lg:p-4 p-1">
        {Array.from({ length: 3 }).map((_, index) => (
          <Link
            key={index}
            href={`/${index}`}
            target="_blank"
            className="w-full lg:p-4 p-2 rounded-lg bg-slate-50
                 flex flex-col justify-center items-center xl:gap-4 lg:gap-2 md:gap-1 outline-none border-none
                 transition duration-200 ease-linear shadow shadow-slate-300 hover:shadow-lg hover:shadow-slate-300"
          >
            <div className="w-full flex items-center justify-between flex-wrap lg:gap-0 gap-y-2 border-b border-slate-300">
              <p className="w-full lg:w-1/3 text-slate-600 flex items-center justify-start gap-1">
                order number:
                <span className="text-black font-bold">45623</span>
              </p>
              <p className="w-full lg:w-1/3 text-slate-600 flex items-center lg:justify-center gap-1">
                order date:
                <span className="text-black font-bold">06/16/2025</span>
              </p>
              <p className="w-full lg:w-1/3 text-slate-600 flex items-center lg:justify-end gap-1">
                category:
                <span className="text-black font-bold uppercase">tour</span>
              </p>
            </div>
            <div className="w-full flex lg:flex-row flex-col items-start gap-4">
              <div className="w-full lg:w-1/3 h-[30vh] relative">
                <Image
                  src="/assets/country/italy.jpg"
                  alt=""
                  fill
                  className="rounded-md"
                />
              </div>
              <div className="w-full lg:w-2/3 lg:p-2 flex flex-col justify-center gap-4">
                <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between flex-wrap">
                  <h2 className="font-bold lg:text-2xl text-lg md:text-xl">
                    Thailand the beutiful country
                  </h2>
                  <div className="flex items-center">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <span
                        key={index}
                        className="flex justify-end items-center text-base pr-1"
                      >
                        <FaStar className="text-amber-300" />
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full flex items-center gap-1">
                  <IoAirplaneOutline className="text-2xl text-purple-500" />
                  <p>Qatar Airline</p>
                  <p></p>
                </div>
                <div className="w-full flex items-center gap-1">
                  <MdMoveDown className="text-2xl text-[#ee3f44]" />
                  <p>Iran</p>
                  <span>-</span>
                  <p>Thailand</p>
                  <p></p>
                </div>
                <div className="w-full flex items-center gap-1">
                  <FaDollarSign className="text-2xl text-green-600" />
                  <p>$2000</p>
                  <span className="flex flex-col items-center justify-center text-sm px-2 text-slate-600">
                    x 2
                    <LuMoveRight size={30} />
                  </span>
                  <p>$6000</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
