/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import sliderImg from "../../images/property-detail-img-1.png";
import sliderImg1 from "../../images/property-detail-img-2.png";
import sliderImg2 from "../../images/hero.png";
import sliderImg3 from "../../images/login-form-img-1.png";
import Link from "next/link";
import heartImg from "../../images/heart-icon-outline.png";
import multiPerson from "../../images/multi-person.png";
import bedRoomIcon from "../../images/bedroom-icon.png";
import bathTubIcon from "../../images/bathtub-icon.png";
import spaceIcon from "../../images/space-in-ft.png";
import floorIcon from "../../images/floor.png";
import map from "../../images/map.png";
import starImg from "../../images/star-icon.png";
import starOutlineImg from "../../images/Star-outline.png";
import userImg from "../../images/user-img.png";
import { josefin } from "../../utils/utilsFonts";
import Button from "../Common/Button";
import Amenities from "./amenities";
import CustomModal from "../Common/CustomModal";
import DatePicker from "../Common/DatePicker";
import { getListing } from "../../service/service";
import { useRouter, useParams } from 'next/navigation';
import DOMPurify from 'dompurify'
import HtmlContent from '../Common/HtmlContent';
import 'mapbox-gl/dist/mapbox-gl.css'
import Map, {GeolocateControl, Marker, Popup} from 'react-map-gl'
import axios from 'axios';

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  variableWidth: false,
};

interface Property {
  locationDescription: any;
  accommodationsDetail: any;
  accomadotionsDetail: any;
  accomadationsDetail: any;
  description: any;
  _id: string;
  longitude: number;
  latitude: number;
  internalName: string;
  averageReview: number;
  bedrooms: number;
  bathrooms: number;
  images: PropertyImage[];
  ownerRezId: number;
  internalCode: string;
  __v: number;
  priceFrom: number;
  priceTo: number;
  isMonthly: boolean;
  isWishlisted: boolean;
  headline: string;
  address: any;
  city: string;
  sleepsMax: number;
  bedroomCount: number;
  bathroomCount: number;
  // amenities: any;
}

interface PropertyImage {
  croppedUrl: string;
  originalUrl: string;
  _id: string;
}



const PropertyDetails = () => {

  const [partImages, setPartImages] = useState(null)
  async function findParticularListingImages(ownerRezId) {
    try {
      const response = await axios.get(`https://trophy-test-281550a6867d.herokuapp.com/listings?part=true&propertyId=${ownerRezId}`);
      console.log('IMAGES', response?.data[0]?.images)
      setPartImages(response.data[0].images)
    } catch (error) {
      console.error('Error fetching images:', error);
      // Optionally, you might want to handle the error differently or return a fallback value
      return null;
    }
  }

  const [dates, setDates] = useState(null)
  async function findUnavailableDates(propertyId) {
    try {
      // Get the current date
      const now = new Date();
      // Format the start date as yyyy-mm-dd
      const startDate = now.toISOString().split('T')[0];
      console.log('Start date: ' + startDate);
      
      // // Calculate the end date as one year from now
      // const endDateObject = new Date(now.setFullYear(now.getFullYear() + 1));
      // // Format the end date as yyyy-mm-dd
      // const endDate = endDateObject.toISOString().split('T')[0];
  
      // Make the API request
      const response = await axios.get(`https://trophy-test-281550a6867d.herokuapp.com/datesavailable`, {
        params: {
          propertyId,
          start: startDate,
        }
      });

      
      setDates(response.data)
      console.log(response.data)
      // Now you have an array of unavailable dates
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching unavailable dates');
    }
  }
  


  
  const searchParams = useParams()
  console.log('params:', searchParams)
  const propertyId = searchParams.id
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [property, setProperty] = useState<Property>();
  const [showCalenderModal, setShowCalenderModal] =
    React.useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getListing(propertyId)
      .then((response: Property) => {
        setProperty(response)
        findParticularListingImages(propertyId)
        findUnavailableDates(propertyId)
        console.log('RESPONSE:', response)
        // console.log('YOPPP', property)
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
        setLoading(false);
      });
  }, [propertyId])

  const [map, setMap] = useState({
    latitude: property?.latitude,
    longitude: property?.longitude,
    zoom: 10
  })

  if (loading) {
    return <div>Loading...</div>
  }

  

  return (
    <div>
<div className="relative overflow-hidden property-detail hotel-suggestion">
  <Slider {...settings} className="h-[750px] xl:h-[800px] 2xl:h-[1100px] md:h-[500px] sm:h-[350px]">
    {partImages?.slice(0, 10).map((image) => (
      <div key={image._id} className="w-full h-full relative">
        <div className="w-full h-full relative">
          <img
            src={image.originalUrl}
            alt=""
            className="object-cover w-full h-auto h-[750px] xl:h-[800px] 2xl:h-[1100px] md:h-[500px] sm:h-[350px]"
            style={{ objectPosition: 'center -100px' }}
          />
        </div>
      </div>
    ))}
  </Slider>

    <div className="absolute bottom-[40px] left-[50px] flex gap-5 max-md:flex-wrap max-md:bottom-5 max-md:gap-3 max-md:pr-4">
        <span className="px-3 py-2 text-white rounded-lg bg-black/50">
            {property?.address?.street1}, {property?.address?.city}
        </span>
        {/* other spans */}
    </div>
</div>


      <div className="container-2xl max-lg:px-4 lg:px-[50px] flex max-lg:flex-col gap-4">
        <div className="w-[62%] max-lg:w-full">
          <div className="flex justify-between py-5 mt-4">
            <h1 className={`text-3xl ${josefin.className}`}>
              {property?.headline}
            </h1>
            {/* <Link href="/">
              <Image src={heartImg} alt="" className="w-[36px] h-[36px]" />
            </Link> */}
          </div>
          <div className="room-details flex gap-2 mt-[12px] justify-between flex-wrap mb-6">
            <div className="pb-[54px] w-full">
              <div className="flex w-full sm:items-center sm:justify-between max-sm:flex-col max-sm-items-start">
                <div className="flex pb-6">
                  <div className="flex text-sm text-primary">
                    <Image
                      className="object-contain mr-1"
                      src={multiPerson}
                      alt=""
                    />
                    <span className="text-base text-black capitalize">
                      {property?.sleepsMax} Sleeps
                    </span>
                  </div>
                  <span className="px-4 text-greyishBrown">|</span>
                  <div className="flex text-sm text-primary">
                    <Image
                      className="object-contain mr-1"
                      src={bedRoomIcon}
                      alt=""
                    />
                    <span className="text-base text-black capitalize">
                      {property?.bedroomCount} Bedrooms
                    </span>
                  </div>
                  <span className="px-4 text-greyishBrown">|</span>
                  <div className="flex text-sm text-primary">
                    <Image
                      className="object-contain mr-1"
                      src={bathTubIcon}
                      alt=""
                    />
                    <span className="text-base text-black capitalize">
                      {property?.bathroomCount} Bathrooms
                    </span>
                  </div>
                </div>
                {/* <div className="text-base bg-secondary rounded-[20px] px-5 flex items-center text-white py-[2px] w-max">
                  ID: 1F2315
                </div> */}
              </div>

              {/* <div className="flex items-center justify-between max-sm:flex-wrap">
                <div className="flex ">
                  <div className="flex text-sm text-primary">
                    <Image
                      className="object-contain mr-1"
                      src={spaceIcon}
                      alt=""
                    />
                    <span className="text-base text-black capitalize">
                      {"447 ft²"}
                    </span>
                  </div>
                  <span className="px-4 text-greyishBrown">|</span>

                  <div className="flex text-sm text-primary">
                    <Image
                      className="object-contain mr-1"
                      src={floorIcon}
                      alt=""
                    />
                    <span className="text-base text-black capitalize">
                      {"3rd Floor"}
                    </span>
                  </div>
                </div>
              </div> */}
            </div>

            <div>
              <h3 className="mb-5 text-xl font-medium">Description</h3>
              <p className="mb-5 text-base">
                <HtmlContent html={property?.description} />
              </p>

              {/* AMMENNITIES */}

              {/* <p className="mb-5 text-base font-medium">
                Designed with you in mind
              </p>

              <p className="mb-5 text-base">
                {property?.accommodationsDetail}
              </p> */}

              {/* <p className="mb-5 text-base font-medium">
                Sleeping arrangements
              </p>

              <p className="mb-5 text-base">1 Queen Bed, 63 in / 160 cm</p>
              <p className="mb-5 text-base font-medium">
                Arrival and ongoing support
              </p>
              <p className="mb-5 text-base">
                The entire apartment is yours to enjoy! You’ll either be
                personally greeted by a Blueground team member or given self
                check-in instructions. Throughout your stay, you’ll have access
                to our Client Experience team through the Blueground App. You
                can schedule additional cleanings, submit maintenance requests,
                and view our neighborhood recommendations with just a few taps.
                We’ll share all details upon confirmation of your stay.
              </p> */}
            </div>

            {/* <Button
              ButtonText="See Less"
              ButtonClasses="text-primary border-primary border bg-transparent after:bg-primary-color-arrow-up after:w-[9px]"
            /> */}
          </div>
          
          {/* {property ? <Amenities amenityData={property} /> : <div>Loading...</div>} */}

          <div>
            <p className="mb-5 text-base font-medium">About the Neighborhood</p>
            {/* <p className="mb-5 text-base">
              {property?.locationDescription}
            </p> */}
            {/* <Button
              ButtonText="See Less"
              ButtonClasses="text-primary border-primary border bg-transparent after:bg-primary-color-arrow-up after:w-[9px] w-max mb-10"
            /> */}
            {/* <Image src={map} alt="" className="mb-[50px]" /> */}
            {/* <div className="map-container mb-[50px]">
              <iframe
                width="100%"
                height="450"
                src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyCuP8uflObugANoMJ4gOeUlsw1iH0SFd_g&center=${property?.latitude},${property?.longitude}&zoom=18`} 
              >
              </iframe>
            </div> */}
            <div className='mb-[50px]'>
              <Map
              style={{height: "450px", width: "100%",}}
              mapboxAccessToken='pk.eyJ1IjoiZGV2b2xlZ292aWNoIiwiYSI6ImNsbDBqNzJpcDF1YTczY216ZDEwdXhkd2IifQ.YS24fRbk-I43rMr9q2v0fQ'
              initialViewState={{
                longitude: property.longitude,
                latitude: property.latitude,
                zoom: 10
              }}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              >

                  <GeolocateControl
                positionOptions={{ enableHighAccuracy: true }}
                trackUserLocation={true}
                />

                <Marker key={property._id} latitude={property.latitude} longitude={property.longitude}>
                    
                  </Marker>


                </Map>
              </div>

          </div>
        </div>
        <div className="w-[38%] bg-[#FAFAFA] rounded-[16px] mt-10 px-[30px] py-[20px] h-max max-lg:w-full sticky top-[80px] right-0">
          {/* <span className="text-[#FF7676]">
            <del>$16.00</del>
          </span> */}
          <p className="text-3xl">
            12.00 AED
            <span className="text-secondary ">/Month</span>
          </p>
          <div className="flex justify-between">
            <div className="flex">
              <Image src={starImg} alt="" className="object-contain mx-[2px]" />
              <Image src={starImg} alt="" className="object-contain mx-[2px]" />
              <Image src={starImg} alt="" className="object-contain mx-[2px]" />
              <Image src={starImg} alt="" className="object-contain mx-[2px]" />
              <Image
                src={starOutlineImg}
                alt=""
                className="object-contain mx-[2px]"
              />
              <span className="text-2xl">4.0</span>
            </div>

            {/* <div className="text-base text-darkGrey">(21 Reviews) </div> */}
          </div>
          {/* <Button
            ButtonClicked={() => setShowCalenderModal(true)}
            ButtonText="Buy Now"
            ButtonClasses="text-white mt-[36px] text-center"
          /> */}

          <div className="px-4 my-4 text-sm bg-white rounded-lg">
            <div className="py-2 mt-2">
              <div className="flex justify-between my-2 ">
                <p>Rent per month</p>
                <p>AED 61,450.00</p>
              </div>
              <div className="flex justify-between my-2 ">
                <p>Utilities per month</p>
                <p>AED 2,370.00</p>
              </div>
              <div className="flex justify-between my-2 ">
                <p className="font-medium">Monthly subtotal</p>
                <p>AED 59,080.00</p>
              </div>
            </div>

            <div className="w-full h-px mb-2 bg-primary/50"></div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">
                Add Pets
                <span className="ml-1 text-xs text-secondary">Extra Fee</span>
              </p>
              <p className="text-sm px-3 py-2 bg-secondary text-white rounded-[50px]">
                +
              </p>
            </div>
            <p className="text-sm text-darkGrey">
              (Pet fee: MXN940/mo per pet)
            </p>
            <div className="w-full h-px my-4 bg-primary/50"></div>
            <div>
              <div className="flex justify-between my-2 ">
                <p>Fees & insurance</p>
                <p>AED 8,304.00</p>
              </div>
              <div className="flex justify-between my-2 ">
                <p className="font-medium">
                  Total charges
                  <span className="ml-2 text-darkGrey">(Single payment)</span>
                </p>
                <p>AED 71,736.26</p>
              </div>
              <div className="flex justify-between my-2 ">
                <p className="text-sm">Refundable security deposit</p>
                <p>AED 29,540.00</p>
              </div>
            </div>
            <div className="w-full h-px my-4 bg-primary/50"></div>
            <div className="flex justify-between">
              <p className="font-medium">
                Total <span className="text-darkGrey">(1 month & 1 day)</span>
              </p>
              <p>AED 101,276.26</p>
            </div>
          </div>

          <Button
            ButtonClicked={() => setShowCalenderModal(true)}
            ButtonText="Reserve"
            ButtonClasses="bg-primary text-white mt-[36px] text-center py-4 items-center"
          />
        </div>
      </div>
      <CustomModal
        isBackground={false}
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <div className="grid gap-[25px] grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mb-12">
          <Image
            className="w-full h-[240px] object-cover"
            src={sliderImg}
            alt=""
          />
          <Image
            className="w-full h-[240px] object-cover"
            src={sliderImg1}
            alt=""
          />
          <Image
            className="w-full h-[240px] object-cover"
            src={sliderImg2}
            alt=""
          />
          <Image
            className="w-full h-[240px] object-cover"
            src={sliderImg3}
            alt=""
          />
        </div>
      </CustomModal>

      <CustomModal
        isBackground={false}
        showModal={showCalenderModal}
        setShowModal={setShowCalenderModal}
      >
        <DatePicker 
          disabledDates={dates}
        />
      </CustomModal>
    </div>
  );
};

export default PropertyDetails;
