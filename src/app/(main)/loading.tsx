"use client";
import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="w-full h-[85vh] flex justify-center items-center">
      <div className="w-56 h-56 rounded-lg bg-white shadow-md shadow-[#0d4b72] flex justify-center items-center relative">
        <Image src="/assets/loading/loading.gif" alt="laoding" fill />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-main">loading...</span>
      </div>
    </div>
  );
}
