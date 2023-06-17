import React from "react";
import { josefin } from "../utils/utilsFonts";
import CardWithSlider from "./CardWithSlider";

const HotelSuggestions = () => {
  return (
    <div className="bg-lightBrown py-[60px] px-[50px]">
      <h2
        className={` ${josefin.className} text-[40px] text-black max-w-[452px] mb-[50px]`}
      >
        Hotels You would want to Visit
      </h2>
      <div className="grid grid-cols-4 hotel-card-design gap-6">
        <CardWithSlider
          paraText={" 1 Bed Apartment with Stunning View"}
          rating={"5.0"}
          perRoomUserCount={"2 sleeps"}
          bedCount={"1 Bedroom"}
          bathCount={"1 Bath"}
          likeButton={"unfilled"}
        />
        <CardWithSlider
          paraText={" 1 Bed Apartment with Stunning View"}
          rating={"5.0"}
          perRoomUserCount={"2 sleeps"}
          bedCount={"1 Bedroom"}
          bathCount={"1 Bath"}
          likeButton={"filled"}
        />
        <CardWithSlider
          paraText={" 1 Bed Apartment with Stunning View"}
          rating={"4.0"}
          perRoomUserCount={"2 sleeps"}
          bedCount={"1 Bedroom"}
          bathCount={"1 Bath"}
          likeButton={"filled"}
        />
        <CardWithSlider
          paraText={" 1 Bed Apartment with Stunning View"}
          rating={"3.0"}
          perRoomUserCount={"2 sleeps"}
          bedCount={"1 Bedroom"}
          bathCount={"1 Bath"}
          likeButton={"unfilled"}
        />
      </div>
    </div>
  );
};

export default HotelSuggestions;
