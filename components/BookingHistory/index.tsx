import React from "react";
import BackButton from "../Common/BackButton";
import FilterBar from "./FilterBar";

const BookingHistory = () => {
  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px] py-10">
        <BackButton buttonText="History of Bookings" />
        <FilterBar />
      </div>
    </React.Fragment>
  );
};

export default BookingHistory;
