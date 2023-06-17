import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import sliderImg from "../images/slider-img.png";
import startImg from "../images/starIcon.png";
import heartImg from "../images/heartIcon.png";
import filledHeartImg from "../images/filledHeartIcon.png";
import greylineImg from "../images/grey-line.png";
import multiPerson from "../images/multiPerson.png";
import bedRoomIcon from "../images/bedroomIcon.png";
import bathTubIcon from "../images/bathTubIcon.png";
import { josefin } from "../utils/utilsItems";
import Link from "next/link";

const CardWithSlider = (props) => {
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
            <span>{props.rating}</span>
          </div>
          <div>
            {props.likeButton === "filled" ? (
              <Link href="/">
                <Image src={filledHeartImg} alt="" />
              </Link>
            ) : (
              <Link href="/">
                <Image src={heartImg} alt="" />
              </Link>
            )}
          </div>
        </div>
        <Image className="my-2" src={greylineImg} alt="" />
        <p className={`text-base ${josefin.className}`}>{props.paraText}</p>
        <div className="room-details flex gap-2 mt-[12px] justify-between flex-wrap">
          <div className="text-sm text-primary flex">
            <Image className="mr-1 object-contain" src={multiPerson} alt="" />
            <span>{props.perRoomUserCount}</span>
          </div>
          <div className="text-sm text-primary flex">
            <Image className="mr-1 object-contain" src={bedRoomIcon} alt="" />
            <span>{props.bedCount}</span>
          </div>
          <div className="text-sm text-primary flex">
            <Image className="mr-1 object-contain" src={bathTubIcon} alt="" />
            <span>{props.bathCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithSlider;
