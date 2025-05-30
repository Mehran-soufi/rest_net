"use client";
import React, { useState } from "react";
import Button from "./Button";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { FaRegStar, FaRegUser } from "react-icons/fa";

function SendComment() {
  const allowSend: boolean = false;
  return (
    <div className="w-11/12 sm:h-40 p-2 my-2 rounded-md flex justify-between items-center relative flex-wrap">
      <div className="sm:w-2/3 w-full sm:h-full h-32">
        <textarea
          name="comment"
          id="comment"
          placeholder="whrite a comment..."
          className="w-full h-full bg-slate-50 outline-none p-2 resize-none"
        ></textarea>
      </div>
      <div className="sm:w-1/3 w-full h-full flex flex-col items-stretch justify-center gap-2 p-1">
        <input
          type="text"
          placeholder="Title"
          className="w-full px-1 py-3 border-none outline-none bg-slate-50 rounded-lg"
        />
        <ul className="w-full px-1 py-2 border-none outline-none rounded-lg flex justify-center items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <li className="cursor-pointer text-xl" key={index}>
              <FaRegStar />
            </li>
          ))}
        </ul>
        <Button title="send comment" icon={<BsFillSendArrowUpFill />} />
      </div>
      {allowSend && (
        <div className="w-full h-full absolute top-0 left-0 bg-white/10 backdrop-blur-md rounded-lg overflow-hidden">
          <div className="w-full h-full flex justify-center items-center flex-col gap-4">
            <p className="text-black">
              You need to login to your account to write a comment.
            </p>
            <Button title="login" icon={<FaRegUser />} />
          </div>
        </div>
      )}
    </div>
  );
}

export default SendComment;
