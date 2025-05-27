"use client";
import React, { useState } from "react";
import Button from "./Button";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";

function Add() {
  const [numberPass, setNumberPass] = useState<number>(1);
  const [price, setPrice] = useState<number>(800);

  const handlePlusNumber = () => {
    setNumberPass((prev) => prev + 1);
  };

  const handleDecreaseNumber = () => {
    setNumberPass((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="lg:w-1/4 w-full  sticky top-[20%] p-4 shadow-md shadow-slate-300 rounded-lg">
      <div className="w-full h-full flex flex-col justify-center items-stretch gap-4">
      <div className="w-full flex justify-between items-center flex-wrap">
          <span className="text-main select-none">Presenter:</span>
          <Image
            src="/assets/logo/rest_net.png"
            alt=""
            width={100}
            height={70}
          />
        </div>
        <div className="w-full flex justify-between items-center flex-wrap">
          <span className="text-main select-none">Airline:</span>
          <Image
            src="/assets/colleagues/Qatar-Airways.jpeg"
            alt=""
            width={100}
            height={70}
          />
        </div>
        <div className="w-full flex justify-between items-center flex-wrap">
          <span className="text-main select-none">Number of Passengers:</span>
          <div className="flex justify-center items-center gap-1">
            <button
              className={`flex justify-center items-center bg-main w-8 h-8 text-white rounded-full ${
                numberPass > 1
                  ? "opacity-100 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }`}
              onClick={handleDecreaseNumber}
            >
              -
            </button>
            <span>{numberPass}</span>
            <button
              className="flex justify-center items-center bg-main w-8 h-8 cursor-pointer text-white rounded-full"
              onClick={handlePlusNumber}
            >
              +
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-4">
          <span className="text-lg font-bold">{numberPass * price}$</span>
          <Button title="Reservation" icon={<FaPlus />} />
        </div>
      </div>
    </div>
  );
}

export default Add;
