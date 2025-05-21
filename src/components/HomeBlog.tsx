"use client";
import React from "react";
import BlogCart from "./BlogCart";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

function HomeBlog() {
  return (
    <div className="w-full flex justify-center items-center py-4 my-4">
      <div className="w-11/12 flex flex-col items-start gap-4">
        <div className="w-full">
          <h2 className="font-bold text-main text-lg uppercase select-none">
            Blog
          </h2>
        </div>
        <div className="w-full h-[40vh] cart-items_nav">
          <Swiper
            slidesPerView={1.1}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 10,
              },
            }}
            className="mySwiper w-full h-full"
          >
            {Array.from({ length: 7 }).map((_, index) => (
              <SwiperSlide key={index}>
                <Link
                  href="/"
                  target="_blank"
                  className="w-full h-full no-underline"
                >
                  <BlogCart />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default HomeBlog;
