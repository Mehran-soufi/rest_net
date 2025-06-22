import Image from "next/image";
import Link from "next/link";
import React from "react";

import './(main)/globals.css'

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center select-none">
      <div className="md:w-[420] w-80 md:h-[320] h-72 relative">
        <Image src="/assets/notFound/notFound.webp" alt="not found" fill />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="md:text-2xl text-lg text-slate-400">
          You seem to be lost...
        </p>
        <Link
          title="back to home"
          className="py-2 px-8 outline-none  border-none flex justify-center items-center
          border border-transparent rounded-full cursor-pointer text-white font-bold transition 
          duration-300 ease-linear hover:scale-95 
          bg-main"
          href="/"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
