import Image from "next/image";
import React from "react";
import {
  FaLocationDot,
  FaMoneyBill1Wave,
  FaRegCalendarDays,
  FaStar,
} from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

function Cart() {
  return (
    <div
      className="w-full h-full flex justify-center items-center flex-col border-2 border-slate-100 rounded-lg
    transition duration-200 ease-linear hover:bg-slate-100"
    >
      <div className="w-full h-4/5 relative img-nav transition duration-200 ease-linear">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          allowTouchMove={false}
          modules={[Navigation]}
          className="mySwiper w-full h-full"
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <SwiperSlide key={index}>
              <Image
                src="/assets/tour/thailand.jpg"
                alt=""
                fill
                className="rounded-ss-lg rounded-se-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full h-1/5">
        <div className="w-full h-full flex flex-col items-start gap-2 p-1">
          <div className="w-full flex justify-between items-center">
            <h2 className="font-bold flex items-center gap-1">
              <FaLocationDot className="text-slate-600" />
              Thailand
            </h2>
            <p className="flex items-center gap-1">
              <FaStar className="text-yellow-300" />
              4.6
            </p>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="flex items-center gap-1">
              <FaRegCalendarDays className="text-gray-500" />2 day
            </span>
            <span className="flex items-center gap-1">
              <FaMoneyBill1Wave className="text-gray-700" />
              800$
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
