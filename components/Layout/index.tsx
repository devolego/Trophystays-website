"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
const withoutLayout = ["/login", "/signup", "/forgot-password"];
const withLogin = ["/tenent", "/booking-history"];
const Layout = ({ children }) => {
  const router = usePathname();
  const isWithoutLayout = withoutLayout.includes(router);
  const isLogin = withLogin.includes(router);
  return (
    <React.Fragment>
      {!isWithoutLayout && <Navbar />}
      {children}
      {!isWithoutLayout && !isLogin && <Footer />}
    </React.Fragment>
  );
};

export default Layout;
