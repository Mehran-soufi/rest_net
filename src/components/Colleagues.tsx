"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";

function Colleagues() {
  return (
    <div className="w-full flex justify-center items-center my-4 py-4 bg-slate-100">
      <div className="w-full flex flex-col gap-4">
        <div className="wfull flex justify-center items-center">
          <h2 className="font-bold text-main text-lg uppercase select-none">
            Colleagues
          </h2>
        </div>
        <div className="w-full h-[20vh]">
          <Swiper
            slidesPerView={5}
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 0, 
              disableOnInteraction: true, 
              pauseOnMouseEnter: true, 
            }}
            loop={true}
            speed={10000} 
            freeMode={true}
            modules={[Autoplay]}
            className="mySwiper w-full h-full"
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full relative">
                  <Image
                    src={`/assets/colleagues/Qatar-Airways.jpeg`}
                    alt=""
                    fill
                    loading="lazy"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
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
