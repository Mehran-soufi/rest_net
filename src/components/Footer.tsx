"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronUp, FaHandHoldingHeart } from "react-icons/fa";
import Button from "./Button";
import { TfiEmail } from "react-icons/tfi";

interface LinkType {
  title: string;
  link: string;
}
const links: LinkType[] = [
  {
    title: "Home",
    link: "",
  },
  {
    title: "blog",
    link: "",
  },
  {
    title: "Tour",
    link: "",
  },
  {
    title: "Hotol",
    link: "",
  },
  {
    title: "Podcast",
    link: "",
  },
];

function Footer() {
  const HandleBackUp = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <footer className="w-full mt-4 flex flex-col justify-center items-center">
      <div className="w-full border-t border-[#0d4b72] p-4 relative">
        <button
          onClick={HandleBackUp}
          className="w-20 cursor-pointer p-2 border border-[#0d4b72] rounded-lg bg-white absolute
         -top-1/2 left-1/2 transform -translate-x-1/2 text-lg flex justify-center "
        >
          <FaChevronUp className="text-main" />
        </button>
      </div>
      <div className="w-11/12 px-4 py-10 flex justify-between items-center flex-wrap">
        <div className="flex lg:w-1/2 w-full items-center justify-between gap-2 select-none">
          <div className="flex lg:w-1/3 w-full flex-col items-start justify-center">
            <p className="text font-bold uppercase mb-2">links:</p>
            {links.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                className="transition duration-200 ease-linear hover:text-main"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex lg:w-1/3 w-full flex-col items-start">
            <p className="text font-bold uppercase mb-2">links:</p>
            {links.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                className="transition duration-200 ease-linear hover:text-main"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex lg:w-1/3 w-full flex-col items-start">
            <p className="text font-bold uppercase mb-2">links:</p>
            {links.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                className="transition duration-200 ease-linear hover:text-main"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex lg:w-1/2 w-full flex-col items-center justify-center gap-4 my-4 lg:my-0">
          <Link
            href="/"
            className="lg:w-1/3 sm:w-3/5 w-11/12 lg:h-20  h-16 relative"
          >
            <Image src="/assets/logo/rest_net.png" alt="restnet logo" fill />
          </Link>
          <div className="w-4/5 flex justify-between items-center border border-[#0d4b72] rounded-full">
            <input
              type="email"
              placeholder="Subscribe to the newsletter"
              className="w-5/6 outline-none border-none px-2"
            />
            <Button title="Subscribe" icon={<TfiEmail />}></Button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center my-10">
        <div className="w-4/5 p-4 rounded-lg bg-[#0d4b72] flex justify-center items-center gap-1 flex-wrap">
          <p className="text-white">Designed and developed by</p>
          <Link
            href="https://resume-soufi.vercel.app/"
            target="_blank"
            className="text-green-600 font-bold"
          >
            Mehran Soufi
          </Link>
          <FaHandHoldingHeart className="text-rose-600" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
