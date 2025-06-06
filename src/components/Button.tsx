"use client";
import React, { useEffect, useState } from "react";

function Button({ title, icon }: { title: string; icon: React.ReactElement }) {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

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

  return (
    <button
      className={`w-full outline-none flex justify-center items-center border border-transparent rounded-full cursor-pointer text-white font-bold transition duration-300 ease-linear hover:scale-95 
       bg-main ${isLargeScreen ? "px-8 py-2" : "p-2"} `}
    >
      {isLargeScreen ? title : icon}
    </button>
  );
}

export default Button;
