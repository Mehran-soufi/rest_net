"use client";
import React, { useState } from "react";
import EditProfile from "@/components/EditProfile";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FaRegEdit } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function PrfilePage() {
  const [editProfile, setEditProfile] = useState<boolean>(false);
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
      <div className="lg:w-1/2 w-full p-4 flex items-center justify-between lg:border-r border-b border-slate-300">
        <div className="flex flex-col gap-2">
          <span className="text-slate-600">User name:</span>
          <p>Mehran1029</p>
        </div>
        <div className="flex items-center">
          <button
            className="text-xl border-none outline-none p-2 cursor-pointer"
            onClick={() => setEditProfile(true)}
          >
            <FaRegEdit />
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 w-full p-4 flex items-center justify-between border-b border-slate-300">
        <div className="flex flex-col gap-2">
          <span className="text-slate-600">Profile photo:</span>
          <p>No photo</p>
        </div>
        <div className="flex items-center">
          <button className="text-xl border-none outline-none p-2 w-8 h-8 rounded-full cursor-pointer relative">
            <Image
              fill
              src="/assets/user/no-img.png"
              alt="avatar"
              onClick={() => setEditProfile(true)}
            />
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 w-full p-4 flex items-center justify-between lg:border-r border-b border-slate-300">
        <div className="flex flex-col gap-2">
          <span className="text-slate-600">Name:</span>
          <p>Mehran</p>
        </div>
        <div className="flex items-center">
          <button
            className="text-xl border-none outline-none p-2 cursor-pointer"
            onClick={() => setEditProfile(true)}
          >
            <FaRegEdit />
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 w-full p-4 flex items-center justify-between border-b border-slate-300">
        <div className="flex flex-col gap-2">
          <span className="text-slate-600">Last name:</span>
          <p>Soufi ghaderi</p>
        </div>
        <div className="flex items-center">
          <button
            className="text-xl border-none outline-none p-2 cursor-pointer"
            onClick={() => setEditProfile(true)}
          >
            <FaRegEdit />
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 w-full p-4 flex items-center justify-between lg:border-r border-b border-slate-300">
        <div className="flex flex-col gap-2">
          <span className="text-slate-600">Email:</span>
          <p>mehransoufi1@gmail.com</p>
        </div>
        <div className="flex items-center">
          <button
            className="text-xl border-none outline-none p-2 cursor-pointer"
            onClick={() => setEditProfile(true)}
          >
            <FaRegEdit />
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 w-full p-4 flex items-center justify-between border-b border-slate-300">
        <div className="flex flex-col gap-2">
          <span className="text-slate-600">Phone:</span>
          <p>09213821172</p>
        </div>
        <div className="flex items-center">
          <button
            className="text-xl border-none outline-none p-2 cursor-pointer"
            onClick={() => setEditProfile(true)}
          >
            <FaRegEdit />
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 w-full p-4 flex items-center justify-between lg:border-r border-b border-slate-300">
        <div className="flex flex-col gap-2">
          <span className="text-slate-600">Job:</span>
          <p>Programmer</p>
        </div>
        <div className="flex items-center">
          <button
            className="text-xl border-none outline-none p-2 cursor-pointer"
            onClick={() => setEditProfile(true)}
          >
            <FaRegEdit />
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 w-full p-4 flex items-center justify-between border-b border-slate-300">
        <div className="flex flex-col gap-2">
          <span className="text-slate-600">Birthday:</span>
          <p>01/19/2000</p>
        </div>
        <div className="flex items-center">
          <button
            className="text-xl border-none outline-none p-2 cursor-pointer"
            onClick={() => setEditProfile(true)}
          >
            <FaRegEdit />
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 w-full p-4 flex items-center justify-between lg:border-r border-b border-slate-300">
        <div className="flex flex-col gap-2">
          <span className="text-slate-600">How to return money:</span>
          <p>Master Cart</p>
        </div>
        <div className="flex items-center">
          <button
            className="text-xl border-none outline-none p-2 cursor-pointer"
            onClick={() => setEditProfile(true)}
          >
            <FaRegEdit />
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 w-full p-4 flex items-center justify-between border-b border-slate-300">
        <div className="flex flex-col gap-2">
          <span className="text-slate-600">Membership date:</span>
          <p>06/11/2025</p>
        </div>
        <div className="flex items-center">
          <button
            className="text-xl border-none outline-none p-2 cursor-pointer"
            onClick={() => setEditProfile(true)}
          >
            <FaRegEdit />
          </button>
        </div>
      </div>
      {editProfile && (
        <EditProfile
          editProfile={editProfile}
          setEditProfile={setEditProfile}
        />
      )}
    </div>
  );
}
