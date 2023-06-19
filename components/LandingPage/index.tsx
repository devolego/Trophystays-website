import React from "react";
import Banner from "./Banner";
import Neighbourhoods from "./Neighbourhoods";
import HotelSuggestions from "./HotelSuggestions";
import EveryThingRightHere from "./EveryThingRightHere";
import ImageGallerySection from "./ImageGallerySection";
import LearnMore from "./LearnMore";

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="container-2xl px-5 min-lg:px-[50px]">
        <Banner />
        <Neighbourhoods />
      </div>
      <HotelSuggestions />
      <div className="container-2xl px-5 min-lg:px-[50px]">
        <EveryThingRightHere />
        <ImageGallerySection />
        <LearnMore />
        {/* <ClientReviews /> */}
      </div>

      {/* <ClientReviews /> */}
    </React.Fragment>
  );
};

export default LandingPage;
