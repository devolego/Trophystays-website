import Image from "next/image";
import React from "react";
import { josefin } from "../../utils/utilsFonts";

const ImageText = ({
  imgeSrc,
  imgTextClasses,
  headingText,
  paraText,
  subHeading,
  dateText,
}: any) => {
  return (
    <div className={`flex gap-[100px] ${imgTextClasses}`}>
      <Image
        src={imgeSrc}
        alt=""
        className="object-cover rounded-lg basis-6/12"
      />
      <div className="basis-6/12">
        <h6 className="text-darkGrey text-lg my-6">{headingText}</h6>
        <h2
          className={`text-black text-[56px] leading-[56px] ${josefin.className} mb-4`}
        >
          {subHeading}
        </h2>
        <span className="text-primary text-lg my-4">{dateText}</span>
        <p className="text-base">{paraText}</p>
      </div>
    </div>
  );
};

export default ImageText;
