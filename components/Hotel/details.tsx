"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import sliderImg from "../../images/slider-img.png";
import sliderImg1 from "../../images/kitchen-img-2.png";
import sliderImg2 from "../../images/hero.png";
import sliderImg3 from "../../images/login-form-img-1.png";
import Link from "next/link";
import heartImg from "../../images/heart-icon-outline.png";
import multiPerson from "../../images/multi-person.png";
import bedRoomIcon from "../../images/bedroom-icon.png";
import bathTubIcon from "../../images/bathtub-icon.png";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
};
const PropertyDetails = () => {
  return (
    <div>
      <Slider {...settings}>
        <Image
          className="w-full h-[240px] object-cover"
          src={sliderImg}
          alt=""
        />
        <Image
          className="w-full h-[240px] object-cover"
          src={sliderImg1}
          alt=""
        />
        <Image
          className="w-full h-[240px] object-cover"
          src={sliderImg2}
          alt=""
        />
        <Image
          className="w-full h-[240px] object-cover"
          src={sliderImg3}
          alt=""
        />
      </Slider>
      <div className="mt-4 p-[20px] flex justify-between">
        <h1 className="text-xl">The Arnold, 1621 E 6th St</h1>
        <Link href="/">
          <Image src={heartImg} alt="" />
        </Link>
      </div>
      <div className="room-details flex gap-2 mt-[12px] justify-between flex-wrap">
        <div>
          <div className="flex text-sm text-primary">
            <Image className="object-contain mr-1" src={multiPerson} alt="" />
            <span>{"2 sleeps"}</span>
          </div>
          <div className="flex text-sm text-primary">
            <Image className="object-contain mr-1" src={bedRoomIcon} alt="" />
            <span>{"1 Bedroom"}</span>
          </div>
          <div className="flex text-sm text-primary">
            <Image className="object-contain mr-1" src={bathTubIcon} alt="" />
            <span>{"1 Bath"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
