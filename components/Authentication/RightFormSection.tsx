import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoLionImage from "../../images/logo.png";
import logoText from "../../images/logo-text.png";
import google from "../../images/google-logo.png";
import linkedin from "../../images/linkedinLogin.png";

const RightFormSection = ({
  titleText,
  children,
  googleText,
  linkedinText,
  authText,
  isAuthText,
  authLinkText,
}: any) => {
  return (
    <div className="p-4">
      <Link className="flex items-center justify-center" href="/">
        <Image className="w-[45px]" src={logoLionImage} alt="" />
        <Image className="w-auto h-full pl-2 max-h-3" src={logoText} alt="" />
        {/* {logoText} */}
      </Link>
      <h3 className="flex items-center justify-center pt-2">{titleText}</h3>
      {children}
      <p>or</p>
      <div>
        <Image className="w-[45px]" src={google} alt="" />
        <p>{googleText}</p>
      </div>
      <div>
        <Image className="w-[45px]" src={linkedin} alt="" />
        <p>{linkedinText}</p>
      </div>
      {isAuthText ? (
        <p>
          {authText}{" "}
          <span>
            <Link className="text-[#886750]" href="#">
              {authLinkText}
            </Link>
          </span>
        </p>
      ) : null}
    </div>
  );
};

export default RightFormSection;
