"use client";
import React from "react";
import Card from "./Card";
import BackButton from "../Common/BackButton";
import Image from "next/image";
import CustomModal from "../Common/CustomModal";

const Profile = () => {
  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px] py-10">
        <BackButton buttonText="Profile" />
        <div className="grid grid-cols-1 gap-3 lg:gap-6 lg:grid-cols-3">
          <Card labelText="Name" inputText="John Doe" />
          <Card labelText="Email" inputText="t****y@example.com" />
          <Card labelText="Phone Number" inputText="+12*****7425" />
          <Card labelText="Address" inputText="Street, Building, Area, City" />
          <Card
            labelText="Government ID"
            inputText="**********"
            button="verify"
            modalTitle="Government ID Verification"
          />
          <Card
            labelText="Passport ID"
            inputText="**********"
            button="verify"
            modalTitle="Passport ID Verification"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
