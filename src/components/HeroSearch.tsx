"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { IoSearch } from "react-icons/io5";
import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ResultType {
  city: string;
}

const result: ResultType[] = [
  { city: "usa" },
  { city: "turkey" },
  { city: "canada" },
  { city: "thailand" },
  { city: "russia" },
];

function HeroSearch() {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const [isActiveCity, setIsActiveCity] = useState<boolean>(false);
  const [cityValue, setCityValue] = useState<string>("");

  const [isActiveDate, setIsActiveDate] = useState<boolean>(false);
  const [selectedDateOne, setSelectedDateOne] = useState<Date | null>(null);
  const [selectedDateTwo, setSelectedDateTwo] = useState<Date | null>(null);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

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

  return (
    <div className="w-11/12 relative sm:w-4/5 lg:w-3/5 xl:w-2/5 bg-white/60 backdrop-blur-sm rounded-full shadow shadow-[#0d4b72] flex justify-center items-center">
      {/* Input City */}
      <div
        id="city-container"
        className="w-2/5 h-full relative rounded-s-full"
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

      {/* Input Date */}
      <div
        id="date-container"
        className="w-2/5 h-full relative"
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
      </div>

      {/* Search Button */}
      <div className="w-1/5 h-full relative bg-[#0d4b72] rounded-full flex justify-center items-center text-white">
        <Button
          title="search"
          icon={<IoSearch />}
          width="w-full"
          height="h-full"
        />
      </div>

      {/* result search */}
      {isActiveCity && !isActiveDate && (
        <div className="absolute sm:w-11/12 w-full min-h-[30vh] bg-white/80 backdrop-blur-lg shadow-inner shadow-[#0d4b72] top-[110%] rounded-md">
          <div className="w-full h-full flex justify-between items-center p-4">
            <div className="w-1/2 h-full flex flex-col justify-start items-start gap-2">
              <span className="text-slate-600 font-bold">last search:</span>
              <ul className="flex flex-col items-start gap-1">
                {result.map((res, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setCityValue(res.city);
                      setIsActiveCity(false);
                    }}
                    className="flex gap-1 items-center cursor-pointer uppercase font-bold text-slate-800 py-1 px-2 rounded-xl transition duration-200 ease-linear hover:bg-[#0d4b72] hover:text-white"
                  >
                    <span>
                      <FaLocationDot />
                    </span>
                    <span>{res.city}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-start items-start gap-2">
              <span className="text-slate-600 font-bold">last search:</span>
              <ul className="flex flex-col items-start gap-1">
                {result.map((res, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setCityValue(res.city);
                      setIsActiveCity(false);
                    }}
                    className="flex gap-1 items-center cursor-pointer uppercase font-bold text-slate-800 py-1 px-2 rounded-xl transition duration-200 ease-linear hover:bg-[#0d4b72] hover:text-white"
                  >
                    <span>
                      <FaLocationDot />
                    </span>
                    <span>{res.city}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Date Picker */}
      {isActiveDate && (
        <div className="absolute sm:w-11/12 w-full min-h-[30vh] bg-white/80 backdrop-blur-lg shadow-inner shadow-[#0d4b72] top-[110%] rounded-md">
          <div className="w-full h-full flex justify-center items-center p-4">
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
  );
}

export default HeroSearch;
