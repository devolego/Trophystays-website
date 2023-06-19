import Image from "next/image";
import React from "react";
import signupImage from "../../images/sign-up.png";
import Button from "../Common/Button";
import RightFormSection from "./RightFormSection";

const SignUp = () => {
  return (
    <div className="flex p-4">
      <Image src={signupImage} alt="loginImage" />
      <RightFormSection
        titleText={"Register Your Account"}
        googleText={"Continue with Google"}
        linkedinText={"Continue with Linkedin"}
        authText={"Already have an account?"}
        isAuthText={true}
        authLinkText={"login"}
        authLink={'/login'}
      >
        <form>
          <div className="mb-2">
            <input type="text" placeholder="Email" />
          </div>
          <Button
            ButtonText={"Register"}
            ButtonClasses={"bg-[#886750] text-center"}
          ></Button>
        </form>
      </RightFormSection>
    </div>
  );
};

export default SignUp;
