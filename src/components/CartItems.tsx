"use client";
import React from "react";
import Cart from "./Cart";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

function CartItems({ title }: { title: string }) {
  return (
    <div className="w-full  my-8">
      <div className="w-full flex justify-center items-center">
        <div className="w-11/12 flex flex-col items-start gap-4">
          <div className="w-full">
            <h2 className="font-bold text-main text-lg uppercase select-none">
              {title}
            </h2>
          </div>
          <div className="w-full h-[50vh] cart-items_nav">
            <Swiper
              slidesPerView={1.3}
              spaceBetween={10}
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 2.2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3.2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5.6,
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
                    <Cart />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
