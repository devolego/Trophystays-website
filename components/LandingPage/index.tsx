"use client";
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Neighbourhoods from "./Neighbourhoods";
import HotelSuggestions from "./HotelSuggestions";
import EveryThingRightHere from "./EveryThingRightHere";
import ImageGallerySection from "./ImageGallerySection";
import LearnMore from "./LearnMore";
import ClientReviews from "./ClientReviews";
import SearchBox from "../Common/SearchBox";
import DurationBanner from "./DurationBanner";
import {getAreas} from "../../service/service"
import Button from '../Common/Button';
import { useRouter } from 'next/navigation';

const LandingPage = () => {

  const router = useRouter()

  // LandingPage.js

  const [areas, setAreas] = useState([]);

   // Dynamic popup details
   const [popupDetails, setPopupDetails] = useState({
    title: 'Special Offer!',
    subTitle: 'Get a 20% discount on your first booking!',
    couponCode: 'COUPON2023',
    imageURL: 'https://images.unsplash.com/photo-1695389016340-7ce386a632b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
  });

  useEffect(() => {
    // Assume getAreas is a function that fetches the areas
    getAreas().then((fetchedAreas) => {
      setAreas(fetchedAreas);
    });
  }, []);

  const [showPopup, setShowPopup] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      console.log('TIME DONE')
    }, 5_000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  // Function to copy code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(popupDetails.couponCode);
    setIsCopied(true)
  };



  const perMonthDescription = {
    description: 'Save more than 20% when you go the monthly way!',
    price: '$49',
    features: [
      {
        positive: true,
        desc: 'Flexible'
      },
      {
        positive: true,
        desc: 'Zero Cancellations To Cancel',
      },
      {
        positive: true,
        desc: '0 Maintenance Cost',
      },
      {
        positive: true,
        desc: '20% Cheaper'
      }
    ],
    duration: 'Month'
  }

  const perDayDescription = {
    description: 'Looking for Shorter Trips? Go the Daily Stay way!',
    price: '$9',
    features: [
      {
        positive: true,
        desc: 'Flexible'
      },
      {
        positive: true,
        desc: 'Zero Cancellations To Cancel',
      },
      {
        positive: true,
        desc: '0 Maintenance Cost',
      },
      {
        positive: false,
        desc: '20% Cheaper'
      }
    ],
    duration: 'Day'
  }

  const handleLogout = () => {
    localStorage.removeItem('auth_token')
    router.push('/')
  }




  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px]">
        <Banner />
        <SearchBox searchClasses="-mt-[83px]" areas={areas} handleOnSearch={undefined}/>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <DurationBanner durationObject={perMonthDescription} backgroundImage={"https://images.unsplash.com/photo-1459787915554-b34915863013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGR1YmFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}/>
          <DurationBanner durationObject={perDayDescription} backgroundImage={"https://plus.unsplash.com/premium_photo-1661962680724-d926ef951cb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"}/>
        </div>
        <Neighbourhoods />
      </div>

{/* Popup */}
<div className={`fixed inset-0 flex items-center justify-center z-50 ${showPopup ? 'opacity-100' : 'opacity-0 hidden'} transition-opacity duration-500`}>
  <div className="relative bg-white p-0 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-[50%] md:h-[600px] flex flex-col md:flex-row items-stretch">
    
{/* Close button */}
<button
  className="absolute top-2 right-2 text-white md:text-black text-2xl p-1"
  onClick={() => setShowPopup(false)}
>
  X
</button>


    {/* Left side with image */}
    <div className="w-full md:w-1/2 h-1/2 md:h-full p-0 m-0">
      <img className="object-cover h-full w-full m-0 p-0 rounded-none" src={popupDetails.imageURL} alt={popupDetails.title} />
    </div>
    
    {/* Right side with text and coupon */}
    <div className="w-full md:w-1/2 p-5 flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-2xl font-bold">{popupDetails.title}</h1>
      <p className="mt-4 text-sm md:text-lg">{popupDetails.subTitle}</p>

      {/* Coupon Code Bar */}
      <div className={`mt-4 mb-4 bg-gray-100 p-2 rounded w-full text-center ${isCopied ? 'bg-gray-300' : ''}`}>
        <span className="font-mono text-sm">{popupDetails.couponCode}</span>
      </div>

      {/* Button */}
      <Button 
        ButtonClicked={copyToClipboard}
        ButtonClasses={
          "flex items-center text-white justify-center max-h-[58px] w-full max-md:py-3"
        }
        ButtonText={"Copy Code"}
      />

      {/* Checkmark for copied state */}
      {isCopied && <div className="mt-2 text-green-500">&#10004; Copied to clipboard</div>}
    </div>
  </div>
</div>



      <HotelSuggestions />
      <div className="container-2xl max-lg:px-4 lg:px-[50px]">
        <EveryThingRightHere />
        <ImageGallerySection />
        <LearnMore />
        {/* <ClientReviews /> */}
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
