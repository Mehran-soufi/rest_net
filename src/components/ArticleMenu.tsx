"use client";
import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaEye } from "react-icons/fa";

interface MenuType {
  name: string;
  value: string;
  icon: React.ReactElement;
}

const sortMenu: MenuType[] = [
  { name: "Latest", value: "lat", icon: <FaClock /> },
  { name: "Oldest", value: "old", icon: <FaCalendarAlt /> },
  { name: "Most viewed", value: "viwe", icon: <FaEye /> },
];

function ArticleMenu() {
  const [selectedOption, setSelectedOption] = useState<MenuType>(sortMenu[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-between items-center flex-wrap md:flex-nowrap py-4 gap-4 border-b border-slate-300">
      <div className="flex md:w-1/2 w-full">
        <input
          type="text"
          className="lg:w-2/3 w-full bg-slate-100 rounded-lg p-4 outline-[#0d4b72]"
          placeholder="search in episode"
        />
      </div>

      {/* Custom Dropdown */}
      <div className="relative flex justify-end md:w-1/2 w-full">
        <button
          className="lg:w-2/3 w-full bg-slate-100 p-4 rounded-lg flex items-center justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex items-center">
            {selectedOption.icon}
            <span className="ml-2">{selectedOption.name}</span>
          </span>
          <span>▼</span>
        </button>

        {isOpen && (
          <ul className="absolute w-full lg:w-2/3 bg-white shadow-lg rounded-lg mt-2 z-50">
            {sortMenu.map((item, index) => (
              <li
                key={index}
                className="p-4 flex items-center cursor-pointer hover:bg-gray-200 gap-1"
                onClick={() => {
                  setSelectedOption(item);
                  setIsOpen(false);
                }}
              >
                {item.icon}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ArticleMenu;
