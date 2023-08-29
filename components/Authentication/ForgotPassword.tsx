'use client'
import Image from "next/image";
import React,{useState} from "react";
import loginImage from "../../images/login-form-img-1.png";
import Link from "next/link";
import Button from "../Common/Button";
import RightFormSection from "./RightFormSection";
import { Formik, Form } from "formik";
import { forgotPassword } from "../../service/service";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ForgotPassword = () => {
  const initialValues = {email: ""};
  const [info, setInfo] = useState<any>(initialValues);
  
  const handleSubmit = (values: any) => {
    console.log(values);
    forgotPassword(values)
      .then((res) => {
        console.log("forgot pwd res--", res);
        if (res?.data) {
          localStorage.setItem('emailReset', values.email)
          toast.success("Password reset link sent to your email.");
          // You can also redirect the user or perform some other action here
        } else {
          toast.error("Failed to send password reset link. Please try again.");
        }
      })
      .catch((err) => {
        console.log("forgot pwd err--", err);
        toast.error("An error occurred. Please try again.");
      });
  };
  
  return (
    <div className="lg:flex md:m-[50px] m-[20px]  bg-white rounded-2xl overflow-hidden">
      <Image src={loginImage} alt="loginImage" className="basis-3/6" />
      <RightFormSection
        titleText={"Forgot Password"}
        googleText={"Login with Google"}
        linkedinText={"Login with Linkedin"}
        authText={" Don’t have an account yet?"}
        isAuthText={false}
        authLinkText={"Register"}
        authLink={"/signup"}
      >
        <Formik initialValues={info} onSubmit={handleSubmit}>
          {({ handleSubmit, handleChange}) => (
        <Form className="flex flex-col justify-center items-center pt-6 max-w-[384px] w-full mx-auto w-full">
          <div className="w-full">
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              className="py-[18px] mb-[30px] px-6 border border-greyishBrown rounded-[8px] w-full"
            />
          </div>
          <Link
            className="text-darkGrey text-sm underline mt-[18px] mb-[24px] self-end"
            href="/login"
          >
            Back to login
          </Link>
          <Button
            ButtonClicked={handleSubmit}
            ButtonText={"Send"}
            ButtonClasses={"w-full bg-primary text-center text-white py-[15px]"}
          ></Button>
        </Form>
         )}
       </Formik>
      </RightFormSection>
    </div>
  );
};

export default ForgotPassword;
