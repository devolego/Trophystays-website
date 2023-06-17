import Image from "next/image";
import React from "react";
import { josefin } from "../utils/utilsItems";

const CardImgWithText = (props) => {
  return (
    <div className={`rounded-[16px] w-max ${props.cardClass}`}>
      <Image className="w-full" src={props.cardImage} alt="" />
      <div className={`${props.cardContentClasses}`}>
        <h6 className={`text-2xl tex-black mb-2 ${josefin.className}`}>
          {props.cardHeading}
        </h6>
        <p className="text-sm">{props.cardPara}</p>
      </div>
    </div>
  );
};

export default CardImgWithText;
