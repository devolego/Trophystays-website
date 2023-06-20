"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
const withoutLayout = ["/login", "/signup", "/forgot-password"];
const Layout = ({ children }) => {
  
  const router = usePathname();
  const isWithoutLayout = withoutLayout.includes(router);
  
  return (
    <React.Fragment>
      {!isWithoutLayout && <Navbar />}
      {children}
      {!isWithoutLayout && <Footer />}
    </React.Fragment>
  );
};

export default Layout;
