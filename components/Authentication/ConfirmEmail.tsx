import Image from "next/image";
import React, { useEffect, useState } from "react";
import signupImage from "../../images/sign-up.png";
import Button from "../Common/Button";
import RightFormSection from "./RightFormSection";
import { Formik, Form } from "formik";
import { resendVerifyEmail, verifyEmail } from "../../service/service";
import OtpInput from "./OtpInput";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ConfirmEmail = () => {
  const router = useRouter();
  const initialValues = { otp: "" };
  const [otpInfo, setOtpInfo] = useState<any>(initialValues);
  const [otp, setOtp] = useState<any>("");
  const [timer, setTimer] = useState(30);
  const userEmail = localStorage.getItem("email");

  useEffect(() => {
    let counter = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(counter);
  }, [timer]);

  const handleSubmit = () => {
    verifyEmail(otp)
      .then((res) => {
        console.log("verify email res--", res);
        if (res?.message === "Email verified successfully") {
          // toast.success("Email verified successfully")
          router.push("/user-register");
        } else if (res?.message === "Invalid verification token") {
          toast.error("Invalid verification OTP");
        }
      })
      .catch((err) => {
        console.log("verify email err--", err);
      });
  };

  // const handleresendVerifyEmail = () => {
  //   resendVerifyEmail({email:userEmail})
  //   .then((res)=>{
  //     console.log("resend verify email res",res)
  //   })
  //   .catch((err)=>{
  //     console.log("resend verify email err", err)
  //   })
  // };

  const handleBack = () => {
    router.push("/signup");
  };

  return (
    <div className="lg:flex md:m-[50px] m-[20px]  bg-white rounded-2xl overflow-hidden">
      <Image src={signupImage} alt="loginImage" className="basis-3/6" />
      <RightFormSection titleText={"Confirm Your Email"} isAuthText={false}>
        <Formik initialValues={otpInfo} onSubmit={handleSubmit}>
          {({ handleSubmit, handleChange }) => (
            <Form className="flex flex-col justify-center items-center pt-6 max-w-[384px] w-full mx-auto">
              <p className="pt-32 pb-8 pl-2 text-sm text-darkGrey">
                Enter the code we send over email to {userEmail}
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
              {/* <div className="mt-5">
                <p className="text-center text-darkGrey">
                  Resend OTP in{" "}
                  <span className="text-green-700">00:{timer}</span>
                </p>
                {
                  timer === 0 ? 
                  <p
                  className="text-center text-blue-800 underline cursor-pointer"
                  onClick={handleresendVerifyEmail}
                >
                  Resend OTP
                </p>
                :
                <p
                  className="text-center text-blue-300 underline disabled"
                >
                  Resend OTP
                </p>
                }
                
              </div> */}
            </Form>
          )}
        </Formik>
      </RightFormSection>
    </div>
  );
};

export default ConfirmEmail;
