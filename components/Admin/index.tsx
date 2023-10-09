"use client";
import React, { useEffect, useState } from "react";
import AdminInsights from "./AdminInsights";
import AdminListing from "./AdminListing";
import { josefin } from "../../utils/utilsFonts";
import '../../public/styles/NavbarStyles.css'
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';


const Admin = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [listingTab, setListingTab] = useState(true);
  const [isLandlord, setIsLandlord] = useState(null);
  const router = useRouter();
  const search = useSearchParams().get('tab');

  useEffect(() => {

    const token = localStorage.getItem('auth_token')
    if (token) {
      axios.get('https://trophy-test-281550a6867d.herokuapp.com/user', {
        headers: {
          'Authorization': `Bearer ${token}`

        }
      })
      .then(response => {
        setIsLandlord(response.data.isLandlord)
      })
      .catch(err => {
        console.error('Error fetching user data:', err)
      })
    } else {
      console.error('No Token found')
      router.push('/')
    }

    // if (router.query.tab === 'insights') {
    //   setListingTab(false);
    // }

    if (search === 'insights') {
      // console.log('DONNNNNNNNNNNNNNNNNNNNNNNNNNNE')
      setListingTab(false);
    }


  }, [router, search])

  if (isLandlord === null) return null
  if (!isLandlord) return <div>You are not authorized to view this page</div>

  return (
    <React.Fragment>
      <div className="flex w-max text-center h-[80px] mx-auto md:-mt-[80px] lg:sticky lg:z-20 z-index-1000 cursor-pointer items-center lg:top-0 mx-auto">
        <h3
          className={` ${
            josefin.className
          } max-md:px-2 md:px-5 md:mx-4 max-md:mx-2 h-full flex items-center border-b-[3px] rounded-sm transition-all ${
            listingTab === true
              ? "text-primary border-primary"
              : "border-transparent"
          }`}
          onClick={() => {
            setListingTab(true)
            router.push('/admin')
          }}
        >
          Listing
        </h3>
        <h3
          className={`${
            josefin.className
          } max-md:px-2 md:px-5 md:mx-4 max-md:mx-2 h-full flex items-center border-b-[3px] rounded-sm transition-all ${
            listingTab === false
              ? "text-primary border-primary"
              : "border-transparent"
          }`}
          onClick={() => setListingTab(false)}
        >
          Insights
        </h3>
      </div>
      {listingTab ? <AdminListing /> : <AdminInsights />}
    </React.Fragment>
  );
};

export default Admin;
