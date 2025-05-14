"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { MdHomeWork, MdLogin } from "react-icons/md";
import { IoMenu, IoSearch } from "react-icons/io5";
import {
  FaBlog,
  FaHeadphones,
  FaHeart,
  FaHome,
  FaPodcast,
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
  { title: "blog", link: "/blog", icon: <FaBlog /> },
  { title: "tour", link: "/tour", icon: <PiMaskHappyFill /> },
  { title: "hotel", link: "/hotel", icon: <MdHomeWork /> },
  { title: "podcast", link: "/podcast", icon: <FaPodcast /> },
];

interface RightMenuType {
  link: string;
  icon: React.ReactElement;
}

const RightMenuType: RightMenuType[] = [
  { link: "cart", icon: <FaBasketShopping /> },
  { link: "Interest", icon: <FaHeart /> },
];

function Header() {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowSearch(currentScrollY >= window.innerHeight);

      if (currentScrollY === 0 || currentScrollY < lastScrollY) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <main className="w-full flex justify-center py-2 z-20">
        <div className="w-[95%] flex justify-between items-center bg-white">
          {/* left header */}
          <div className="flex justify-start items-center">
            <Link href="/" className="outline-none border-none">
              <Image
                src="/assets/logo/rest_net.png"
                alt="rest net"
                width={120}
                height={100}
                sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
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
            {!isLargeScreen && (
              <Button
                color="bg-[#0d4b72]"
                title="login"
                width="w-12"
                height="h-12"
                icon={<IoSearch />}
              />
            )}
            <Button
              color="bg-[#0d4b72]"
              title="login"
              width="w-12"
              height="h-12"
              icon={<MdLogin />}
            />
          </div>
        </div>
      </main>
      { showMenu && (
        <menu
          className={`w-full ${
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
            <div className="flex flex-auto justify-center items-center">
              <ul className="flex-auto flex sm:justify-start justify-between items-center sm:gap-1">
                {menuButtons.map((btn, index) => (
                  <li key={index}>
                    <Link
                      href={btn.link}
                      className="uppercase font-bold px-2
                      transition duration-200 ease-linear hover:text-[#0d4b72] 
                      sm:flex-row flex-col sm:text-base text-sm flex flex-auto items-center justify-center gap-1
                      sm:border-none border-r border-slate-300 sm:py-0 py-2"
                    >
                      {btn.icon}
                      {btn.title}
                    </Link>
                  </li>
                ))}
                {!isLargeScreen ? (
                  <li>
                    <span
                      className="uppercase font-bold px-2
                      transition duration-200 ease-linear hover:text-[#0d4b72] 
                      sm:flex-row flex-col sm:text-base text-sm flex flex-auto items-center justify-center gap-1
                      sm:border-none border-r border-slate-300 sm:py-0 py-2"
                    >
                      <IoMenu />
                      more
                    </span>
                  </li>
                ) : null}
              </ul>
            </div>
            {isLargeScreen && (
              <div className="flex justify-center items-center">
                <ul className="flex justify-center items-center gap-4 uppercase outline-none text-xl text-slate-600">
                  {RightMenuType.map((btn, index) => (
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
