"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper/types";

function Colleagues() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleMouseEnter = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  interface ColleaguesType {
    name: string;
    img: string;
  }
  const colleaguesItem: ColleaguesType[] = [
    {
      name: "Qatar Airways",
      img: "/assets/colleagues/Qatar-Airways.jpeg",
    },
    {
      name: "Singapore Airlines",
      img: "/assets/colleagues/Singapore-airlines.webp",
    },
    {
      name: "Emirates Airlines",
      img: "/assets/colleagues/Emirates-airlines.png",
    },
    {
      name: "ANA Airlines",
      img: "/assets/colleagues/ANA.png",
    },
    {
      name: "Cathay Pacific Airlines",
      img: "/assets/colleagues/cathay_pacific_airways.png",
    },
    {
      name: "JAPAN Airlines",
      img: "/assets/colleagues/JAPAN_AIRLINES.png",
    },
    {
      name: "Eva Airlines",
      img: "/assets/colleagues/Eva.png",
    },
    {
      name: "Lufthansa Airlines",
      img: "/assets/colleagues/Lufthansa.png",
    },
    {
      name: "Etihad Airlines",
      img: "/assets/colleagues/Etihad-airways.png",
    },
    {
      name: "Qantas Airways",
      img: "/assets/colleagues/Qantas_Airways.png",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center my-4 py-4 bg-slate-100 overflow-hidden select-none">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex justify-center items-center">
          <h2 className="font-bold text-main text-lg uppercase select-none">
            Colleagues
          </h2>
        </div>
        <div
          className="w-full h-[20vh]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            onSwiper={(swiperInstance) => {
              swiperRef.current = swiperInstance;
            }}
            slidesPerView="auto"
            spaceBetween={40}
            loop={true}
            freeMode={true}
            allowTouchMove={false}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, FreeMode]}
            className="mySwiper w-full h-full"
          >
            {colleaguesItem.map((item, index) => (
              <SwiperSlide
                key={index}
                className="!w-[200px] flex justify-center items-center"
              >
                <div className="w-full h-full relative">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    loading="lazy"
                    className="grayscale hover:grayscale-0 transition-all duration-300 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Colleagues;
