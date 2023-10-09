'use client'
import Image from "next/image";
import React from "react";
import { josefin } from "../../utils/utilsFonts";
import { useRouter } from 'next/navigation';

const Listing = (props: any) => {

  const router = useRouter()


  const handleViewClick = () => {
    const queryObject = {
      tab: 'insights',
      ownerRezId: props.data.ownerRezId,
      internalCode: props.data.internalCode
    }

    const queryString = new URLSearchParams(queryObject).toString();
    // router.push(`/admin?${queryString}`)
    // Update the window location to force a page refresh
     window.location.href = `/admin?${queryString}`;
  }
  return (
    <>
      <div className="flex">
        <Image src={props.data.images[0].croppedUrl} alt="" width={50} height={50}/>
        <div className="w-full ml-5">
          <p className={`${josefin.className}`}>{props.data.internalCode}</p>
          <div className="flex flex-wrap justify-end gap-4 mt-3 flex-end">
            {/* <p className="text-darkGrey max-md:text-sm">Revenue:</p>{" "} */}
            <p className="text-primary max-md:text-sm max-md:font-medium md:font-semibold underline" onClick={handleViewClick}>
              View
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
