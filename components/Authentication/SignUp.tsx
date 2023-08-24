import Image from "next/image";
import React, { useContext, useState } from "react";
import signupImage from "../../images/sign-up.png";
import Button from "../Common/Button";
import RightFormSection from "./RightFormSection";
import { Formik, Form } from "formik";
import { registerEmail } from "../../service/service";
// import ToastContext from "../../app/ToastContext";
const SignUpComponent = (props:any) => {
  // const Toast = useContext(ToastContext);
  const initialValues = {email: ""};
  const [signUpInfo, setSignUpInfo] = useState<any>(initialValues);
  
  const handleSubmit = (values: any) => {
    console.log(values)
    // Toast.showToast("success", "Register successfully");
    registerEmail(values)
    .then((res)=>{
      console.log("register email res--", res)
      if (res.data){
        props.setSignUpStep(2)
      }
    })
    .catch((err)=>{
      console.log("register email err--", err)
    })
    
  };
  
  return (
    <div className="lg:flex md:m-[50px] m-[20px]  bg-white rounded-2xl overflow-hidden">
      <Image src={signupImage} alt="loginImage" className="basis-3/6" />
      <RightFormSection
        titleText={"Register Your Account"}
        googleText={"Continue with Google"}
        linkedinText={"Continue with Linkedin"}
        authText={"Already have an account?"}
        isAuthText={true}
        authLinkText={"login"}
        authLink={"/login"}
      >
        <Formik initialValues={signUpInfo} onSubmit={handleSubmit}>
          {({ handleSubmit, handleChange}) => (
            <Form className="flex flex-col justify-center items-center pt-6 max-w-[384px] w-full mx-auto">
              <div className="w-full mb-2">
                <input
                  type="email"
                  name={"email"}
                  onChange={handleChange}
                  placeholder="Email"
                  className="py-[18px] px-6 border border-greyishBrown rounded-lg w-full"
                />
              </div>
              <p className="pt-8 pb-6 text-sm text-darkGrey">
                We’ll send you an email to confirm your email address. Standard
                message and data rates may apply
              </p>
              <Button
                ButtonClicked={handleSubmit}
                ButtonText={"Register"}
                ButtonClasses={
                  "w-full bg-primary text-center text-white py-[15px]"
                }
              ></Button>
            </Form>
          )}
        </Formik>
      </RightFormSection>
    </div>
  );
};

export default SignUpComponent;
