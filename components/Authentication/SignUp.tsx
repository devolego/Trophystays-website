import Image from "next/image";
import React, { useContext, useState } from "react";
import signupImage from "../../images/sign-up.png";
import Button from "../Common/Button";
import RightFormSection from "./RightFormSection";
import { Formik, Form, ErrorMessage } from "formik";
import { registerEmail } from "../../service/service";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Email is not valid").required("Email is required"),
});
const SignUpComponent = (props:any) => {
  const router = useRouter()
  const initialValues = {email: ""};
  const [signUpInfo, setSignUpInfo] = useState<any>(initialValues);
  
  const handleSubmit = (values: any) => {
    localStorage.setItem("email", values.email);
    registerEmail(values)
    .then((res)=>{
      console.log("register email res--", res)
      if (res?.data){
        // toast.success("User Registered. Please check your email")
        router.push("/verify-email")
      }else if(res.message === "A user with this email already exists."){
        toast.error("A user with this email already exists.")
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
        <Formik initialValues={signUpInfo} validationSchema={validationSchema} onSubmit={handleSubmit}>
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
                 <ErrorMessage
                  className="error"
                  name="email"
                  component="div"
                  style={{color:"#ff3434"}}
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
