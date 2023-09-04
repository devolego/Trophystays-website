'use client';
import React, { useEffect } from "react";
import SubBanner from "../Common/SubBanner";
import ReviewImg from "../../images/reviews-img.png";
import ReviewMobileImg from "../../images/review-mobile-img.png";
import { reviewArr } from "../../utils/utilsItems";
import Rating from "../Common/Rating";
import Reviews from "../Admin/Reviews";
import NextPerviousBtn from "../Common/NextPerviousBtn";
import ReviewFilterBar from "./ReviewFilterBar";
import { getReviews } from "../../service/service";
import axios from "axios";

const Review = () => {
  useEffect(()=>{
    getReviews(390858).then((res)=>{
      console.log("res---", res)
    })
    .catch((err)=> {
      console.log("err---", err)
    })
  },[])

  const postReview = ()=>{
    axios.post(`https://trophy-test-281550a6867d.herokuapp.com/apartments/390858/reviews`,
    {
      rating:4,
      body:"testing"
    },
    {
      headers:{
        "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGVjMzQ5NmE3OGM0NTEzNTY2ZjRmOTAiLCJpYXQiOjE2OTM1NjcxODIsImV4cCI6MTY5MzY1MzU4Mn0.xl-Dkrx5mf_8qtg7v6zjo5itYEqMMJTtL5XGR_aFhqE"
      }
    }).then((res)=>{
      console.log("create review res---", res)
    })
    .catch((err)=>{
      console.log("create review err--", err)
    })
  }

  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px] max-md:py-5 mb-5">
      <SubBanner
        imageDesktopSrc={ReviewImg}
        imageModbileSrc={ReviewMobileImg}
        bannerHeading="Reviews"
      />
      <div className="lg:px-[74px] md:mt-[100px] max-md:mt-[50px] ">
        <ReviewFilterBar />

        {/* <button className="p-2 border bg-blue" onClick={postReview}>Create</button> */}

        <h6 className="mt-3 mb-5 text-sm text-darkGrey">
          Showing 1 - 10 of 180 reviews
        </h6>
        {reviewArr &&
          reviewArr.length &&
          reviewArr.map((data) => {
            return (
              <div key={data.id} className="my-6">
                <Rating />
                <Reviews data={data} />
              </div>
            );
          })}
        <NextPerviousBtn
          prevBtnText="Older Reviews"
          nextBtnText="Newer Reviews"
        />
      </div>
    </div>
  );
};

export default Review;
