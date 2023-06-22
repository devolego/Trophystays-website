"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import sliderImg from "../../images/slider-img.png";
import sliderImg1 from "../../images/kitchen-img-2.png";
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

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
};
const PropertyDetails = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  return (
    <div>
      <div className="overflow-hidden">
        <Slider {...settings}>
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
        </Slider>
      </div>

      <div className="container-2xl max-lg:px-4 lg:px-[50px] flex max-lg:flex-col gap-4">
        <div className="w-[62%] max-lg:w-full">
          <div className="mt-4 py-5 flex justify-between">
            <h1 className={`text-3xl ${josefin.className}`}>
              The Arnold, 1621 E 6th St
            </h1>
            <Link href="/">
              <Image src={heartImg} alt="" className="w-[36px] h-[36px]" />
            </Link>
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
                      {"2 sleeps"}
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
                      {"1 Bedroom"}
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
                      {"1 Bath"}
                    </span>
                  </div>
                </div>
                <div className="text-base bg-secondary rounded-[20px] px-5 flex items-center text-white py-[2px] w-max">
                  ID: 1F2315
                </div>
              </div>

              <div className="flex items-center justify-between max-sm:flex-wrap">
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

                <div className="flex px-[10px] py-[6px] bg-lightBrown rounded-xl my-3">
                  <Image src={userImg} alt="" className="object-contain mr-3" />
                  <div className="flex flex-col">
                    <p>Jane Doe</p>
                    <p className="text-[#DC4200] text-sm">Host</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-xl font-medium">Description</h3>
              <p className="mb-5 text-base">
                Discover the best of Austin, with this studio East Austin
                apartment with balcony views over the city. It’ll be easy to
                simply show up and start living in this lavishly Blueground
                furnished apartment with its fully-equipped kitchen, spacious
                living room, and our dedicated, on-the-ground support. (ID
                #ATX6)
              </p>

              <p className="mb-5 text-base font-medium">
                Designed with you in mind
              </p>

              <p className="mb-5 text-base">
                Thoughtfully designed with bespoke finishes, modern furnishings,
                and a fully-equipped kitchen, you’ll enjoy that “I’m home”
                feeling with this Blueground apartment. Whether you’re lounging
                in your sophisticated living room streaming the latest and
                greatest entertainment on the smart TV or premium wireless
                speaker, or getting some well-earned rest on the superior
                quality mattress with luxury linens, you’ll fall in love with
                everything this East Austin apartment has to offer. This
                apartment also offers in-apartment laundry.
              </p>

              <p className="mb-5 text-base font-medium">
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
              </p>
            </div>

            <Button
              ButtonText="See Less"
              ButtonClasses="text-primary border-primary border bg-transparent after:bg-primary-color-arrow-up after:w-[9px]"
            />
          </div>
          <Amenities />

          <div>
            <p className="mb-5 text-base font-medium">About the Neighborhood</p>
            <p className="mb-5 text-base">
              This furnished apartment is located in East Austin, one of the
              city’s hippest and most diverse neighborhoods. The area is home to
              a thriving nightlife scene that includes breweries, cocktail bars,
              and live-music venues like the Native Hostel and Parish. Anyone
              who likes to shop will delight in the selection at East Austin
              boutiques like Take Heart and Raven + Lily. The dining scene is
              also eclectic, featuring everything from Asian fusion to
              gastropubs to the world famous Franklin Barbeque, regarded by many
              to be the best BBQ in the US.
            </p>
            <Button
              ButtonText="See Less"
              ButtonClasses="text-primary border-primary border bg-transparent after:bg-primary-color-arrow-up after:w-[9px] w-max mb-10"
            />
            <Image src={map} alt="" className="mb-[50px]" />
          </div>
        </div>
        <div className="w-[38%] bg-[#FAFAFA] rounded-[16px] mt-10 px-[30px] py-[20px] h-max max-lg:w-full sticky top-[80px] right-0">
          <span className="text-[#FF7676]">
            <del>$16.00</del>
          </span>
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

            <div className="text-base text-darkGrey">(21 Reviews) </div>
          </div>
          <Button
            ButtonText="Buy Now"
            ButtonClasses="text-white mt-[36px] text-center"
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
    </div>
  );
};

export default PropertyDetails;
