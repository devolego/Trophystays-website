import React from "react";
import CardWithSlider from "../Common/CardWithSlider";

const HotelListing = () => {
  return (
    <div className="grid grid-cols-4 gap-6 hotel-card-design max-lg:grid-cols-1">
      {Array.from(Array(12), (e, i) => {
        return (
          <CardWithSlider
            paraText={" 1 Bed Apartment with Stunning View"}
            rating={"5.0"}
            perRoomUserCount={"2 sleeps"}
            bedCount={"1 Bedroom"}
            bathCount={"1 Bath"}
            likeButton={"unfilled"}
            key={`slider-${i}`}
          />
        );
      })}
    </div>
  );
};

export default HotelListing;
