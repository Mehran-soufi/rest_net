import React from "react";
import HeroSearch from "./HeroSearch";

function Hero() {
  return (
    <div className="w-full h-screen flex justify-center items-center relative hero-section">
      <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
        <HeroSearch />
      </div>
    </div>
  );
}

export default Hero;
