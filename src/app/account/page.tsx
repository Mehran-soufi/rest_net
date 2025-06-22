import Link from "next/link";
import React from "react";
import { BiCommentEdit } from "react-icons/bi";
import { CiShoppingTag } from "react-icons/ci";
import { PiHandHeartLight } from "react-icons/pi";

export default function AccountPage() {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-8">
      <div className="w-full">
        <h2 className="text-main font-bold text-lg">Your performance:</h2>
      </div>
      <div className="w-full flex justify-between items-center lg:flex-row flex-col">
        <div className="lg:w-1/3 w-full lg:border-r border-b lg:border-b-0 border-slate-200">
          <Link
            href="/account/interest"
            className="w-full h-full flex items-center justify-start gap-2 p-4"
          >
            <div className="h-12 w-20 circle-cut flex items-center justify-center bg-violet-700/60">
              <span className="text-4xl text-main">
                <PiHandHeartLight />
              </span>
            </div>
            <div className="flex flex-col items-stretch">
              <p>Interest</p>
              <p>3</p>
            </div>
          </Link>
        </div>
        <div className="lg:w-1/3 w-full lg:border-r border-b lg:border-b-0 border-slate-200">
          <Link
            href="/account/order"
            className="w-full h-full flex items-center justify-start gap-2 p-4"
          >
            <div className="h-12 w-20 circle-cut flex items-center justify-center bg-teal-700/60">
              <span className="text-4xl text-main">
                <CiShoppingTag />
              </span>
            </div>
            <div className="flex flex-col items-stretch">
              <p>Order</p>
              <p>1</p>
            </div>
          </Link>
        </div>
        <div className="lg:w-1/3 w-full">
          <Link
            href="/account/comment"
            className="w-full h-full flex items-center justify-start gap-2 p-4"
          >
            <div className="h-12 w-20 circle-cut flex items-center justify-center bg-amber-700/60">
              <span className="text-4xl text-main">
                <BiCommentEdit />
              </span>
            </div>
            <div className="flex flex-col items-stretch">
              <p>Comment</p>
              <p>15</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
