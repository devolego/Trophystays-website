import Image from "next/image";
import React from "react";
import listIcon from "../../images/list-icon.png";
import mapIcon from "../../images/map-icon.png";
import Dropdown from "../Common/Dropdown";

const FilterOptions = () => {
  return (
    <div className="flex items-center justify-between mb-10 flex-wrap gap-5">
      <Dropdown />
      <div className="flex border rounded-lg border-greyishBrown">
        <div className="flex bg-black rounded-lg h-max p-[14px] text-white items-center">
          <Image
            className="object-contain h-[17px] mr-[10px]"
            src={listIcon}
            alt=""
          />
          <p>List</p>
        </div>
        <div className="flex rounded-lg h-max p-[14px] items-center">
          <Image
            className="object-contain h-[17px] mr-[10px]"
            src={mapIcon}
            alt=""
          />
          <p>Map</p>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
