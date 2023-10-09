"use client";
import { useEffect, useState } from "react";
import LandingPage from "../components/LandingPage";
import React from 'react';

export const Context = React.createContext(null)

export default function Home() {
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false);
    const [authToken, setAuthToken ]= useState(null)
  useEffect(() => {
    const token = localStorage.getItem('auth_token')
    setAuthToken(token);
    setInitialRenderComplete(true);
  }, []);
  if (!initialRenderComplete) return <></>;

  // const [listingsData, setListingsData] = useState(null)


  return (
    <div>
      {/* <Context.Provider value={[listingsData, setListingsData]}> */}
      <LandingPage />
      {/* </Context.Provider> */}
    </div>
  );
}
