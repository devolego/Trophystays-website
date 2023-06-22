import Image from "next/image";
import React from "react";

const Listing = (props: any) => {
  return (
    <>
      <div className="flex">
        <Image src={props.data.bannerImg} alt="" />
        <div className="ml-5">
          <p>{props.data.headingName}</p>
          <div className="flex justify-between">
            <p className="text-[#939393]">Revenue:</p>{" "}
            <p className="text-[#886750]">{props.data.revenue}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
