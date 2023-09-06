"use client";
import React, { useState } from "react";
import SignUpComponent from "../../components/Authentication/SignUp";
import {ToastContainer} from 'react-toastify';
const SignUp = () => {
  return (
    <React.Fragment>
      <ToastContainer/>
      <SignUpComponent />
    </React.Fragment>
  );
};

export default SignUp;
