import React, { useEffect, useState } from "react";
import SubBanner from "../Common/SubBanner";
import ReviewImg from "../../images/reviews-img.png";
import ReviewMobileImg from "../../images/review-mobile-img.png";
import { reviewArr } from "../../utils/utilsItems";
import Rating from "../Common/Rating";
import Reviews from "../Admin/Reviews";
import NextPerviousBtn from "../Common/NextPerviousBtn";
import ReviewFilterBar from "./ReviewFilterBar";
import { getReviews } from "../../service/service";

const Review = () => {

  const [reviewArr, setReviewArr] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    keyword: "",
    apartmentId: "",
    rating: "",
    sortBy: "",
  });

  const [searchClicked, setSearchClicked] = useState(false);


  useEffect(() => {
    if (searchClicked) {  // Only run if searchClicked is true
      const fetchReviews = async () => {
        try {
          const reviews = await getReviews(
            searchCriteria.keyword,
            searchCriteria.apartmentId,
            searchCriteria.rating,
            searchCriteria.sortBy
          );
          setReviewArr(reviews);
          console.log('Fetched reviews:', reviews.length);
        } catch (error) {
          console.log('Error fetching reviews:', error);
        }
      };
  
      fetchReviews();
      setSearchClicked(false);  // Reset to false after API call
    }
  }, [searchCriteria, searchClicked]);

  const handleSearchChange = (newCriteria) => {
    setSearchCriteria({ ...searchCriteria, ...newCriteria });
    setSearchClicked(true);  // Set this to true when the "Search" button is clicked
  };
  

  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px] max-md:py-5 mb-5">
      <SubBanner
        imageDesktopSrc={ReviewImg}
        imageModbileSrc={ReviewMobileImg}
        bannerHeading="Reviews"
      />
      <div className="lg:px-[74px] md:mt-[100px] max-md:mt-[50px] ">
        <ReviewFilterBar onSearchChange={handleSearchChange} />

        <h6 className="mt-3 mb-5 text-sm text-darkGrey">
          Showing 1 - 10 of {reviewArr.length}
        </h6>
        {reviewArr &&
          reviewArr.length &&
          reviewArr.map((data) => {
            return (
              <div key={data._id} className="my-6">
                <Rating rating={data.rating}/>
                <Reviews data={data} />
              </div>
            );
          })}
        {/* <NextPerviousBtn
          prevBtnText="Prevous Page"
          nextBtnText="Next Page"
        /> */}
      </div>
    </div>
  );
};

export default Review;
