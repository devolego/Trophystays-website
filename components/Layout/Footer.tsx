import Image from "next/image";
import React from "react";
import FooterLogo from "../../images/footer-logo.png";
import FooterLogoText from "../../images/footer-logo-text.png";
import {
  footerMenuMainPageOption,
  footerMenuOtherOption,
} from "../../utils/utilsItems";
import { josefin } from "../../utils/utilsFonts";
import Button from "../Common/Button";
import emailIcon from "../../images/email-icon.png";
import instaIcon from "../../images/insta.png";
import linkedIn from "../../images/linkedIn.png";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-[#241400] text-white p-[50px] grid grid-cols-5 gap-[50px]">
        <div>
          <div className="flex items-center justify-start">
            <Image className="object-contain" src={FooterLogo} alt="" />
            <Image className="object-contain" src={FooterLogoText} alt="" />
          </div>
          <p className="pt-4 text-sm py-11">
            Trophy Stays™ (Trophy Stays Vacation Homes LLC) is a DTCM licensed
            Operator managing vacation rental apartments for a short-term stay
            in Dubai.
          </p>
          {/* <p>COPYRIGHT 2021 | TROPHY STAYS™. ALL RIGHTS RESERVED.</p> */}
        </div>

        <div className=" ml-[48px]">
          <h6 className="text-base font-medium mb-[50px]">Main Pages</h6>
          <ul>
            {footerMenuMainPageOption.map((items, index) => {
              return (
                <li className="mb-4 text-sm" key={index}>
                  {items}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h6 className="text-base font-medium mb-[50px]">Others</h6>
          <ul className="">
            {footerMenuOtherOption.map((items, index) => {
              return (
                <li className="mb-4 text-sm" key={index}>
                  {items}
                </li>
              );
            })}
          </ul>

          <h6 className="text-base font-medium mb-[50px]"></h6>
        </div>

        <div className="col-span-2">
          <h6 className={`text-2xl ${josefin.className} mb-5`}>
            Subscribe to Our Newsletter
          </h6>
          <div className="flex gap-6 mb-[35px]">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent placeholder:text-darkGrey border border-[#E1D9CE] py-[14px] pl-[46px] rounded-[8px]"
              />
              <Image
                className="absolute top-[19px] left-4"
                src={emailIcon}
                alt=""
              />
            </div>
            <Button
              ButtonText={"Subscribe"}
              ButtonClasses={
                "bg-white text-blackLight px-[24px] py-[14px] w-max font-medium leading-4"
              }
            />
          </div>

          <div className="w-full mb-[65px]">
            <h6 className="font-medium">Follow Us</h6>
            <div className="flex mt-6">
              <Link href="/" className="flex mr-[60px]">
                <Image className="object-contain" src={instaIcon} alt="" />
                <p className="ml-4 text-sm">@trophystays</p>
              </Link>

              <Link href="/" className="flex ">
                <Image className="object-contain" src={linkedIn} alt="" />
                <p className="ml-4 text-sm">trophy_stays</p>
              </Link>
            </div>
          </div>

          {/* <Link href="/" className="w-full text-sm">
        Privacy Policy | Reservation Terms | House Rules | Refund Rules
      </Link> */}
        </div>

        <div className="grid grid-cols-5 gap-[50px]">
          <div>
            <p className="text-sm">
              COPYRIGHT 2021 | TROPHY STAYS™. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
