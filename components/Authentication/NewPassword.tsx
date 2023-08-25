import Image from "next/image";
import React, { useState } from "react";
import loginImage from "../../images/login-form-img-1.png";
import Link from "next/link";
import Button from "../Common/Button";
import RightFormSection from "./RightFormSection";
import { Formik, Form } from "formik";
import {resetPassword} from "../../service/service";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useRouter } from "next/navigation";
const NewPassword = () => {
  const router = useRouter()
  // const {slug} = router.query
  console.log(router, "query---")
  const initialValues = {password: "" };
  const [loginInfo, setLoginInfo] = useState<any>(initialValues);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const handleSubmit = (values: any) => {
    let data = {token:"faa45c02cc22088e21411b47cf68742f032adfd5abe42cfcd6f5c6dbe03d7a31", password:values.password}
    console.log(data);
    resetPassword(data)
    .then((res)=>{
      console.log("new password res--", res)
      if(res?.data){
        router.push("/login")
      }
    })
    .catch((err)=>{
      console.log("new password err--", err)
    })
  };
  const toggleNewPassword = () => {
    setIsNewPasswordVisible(!isNewPasswordVisible);
  };
  const toggleConfirmPassword = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };
 
  return (
    <div className="lg:flex md:m-[50px] m-[20px]  bg-white rounded-2xl overflow-hidden">
      <Image src={loginImage} alt="loginImage" className="basis-3/6" />
      <RightFormSection
        titleText={"Create New Password"}
        isAuthText={false}
      >
        <Formik initialValues={loginInfo} onSubmit={handleSubmit}>
          {({ handleSubmit, handleChange }) => (
            <Form className="flex flex-col justify-center items-center pt-6 mt-[80px] max-w-[384px] w-full mx-auto w-full">
                <div className=" relative w-full mb-[30px]">
                <input
                  type={isNewPasswordVisible ? "text" : "password"}
                  name={"password"}
                  onChange={handleChange}
                  placeholder="New Password"
                  className="py-[18px] px-6 border border-greyishBrown rounded-lg w-full"
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center px-4"
                  onClick={toggleNewPassword}
                >
                  {isNewPasswordVisible ? (
                    <AiFillEye className="text-2xl text-greyishBrown" />
                  ) : (
                    <AiFillEyeInvisible className="w-5 text-2xl text-greyishBrown" />
                  )}
                </button>
              </div>
              <div className=" relative w-full mb-[160px]">
                <input
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  name={"confirmPassword"}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="py-[18px] px-6 border border-greyishBrown rounded-lg w-full"
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center px-4"
                  onClick={toggleConfirmPassword}
                >
                  {isConfirmPasswordVisible ? (
                    <AiFillEye className="text-2xl text-greyishBrown" />
                  ) : (
                    <AiFillEyeInvisible className="w-5 text-2xl text-greyishBrown" />
                  )}
                </button>
              </div>
              <Button
                ButtonClicked={handleSubmit}
                ButtonText={"Confirm"}
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

export default NewPassword;