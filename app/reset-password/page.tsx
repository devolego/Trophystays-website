'use client';
import React from 'react'
import NewPassword from '../../components/Authentication/NewPassword'
import {ToastContainer} from 'react-toastify';
function page() {
  return (
    <>
    <ToastContainer />
     <NewPassword/> 
    </>
  )
}

export default page
