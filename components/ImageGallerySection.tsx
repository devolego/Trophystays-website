import Image from "next/image";
import React from "react";
import { josefin } from "../utils/utilsItems";
import gallerImgOne from "../images/gallery-img-1.png";
import gallerImgSecond from "../images/gallery-img-2.png";
import gallerImgThird from "../images/gallery-img-3.png";
import gallerImgFourth from "../images/gallery-img-4.png";
import gallerImgFifth from "../images/gallery-img-5.png";
import gallerImgSixth from "../images/gallery-img-6.png";

const ImageGallerySection = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-[30px]">
        <div className="col-span-2 mb-[30px]">
          <h2 className={`text-[40px] mb-2 ${josefin.className}`}>
            Discover exciting locations where skyline views, modern luxury, and
            amenities seamlessly merge.
          </h2>
          <p className="text-base text-primary">
            We are happy when our guests are happy.
          </p>
        </div>
        <Image className="w-full rounded-[16px]" src={gallerImgOne} alt="" />
        <Image className="w-full rounded-[16px]" src={gallerImgSecond} alt="" />
      </div>

      <div className="grid grid-cols-6 gap-[30px]">
        <div className="col-span-3">
          <Image
            className="w-full rounded-[16px]"
            src={gallerImgThird}
            alt=""
          />
        </div>
        <Image className="w-full rounded-[16px]" src={gallerImgFourth} alt="" />
        <Image className="w-full rounded-[16px]" src={gallerImgFifth} alt="" />
        <Image className="w-full rounded-[16px]" src={gallerImgSixth} alt="" />
      </div>
    </div>
  );
};

export default ImageGallerySection;
