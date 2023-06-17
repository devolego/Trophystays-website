import React from "react";
import Link from "next/link";
import { josefin } from "../utils/utilsFonts";

const Banner = () => {
  return (
    <div className="bg-banner-image h-[640px] bg-no-repeat bg-right rounded-[16px] relative bg-cover overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-banner-overlay"></div>
      <div className="absolute text-white max-w-[586px] top-[50%] left-[75px] -translate-y-1/2">
        <h1 className={`text-[64px] leading-[64px] ${josefin.className}`}>
          Short-term
        </h1>
        <h4 className={`text-4xl mb-6 ${josefin.className}`}>
          Properties Designed For Comfort.
        </h4>
        <p className="text-lg mb-[30px]">
          Each home in our collection is selected and designed to our standard
          of excellence. You deserve a love-at-first-sight home, ideal for
          living, working or relaxing.
        </p>
        <Link
          className="bg-blackLight rounded-[8px] px-[31px] py-2 laptopScreen:text-base text-white"
          href="/"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Banner;
