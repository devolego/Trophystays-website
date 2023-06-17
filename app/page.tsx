import Image from "next/image";
import Banner from "../components/Banner";
import Neighbourhoods from "../components/Neighbourhoods";
import HotelSuggestions from "../components/HotelSuggestions";
import EveryThingRightHere from "../components/EveryThingRightHere";
import ImageGallerySection from "../components/ImageGallerySection";
import LearnMore from "../components/LearnMore";
// import ClientReviews from "../components/ClientReviews";

export default function Home() {
  return (
    <div>
      <div className="container-2xl px-5 min-lg:px-[50px]">
        <Banner />
        <Neighbourhoods />
      </div>
      <HotelSuggestions />
      <div className="container-2xl px-5 min-lg:px-[50px]">
        <EveryThingRightHere />
        <ImageGallerySection />
        <LearnMore />
      </div>

      {/* <ClientReviews /> */}
    </div>
  );
}
