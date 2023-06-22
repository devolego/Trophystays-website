"use client";
import React from "react";
import LineChartComman from "./LineChartComman";
import Rating from "../Common/Rating";
import Reviews from "./Reviews";
import ListingImg1 from "../../images/admin-listing1.png";
import ListingImg2 from "../../images/admin-listing2.png";
import Listing from "./Listing";

const reviewArr = [
  {
    headingName: "By Waqas L",
    headingDetails:
      "stayed at Luxurious 1 BR Apt at Adress Residence Jumeirah Resort in May 2023",
    review:
      "Location and apartment is amazing and Anna’s keep things updated I give 5star highly recommended",
  },
  {
    headingName: "By Mirette A",
    headingDetails:
      "stayed at Modern | Chic Studio in the heart of Arjan in May 2023",
    review:
      "The place was very clean and the whole prep was was very smooth and organized and it was really easy to reach out to Anna",
  },
];
const listingArr = [
  {
    headingName: "1 Bed Apartment with Stunning View",
    revenue: "$1200.00",
    bannerImg: ListingImg1,
  },
  {
    headingName: "1 Bed Apartment with Stunning View",
    revenue: "$1200.00",
    bannerImg: ListingImg2,
  },
  {
    headingName: "1 Bed Apartment with Stunning View",
    revenue: "$1200.00",
    bannerImg: ListingImg1,
  },
];
const Admin = () => {
  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px] py-5">
        <p className="text-2xl font-semibold text-[#292021] leading-6">
          Insights
        </p>
        <div className="lg:flex justify-between">
          <div className="m-2 p-10">
            <LineChartComman />
          </div>
          <div className="bg-[#FAFAFA] m-2 p-10">asasa</div>
          <div className="bg-[#FAFAFA] m-2 p-10">asasa</div>
        </div>
        <div className="lg:flex justify-between">
          <div className="bg-[#FAFAFA] m-2 p-5 lg:w-3/4">
            <div className="flex justify-between mb-2">
              <p className="text-2xl font-semibold text-[#292021] leading-9 mr-10">
                Reviews
              </p>
              <div className="flex flex-wrap content-center">
                <Rating />
                <p className="text-2xl font-medium text-[#292021] leading-9">
                  4.0
                </p>
                <p className="text-base font-normal text-[#939393] leading-9 ml-1">
                  (21 Reviews)
                </p>
              </div>
            </div>
            {reviewArr &&
              reviewArr.length &&
              reviewArr.map((data, idx) => {
                return (
                  <div key={idx} className="my-3">
                    <Rating />
                    <Reviews data={data} />
                  </div>
                );
              })}
          </div>
          <div className="bg-[#FAFAFA] m-2 p-5 lg:w-1/4">
            <p className="text-2xl font-semibold text-[#292021] leading-9">
              Listings
            </p>
            {listingArr &&
              listingArr.length &&
              listingArr.map((data, idx) => {
                return (
                  <div key={idx} className="my-1">
                    <Listing data={data} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin;
