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

const LandingPage = () => {

  // LandingPage.js

  const [areas, setAreas] = useState([]);

  useEffect(() => {
    // Assume getAreas is a function that fetches the areas
    getAreas().then((fetchedAreas) => {
      setAreas(fetchedAreas);
    });
  }, []);


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

  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px]">
        <Banner />
        <SearchBox searchClasses="-mt-[83px]" areas={areas}/>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <DurationBanner durationObject={perMonthDescription} backgroundImage={"https://images.unsplash.com/photo-1459787915554-b34915863013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGR1YmFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}/>
          <DurationBanner durationObject={perDayDescription} backgroundImage={"https://plus.unsplash.com/premium_photo-1661962680724-d926ef951cb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"}/>
        </div>
        <Neighbourhoods />
      </div>

      <HotelSuggestions />
      <div className="container-2xl max-lg:px-4 lg:px-[50px]">
        <EveryThingRightHere />
        <ImageGallerySection />
        <LearnMore />
        <ClientReviews />
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
