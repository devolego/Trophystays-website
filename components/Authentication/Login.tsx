import Image from "next/image";
import React from "react";
import loginImage from "../../images/login-form-img-1.png";
import Link from "next/link";
import Button from "../Common/Button";
import RightFormSection from "./RightFormSection";

const Login = () => {
  return (
    <div className="flex">
      <Image src={loginImage} alt="loginImage" />
      <RightFormSection
        titleText={"Log In to Your Account"}
        googleText={"Login with Google"}
        linkedinText={"Login with Linkedin"}
        authText={" Don’t have an account yet?"}
        isAuthText={true}
        authLinkText={"Register"}
        authLink={'/signup'}
      >
        <form>
          <div className="mb-2">
            <input type="text" placeholder="Email" />
          </div>
          <div className="mb-2">
            <input type="text" placeholder="Password" />
          </div>
          <Link href="#">Forgot Password?</Link>
          <Button ButtonText={"Login"} ButtonClasses={"bg-[#886750] text-center"}></Button>
        </form>
      </RightFormSection>
    </div>
  );
};

export default Login;
