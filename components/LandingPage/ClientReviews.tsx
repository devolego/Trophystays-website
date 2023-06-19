import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardImgWithText from "../Common/CardImgWithText";
import QuoteIcon from "../../images/quote.png";
import { josefin } from "../../utils/utilsFonts";

const ClientReviews = () => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <div className="py-[140px]">
      {/* Hello World.
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider> */}
      <h2
        className={`text-[40px] mb-4 max-w-[452px] w-full ${josefin.className}`}
      >
        What Our Clients Says About Us
      </h2>

      <div className="grid grid-cols-3 px-[124px] gap-[30px]">
        <CardImgWithText
          cardClass="bg-lightBrown px-[34px] pb-11"
          cardImage={QuoteIcon}
          cardImageStyle="h-7 object-contain mt-[65px] mb-10"
          cardHeading="Location and apartment is amazing and Anna’s keep things updated I give 5star highly recommended"
          cardHeadingStyle="text-center"
          reviewUserName="By Waqas L"
          reviewUserNameStyling="text-primary text-base text-center pb-4"
          cardPara="stayed at Luxurious 1 BR Apt at Address Residence Jumeirah Resort in May 2023"
          cardParaStyle={"text-darkGrey text-center"}
        />

        <CardImgWithText
          cardClass={`bg-lightBrown px-[34px] pb-11`}
          cardImage={QuoteIcon}
          cardImageStyle="h-7 object-contain mt-[65px] mb-10"
          cardHeading="The place was very clean and the whole prep was was very smooth and organized and it was really easy to.."
          cardHeadingStyle="text-center"
          reviewUserName="By Waqas L"
          reviewUserNameStyling="text-primary text-base text-center pb-4"
          cardPara="Address Residence Jumeirah Resort in May 2023"
          cardParaStyle="text-darkGrey text-center"
        />

        <CardImgWithText
          cardClass={`bg-lightBrown px-[34px] pb-11`}
          cardImage={QuoteIcon}
          cardImageStyle="h-7 object-contain mt-[65px] mb-10"
          cardHeading="Location and apartment is amazing and Anna’s keep things updated I give 5star highly recommended"
          cardHeadingStyle="text-center"
          reviewUserName="By Waqas L"
          reviewUserNameStyling="text-primary text-base text-center pb-4"
          cardPara="stayed at Luxurious 1 BR Apt at Address Residence Jumeirah Resort in May 2023"
          cardParaStyle="text-darkGrey text-center"
        />
      </div>
    </div>
  );
};

export default ClientReviews;