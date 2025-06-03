"use client";
import React, { useState } from "react";

interface SortType {
  title: string;
}
export const sortingItem: SortType[] = [
  {
    title: "defult",
  },
  {
    title: "highest start",
  },
  {
    title: "Lowest price",
  },
  {
    title: "highest price",
  },
];

function Sorting() {
  const [sortMenu, setSortMenu] = useState<string>("defult");

  return (
    <div className="w-full py-4 px-2 lg:inline-block hidden">
      <div className="w-full h-full flex justify-between items-center">
        <div className="flex items-center justify-start">
          <h2 className="text-lg font-bold uppercase">Sorting:</h2>
        </div>
        <div className="flex items-center justify-end">
          <ul className="flex items-center rounded-lg border border-[#0d4b72] overflow-hidden">
            {sortingItem.map((sort, index) => (
              <div key={index} className="flex items-center">
                <li
                  className={`h-fit flex items-center justify-center cursor-pointer p-2 transition duration-200 ease-linear ${
                    index > 0 && "border-l border-slate-300"
                  } ${sort.title === sortMenu && "bg-main text-white"}
                  `}
                  onClick={() => setSortMenu(sort.title)}
                >
                  {sort.title}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sorting;
