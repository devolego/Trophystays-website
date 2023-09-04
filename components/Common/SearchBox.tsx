"use client";
import Image from "next/image";
import React, { useState } from "react";
import { josefin } from "../../utils/utilsFonts";
import Button from "./Button";
import Dropdown from "./Dropdown";
import locationIcon from "../../images/location.png";
import termIcon from "../../images/term-icon.png";
import bedroomIcon from "../../images/bedroom.png";
import arrivalIcon from "../../images/arrival.png";
// import Calendar from "../Common/Calendar"

import {
  arrivalItems,
  bedroomsItems,
  departureItems,
  locationFilterItems,
  termMenuItems,
} from "../../utils/utilsItems";
import SearchBoxDropdown from "./SearchBoxDropdown";

const SearchBox = ({ searchClasses, areas }) => {
  const [locationItems, setLocationItems] = useState(false);
  const [termItem, setTermItem] = useState(false);
  const [bedRoomItem, setBedRoomItem] = useState(false);
  const [arrivalMenuItem, setArrivalMenuItem] = useState(false);
  const [departureMenuItem, setDepartureMenuItem] = useState(false);

  console.log(areas)


  const [selectedArea, setSelectedArea] = useState('');
  const [selectedTerm, setSelectedTerm] = useState('Term');
  const [selectedBedroom, setSelectedBedroom] = useState('Bedrooms');



  const handleAreaSelect = (area) => {
    setSelectedArea(area);
  };

  const handleLocationItems = () => {
    setLocationItems(!locationItems);
  };
  const handelTermItems = () => {
    setTermItem(!termItem);
  };
  const handleBedRoomItem = () => {
    setBedRoomItem(!bedRoomItem);
  };
  const handleArrivalMenuItem = () => {
    setArrivalMenuItem(!arrivalMenuItem);
  };
  const handleDepartureMenuItem = () => {
    setDepartureMenuItem(!departureMenuItem);
  };
  return (
    <div
      className={`bg-white p-[30px] rounded-xl shadow-md max-w-[1190px] w-full m-auto relative z-1 ${searchClasses} xl:max-h-[166px] h-full max-xl:h-max`}
    >
      <h3 className={`text-2xl ${josefin.className} mb-4`}>
        Search for your most needed hotels.
      </h3>
      <div className="flex justify-between gap-4 relative max-xl:grid max-xl:grid-cols-3 max-md:grid-cols-1">
        <div
          className="relative xl:w-[185px] max-xl:w-full"
          onClick={handleLocationItems}
        >
          <SearchBoxDropdown imageSrc={locationIcon} seachHeading={selectedArea || "Filter"} />
          {locationItems && (
            <div className="p-4 rounded-xl grid grid-cols-2 md:w-[587px] bg-white mt-3 max-md:grid-cols-1 absolute z-[1] bg-white max-md:w-full" style={{zIndex: 100}}>
              {areas.map((area) => {
                return (
                  <div
                    key={area._id}
                    className="odd:border-r odd:border-[#E1D9CE] odd:mr-[30px] max-md:border-none cursor-pointer hover:bg-gray-200"
                    onClick={() => handleAreaSelect(area.area)}
                    style={{zIndex: 100}}
                  >
                     {area.area}
                    {/* <h2 className="text-base font-semibold mt-[30px]">
                      {items.heading}
                    </h2> */}
                    {/* {items.menuItem.map((value, index) => {
                      return (
                        <div key={index} className="font-extralight p-">
                          {value}
                        </div>
                      ); */}
                    {/* })} */}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 2nd box */}
        <div
          className="relative xl:w-[185px] max-xl:w-full"
          onClick={handelTermItems}
        >
          <SearchBoxDropdown imageSrc={termIcon} seachHeading={selectedTerm} />
          {termItem && (
  <div className="p-4 rounded-xl bg-white mt-3 absolute z-[1] bg-white w-full">
    <div 
      className="cursor-pointer hover:bg-gray-200" 
      onClick={() => setSelectedTerm('Monthly')}
    >
      <h2 className="text-base">Monthly</h2>
    </div>
    <div 
      className="cursor-pointer hover:bg-gray-200" 
      onClick={() => setSelectedTerm('Daily')}
    >
      <h2 className="text-base">Daily</h2>
    </div>
  </div>
)}
        </div>

        {/* 3rd box */}
        <div
          className="relative xl:w-[185px] max-xl:w-full"
          onClick={handleBedRoomItem}
        >
          <SearchBoxDropdown imageSrc={bedroomIcon} seachHeading={selectedBedroom} />
          {bedRoomItem && (
  <div className="p-4 rounded-xl bg-white mt-3 absolute z-[1] bg-white w-full">
    {[1, 2, 3, 4, 5].map((bedroomCount, index) => {
      return (
        <div 
          key={index} 
          className="cursor-pointer hover:bg-gray-200" 
          onClick={() => setSelectedBedroom(`${bedroomCount} Bedroom${bedroomCount > 1 ? 's' : ''}`)}
        >
          <h2 className="text-base">{bedroomCount} Bedroom{bedroomCount > 1 ? 's' : ''}</h2>
        </div>
      );
    })}
  </div>
)}

        </div>

        {/* 4th box */}
        <div
          className="relative xl:w-[185px] max-xl:w-full"
          onClick={handleArrivalMenuItem}
        >
          <SearchBoxDropdown imageSrc={arrivalIcon} seachHeading="Arrival" />
          {arrivalMenuItem && (
            <div className="p-4 rounded-xl grid grid-cols-2 bg-white mt-3 absolute z-[1] bg-white w-full">
              {arrivalItems.map((items, index) => {
                return (
                  <div key={index} className="text-base">
                    {items}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 5th box  */}
        <div
          className="relative xl:w-[185px] max-xl:w-full"
          onClick={handleDepartureMenuItem}
        >
          <SearchBoxDropdown imageSrc={arrivalIcon} seachHeading="Departure" />
          {departureMenuItem && (
            <div className="p-4 rounded-xl grid grid-cols-2 bg-white mt-3 absolute z-[1] bg-white w-full">
              {departureItems.map((items, index) => {
                return (
                  <div key={index} className="">
                    <h2 className="text-base ">{items}</h2>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <Button
          ButtonText={"Search"}
          ButtonClasses={
            "w-max flex items-center text-white justify-center max-h-[58px] max-xl:w-full max-md:py-3"
          }
        ></Button>
      </div>
    </div>
  );
};

export default SearchBox;
