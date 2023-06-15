import React from "react";
import { josefin } from "../utils/utilsItems";
import CardWithSlider from "./CardWithSlider";

const HotelSuggestions = () => {
  return (
    <div className="bg-lightBrown py-[60px] px-[50px]">
      <h2
        className={` ${josefin.className} text-[40px] text-black max-w-[452px] mb-[50px]`}
      >
        Hotels You would want to Visit
      </h2>
      <div className="grid grid-cols-4 hotel-card-design">
        <CardWithSlider />
      </div>
    </div>
  );
};

export default HotelSuggestions;
