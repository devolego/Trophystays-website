import Image from "next/image";
import React from "react";
import aboutImg from "../../images/about-img.png";
import { josefin } from "../../utils/utilsFonts";
import Uniqueness from "./Uniqueness";
import Philosophy from "./Philosophy";
import Mission from "./Mission";
import Goals from "./Goals";

const About = () => {
  return (
    <div className="flex container-2xl max-lg:px-4 lg:px-[50px] max-xl:gap-12 xl:gap-[120px]">
      <div className="w-[55%] mb-[60px]">
        <Image
          src={aboutImg}
          alt=""
          className="object-cover sticky top-[80px] left-0 w-full"
        />
      </div>
      <div className="w-[45%] mb-[100px]">
        <h1
          className={`text-[56px] leading-[56px] font-bold ${josefin.className} mt-[80px]`}
        >
          Building the future of hospitality
        </h1>
        <p className="text-darkGrey font-bold text-lg mt-8 mb-6">
          Experience the home that moves with you for a month, a year, or longer
          with a global network of designer, furnished apartments.
        </p>
        <Uniqueness />
        <Philosophy />
        <Mission />
        <Goals />
      </div>
    </div>
  );
};

export default About;
