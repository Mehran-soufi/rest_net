"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";

// import required modules
import { Grid } from "swiper/modules";
import Image from "next/image";

// country
interface CountryType {
  name: string;
  img: string;
}

const country: CountryType[] = [
  {
    name: "France",
    img: "/assets/country/france.jpg",
  },
  {
    name: "Germany",
    img: "/assets/country/germany.jpg",
  },
  {
    name: "Canada",
    img: "/assets/country/canada.jpg",
  },
  {
    name: "Turkey",
    img: "/assets/country/turkey.jpg",
  },
  {
    name: "Russia",
    img: "/assets/country/russia.jpg",
  },
  {
    name: "USA",
    img: "/assets/country/usa.jpg",
  },
  {
    name: "Italy",
    img: "/assets/country/italy.jpg",
  },
  {
    name: "Switzerland",
    img: "/assets/country/switzerland.jpg",
  },
  {
    name: "Thailand",
    img: "/assets/country/thailand.jpg",
  },
  {
    name: "Brazil",
    img: "/assets/country/brazil.jpg",
  },
];

function PopularCountry() {
  return (
    <div className="w-full flex justify-center items-center my-8 py-8 bg-slate-50">
      <div className="w-11/12 h-[50vh]">
        <Swiper
          slidesPerView={1.2}
          grid={{
            rows: 2,
          }}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
              spaceBetween: 10,
              grid: { rows: 2 },
            },
            768: {
              slidesPerView: 3.2,
              spaceBetween: 10,
              grid: { rows: 2 },
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
              grid: { rows: 2 },
            },
          }}
          modules={[Grid]}
          className="mySwiper w-full h-full"
        >
          {country.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex justify-center items-center relative cursor-pointer rounded-lg transition duration-300 ease-linear hover:opacity-80">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="rounded-lg object-center"
                />
                <p
                  className="absolute left-1/2 top-1/2 flex justify-center items-center transform -translate-y-1/2 -translate-x-1/2
                 w-full h-full bg-black/20 rounded-lg text-white font-bold text-xl"
                >
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PopularCountry;
