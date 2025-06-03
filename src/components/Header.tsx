"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { MdHomeWork } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import {
  FaBlog,
  FaHeadphones,
  FaHeart,
  FaHome,
  FaPodcast,
  FaRegUser,
} from "react-icons/fa";
import { PiMaskHappyFill } from "react-icons/pi";
import { FaBasketShopping } from "react-icons/fa6";

/* menu buttons */
interface MenuButtonType {
  title: string;
  link: string;
  icon: React.ReactElement;
}

const menuButtons: MenuButtonType[] = [
  { title: "home", link: "/", icon: <FaHome /> },
  { title: "tour", link: "/category/tour", icon: <PiMaskHappyFill /> },
  { title: "hotel", link: "/category/hotel", icon: <MdHomeWork /> },
  { title: "blog", link: "/blog", icon: <FaBlog /> },
  { title: "podcast", link: "/podcast", icon: <FaPodcast /> },
];

interface RightMenuType {
  link: string;
  icon: React.ReactElement;
}

const rightMenuButtons: RightMenuType[] = [
  { link: "cart", icon: <FaBasketShopping /> },
  { link: "Interest", icon: <FaHeart /> },
];

function Header() {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        setShowSearch(currentScrollY >= window.innerHeight / 2);

        if (window.innerWidth > 760) {
          setShowMenu(currentScrollY === 0 || currentScrollY < lastScrollY);
        }

        setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [lastScrollY]);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 760);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateScreenSize);
      updateScreenSize();
    }

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <header className="w-full flex flex-col sticky top-0 ransition duration-200 ease-linear overflow-hidden border-b border-slate-200 z-50 bg-white">
      <main className="w-full flex justify-center py-2 z-20  bg-white">
        <div className="w-[95%] flex justify-between items-center">
          {/* left header */}
          <div className="flex justify-start items-center">
            <Link href="/" className="outline-none border-none">
              <Image
                src="/assets/logo/rest_net.png"
                alt="rest net"
                width={120}
                height={100}
                layout="responsive"
                sizes="(max-width: 640px) 90px, (max-width: 1024px) 100px, 120px"
              />
            </Link>
          </div>
          {/* center header */}

          {isLargeScreen && showSearch && (
            <div className="absolute right-1/2 transform translate-x-1/2 hidden md:flex justify-center items-center show_search">
              <div className="2xl:w-[600px] xl:w-[500px] lg:w-96 sm:w-80 p-3 rounded-full bg-slate-100 cursor-pointer select-none flex justify-start items-center gap-2 font-bold text-slate-600">
                <IoSearch />
                <span>search</span>
              </div>
            </div>
          )}

          {/* right header */}
          <div className="flex justify-end items-center gap-1">
            {!isLargeScreen && <Button title="login" icon={<IoSearch />} />}
            <Button title="login" icon={<FaRegUser />} />
          </div>
        </div>
      </main>
      {showMenu && (
        <menu
          className={`w-full bg-white ${
            isLargeScreen
              ? "relative"
              : "fixed bottom-0 border-t border-slate-300"
          }  flex justify-center items-center sm:py-6 z-10`}
        >
          <div
            className={`sm:w-[95%] w-full flex justify-between items-center ${
              isLargeScreen ? "show_menu absolute" : ""
            } `}
          >
            <div className="flex  flex-auto sm:flex-none justify-center items-center">
              <ul className="flex flex-auto sm:flex-none sm:justify-start justify-between items-center sm:gap-1">
                {menuButtons.map((btn, index) => (
                  <li
                    key={index}
                    className="
                  transition duration-200 ease-linear hover:text-[#0d4b72]
                sm:text-base text-sm flex flex-1 sm:flex-auto sm:flex-row flex-col  items-center justify-center
                  sm:border-none border-r border-slate-300 sm:py-0 py-2"
                  >
                    <Link
                      href={btn.link}
                      className="px-1 flex sm:flex-row flex-col items-center gap-1 uppercase font-bold"
                    >
                      {btn.icon}
                      {btn.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {isLargeScreen && (
              <div className="flex justify-center items-center">
                <ul className="flex justify-center items-center gap-4 uppercase outline-none text-xl text-slate-600">
                  {rightMenuButtons.map((btn, index) => (
                    <li key={index}>
                      <Link href={btn.link}>{btn.icon}</Link>
                    </li>
                  ))}
                  <li>
                    <span className="cursor-pointer">
                      <FaHeadphones />
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </menu>
      )}
    </header>
  );
}

export default Header;
