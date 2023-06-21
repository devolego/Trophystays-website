import React from "react";
import SubBanner from "../Common/SubBanner";
import subBannerImg from "../../images/blog-img.png";
import ImageText from "../Common/ImageText";
import blogSubImg from "../../images/blog-img-2.png";
import CardImgWithText from "../Common/CardImgWithText";
const BlogPage = () => {
  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px]">
        <SubBanner imageSrc={subBannerImg} bannerHeading="Blogs" />
        <ImageText
          imgeSrc={blogSubImg}
          imgTextClasses="my-[120px]"
          headingText="News"
          subHeading="Pricing: Simpler The Better"
          paraText="What began as a journey to provide a better stay has grown into a celebration of modern design and exceptional comfort."
          dateText="May 02, 2023"
        />
      </div>
      {/* <CardImgWithText
        cardClass=""
        cardImage=""
        cardImageStyle=""
        cardContentClasses=""
        cardHeading=""
        cardHeadingStyle=""
        cardPara=""
        cardParaStyle=""
        reviewUserName=""
        reviewUserNameStyling=""
        cardLink=""
        cardContent=""
      /> */}
    </React.Fragment>
  );
};

export default BlogPage;
