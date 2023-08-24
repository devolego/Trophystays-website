import Image from "next/image";
import React, { useContext, useState } from "react";
import signupImage from "../../images/sign-up.png";
import Button from "../Common/Button";
import RightFormSection from "./RightFormSection";
import { Formik, Form } from "formik";
import { userRegister } from "../../service/service";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
// import ToastContext from "../../app/ToastContext";
const FinishRegistering = () => {
  // const Toast = useContext(ToastContext);
  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    birthDay: "",
  };
  const [registerInfo, setRegisterInfo] = useState<any>(initialValues);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = (values: any) => {
    console.log(values);
    // Toast.showToast("success", "Register successfully");
    // userRegister("/register", values)
    //   .then((res) => {
    //     console.log("register res--", res);
    //   })
    //   .catch((err) => {
    //     console.log("register err--", err);
    //   });
  };

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="lg:flex md:m-[50px] m-[20px]  bg-white rounded-2xl overflow-hidden">
      <Image src={signupImage} alt="loginImage" className="basis-3/6" />
      <RightFormSection titleText={"Finish Registering"} isAuthText={false}>
        <Formik initialValues={registerInfo} onSubmit={handleSubmit}>
          {({ handleSubmit, handleChange }) => (
            <Form className="flex flex-col justify-center items-center pt-6 max-w-[384px] w-full mx-auto">
              <div className="w-full mb-[30px]">
                <input
                  type="text"
                  name={"firstName"}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="py-[18px] px-6 border border-greyishBrown rounded-lg w-full"
                />
              </div>
              <div className="w-full mb-[30px]">
                <input
                  type="text"
                  name={"lastName"}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="py-[18px] px-6 border border-greyishBrown rounded-lg w-full"
                />
              </div>
              <div className=" relative w-full mb-[30px]">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  name={"password"}
                  onChange={handleChange}
                  placeholder="Password"
                  className="py-[18px] px-6 border border-greyishBrown rounded-lg w-full"
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center px-4"
                  onClick={togglePassword}
                >
                  {isPasswordVisible ? (
                    <AiFillEye className="text-2xl text-greyishBrown" />
                  ) : (
                    <AiFillEyeInvisible className="w-5 text-2xl text-greyishBrown" />
                  )}
                </button>
              </div>
              <div className="relative w-full mb-[30px]">
                <input
                  type="text"
                  name={"birthDay"}
                  onChange={handleChange}
                  placeholder="Birthday"
                  className="py-[18px] px-6 border border-greyishBrown rounded-lg w-full"
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-greyishBrown "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
              </div>
              <div className="w-full mb-[30px]">
                <input
                  type="email"
                  name={"email"}
                  onChange={handleChange}
                  placeholder="Email"
                  className="py-[18px] px-6 border border-greyishBrown rounded-lg w-full"
                />
              </div>
              <p className="pt-8 pb-6 text-sm text-darkGrey">
                By providing your email address, you agree to our
                <a href="/" className="text-black underline">
                  {" "}
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/" className="text-black underline">
                  Terms of Services
                </a>
              </p>
              <Button
                ButtonClicked={handleSubmit}
                ButtonText={"Agree and Continue"}
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

export default FinishRegistering;
