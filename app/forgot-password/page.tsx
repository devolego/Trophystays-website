import React from "react";
import ForgotPassword from "../../components/Authentication/ForgotPassword";
import {ToastContainer} from 'react-toastify';
const forgotPassword = () => {
  return <React.Fragment>
     <ToastContainer />
    <ForgotPassword />
  </React.Fragment>;
};

export default forgotPassword;
