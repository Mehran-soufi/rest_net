"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { IoClose } from "react-icons/io5";

interface ImageType {
  src: string;
  cols: number;
  rows: number;
}
const images: ImageType[] = [
  { src: "/assets/country/thailand.jpg", cols: 2, rows: 2 },
  { src: "/assets/country/brazil.jpg", cols: 2, rows: 2 },
  { src: "/assets/country/turkey.jpg", cols: 2, rows: 4 },
  { src: "/assets/country/france.jpg", cols: 1, rows: 2 },
  { src: "/assets/country/germany.jpg", cols: 2, rows: 2 },
  { src: "/assets/country/italy.jpg", cols: 1, rows: 2 },
];

const getColClass = (cols: number) => {
  switch (cols) {
    case 1:
      return "col-span-1";
    case 2:
      return "col-span-2";
    case 3:
      return "col-span-3";
    case 4:
      return "col-span-4";
    case 5:
      return "col-span-5";
    case 6:
      return "col-span-6";
    default:
      return "";
  }
};

const getRowClass = (rows: number) => {
  switch (rows) {
    case 1:
      return "row-span-1";
    case 2:
      return "row-span-2";
    case 3:
      return "row-span-3";
    case 4:
      return "row-span-4";
    default:
      return "";
  }
};

function ImageGallery() {
  const [thumGallery, setThumGallery] = useState<boolean>(false);
  const [activeImage, setActiveImage] = useState<string>(images[0].src);
  const [widthSize, setWidthSize] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWidthSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (widthSize > 700) {
      setThumGallery(false);
    } else {
      setThumGallery(true);
    }
  }, [widthSize]);

  return (
    <>
      <div className="w-full md:h-[60vh] h-[40vh] py-4 grid grid-cols-6 grid-rows-4 gap-4 relative">
        {widthSize > 700 && (
          <>
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative cursor-pointer rounded-md overflow-hidden ${getColClass(
                  image.cols
                )} ${getRowClass(image.rows)}`}
                onClick={() => {
                  setActiveImage(image.src);
                  setThumGallery(true);
                }}
              >
                <Image src={image.src} alt="" fill className="object-cover" />
              </div>
            ))}
          </>
        )}

        {thumGallery && (
          <div className="w-full h-full absolute top-0 left-0 bg-white rounded-lg overflow-hidden cart-items_nav">
            <div className="w-full h-full img-nav relative">
              {widthSize > 700 && (
                <button
                  className="absolute right-4 top-4 border-none outline-none text-zinc-600 z-10 cursor-pointer bg-slate-300 p-1"
                  onClick={() => setThumGallery(false)}
                >
                  <IoClose className="text-[#ee3f44]" size={20} />
                </button>
              )}
              <Swiper
                pagination={{ type: "fraction" }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper w-full h-full"
                initialSlide={images.findIndex(
                  (img) => img.src === activeImage
                )}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ImageGallery;
