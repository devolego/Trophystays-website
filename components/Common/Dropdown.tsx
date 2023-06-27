"use client";
import Image from "next/image";
import React, { useState } from "react";
import filterIcon from "../../images/filter-icon.png";
import { arrivalItems } from "../../utils/utilsItems";

const Dropdown = ({ dropdownBeforeImg }) => {
  const [filtreMenu, setFilterMenu] = useState(false);
  return (
    <div className="relative">
      <div
        className="flex px-4 py-[13px] border rounded-lg border-greyishBrown relative cursor-pointer xl:w-[185px] w-full max-md:py-2"
        onClick={() => setFilterMenu(!filtreMenu)}
      >
        <Image
          src={filterIcon}
          alt=""
          className={`${
            dropdownBeforeImg ? dropdownBeforeImg : "mr-3 object-contain"
          }`}
        />
        <p className="text-base text-darkGrey after:bg-down-arrow after:absolute after:top-[50%] after:right-4 after:-translate-y-2/4 max-sm:pr-[50px] pr-[140px] after:w-3 after:bg-no-repeat after:h-2 after:bg-center">
          Filter
        </p>
      </div>
      {filtreMenu && (
        <div className="p-4 rounded-xl grid grid-cols-2 bg-white mt-2 absolute z-[1] bg-white w-full top-[100%]">
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
  );
};

export default Dropdown;
