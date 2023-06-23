"use client";
import React from "react";
import CardWithSlider from "../Common/CardWithSlider";
import SearchBox from "../Common/SearchBox";
import FilterImgTile from "./filterImgTile";
import FilterOptions from "./filterOptions";

const HotelListing = () => {
  return (
    <div>
      {/* <SearchBox searchClasses="mt-[20px] mb-10" /> */}
      <FilterImgTile />
      <FilterOptions />
      <div className="grid grid-cols-4 gap-6 hotel-suggestion max-lg:grid-cols-1">
        {Array.from(Array(12), (e, i) => {
          return (
            <CardWithSlider
              paraText={" 1 Bed Apartment with Stunning View"}
              rating={"5.0"}
              id={i}
              perRoomUserCount={"2 sleeps"}
              bedCount={"1 Bedroom"}
              bathCount={"1 Bath"}
              likeButton={"unfilled"}
              key={`slider-${i}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HotelListing;
