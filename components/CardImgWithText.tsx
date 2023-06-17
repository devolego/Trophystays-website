import Image from "next/image";
import Link from "next/link";
import React from "react";
import { josefin } from "../utils/utilsFonts";

const CardImgWithText = (props) => {
  return (
    <div className={`rounded-[16px] w-full ${props.cardClass}`}>
      <Image className="w-full" src={props.cardImage} alt="" />
      <div className={`${props.cardContentClasses}`}>
        <h6 className={`text-2xl tex-black mb-2 ${josefin.className}`}>
          {props.cardHeading}
        </h6>
        <p className="text-sm">{props.cardPara}</p>
      </div>
      {props.cardLink && (
        <Link className="text-sm text-primary underline" href={props.cardLink}>
          {props.cardContent}
        </Link>
      )}
    </div>
  );
};

export default CardImgWithText;
