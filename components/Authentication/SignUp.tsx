import Image from "next/image";
import React from "react";
import loginImage from "../../images/login-form-img-1.png";
import Button from "../Common/Button";
import RightFormSection from "./RightFormSection";

const SignUp = () => {
  return (
    <div className="flex p-4">
      <Image src={loginImage} alt="loginImage" />
      <RightFormSection
        titleText={"Register Your Account"}
        googleText={"Continue with Google"}
        linkedinText={"Continue with Linkedin"}
        authText={"Already have an account?"}
        isAuthText={true}
        authLinkText={"login"}
      >
        <form>
          <div>
            <input type="text" placeholder="Email" />
          </div>
          <Button
            ButtonText={"Register"}
            ButtonClasses={"bg-[#886750]"}
          ></Button>
        </form>
      </RightFormSection>
    </div>
  );
};

export default SignUp;
