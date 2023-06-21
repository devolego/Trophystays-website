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
import Link from "next/link";
import {
  departureItems,
  locationFilterItems,
  termMenuItems,
} from "../../utils/utilsItems";

const SearchBox = ({ searchClasses }) => {
  const [locationItems, setLocationItems] = useState(false);
  const [termItem, setTermItem] = useState(false);
  const [bedRoomItem, setBedRoomItem] = useState(false);
  const [arrivalMenuItem, setArrivalMenuItem] = useState(false);
  const [departureMenuItem, setDepartureMenuItem] = useState(false);
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
      className={`bg-white p-[30px] rounded-xl shadow-md max-w-[1190px] w-full m-auto relative z-1 ${searchClasses} max-h-[166px] h-full`}
    >
      <h3 className={`text-2xl ${josefin.className} mb-4`}>
        Search for your most needed hotels.
      </h3>
      <div className="relative flex justify-between gap-4">
        <div className="relative w-[185px]" onClick={handleLocationItems}>
          <div className="flex p-4 border rounded-lg border-greyishBrown w-max relative cursor-pointer w-[185px]">
            <Image src={locationIcon} alt="" className="object-contain mr-3" />
            <p className="text-base text-darkGrey after:bg-down-arrow after:absolute after:top-[50%] after:right-[22px] after:-translate-y-2/4 after:w-3 after:bg-no-repeat after:h-2 after:bg-center">
              Filter
            </p>
          </div>

          {locationItems && (
            <div>
              <div className="p-4 rounded-xl grid grid-cols-2 w-[587px] bg-white mt-3">
                {locationFilterItems.map((items) => {
                  return (
                    <div
                      key={items.id}
                      className="odd:border-r odd:border-[#E1D9CE] odd:mr-[30px]"
                    >
                      <h2 className="text-base font-semibold mt-[30px]">
                        {items.heading}
                      </h2>
                      {items.menuItem.map((value, index) => {
                        return (
                          <div key={index} className="font-extralight p-">
                            {value}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* 2nd box */}
        <div className="relative w-[185px]" onClick={handelTermItems}>
          <div className="flex p-4 border rounded-lg border-greyishBrown w-max relative cursor-pointer w-[185px]">
            <Image src={termIcon} alt="" className="object-contain mr-3" />
            <p className="text-base text-darkGrey after:bg-down-arrow after:absolute after:top-[50%] after:right-[22px] after:-translate-y-2/4 after:w-3 after:bg-no-repeat after:h-2 after:bg-center">
              Term
            </p>
          </div>

          {termItem && (
            <div>
              <div className="p-4 rounded-xl grid grid-cols-2 w-[587px] bg-white mt-3">
                {termMenuItems.map((items, index) => {
                  return (
                    <div key={index} className="">
                      <h2 className="text-base ">{items}</h2>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* 3rd box */}
        <div className="relative w-[185px]" onClick={handleBedRoomItem}>
          <div className="flex p-4 border rounded-lg border-greyishBrown w-max relative cursor-pointer w-[185px]">
            <Image src={bedroomIcon} alt="" className="object-contain mr-3" />
            <p className="text-base text-darkGrey after:bg-down-arrow after:absolute after:top-[50%] after:right-[22px] after:-translate-y-2/4 after:w-3 after:bg-no-repeat after:h-2 after:bg-center">
              Bedrooms
            </p>
          </div>

          {bedRoomItem && (
            <div>
              <div className="p-4 rounded-xl grid grid-cols-2 w-[587px] bg-white mt-3">
                {locationFilterItems.map((items) => {
                  return (
                    <div
                      key={items.id}
                      className="odd:border-r odd:border-[#E1D9CE] odd:mr-[30px]"
                    >
                      <h2 className="text-base font-semibold mt-[30px]">
                        {items.heading}
                      </h2>
                      {items.menuItem.map((value, index) => {
                        return (
                          <div key={index} className="font-extralight p-">
                            {value}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* 4th box */}
        <div className="relative w-[185px]" onClick={handleArrivalMenuItem}>
          <div className="flex p-4 border rounded-lg border-greyishBrown w-max relative cursor-pointer w-[185px]">
            <Image src={arrivalIcon} alt="" className="object-contain mr-3" />
            <p className="text-base text-darkGrey after:bg-down-arrow after:absolute after:top-[50%] after:right-[22px] after:-translate-y-2/4 after:w-3 after:bg-no-repeat after:h-2 after:bg-center">
              Arrival
            </p>
          </div>

          {arrivalMenuItem && (
            <div>
              <div className="p-4 rounded-xl grid grid-cols-2 w-[587px] bg-white mt-3">
                {locationFilterItems.map((items) => {
                  return (
                    <div
                      key={items.id}
                      className="odd:border-r odd:border-[#E1D9CE] odd:mr-[30px]"
                    >
                      <h2 className="text-base font-semibold mt-[30px]">
                        {items.heading}
                      </h2>
                      {items.menuItem.map((value, index) => {
                        return (
                          <div key={index} className="font-extralight p-">
                            {value}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* 5th box  */}
        <div className="relative w-[185px]" onClick={handleDepartureMenuItem}>
          <div className="flex p-4 border rounded-lg border-greyishBrown w-max relative cursor-pointer w-[185px]">
            <Image src={arrivalIcon} alt="" className="object-contain mr-3" />
            <p className="text-base text-darkGrey after:bg-down-arrow after:absolute after:top-[50%] after:right-[22px] after:-translate-y-2/4 after:w-3 after:bg-no-repeat after:h-2 after:bg-center">
              Departure
            </p>
          </div>

          {departureMenuItem && (
            <div>
              <div className="p-4 rounded-xl grid grid-cols-2 w-[587px] bg-white mt-3">
                {departureItems.map((items, index) => {
                  return (
                    <div key={index} className="">
                      <h2 className="text-base ">{items}</h2>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <Button
          ButtonText={"Search"}
          ButtonClasses={
            "w-max flex items-center text-white justify-center max-h-[58px]"
          }
        ></Button>
      </div>
    </div>
  );
};

export default SearchBox;
