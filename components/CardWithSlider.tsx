import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import sliderImg from "../images/slider-img.png";

const CardWithSlider = () => {
  return (
    <div>
      <Image src={sliderImg} alt="" />
    </div>
  );
};

export default CardWithSlider;
