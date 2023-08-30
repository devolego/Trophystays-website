'use client';
import React from 'react'
import ConfirmEmail from '../../components/Authentication/ConfirmEmail'
import { ToastContainer } from 'react-toastify';
function page() {
  return (
    <>
    <ToastContainer/>
      <ConfirmEmail/>
    </>
  )
}

export default page
