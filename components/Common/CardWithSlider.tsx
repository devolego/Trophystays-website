import Image from "next/image";
import React from "react";
// import Slider from "react-slick";
import sliderImg from "../../images/slider-img.png";
import startImg from "../../images/star-icon.png";
import startOutlineImg from "../../images/Star-outline.png";
import heartImg from "../../images/heart-icon-outline.png";
import filledHeartImg from "../../images/heart-icon.png";
import greylineImg from "../../images/grey-line.png";
import multiPerson from "../../images/multi-person.png";
import bedRoomIcon from "../../images/bedroom-icon.png";
import bathTubIcon from "../../images/bathtub-icon.png";
import Link from "next/link";
import { josefin } from "../../utils/utilsFonts";

const CardWithSlider = (props) => {
  return (
    <div className="bg-white rounded-[16px]">
      <Image className="w-full h-[240px] object-cover" src={sliderImg} alt="" />
      <div className="px-4 py-6">
        <div className="flex items-center justify-between rating-like ">
          <div className="flex gap-1 mb-2 starts">
            {props.rating === "5.0" ? (
              <>
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
              </>
            ) : props.rating === "4.0" ? (
              <>
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image
                  className="object-contain"
                  src={startOutlineImg}
                  alt=""
                />
              </>
            ) : props.rating === "3.0" ? (
              <>
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image className="object-contain" src={startImg} alt="" />
                <Image
                  className="object-contain"
                  src={startOutlineImg}
                  alt=""
                />
                <Image
                  className="object-contain"
                  src={startOutlineImg}
                  alt=""
                />
              </>
            ) : (
              ""
            )}
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
          <div className="flex text-sm text-primary">
            <Image className="object-contain mr-1" src={multiPerson} alt="" />
            <span>{props.perRoomUserCount}</span>
          </div>
          <div className="flex text-sm text-primary">
            <Image className="object-contain mr-1" src={bedRoomIcon} alt="" />
            <span>{props.bedCount}</span>
          </div>
          <div className="flex text-sm text-primary">
            <Image className="object-contain mr-1" src={bathTubIcon} alt="" />
            <span>{props.bathCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithSlider;