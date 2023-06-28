"use client";
import React from "react";
import subBannerImg from "../../images/sub-banner-img.png";
import subBannerMobileImg from "../../images/sub-banner-mobile-img.png";
import SubBanner from "../Common/SubBanner";
import Button from "../Common/Button";
import searchIcon from "../../images/search.png";
import Image from "next/image";
import Accordion from "../Common/Accordion";
import Link from "next/link";
import arrowRight from "../../images/blog-arrow-right.png";
import arrowRightMobile from "../../images/arrow-with-circle-dark.png";
import arrowLeft from "../../images/secondary-color-arrow.png";
import arrowLeftMobile from "../../images/arrow-with-circle.png";

const CustomerHelp = () => {
  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px] max-md:py-5">
      <SubBanner
        imageDesktopSrc={subBannerImg}
        imageModbileSrc={subBannerMobileImg}
        bannerHeading="Customer Help"
      />
      <div className="lg:px-[74px] max-lg:md-10 mb-[70px] lg:mb-[80px] md:mt-[100px] max-md:mt-[50px]">
        <div className="flex gap-4 bg-white shadow-xl max-md:p-4 md:p-9 rounded-xl mb-[50px] max-md:flex-col">
          <div className="relative w-full ">
            <input
              className="w-full py-3 pl-10 pr-5 border rounded-lg border-greyishBrown"
              type="text"
              placeholder="Search by keyword"
            />
            <Image
              src={searchIcon}
              alt=""
              className="object-cover absolute top-[50%] -translate-y-[50%] w-4 left-3"
            />
          </div>

          <Button
            ButtonText="Search"
            ButtonClasses="text-white w-max flex items-center max-md:w-full justify-center max-md:py-3 md:bg-primary "
          />
        </div>

        <div>
          <p className="mb-5 text-sm text-darkGrey">
            Showing 1 - 10 of 18 questions
          </p>
          <Accordion />
        </div>
      </div>
      {/* next prev btn */}
      <div className="flex w-full justify-between items-center my-[50px]">
        <Link href="/" className="flex items-center">
          <Image
            className="object-contain w-[55px] max-md:hidden"
            src={arrowLeft}
            alt=""
          />
          <Image
            className="object-contain w-[40px] md:hidden"
            src={arrowLeftMobile}
            alt=""
          />
          <p className="mx-5 text-base text-secondary max-md:mx-3 max-md:text-sm max-md:text-darkGrey">
            Older Questions
          </p>
        </Link>
        <Link href="/" className="flex items-center">
          <p className="mx-5 text-base text-primary max-md:mx-3 max-md:text-sm max-md:text-black">
            Newer Questions
          </p>
          <Image
            className="object-contain w-[55px] max-md:hidden"
            src={arrowRight}
            alt=""
          />
          <Image
            className="object-contain w-[40px] md:hidden"
            src={arrowRightMobile}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default CustomerHelp;
