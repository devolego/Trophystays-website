import Image from "next/image";
import Link from "next/link";
import React from "react";
import { josefin } from "../../utils/utilsFonts";

const CardImgWithText = ({
  cardClass,
  cardImage,
  cardContentClasses,
  cardHeading,
  cardPara,
  cardLink,
  cardContent,
}) => {
  return (
    <div className={`rounded-[16px] w-full ${cardClass}`}>
      <Image className="w-full" src={cardImage} alt="" />
      <div className={`${cardContentClasses}`}>
        <h6 className={`text-2xl tex-black mb-2 ${josefin.className}`}>
          {cardHeading}
        </h6>
        <p className="text-sm">{cardPara}</p>
      </div>
      {cardLink && (
        <Link className="text-sm underline text-primary" href={cardLink}>
          {cardContent}
        </Link>
      )}
    </div>
  );
};

export default CardImgWithText;
