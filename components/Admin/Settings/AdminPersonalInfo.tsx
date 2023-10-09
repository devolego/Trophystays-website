'use client'
import React, { useEffect, useState } from "react";
import Card from "../../Common/Card";
import BackButton from "../../Common/BackButton";
import editIcon from "../../../images/edit-pencil.png";

const AdminPersonalInfo = () => {

  function getToken() {
    return localStorage.getItem('auth_token')
  }

  function combineNames (first, last) {
    if (first || last === undefined) {return null}
    return `${first} ${last}`
  }

  const [userData, setUserData] = useState(null)
  const [name, setName] = useState(null)
  useEffect(() => {
    // Assume you have an endpoint to get the user data and a function to get the token
    const token = getToken();  // Define this function to retrieve the token
    fetch('https://trophy-test-281550a6867d.herokuapp.com/user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      setUserData(data)
      // setName(combineNames(userData?.firstName, userData?.lastName))
    })
    .catch(error => console.error(error));
  }, []);

  // const [inputValues, setInputValues] = useState()
  
  // In AdminPersonalInfo component
const [inputValues, setInputValues] = useState({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  addressString: '',
  // ... other fields
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setInputValues({
    ...inputValues,
    [name]: value,
  });
};


  const nameEditCode = userData && (
    <>
      <div className="py-2">
        <input
        name="firstName"
          type="text"
          placeholder={userData?.firstName || 'First Name'}
          className="w-full border border-[#E1D9CE] pl-4 py-3 focus:border-[#E1D9CE] focus:outline-none rounded-md bg-white placeholder:text-base placeholder:font-light text-base text-[#939393]"
          // value={inputValues?.firstName || ''}
          onChange={handleInputChange}
        />
      </div>
      <div className="py-2">
        <input
        name="lastName"
          type="text"
          placeholder={userData?.lastName || 'Last Name'}
          className="w-full border border-[#E1D9CE] pl-6 py-3 focus:border-[#E1D9CE] focus:outline-none rounded-md bg-white placeholder:text-base placeholder:font-light text-base text-[#939393]"
          onChange={handleInputChange}
        />
      </div>
    </>
  );

  const emailEditCode = userData && (
    <div className="py-2">
      <input
      name="email"
        type="email"
        placeholder={userData?.email || 'Enter Email'}
        className="w-full border border-[#E1D9CE] pl-6 py-3 focus:border-[#E1D9CE] focus:outline-none rounded-md bg-white placeholder:text-base placeholder:font-light text-base text-[#939393]"
        onChange={handleInputChange}

      />
    </div>
  );

  const phoneEditCode = userData && (
    <div className="py-2">
      <input
      name="phoneNumber"
        type="number"
        placeholder={userData?.phoneNumber || 'Enter Phone Number'}
        className="w-full border border-[#E1D9CE] pl-6 py-3 focus:border-[#E1D9CE] focus:outline-none rounded-md bg-white placeholder:text-base placeholder:font-light text-base text-[#939393]"
        onChange={handleInputChange}

      />
    </div>
  );
  const addressEditCode = userData &&(
    <div className="py-2">
      <input
      name="addressString"
        type="text"
        placeholder={userData?.addressString || 'Enter Address'}
        className="w-full border border-[#E1D9CE] pl-6 py-3 focus:border-[#E1D9CE] focus:outline-none rounded-md bg-white placeholder:text-base placeholder:font-light text-base text-[#939393]"
        onChange={handleInputChange}

      />
    </div>
  );
  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px] py-10">
        <BackButton buttonText="Personal Info" />
        {/* <h3 className="mb-5 text-sm font-medium">Account Settings</h3> */}
        <div className="grid grid-cols-1 gap-3 lg:gap-6 lg:grid-cols-3">
          <Card
            label1Text="Name"
            label2Text={(userData?.firstName + " " + userData?.lastName) || 'Trophy Stays'}
            icon={editIcon}
            editCode={nameEditCode}
            cardProperty="h-max"
            type='name'
            userId={userData?._id}
            inputValues={inputValues}
            handleInputChange={handleInputChange}
          />
          <Card
            label1Text="Email"
            label2Text={(userData?.email) || 't****y@example.com'}
            icon={editIcon}
            editCode={emailEditCode}
            cardProperty="h-max"
            type='email'
            userId={userData?._id}
            inputValues={inputValues}
  handleInputChange={handleInputChange}
          />
          <Card
            label1Text="Phone Number"
            label2Text={(userData?.phoneNumber) || "+12*****7425"}
            icon={editIcon}
            editCode={phoneEditCode}
            cardProperty="h-max"
            type='phone'
            userId={userData?._id}
            inputValues={inputValues}
  handleInputChange={handleInputChange}
          />
          {/* <Card
            label1Text="Address"
            label2Text={(userData?.addressString) || "Street, Building, Area, City"}
            icon={editIcon}
            editCode={addressEditCode}
            cardProperty="h-max"
            type='addressString'
            userId={userData?._id}
            inputValues={inputValues}
  handleInputChange={handleInputChange}
          /> */}
          {/* <Card
            label1Text="Government ID"
            label2Text="**********"
            button="verify"
            modalTitle="Government ID Verification"
            cardProperty="h-max"
          />
          <Card
            label1Text="Passport ID"
            label2Text="**********"
            button="verify"
            modalTitle="Passport ID Verification"
            cardProperty="h-max"
          /> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminPersonalInfo;
