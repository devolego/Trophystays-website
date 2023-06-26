"use client";
import React, { useState } from "react";
import AdminInsights from "./AdminInsights";
import AdminListing from "./AdminListing";

const Admin = () => {
  const [listingTab, setListingTab] = useState(true);
  return (
    <React.Fragment>
      <div className="flex w-max text-center h-[80px] mx-auto -mt-[80px] sticky z-20 cursor-pointer items-center">
        <h3 className="px-5 mx-4" onClick={() => setListingTab(true)}>
          Listing
        </h3>
        <h3 className="px-5 mx-4" onClick={() => setListingTab(false)}>
          Insights
        </h3>
      </div>
      {listingTab ? <AdminListing /> : <AdminInsights />}
    </React.Fragment>
  );
};

export default Admin;
