"use client";
import Slider from "rc-slider";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { sortingItem } from "./Sorting";

function FilterMenu() {
  const [sortMenu, setSortMenu] = useState<string>("defult");
  const [filtershow, setFilterShow] = useState<boolean>(false);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const [isActiveDate, setIsActiveDate] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [isActiveCity, setIsActiveCity] = useState<boolean>(false);
  const [cityValue, setCityValue] = useState<string>("");

  const selectedDateTwo: Date | null = null;
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !(event.target as Element).closest("#city-container") &&
        cityValue.trim().length === 0
      ) {
        setIsActiveCity(false);
      }
      if (
        !(event.target as Element).closest("#date-container") &&
        selectedDateTwo === null
      ) {
        setIsActiveDate(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [cityValue, selectedDateTwo]);

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const handleChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setPriceRange([value[0], value[1]]);
    } else {
      setPriceRange([value, value]);
    }
  };

  useEffect(() => {
    if (filtershow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [filtershow]);

  return (
    <>
      <div
        className="lg:hidden w-full flex items-center justify-between
      bg-slate-100 rounded-lg px-2 p-4 sticky top-[7%] shadow shadow-slate-200"
        onClick={() => setFilterShow(true)}
      >
        <div className="flex items-center justify-start gap-2">
          <FaFilter className="text-main" />
          <p className="text-main text-lg font-bold uppercase">filter</p>
        </div>
        <div className="flex justify-end items-center">
          <AiOutlineMenuFold className="text-main text-2xl" />
        </div>
      </div>
      {filtershow && (
        <div className="w-full h-screen fixed top-0 left-0 bg-white z-[10000] py-4 small_filter">
          <div className="w-full h-full flex flex-col gap-4 justify-start items-center">
            {/* filter */}
            <div className="w-11/12">
              <div
                className="w-full flex justify-between items-center py-2 border-b border-slate-300"
                onClick={() => setFilterShow(false)}
              >
                <h2 className="text-main font-bold xl:text-2xl md:text-lg">
                  Filter:
                </h2>
                <button className="border-none outline-none text-xl text-red-600">
                  <IoMdCloseCircle />
                </button>
              </div>
              {/* Country */}
              <div className="w-full py-2 border-b border-slate-300">
                <h2 className="text-main font-bold xl:text-lg">Country:</h2>
                <div
                  id="city-container"
                  className="w-full h-8 relative"
                  onClick={() => setIsActiveCity(true)}
                >
                  <label
                    htmlFor="city"
                    className={`absolute ${
                      isActiveCity || cityValue.trim() !== ""
                        ? "top-0 left-4 text-slate-400 text-sm opacity-60"
                        : "top-1/2 transform -translate-y-1/2 left-8 font-bold text-slate-600"
                    } flex items-center`}
                  >
                    <FaLocationDot />
                    city
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={cityValue}
                    autoComplete="off"
                    onChange={(e) => setCityValue(e.target.value.trimStart())}
                    className={`w-full h-full bg-transparent border-none outline-none rounded-s-full font-bold ${
                      isLargeScreen ? "px-8 py-2" : "p-2"
                    }`}
                  />
                </div>
              </div>
              {/* Date */}
              <div className="w-full py-2 border-b border-slate-300">
                <h2 className="text-main font-bold xl:text-lg">Date:</h2>
                <div
                  id="date-container"
                  className="w-full h-8 relative"
                  onClick={() => setIsActiveDate(true)}
                >
                  <label
                    htmlFor="date"
                    className={`absolute ${
                      isActiveDate || dateRange[0] || dateRange[1]
                        ? "top-0 left-4 text-slate-400 text-sm opacity-60"
                        : "top-1/2 transform -translate-y-1/2 left-8 font-bold text-slate-600"
                    } flex items-center`}
                  >
                    <FaCalendarDays />
                    date
                  </label>

                  <input
                    type="text"
                    id="date"
                    value={
                      dateRange[0] && dateRange[1]
                        ? `${dateRange[0].toLocaleDateString()} - ${dateRange[1].toLocaleDateString()}`
                        : dateRange[0]
                        ? dateRange[0].toLocaleDateString()
                        : ""
                    }
                    readOnly
                    className={`w-full h-full bg-transparent border-none outline-none rounded-s-full font-bold ${
                      isLargeScreen ? "px-8 py-2" : "p-2"
                    }`}
                  />

                  {/* Date Picker */}
                  {isActiveDate && (
                    <div className="absolute w-full bg-white/80 backdrop-blur-lg shadow-inner shadow-[#0d4b72] top-0 rounded-md">
                      <div className="w-full flex justify-center items-center p-4">
                        <DatePicker
                          selected={dateRange[0]}
                          onChange={(dates) => {
                            setDateRange(dates as [Date | null, Date | null]);
                            if (dates[1]) setIsActiveDate(false);
                          }}
                          startDate={dateRange[0]}
                          endDate={dateRange[1]}
                          selectsRange
                          inline
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Price */}
              <div className="w-full py-2 border-b border-slate-300">
                <h2 className="text-main font-bold xl:text-lg mb-2">Price:</h2>
                <Slider
                  range
                  min={0}
                  max={1000}
                  step={10}
                  value={priceRange}
                  onChange={handleChange}
                  allowCross={false}
                  styles={{
                    track: { backgroundColor: "#0d4b72", height: 4 },
                    handle: {
                      borderColor: "#0d4b72",
                      height: 16,
                      width: 16,
                      marginTop: -7,
                    },
                    rail: { backgroundColor: "#e2e8f0", height: 4 },
                  }}
                  className="-z-10"
                />

                <div className="flex justify-between text-sm mt-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
            {/* sort */}
            <div className="w-11/12">
              <div className="w-full py-4 px-2">
                <div className="w-full flex justify-center items-center">
                  <ul className="w-full flex items-center overflow-hidden flex-wrap">
                    {sortingItem.map((sort, index) => (
                      <div
                        key={index}
                        className="w-1/2 flex items-center justify-center flex-wrap"
                      >
                        <li
                          className={`w-full flex items-center justify-center cursor-pointer p-2 transition duration-200 ease-linear rounded-md ${
                            sort.title === sortMenu && "bg-main text-white"
                          }
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
          </div>
        </div>
      )}
    </>
  );
}

export default FilterMenu;
