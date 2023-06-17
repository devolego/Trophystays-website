import Image from "next/image";
import React from "react";
import FooterLogo from "../images/footer-logo.png";
import FooterLogoText from "../images/footer-logo-text.png";

const Footer = () => {
  return (
    <div className="bg-[#241400] text-white p-[50px] grid grid-cols-5">
      <div>
        <div className="flex items-center justify-start">
          <Image src={FooterLogo} alt="" />
          <Image className="object-contain" src={FooterLogoText} alt="" />
        </div>
        <p className="text-sm pt-4 py-11">
          Trophy Stays™ (Trophy Stays Vacation Homes LLC) is a DTCM licensed
          Operator managing vacation rental apartments for a short-term stay in
          Dubai.
        </p>
        <p>COPYRIGHT 2021 | TROPHY STAYS™. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
};

export default Footer;
