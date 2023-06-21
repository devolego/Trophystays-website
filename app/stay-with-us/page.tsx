import React from "react";
import HotelListing from "../../components/Hotel/listing";
import FilterOptions from "../../components/Hotel/filterOptions";
import FilterImgTile from "../../components/Hotel/filterImgTile";
import SearchBox from "../../components/Common/SearchBox";

const stayWithUs = () => {
  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px]">
      {/* <SearchBox searchClasses="-mt-[83px] " /> */}
      <FilterImgTile />
      <FilterOptions />
      <HotelListing />
    </div>
  );
};

export default stayWithUs;
