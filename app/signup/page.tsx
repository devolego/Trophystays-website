'use client';
import React,{useState} from "react";
import SignUpComponent from "../../components/Authentication/SignUp";
import ConfirmEmail from "../../components/Authentication/ConfirmEmail";
import FinishRegistering from "../../components/Authentication/FinishRegistering";

const SignUp = () => {
  const [signUpStep, setSignUpStep] = useState<any>(2)
  return <React.Fragment>
    { signUpStep === 1 && <SignUpComponent setSignUpStep={setSignUpStep} /> }
    { signUpStep === 2 && <ConfirmEmail setSignUpStep={setSignUpStep} /> }
    { signUpStep === 3 && <FinishRegistering /> }
  </React.Fragment>;
};

export default SignUp;
