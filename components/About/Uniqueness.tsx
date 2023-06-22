import Image from "next/image";
import React from "react";
import { josefin } from "../../utils/utilsFonts";
import aboutImgSec from "../../images/about-img-2.png";
import aboutImgThird from "../../images/about-img-3.png";
import aboutImgFourth from "../../images/about-img-4.png";

const Uniqueness = () => {
  return (
    <div className="bg-lightBrown p-[50px] rounded-2xl mb-[50px]">
      <h2 className={`${josefin.className} text-[40px] font-bold mb-[40px]`}>
        Uniqueness
      </h2>

      <div className="grid grid-cols-2 gap-4 my-[50px]">
        <Image
          src={aboutImgSec}
          alt=""
          className="object-cover rounded-2xl w-full"
        />
        <Image
          src={aboutImgThird}
          alt=""
          className="object-cover rounded-2xl w-full"
        />
        <Image
          src={aboutImgFourth}
          alt=""
          className="object-cover col-span-2 w-full rounded-2xl"
        />
      </div>

      <p className="font-bold text-base leading-6">
        In the signature hotels of the Earth you will come into contact with new
        flavors and textures but it is certain that you will recognize familiar
        recipes, which will appear in front of you more colorful and dynamic,
        designed so that in addition to the different experience they offer a
        complete, nutritious and healthy meal.
      </p>
    </div>
  );
};

export default Uniqueness;
