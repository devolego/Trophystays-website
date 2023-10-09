'use client'
import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import image from '../../images/fujairah.png'
import '../../public/styles/CarouselStyles.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'black', right: '1.5rem', zIndex: '1' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: 'black', left: '1.5rem', zIndex: '1' }}
        onClick={onClick}
      />
    );
  }

export default class Carousel extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        }
        return (
        <div className='relative overflow-hidden'>
            {/* <h2> Single Item</h2> */}
            <Slider {...settings} className='h-[450px]'>
                <div>
                    <Image
                        className="w-full object-cover h-[450px]  md:!w-[40vw]"
                        src={image}
                        alt=""
                        width={500}  // specify a width here
                        height={240} // specify a height here
                    />
                </div>
                <div>
                    <Image
                        className="w-full h-[240px] object-cover"
                        src={image}
                        alt=""
                        width={500}  // specify a width here
                        height={240} // specify a height here
                    />
                </div>
                <div>
                    <Image
                        className="w-full h-[240px] object-cover"
                        src={image}
                        alt=""
                        width={500}  // specify a width here
                        height={240} // specify a height here
                    />
                </div>
                <div>
                    <Image
                        className="w-full h-[240px] object-cover"
                        src={image}
                        alt=""
                        width={500}  // specify a width here
                        height={240} // specify a height here
                    />
                </div>
            </Slider>
            <div className="vignette absolute inset-0"></div>
        <div className="absolute bottom-[40px] left-[50px] flex gap-5 max-md:flex-wrap max-md:bottom-5 max-md:gap-3 max-md:pr-4">
          <span className="px-3 py-2 text-white rounded-lg bg-black/50">
            {/* {property?.address?.street1}, {property?.address?.city}000 */}
            damn
          </span>
          {/* <span className="px-3 py-2 text-white rounded-lg bg-black/50">
            Available from: 18 May 2023
          </span> */}
          <span className="px-3 py-2 text-white rounded-lg bg-black/50">
            See All
          </span>
        </div>
      </div>
        )
    }
}