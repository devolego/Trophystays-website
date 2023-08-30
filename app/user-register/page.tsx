'use client';
import React from 'react'
import FinishRegistering from '../../components/Authentication/FinishRegistering'
import { ToastContainer } from 'react-toastify';
function page() {
  return (
    <>
    <ToastContainer/>
     <FinishRegistering/> 
    </>
  )
}

export default page
