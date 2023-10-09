'use client'
import React, { useEffect, useState } from "react";
import { josefin } from "../../utils/utilsFonts";
import CardWithSlider from "../Common/CardWithSlider";
import axios from 'axios';

const HotelSuggestions = () => {

  const [searchData, setSearchData] = useState(null)

  const fetchData = async () => {
    try {
      // console.log(sortOption)
      const url = 'https://trophy-test-281550a6867d.herokuapp.com/listings'
      const response = await axios.get(url)
      console.log('DAMN')
      console.log('damn resposne', response)
      setSearchData(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="bg-lightBrown py-[60px] px-[50px] max-lg:px-4 max-lg:py-10 hotel-suggestion">
      <h2
        className={` ${josefin.className} text-[40px] text-black max-w-[452px] mb-[50px] max-lg:text-[32px] max-lg:leading-[35px] max-lg:mb-[30px]`}
      >
        Hotels You would want to Visit
      </h2>


      <div className="grid grid-cols-4 gap-6 hotel-card-design max-lg:grid-cols-1">

      {
  searchData ? (
    [...Array(4)].map((_, i) => {
      const data = searchData[i];
      return (
        <CardWithSlider
          paraText={data ? `${data.externalName} in ${data.address.stateOrProvince}` : ""}
          rating={data ? (Math.round(data.averageReview).toFixed(1)) : ""}
          id={i}
          perRoomUserCount={data ? `${data.bedrooms * 2} guests allowed` : ""}
          bedCount={data ? `${data.bedrooms} Bedrooms` : ""}
          bathCount={data ? `${data.bathrooms} Bathrooms` : ""}
          likeButton={"unfilled"}
          key={data ? data._id : i}
          imgUrls={data ? data.images.slice(0, 4).map(image => image.croppedUrl) : []}
          isMonthly={data ? data.isMonthly : false}
          priceFrom={data ? Math.round(data.priceFrom) : 0}
        />
      );
    })
  ) : null
}



        {/* <CardWithSlider
          paraText={" 1 Bed Apartment with Stunning View"}
          rating={"5.0"}
          perRoomUserCount={"2 sleeps"}
          bedCount={"1 Bedroom"}
          bathCount={"1 Bath"}
          likeButton={"unfilled"}
        /> */}
        {/* <CardWithSlider
          paraText={" 1 Bed Apartment with Stunning View"}
          rating={"5.0"}
          perRoomUserCount={"2 sleeps"}
          bedCount={"1 Bedroom"}
          bathCount={"1 Bath"}
          likeButton={"filled"}
        /> */}
        {/* <CardWithSlider
          paraText={" 1 Bed Apartment with Stunning View"}
          rating={"4.0"}
          perRoomUserCount={"2 sleeps"}
          bedCount={"1 Bedroom"}
          bathCount={"1 Bath"}
          likeButton={"filled"}
        /> */}
        {/* <CardWithSlider
          paraText={" 1 Bed Apartment with Stunning View"}
          rating={"3.0"}
          perRoomUserCount={"2 sleeps"}
          bedCount={"1 Bedroom"}
          bathCount={"1 Bath"}
          likeButton={"unfilled"}
        /> */}
      </div>
    </div>
  );
};

export default HotelSuggestions;
