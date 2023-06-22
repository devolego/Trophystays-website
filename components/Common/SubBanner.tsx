import Image from "next/image";
import React from "react";

const SubBanner = ({ imageDesktopSrc, imageModbileSrc, bannerHeading }) => {
  return (
    <div className="relative h-[216px] rounded-2xl overflow-hidden">
      <div className="h-[216px]">
        <Image
          src={imageDesktopSrc}
          alt=""
          className="h-full w-full object-cover max-md:hidden "
        />
        <Image
          src={imageModbileSrc}
          alt=""
          className="h-full w-full object-cover md:hidden "
        />
        <div className="bg-left-shadow-overlay absolute top-0 left-0 h-full w-full bg-no-repeat bg-left bg-cover"></div>
      </div>
      <div className="absolute left-[75px] max-md:left-[30px] text-white font-semibold top-[50%] -translate-y-[50%] text-[56px] max-md:text-[40px]">
        {bannerHeading}
      </div>
    </div>
  );
};

export default SubBanner;
