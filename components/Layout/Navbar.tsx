import Link from "next/link";
import React from "react";
import logoLionImage from "../../images/logo.png";
import Image from "next/image";
// import logoText from "../../images/trophy-logo.png";
import logoText from "../../images/logo-text.png";
import { navbarItems } from "../../utils/utilsItems";
import Button from "../Common/Button";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 z-20 w-full h-auto bg-white">
      <div className="flex items-center justify-between max-w-full py-[13px] mx-auto px-5 lg:px-[50px] ">
        <div className="flex gap-10">
          <Link className="flex items-center" href="/">
            <Image className="w-[45px]" src={logoLionImage} alt="" />
            <Image
              className="w-auto h-full pl-2 max-h-3"
              src={logoText}
              alt=""
            />
            {/* {logoText} */}
          </Link>
          <input type="checkbox" className="hidden peer" id="nav-check" />

          <div
            className="nav-links max-lg:hidden max-lg:peer-checked:block max-lg:fixed max-lg:top-[72px] max-lg:left-0 max-lg:w-full max-lg:h-full z-20 max-lg:bg-white
           max-lg:text-primary max-lg:text-2xl leading-[30px]
          "
          >
            <ul className="flex items-center h-full max-lg:pb-20 max-lg:flex-col max-lg:justify-center max-lg:items-center md:-mr-7">
              {navbarItems.map((items, index) => {
                return (
                  <li
                    key={index}
                    className="lg:mr-[20px] lg:text-sm xl:mr-[50px] xl:text-base text-black"
                  >
                    {items}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-5 max-lg:hidden">
          <Link href={'/signup'} className="lg:text-sm laptopScreen:text-base">
            Create an Account
          </Link>
          <Link
            className={`bg-blackLight rounded-[8px] px-[31px] py-2  laptopScreen:text-base text-white`}
            href={"/login"}
          >
            Sign In
          </Link>
          {/* <Button /> */}
        </div>

        <div className="flex items-center gap-4 nav-button lg:hidden">
          <Button ButtonText="Sign In" ButtonClasses="text-white" />
          <div className="flex flex-col justify-center ">
            <label
              htmlFor="nav-check"
              className="flex flex-col items-end cursor-pointer"
            >
              <span className="block w-4 h-[3px] mb-[6px] rounded-md bg-darkGrey text-darkGrey"></span>
              <span className="block w-4 h-[3px] mb-[6px] rounded-md bg-darkGrey text-darkGrey"></span>
              <span className="block w-[21px] h-[3px] rounded-md bg-darkGrey text-darkGrey"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
