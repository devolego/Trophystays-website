import Image from "next/image";
import React from "react";

const SubBanner = ({ imageSrc, bannerHeading }) => {
  return (
    <div className="relative max-h-[216px] h-full rounded-2xl">
      <div>
        <Image src={imageSrc} alt="" className="h-full w-full" />
        <div className="bg-left-shaded-overlay absolute top-0 left-0 h-full w-full"></div>
      </div>
      <div className="absolute left-[75px] text-white font-semibold top-[50%] -translate-y-[50%] text-[56px]">
        {bannerHeading}
      </div>
    </div>
  );
};

export default SubBanner;
