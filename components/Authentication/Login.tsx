import Image from "next/image";
import React, { useState } from "react";
import loginImage from "../../images/login-form-img-1.png";
import Link from "next/link";
import Button from "../Common/Button";
import RightFormSection from "./RightFormSection";
import { Formik, Form } from "formik";
import { userLogin } from "../../service/service";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const router = useRouter()
  const initialValues = { email: "", password: "" };
  const [loginInfo, setLoginInfo] = useState<any>(initialValues);

  const handleSubmit = (values: any) => {
    console.log(values);
    userLogin(values)
    .then((res) => {
      console.log("login res--", res, res?.data?.message?.user?.token);
      if (res?.data?.message?.user?.token) {
        localStorage.setItem("auth_token", res.data.message.user.token);
        router.push("/");
      } else {
        // Handle the case when the token is not returned
        console.log("Token not returned");
        toast.error("Email or password is not correct.");
      }
    })
    .catch((err) => {
      console.log("login err--", err);
      if (err.response && err.response.status === 401) {
        // Handle login failure here
        console.log("Unauthorized");
        toast.error("Email or password is not correct.");
      }
    });
  };
  
  
  
  
  return (
    <div className="lg:flex md:m-[50px] m-[20px]  bg-white rounded-2xl overflow-hidden">
      <Image src={loginImage} alt="loginImage" className="basis-3/6" />
      <RightFormSection
        titleText={"Log In to Your Account"}
        googleText={"Login with Google"}
        linkedinText={"Login with Linkedin"}
        authText={" Don’t have an account yet?"}
        isAuthText={true}
        authLinkText={"Register"}
        authLink={"/signup"}
      >
        <Formik initialValues={loginInfo} onSubmit={handleSubmit}>
          {({ handleSubmit, handleChange }) => (
            <Form className="flex flex-col justify-center items-center pt-6 max-w-[384px] w-full mx-auto w-full">
              <div className="w-full">
                <input
                  type="email"
                  name={"email"}
                  onChange={handleChange}
                  placeholder="Email"
                  className="py-[18px] mb-[30px] px-6 border border-greyishBrown rounded-[8px] w-full"
                />
              </div>
              <div className="w-full">
                <input
                  type="password"
                  name={"password"}
                  onChange={handleChange}
                  placeholder="Password"
                  className="py-[18px] px-6 border border-greyishBrown rounded-[8px] w-full"
                />
              </div>
              <Link
                className="text-darkGrey text-sm underline mt-[18px] mb-[24px] self-end"
                href="/forgot-password"
              >
                Forgot Password?
              </Link>
              <Button
                ButtonClicked={handleSubmit}
                ButtonText={"Login"}
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

export default Login;
