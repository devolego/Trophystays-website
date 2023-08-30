'use client';
import React from "react";
import Login from "../../components/Authentication/Login";
import {ToastContainer} from 'react-toastify';
const login = () => {
  return <React.Fragment>
    <ToastContainer />
    <Login />
  </React.Fragment>;
};

export default login;
