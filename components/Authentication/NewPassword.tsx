import Image from "next/image";
import React, { useEffect, useState } from "react";
import loginImage from "../../images/login-form-img-1.png";
import Link from "next/link";
import Button from "../Common/Button";
import RightFormSection from "./RightFormSection";
import { Formik, Form, ErrorMessage } from "formik";
import { resetPassword } from "../../service/service";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter, useSearchParams } from "next/navigation";
import * as Yup from "yup";

const validationSchema = Yup.object({
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().required("Confirm Password is required"),
});
const NewPassword = () => {
  const router = useRouter();

  const initialValues = { password: "" };
  const [loginInfo, setLoginInfo] = useState<any>(initialValues);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const token = useSearchParams().get("token");

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Validate the form data
      if (values.password !== values.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      const data = {
        token: token,
        password: values.password,
      };

      // Call the resetPassword service function
      const response = await resetPassword(data);
      console.log(response);
      if (response.status === 200) {
        toast.success("Password reset successfully");
        setTimeout(() => {
          router.push("/login");
        }, 4000);
      } else {
        toast.error("Failed to reset password");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setSubmitting(false);
    }
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
      <RightFormSection titleText={"Create New Password"} isAuthText={false}>
        <Formik initialValues={loginInfo} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ handleSubmit, handleChange }) => (
            <Form className="flex flex-col justify-center items-center pt-6 mt-[80px] max-w-[384px] w-full mx-auto w-full">
              <div className=" relative w-full mb-[30px]">
                <input
                  type={isNewPasswordVisible ? "text" : "password"}
                  name="password"
                  onChange={handleChange}
                  placeholder="New Password"
                  className="py-[18px] px-6 border border-greyishBrown rounded-lg w-full"
                />
                <ErrorMessage
                  className="error"
                  name="password"
                  component="div"
                  style={{color:"#ff3434"}}
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center px-4"
                  onClick={toggleNewPassword}
                  type="button"
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
                  name="confirmPassword"
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="py-[18px] px-6 border border-greyishBrown rounded-lg w-full"
                />
                 <ErrorMessage
                  className="error"
                  name="confirmPassword"
                  component="div"
                  style={{color:"#ff3434"}}
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center px-4"
                  onClick={toggleConfirmPassword}
                  type="button"
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
