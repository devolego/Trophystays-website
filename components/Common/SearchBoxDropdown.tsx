import Image from "next/image";
import React from "react";

const SearchBoxDropdown = ({ imageSrc, seachHeading }) => {
  return (
    <div className="relative flex w-full p-4 border rounded-lg cursor-pointer border-greyishBrown xl:w-auto max-md:py-2">
      <Image src={imageSrc} alt="" className="object-contain mr-3" />
      <p className="text-base text-darkGrey after:bg-down-arrow after:absolute after:top-[50%] after:right-[22px] after:-translate-y-2/4 after:w-3 after:bg-no-repeat after:h-2 after:bg-center">
        {seachHeading}
      </p>
    </div>
  );
};

export default SearchBoxDropdown;
