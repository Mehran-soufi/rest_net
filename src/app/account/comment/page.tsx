"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function CommentPage() {
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
        <div className="w-full bg-slate-50 rounded-lg p-2">
          <Link
            className="w-full flex items-center gap-4 py-2 border-b border-slate-300"
            href="/"
            target="_blank"
          >
            <div className="w-20 h-15 relative">
              <Image
                fill
                src="/assets/country/italy.jpg"
                alt=""
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-bold">Thailand butiful country</h2>
              <p className="text-slate-600">tour</p>
            </div>
          </Link>
          <div className="w-full py-2 border-b border-slate-300 flex items-center justify-between flex-wrap">
            <p>06/16/2025</p>
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
          <div className="w-full py-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              mollitia architecto tempora ducimus quas nesciunt? Aliquam earum
              odio excepturi ea tenetur error neque assumenda optio cum repellat
              deserunt voluptates quisquam quae pariatur nam rem deleniti,
              dolorem maxime hic itaque magni maiores ratione! Voluptatibus
              consectetur ad ipsum dolore! Veritatis, fugit earum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
