import React, { useEffect, useState } from "react";
// import neighbourhoodImage from "../../images/abu-dhabi.png";
import neighbourhoodImage from "../../images/main-downtown.jpg";
// import sharjahImg from "../../images/sharjah.png";
import sharjahImg from "../../images/main-dubaimarina.jpg";
// import ummalquwainImg from "../../images/ummalquwain.png";
import ummalquwainImg from "../../images/main-businessbay.jpg";
// import fujairahImg from "../../images/fujairah.png";
import fujairahImg from "../../images/main-jvc.jpg";
import Image from "next/image";
import { josefin } from "../../utils/utilsFonts";
import '../../public/styles/maxHeight.css'
import axios from 'axios';

const Neighbourhoods = () => {

  const [apartmentData, setApartmentData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

//   {
//     "JVC": 4,
//     "Downtown Dubai": 4,
//     "Business Bay": 16,
//     "Dubai Marina": 8
// }

  function buildString(data) {
    // console.log(data.JVC)
    return {
      JVC: `${data.JVC} Areas`,
      DowntownDubai: `${data["Downtown Dubai"]} Areas`,
      BusinessBay: `${data["Business Bay"]} Areas`,
      DubaiMarina: `${data["Dubai Marina"]} Areas`
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://trophy-test-281550a6867d.herokuapp.com/listings?index=true')
        // setApartmentData(response.data)
        return response.data
        console.log('Apartment data', response.data)
      } catch (error) {
        console.error('There has been a problem with fetching some data', error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData().then((data) => {
      setApartmentData(buildString(data))
    })
  }, [])



  return (
    <div className="py-[120px] lg:px-[75px] mx-auto ">
      <div className="pb-[50px] max-w-[460px]">
        <h3
          className={`text-[32px] lg:text-[40px] text-black ${josefin.className}`}
        >
          Neighbourhoods
        </h3>
        <p className="text-sm text-darkGrey lg:text-base">
          
From a suite for a night to a residence for as long as you desire, theres a stay for every occasion.
        </p>
      </div>

      <div>
        <Image
          className="rounded-[16px] object-cover w-full max-lg:hidden maxHeight objectPosTop"
          src={neighbourhoodImage}
          alt=""
          width={1200}
          height={300}
        />
        <div className="grid gap-6 pt-6 lg:grid-cols-image-gallery-4 max-lg:grid-cols-2 max-lg:gap-[15px]">
          <div className="flex flex-col ">
            <Image
              className="rounded-[16px] object-cover w-full lg:hidden grow"
              src={neighbourhoodImage}
              alt=""
            />
            <div className="max-lg:pt-4">
              <span className="max-lg:text-xs lg:text-sm text-darkGrey ">
                {apartmentData && apartmentData.DowntownDubai}
              </span>
              <h3
                className={`max-lg:text-2xl lg:text-[32px] leading-[32px] ${josefin.className}`}
              >
                DownTown Dubai
              </h3>
            </div>
          </div>

          <div>
            <Image
              className="rounded-[16px] object-cover w-full "
              src={sharjahImg}
              alt=""
              width={320}
              height={280}
            />
            <div className="pt-4">
              <span className="max-lg:text-xs lg:text-sm text-darkGrey">
              {apartmentData && apartmentData.DubaiMarina}
              </span>
              <h3 className={`text-[32px] leading-[32px] ${josefin.className}`}>
                Dubai Marina
              </h3>
            </div>
          </div>

          <div>
            <Image
              className="rounded-[16px] object-cover w-full"
              src={ummalquwainImg}
              alt=""
              width={320}
              height={280}
            />
            <div className="pt-4">
              <span className="max-lg:text-xs lg:text-sm text-darkGrey">{apartmentData && apartmentData.BusinessBay}</span>
              <h3 className={`text-[32px] leading-[32px] ${josefin.className}`}>
                BusinessBay
              </h3>
            </div>
          </div>

          <div>
            <Image
              className="rounded-[16px] object-cover w-full"
              src={fujairahImg}
              alt=""
            />
            <div className="pt-4">
              <span className="max-lg:text-xs lg:text-sm text-darkGrey">{apartmentData && apartmentData.JVC}</span>
              <h3 className={`text-[32px] leading-[32px] ${josefin.className}`}>
                JVC
              </h3>
            </div>
          </div>

          {/* {neighbourhoodsContent.map((value) => {
            return (
              <div key={value.id}>
                <Image
                  className="rounded-[16px] object-cover w-full"
                  src={`../images/${value.image}`}
                  alt=""
                  width="100"
                  height="100"
                />
                <div className="pt-4">
                  <span className="text-sm text-darkGrey ">
                    {value.subHeading}
                  </span>
                  <h3
                    className={`text-[32px] leading-[32px] ${josefin.className}`}
                  >
                    {value.heading}
                  </h3>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Neighbourhoods;
