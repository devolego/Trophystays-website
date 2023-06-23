import Image from "next/image";
import React from "react";
import filterIcon from "../../images/filter-icon.png";

const Dropdown = () => {
  return (
    <div className="relative flex p-4 border rounded-lg border-darkGrey w-max">
      <Image src={filterIcon} alt="" className="mr-3" />
      <p className="text-base text-darkGrey after:bg-down-arrow after:absolute after:top-[50%] after:right-4 after:-translate-y-2/4 max-sm:pr-[50px] pr-[140px] after:w-3 after:bg-no-repeat after:h-2 after:bg-center">
        Filter
      </p>
    </div>
  );
};

export default Dropdown;
