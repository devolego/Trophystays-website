"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
// import ToastContext from "../../app/ToastContext";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const withoutLayout = ["/login", "/signup", "/verify-email", "/user-register" ,"/forgot-password", "/reset-password"];
const withLogin = [
  "/tenent",
  "/booking-history",
  "/admin",
  "/admin/setting",
  "/admin/setting/personal-info",
  "/admin/setting/login-security",
];
const Layout = ({ children }) => {
  const router = usePathname();
  const isWithoutLayout = withoutLayout.includes(router);
  const isLogin = withLogin.includes(router);
  // const showToast = (type: string, message: string) => {
  //   if (type === "info") {
  //     toast.info(message);
  //   }
  //   if (type === "success") {
  //     toast(message);
  //   }
  //   if (type === "warn") {
  //     toast.warn(message);
  //   }
  //   if (type === "error") {
  //     toast.error(message);
  //   }
  // };
  return (
    <React.Fragment>
      {/* <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContext.Provider
        value={{
          showToast: showToast,
        }}
      > */}
        {!isWithoutLayout && <Navbar />}
        {children}
        {!isWithoutLayout && !isLogin && <Footer />}
      {/* </ToastContext.Provider> */}
    </React.Fragment>
  );
};

export default Layout;
