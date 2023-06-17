import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import sliderImg from "../images/slider-img.png";
import startImg from "../images/starIcon.png";
import heartImg from "../images/heartIcon.png";
import greylineImg from "../images/grey-line.png";
import multiPerson from "../images/multiPerson.png";
import bedRoomIcon from "../images/bedroomIcon.png";
import bathTubIcon from "../images/bathTubIcon.png";
import { josefin } from "../utils/utilsItems";

const CardWithSlider = () => {
  return (
    <div className="bg-white rounded-[16px]">
      <Image className="w-full h-[240px] object-cover" src={sliderImg} alt="" />
      <div className="px-4 py-6">
        <div className="rating-like flex justify-between items-center ">
          <div className="starts flex mb-2 gap-1">
            <Image className="object-contain" src={startImg} alt="" />
            <Image className="object-contain" src={startImg} alt="" />
            <Image className="object-contain" src={startImg} alt="" />
            <Image className="object-contain" src={startImg} alt="" />
            <Image className="object-contain" src={startImg} alt="" />
            <span>5.0</span>
          </div>
          <div>
            <Image src={heartImg} alt="" />
          </div>
        </div>
        <Image className="my-2" src={greylineImg} alt="" />
        <p className={`text-base ${josefin.className}`}>
          1 Bed Apartment with Stunning View
        </p>
        <div className="room-details flex gap-2 mt-[12px] justify-between flex-wrap">
          <div className="text-sm text-primary flex">
            <Image className="mr-1 object-contain" src={multiPerson} alt="" />
            <span>2 Sleeps</span>
          </div>
          <div className="text-sm text-primary flex">
            <Image className="mr-1 object-contain" src={bedRoomIcon} alt="" />
            <span>1 Bedroom</span>
          </div>
          <div className="text-sm text-primary flex">
            <Image className="mr-1 object-contain" src={bathTubIcon} alt="" />
            <span>1 Bath</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithSlider;
