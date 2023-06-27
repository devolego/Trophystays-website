import React from "react";
import BackButton from "../Common/BackButton";
import arrowDownSolid from "../../images/arrow-down-solid.png";
import searchIcon from "../../images/search-icon.png";
import Image from "next/image";
import Button from "../Common/Button";
import BookingHistoryImage1 from "../../images/bookinghistory1.png";
import BookingHistoryImage2 from "../../images/bookinghistory2.png";
import BookingHistoryImage3 from "../../images/bookinghistory3.png";
import AdminBookingHistoryCard from "./AdminBookingHistoryCard";
import Dropdown from "../Common/Dropdown";

const listingTopArr = [
  { name: "Checking Out (0)", active: false },
  { name: "Currently Hosting (0)", active: true },
  { name: "Arriving Soon (0)", active: false },
  { name: "Upcoming (0)", active: false },
  { name: "Pending Review (0)", active: false },
];
const AdminListing = () => {
  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px] py-5">
        <div className="flex items-center justify-between gap-4 max-xl:flex-col max-xl:justify-start max-xl:items-start">
          <BackButton buttonText="Listing" btnProperty={"pb-0"} />
          <div className="flex justify-between max-w-fit max-lg:">
            {listingTopArr &&
              listingTopArr.length > 0 &&
              listingTopArr.map((data, index) => {
                return (
                  <>
                    {!data.active ? (
                      <p className="p-2 px-3 mr-4 text-sm rounded-full w-max bg-offWhite text-darkGrey h-max">
                        {data.name}
                      </p>
                    ) : (
                      <p className="p-2 px-3 mr-4 text-sm text-white rounded-full w-max bg-blackLight h-max">
                        {data.name}
                      </p>
                    )}
                  </>
                );
              })}
          </div>
          <div className="opacity-1 invisible w-[84px] max-xl:hidden"></div>
        </div>
        <div className="flex content-center justify-between mt-4 mb-6">
          {/* <div className="filter border border-solid border-greyishBrown rounded-lg p-2 w-[185px] h-[52px] text-darkGrey text-base">
            <Image
              className="relative top-[12px] left-[145px]"
              src={arrowDownSolid}
              alt={""}
            />
            <div>Filter</div>
          </div> */}
          <Dropdown dropdownBeforeImg="hidden" />
          <div className="center-div lg:flex justify-center items-start w-[507px] gap-4">
            <div className="relative search-bar ">
              <Image
                className="absolute top-[50%] -translate-y-[50%] left-4"
                src={searchIcon}
                alt={""}
              />
              <input
                className="pl-12 w-[375px] h-[52px] border border-solid border-greyishBrown rounded-lg"
                type="text"
                placeholder="Search by keyword"
              />
            </div>
            <div className="search-button">
              <button className="w-[116px] h-[52px] bg-blackLight rounded-lg text-white text-base">
                Search
              </button>
            </div>
          </div>

          <button className="py-3 px-6 border border-solid border-blackLight rounded-lg w-max h-[52px] text-base">
            Contact Support
          </button>
        </div>
        <AdminBookingHistoryCard
          image={BookingHistoryImage1}
          bookingDate="15 Jun 2022 → 20 Jun 2022"
          remainingTime="2 Days, 12:00:00"
        />
        <AdminBookingHistoryCard
          image={BookingHistoryImage2}
          bookingDate="15 Jun 2022 → 20 Jun 2022"
          remainingTime="2 Days, 12:00:00"
        />
        <AdminBookingHistoryCard
          image={BookingHistoryImage3}
          bookingDate="15 Jun 2022 → 20 Jun 2022"
          remainingTime="2 Days, 12:00:00"
        />
      </div>
    </React.Fragment>
  );
};

export default AdminListing;
