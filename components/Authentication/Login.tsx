import Image from "next/image";
import React from "react";
import loginImage from "../../images/login-form-img-1.png";
import logoLionImage from "../../images/logo.png";
import logoText from "../../images/logo-text.png";
import google from "../../images/google-logo.png";
import linkedin from "../../images/linkedinLogin.png";
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
      >
        <form>
          <div>
            <input type="text" placeholder="Email" />
          </div>
          <div>
            <input type="text" placeholder="Password" />
          </div>
          <Link href="#">Forgot Password?</Link>
          <Button ButtonText={"Login"} ButtonClasses={"bg-[#886750]"}></Button>
        </form>
      </RightFormSection>
    </div>
  );
};

export default Login;
