import React from "react";
import { josefin } from "../../utils/utilsFonts";
import emailIcon from "../../images/email-with-bg-icon.png";
import instaIcon from "../../images/email-with-bg-icon.png";
import linkedInIcon from "../../images/linkedin-with-bg-icon.png";
import subBannerImg from "../../images/sub-banner-img.png";
import subBannerMobileImg from "../../images/sub-banner-mobile-img.png";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import SubBanner from "../Common/SubBanner";

const Contact = () => {
  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px] max-md:py-5">
      <SubBanner
        imageDesktopSrc={subBannerImg}
        imageModbileSrc={subBannerMobileImg}
        bannerHeading="Contact Us"
      />
      <div className="lg:px-[74px] md:mt-[100px] max-md:mt-[50px]">
        <ContactForm />
      </div>
      <div>
        <h2 className={`text-[40px] ${josefin.className} mb-10 `}>
          Contact or Follow Us
        </h2>
        <div className="bg-lightBrown grid grid-cols-3 px-[200px] py-[70px] justify-center rounded-2xl mb-[100px]">
          <Link href="/" className="flex flex-col items-center justify-center">
            <Image src={emailIcon} alt="" className="object-contain mb-5" />
            <p className="underline">hello@trophystays.com</p>
          </Link>

          <Link href="/" className="flex flex-col items-center justify-center">
            <Image src={linkedInIcon} alt="" className="object-contain mb-5" />
            <p className="underline">trophy-stays</p>
          </Link>

          <Link href="/" className="flex flex-col items-center justify-center">
            <Image src={instaIcon} alt="" className="object-contain mb-5" />
            <p className="underline">@trophystays</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
