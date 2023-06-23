import Image from "next/image";
import React from "react";
import arrowLeft from "../../images/arrow-left.png";
const BackButton = (props) => {
  return (
    <div className="flex justify-start pb-4 lg:ml-2">
      <Image src={arrowLeft} alt="" />
      <span className="pl-2 text-[#292021] text-base text-[16px]">
        {props.buttonText}
      </span>
    </div>
  );
};

export default BackButton;
