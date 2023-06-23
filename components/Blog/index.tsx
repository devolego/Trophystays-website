import React from "react";
import SubBanner from "../Common/SubBanner";
import subBannerImg from "../../images/blog-img.png";
import subBannerMobileImg from "../../images/blog-responsive-img.png";
import ImageText from "../Common/ImageText";
import blogSubImg from "../../images/blog-img-2.png";
import blogGridImg from "../../images/blog-card-img.png";
import blogGridImgSec from "../../images/blog-card-img-2.png";
import blogGridImgThird from "../../images/blog-card-img-3.png";
import arrowRight from "../../images/blog-arrow-right.png";
import arrowRightMobile from "../../images/arrow-with-circle-dark.png";
import arrowLeft from "../../images/secondary-color-arrow.png";
import arrowLeftMobile from "../../images/arrow-with-circle.png";
import BlogCardTils from "./BlogCardTils";
import Image from "next/image";
import Link from "next/link";
const BlogPage = () => {
  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px]">
        <SubBanner
          imageDesktopSrc={subBannerImg}
          imageModbileSrc={subBannerMobileImg}
          bannerHeading="Blogs"
        />
        <ImageText
          imgeSrc={blogSubImg}
          imgTextClasses="my-[120px] max-lg:my-[80px] max-md:my-10"
          headingText="News"
          subHeading="Pricing: Simpler The Better"
          paraText="What began as a journey to provide a better stay has grown into a celebration of modern design and exceptional comfort."
          dateText="May 02, 2023"
        />
        <div>
          <div className="grid gird-cols-1 md:grid-cols-2 lg:px-[74px] gap-[30px] xl:grid-cols-3">
            <BlogCardTils
              id="1"
              blogCardImg={blogGridImg}
              heading="News"
              subHeading="Opens Three New Locations Across Some of Washington"
              dateText="May 02, 2023"
              paraText="What began as a journey to provide a better..."
            />

            <BlogCardTils
              id="2"
              blogCardImg={blogGridImgSec}
              heading="Design"
              subHeading="Unveil Sonder’s new photography creative concept"
              dateText="May 02, 2023"
              paraText="What began as a journey to provide a better..."
            />

            <BlogCardTils
              id="3"
              blogCardImg={blogGridImgThird}
              heading="Design"
              subHeading="Super Bowl 2023: Stay with Trophy"
              dateText="May 02, 2023"
              paraText="What began as a journey to provide a better stay has grown into a celebration of modern design and exceptional comfort."
            />

            <BlogCardTils
              id="4"
              blogCardImg={blogGridImgSec}
              heading="Design"
              subHeading="Unveil Sonder’s new photography creative concept"
              dateText="May 02, 2023"
              paraText="What began as a journey to provide a better..."
            />

            <BlogCardTils
              id="5"
              blogCardImg={blogGridImgThird}
              heading="Design"
              subHeading="Super Bowl 2023: Stay with Trophy"
              dateText="May 02, 2023"
              paraText="What began as a journey to provide a better stay has grown into a celebration of modern design and exceptional comfort."
            />

            <BlogCardTils
              id="6"
              blogCardImg={blogGridImg}
              heading="News"
              subHeading="Opens Three New Locations Across Some of Washington"
              dateText="May 02, 2023"
              paraText="What began as a journey to provide a better..."
            />
          </div>
        </div>
        <div className="flex w-full justify-between items-center my-[50px]">
          <Link href="/" className="flex items-center">
            <Image
              className="object-contain w-[55px] max-md:hidden"
              src={arrowLeft}
              alt=""
            />
            <Image
              className="object-contain w-[40px] md:hidden"
              src={arrowLeftMobile}
              alt=""
            />
            <p className="text-secondary text-base mx-5 max-md:mx-3 max-md:text-sm max-md:text-darkGrey">
              Older Posts
            </p>
          </Link>
          <Link href="/" className="flex items-center">
            <p className="text-primary text-base mx-5 max-md:mx-3 max-md:text-sm max-md:text-black">
              Newer Posts
            </p>
            <Image
              className="object-contain w-[55px] max-md:hidden"
              src={arrowRight}
              alt=""
            />
            <Image
              className="object-contain w-[40px] md:hidden"
              src={arrowRightMobile}
              alt=""
            />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogPage;
