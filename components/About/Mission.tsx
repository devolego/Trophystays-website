import Image from "next/image";
import React from "react";
import aboutImgSixth from "../../images/about-img-6.png";
import { josefin } from "../../utils/utilsFonts";

const Mission = () => {
  return (
    <div className="my-[50px]">
      <h3
        className={`text-[40px] leading-[45px] font-bold ${josefin.className} mb-6`}
      >
        Mission
      </h3>
      <div className="grid grid-cols-2 gap-6">
        <Image src={aboutImgSixth} alt="" className="object-cover" />

        <div>
          <p className="text-base font-bold">
            What began as a journey to provide a better stay has grown into a
            celebration of modern design and exceptional comfort. We’re working
            with world-class architects and designers to create truly remarkable
            spaces—ones that transcend hospitality and enrich lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
