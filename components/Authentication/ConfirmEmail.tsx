import Image from "next/image";
import React, { useContext, useState } from "react";
import signupImage from "../../images/sign-up.png";
import Button from "../Common/Button";
import RightFormSection from "./RightFormSection";
import { Formik, Form } from "formik";
import { verifyEmail } from "../../service/service";
import OtpInput from "./OtpInput";
const ConfirmEmail = (props: any) => {
  const initialValues = { otp: "" };
  const [otpInfo, setOtpInfo] = useState<any>(initialValues);
  const [otp, setOtp] = useState("");
  const handleSubmit = (values: any) => {
    verifyEmail(otp)
      .then((res) => {
        console.log("register res--", res);
      })
      .catch((err) => {
        console.log("register err--", err);
      });
  };

  const handleBack = ()=>{
    props.setSignUpStep(1)
  }

  return (
    <div className="lg:flex md:m-[50px] m-[20px]  bg-white rounded-2xl overflow-hidden">
      <Image src={signupImage} alt="loginImage" className="basis-3/6" />
      <RightFormSection titleText={"Confirm Your Email"} isAuthText={false}>
        <Formik initialValues={otpInfo} onSubmit={handleSubmit}>
          {({ handleSubmit, handleChange }) => (
            <Form className="flex flex-col justify-center items-center pt-6 max-w-[384px] w-full mx-auto">
              <p className="pt-32 pb-8 pl-2 text-sm text-darkGrey">
                Enter the code we send over email to trophy@example.com
              </p>
              {/* <div className="grid grid-cols-6 gap-2 mb-[100px] ">
                <input
                  name={"1"}
                  onChange={handleChange}
                  placeholder="-"
                  className="py-[16px] px-5 border border-greyishBrown rounded-lg w-[55px]"
                />
                 <input
                  name={"2"}
                  onChange={handleChange}
                  placeholder="-"
                  className="py-[16px] px-5 border border-greyishBrown rounded-lg w-[55px]"
                />
                 <input
                  name={"3"}
                  onChange={handleChange}
                  placeholder="-"
                  className="py-[16px] px-5 border border-greyishBrown rounded-lg w-[55px]"
                />
                 <input
                  name={"4"}
                  onChange={handleChange}
                  placeholder="-"
                  className="py-[16px] px-5 border border-greyishBrown rounded-lg w-[55px]"
                />
                 <input
                  name={"5"}
                  onChange={handleChange}
                  placeholder="-"
                  className="py-[16px] px-5 border border-greyishBrown rounded-lg w-[55px]"
                />
                 <input
                  name={"6"}
                  onChange={handleChange}
                  placeholder="-"
                  className="py-[16px] px-5 border border-greyishBrown rounded-lg w-[55px]"
                />
              </div> */}
              <OtpInput
                value={otp}
                onChange={(val) => {
                  setOtp(val);
                }}
              />
              <div className="flex justify-between gap-[160px] md:mt-[100px] max-md:mt-[40px] mt-[150px]">
                <Button
                  ButtonClicked={handleBack}
                  ButtonText={"Back"}
                  ButtonClasses={
                    "bg-white border border-primary text-center text-primary py-[15px]"
                  }
                ></Button>
                <Button
                  ButtonClicked={handleSubmit}
                  ButtonText={"Next"}
                  ButtonClasses={"bg-primary text-center text-white py-[15px]"}
                ></Button>
              </div>
            </Form>
          )}
        </Formik>
      </RightFormSection>
    </div>
  );
};

export default ConfirmEmail;
