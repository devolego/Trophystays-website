import Image from "next/image";
import React from "react";
import signupImage from "../../images/sign-up.png";
import Button from "../Common/Button";
import RightFormSection from "./RightFormSection";

const SignUp = () => {
  return (
    <div className="flex p-[50px] bg-white rounded-[16px]">
      <Image src={signupImage} alt="loginImage" className="basis-3/6" />
      <RightFormSection
        titleText={"Register Your Account"}
        googleText={"Continue with Google"}
        linkedinText={"Continue with Linkedin"}
        authText={"Already have an account?"}
        isAuthText={true}
        authLinkText={"login"}
        authLink={'/login'}
      >
        <form className="flex flex-col justify-center items-center pt-6 max-w-[384px] w-full mx-auto">
          <div className="mb-2">
            <input type="text" placeholder="Email" className="py-[18px] px-6 border border-greyishBrown rounded-[8px]"/>
          </div>
          <Button
            ButtonText={"Register"}
            ButtonClasses={"w-full bg-primary text-center text-white py-[15px]"}
          ></Button>
        </form>
      </RightFormSection>
    </div>
  );
};

export default SignUp;
