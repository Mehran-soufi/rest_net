"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import {
  FaRegUserCircle,
  FaRegHeart,
  FaRegCommentDots,
  FaHeadphonesAlt,
} from "react-icons/fa";
import {
  MdOutlineShoppingBag,
  MdOutlineLogout,
  MdOutlineHistory,
  MdOutlineWavingHand,
  MdOutlineDashboard,
} from "react-icons/md";

interface AccountTypeMenu {
  title: string;
  link: string;
  icon: React.ReactElement;
}
const accountMenu: AccountTypeMenu[] = [
  {
    title: "Dashboard",
    link: "/account",
    icon: <MdOutlineDashboard />,
  },
  {
    title: "Profile",
    link: "/account/profile",
    icon: <FaRegUserCircle />,
  },
  {
    title: "Interest",
    link: "/account/interest",
    icon: <FaRegHeart />,
  },
  {
    title: "Orders",
    link: "",
    icon: <MdOutlineShoppingBag />,
  },
  {
    title: "Comments",
    link: "",
    icon: <FaRegCommentDots />,
  },
  {
    title: "Recent visits",
    link: "",
    icon: <MdOutlineHistory />,
  },
  {
    title: "Exit",
    link: "",
    icon: <MdOutlineLogout />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();

  const [widthSize, setWidthSize] = useState<number>(1024);

  useEffect(() => {
    setWidthSize(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidthSize(newWidth);

      if (
        (newWidth < 750 && widthSize >= 750) ||
        (newWidth >= 750 && widthSize < 750)
      ) {
        window.location.reload();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [widthSize]);

  return (
    <div className="w-full my-8 flex justify-center items-center relative">
      <div className="w-11/12 flex justify-between items-start xl:gap-4 lg:gap-3 md:gap-2 gap-1 md:flex-row flex-col">
        <div
          className={`p-4 lg:w-1/4 md:w-2/5 w-full border border-slate-200 rounded-lg md:sticky top-[10%]
              ${
                widthSize <= 750
                  ? pathName === "/account"
                    ? "inline"
                    : "hidden"
                  : ""
              }
                    `}
        >
          <div className="w-full h-full flex flex-col items-center justify-start">
            <div className="w-full flex items-center justify-center gap-2 py-2 border-b border-slate-200">
              <p className="flex items-center gap-1 text-xl">
                Hi
                <span className="text-main font-bold">Mehran</span>
              </p>
              <MdOutlineWavingHand className="text-amber-600" />
            </div>
            {accountMenu.map((acc, index) => (
              <div
                key={index}
                className="w-full py-2 border-b border-slate-200 flex justify-start items-center transition duration-200 ease-linear hover:bg-slate-200"
              >
                <Link
                  href={acc.link}
                  className={`w-full h-full p-1 outline-none gap-1 flex items-center ${
                    pathName == acc.link
                      ? "border-l-4 border-[#0d4b72]"
                      : "border-none"
                  }`}
                >
                  {acc.icon}
                  {acc.title}
                </Link>
              </div>
            ))}
            {/* support */}
            <div className="w-full bg-main rounded-md hidden lg:flex justify-between items-center mt-4">
              <p className="py-3 text-white px-2 flex items-center gap-1">
                <FaHeadphonesAlt size={18} />
                support
              </p>
              <p className="py-3 text-white px-2 text-sm xl:text-base">
                021-112233
              </p>
            </div>
            {/* logo */}
            <div className="w-full py-2 hidden lg:flex justify-center items-center">
              <div className="w-11/12 h-16 relative">
                <Image
                  src="/assets/logo/rest_net.png"
                  alt="restnet logo"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-3/4 md:w-3/5 w-full border border-slate-200 rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
