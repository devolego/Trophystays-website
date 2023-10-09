import React from 'react';
import Carousel from '../../components/BookingConfirmation/Carousel';

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-4 px-5 lg:px-[50px] ">
      <div className="col-span-3">
        {/* Content for left div */}
        <Carousel />
        <h2>The Arnold, 1621 E 6th St</h2>
        <div>Sleeps container</div>
        <div>Reviews Container</div>

      </div>
      <div className="col-span-2">
        {/* Content for right div */}
        {/* Disclaimer maybe? */}
        <div>Days left container</div>
        <div>Landmarks nearby Container</div>
        <div>Other listings Container</div>
        {/* <div>Featured Blogs Container</div> */}


      </div>
    </div>
  );
}
