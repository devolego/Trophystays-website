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
      <Banner />
      <Neighbourhoods />
      <HotelSuggestions />
      <EveryThingRightHere />
      <ImageGallerySection />
      <LearnMore />
      {/* <ClientReviews /> */}
      {/* Hello */}
    </div>
  );
}
