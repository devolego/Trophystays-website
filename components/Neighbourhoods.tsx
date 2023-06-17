import React from "react";
import neighbourhoodImage from "../images/abu-dhabi.png";
import sharjahImg from "../images/sharjah.png";
import ummalquwainImg from "../images/ummalquwain.png";
import fujairahImg from "../images/fujairah.png";
import Image from "next/image";
import { josefin } from "../utils/utilsFonts";

const Neighbourhoods = () => {
  return (
    <div className="py-[120px] px-[75px] mx-auto">
      <div className="pb-[50px] max-w-[460px]">
        <h3 className={`text-[40px] text-black ${josefin.className}`}>
          Neighbourhoods
        </h3>
        <p className="text-darkGrey ">
          From a room for a night to a loft for as long as you like, there’s a
          Sonder for every occasion.
        </p>
      </div>

      <div>
        <Image
          className="rounded-[16px] object-cover w-full"
          src={neighbourhoodImage}
          alt=""
        />
        <div className="grid gap-6 pt-6 grid-cols-image-gallery-4">
          <div className="">
            <span className="text-sm text-darkGrey ">5 Neighbourhoods</span>
            <h3 className={`text-[32px] leading-[32px] ${josefin.className}`}>
              Abu Dhabi
            </h3>
          </div>

          <div>
            <Image
              className="rounded-[16px] object-cover w-full"
              src={sharjahImg}
              alt=""
            />
            <div className="pt-4">
              <span className="text-sm text-darkGrey ">2 Neighbourhoods</span>
              <h3 className={`text-[32px] leading-[32px] ${josefin.className}`}>
                Sharjah
              </h3>
            </div>
          </div>

          <div>
            <Image
              className="rounded-[16px] object-cover w-full"
              src={ummalquwainImg}
              alt=""
            />
            <div className="pt-4">
              <span className="text-sm text-darkGrey ">3 Neighbourhoods</span>
              <h3 className={`text-[32px] leading-[32px] ${josefin.className}`}>
                Umm Al Qaiwain
              </h3>
            </div>
          </div>

          <div>
            <Image
              className="rounded-[16px] object-cover w-full"
              src={fujairahImg}
              alt=""
            />
            <div className="pt-4">
              <span className="text-sm text-darkGrey ">3 Neighbourhoods</span>
              <h3 className={`text-[32px] leading-[32px] ${josefin.className}`}>
                Fujairah
              </h3>
            </div>
          </div>

          {/* {neighbourhoodsContent.map((value) => {
            return (
              <div key={value.id}>
                <Image
                  className="rounded-[16px] object-cover w-full"
                  src={`../images/${value.image}`}
                  alt=""
                  width="100"
                  height="100"
                />
                <div className="pt-4">
                  <span className="text-sm text-darkGrey ">
                    {value.subHeading}
                  </span>
                  <h3
                    className={`text-[32px] leading-[32px] ${josefin.className}`}
                  >
                    {value.heading}
                  </h3>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Neighbourhoods;
