import Image from "next/image";
import React from "react";

function MobileApp() {
  return (
    <div className="w-full py-8 flex justify-center items-center">
      <div className="w-4/5 h-full flex justify-center items-center flex-wrap gap-4">
        <div>
          <Image src="/assets/app/app.webp" alt="" width={350} height={100} />
        </div>
        <div className="flex flex-col items-start justify-center gap-2 max-w-xl">
          <p className="text-main font-bold uppercase text-xl sm:text-2xl lg:text-4xl xl:text-5xl">
            restnet mobile app
          </p>
          <p className="lg:text-xl text-base">
            Get the app and stay connected! Download our mobile application for
            seamless access to features, updates, and exclusive content anytime,
            anywhere.
          </p>
          <div className="w-full flex justify-center items-center gap-4">
            <Image
              src="/assets/app/google-play.png"
              alt=""
              width={100}
              height={100}
              className="cursor-pointer"
            />
                   <Image
              src="/assets/app/app-store.png"
              alt=""
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileApp;
