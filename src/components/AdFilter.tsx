"use client";
import React, { useEffect, useState } from "react";
import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FaHeadphones } from "react-icons/fa";
import Image from "next/image";

function AdFilter() {
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

  return (
    <div className="lg:w-1/4 w-full lg:h-auto h-full lg:inline-block hidden rounded-lg shadow shadow-slate-300 p-4 lg:sticky absolute lg:left-auto left-0 lg:top-[20%] top-0 bg-white">
      <div className="w-full h-full flex flex-col items-start gap-4">
        <div className="w-full py-2 border-b border-slate-300">
          <h2 className="text-main font-bold xl:text-2xl md:text-lg">Filter:</h2>
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
              className={`w-full h-full bg-transparent border-none outline-none rounded-s-full font-bold `}
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
              className={`w-full h-full bg-transparent border-none outline-none rounded-s-full font-bold `}
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
        <div className="w-full py-2 border-b border-slate-300 z-50"> 
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
        {/* support */}
        <div className="w-full bg-main rounded-md hidden lg:flex justify-between items-center">
          <p className="py-3 text-white px-2 flex items-center gap-1">
            <FaHeadphones size={18} />
            support
          </p>
          <p className="py-3 text-white px-2 text-sm xl:text-base">021-112233</p>
        </div>
        {/* logo */}
        <div className="w-full py-2 hidden lg:flex justify-center items-center">
          <div className="w-11/12 h-16 relative">
            <Image src="/assets/logo/rest_net.png" alt="restnet logo" fill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdFilter;
