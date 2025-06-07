import AdFilter from "@/components/AdFilter";
import FilterMenu from "@/components/FilterMenu";
import Sorting from "@/components/Sorting";
import Image from "next/image";
import Link from "next/link";
import { FaDollarSign, FaStar } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { IoAirplaneOutline } from "react-icons/io5";
import { MdMoveDown } from "react-icons/md";

export default function Category() {
  return (
    <section className="w-full flex justify-center items-center relative">
      <div className="w-11/12 py-8">
        <div className="w-full h-full flex justify-between items-start gap-4 lg:flex-row flex-col-reverse">
          <AdFilter />
          <div className="lg:w-3/4 w-full h-full">
            <div className="w-full flex flex-col items-start gap-4">
              <Sorting />
              {Array.from({ length: 10 }).map((_, index) => (
                <Link
                  key={index}
                  href="/"
                  target="_blank"
                  className="w-full md:h-[40vh] rounded-lg bg-slate-50
                 flex justify-between items-center md:flex-row flex-col xl:gap-4 lg:gap-2 md:gap-1 outline-none border-none
                 transition duration-200 ease-linear shadow shadow-slate-300 hover:shadow-md hover:shadow-slate-300"
                >
                  <div className="md:w-1/4 w-full md:h-full h-[30vh] rounded-ss-lg rounded-es-lg overflow-hidden relative">
                    <Image
                      src="/assets/country/thailand.jpg"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-3/4 w-full h-full md:px-0 px-2 flex flex-col items-start md:justify-center justify-start xl:gap-6 lg:gap-5 md:gap-4 gap-3 lg:py-4 py-2">
                    <div className="w-full flex items-center md:justify-between justify-start flex-wrap">
                      <h2 className="font-bold xl:text-2xl text-lg flex-auto md:w-auto w-full">
                        Thailand the buetuful country for passengers
                      </h2>
                      {Array.from({ length: 4 }).map((_, index) => (
                        <span
                          key={index}
                          className="flex justify-end items-center text-base pr-2"
                        >
                          <FaStar className="text-amber-300" />
                        </span>
                      ))}
                    </div>
                    <div className="w-full flex items-center justify-start md:gap-2 gap-1">
                      <span>
                        <FaCalendarDays className="text-cyan-500 text-2xl" />
                      </span>
                      <p>05/30/2025</p>
                      <span>-</span>
                      <p>06/05/2025</p>
                      <p>(6 days)</p>
                    </div>
                    <div className="w-full flex items-center justify-start gap-2">
                      <span>
                        <MdMoveDown className="text-2xl text-[#ee3f44]" />
                      </span>
                      <p>Iran</p>
                      <span>-</span>
                      <p>Thailand</p>
                    </div>
                    <div className="w-full flex items-center justify-start gap-2">
                      <span>
                        <IoAirplaneOutline className="text-2xl text-purple-500" />
                      </span>
                      <p>Qatar Airline</p>
                    </div>
                    <div className="w-full flex items-center justify-start gap-2">
                      <span>
                        <FaDollarSign className="text-2xl text-green-600" />
                      </span>
                      <p>$2000</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <FilterMenu />
        </div>
      </div>
    </section>
  );
}
