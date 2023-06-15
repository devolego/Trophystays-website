import Image from "next/image";
import { josefin } from "../utils/utilsItems";
import Banner from "../components/Banner";
import Neighbourhoods from "../components/Neighbourhoods";
import HotelSuggestions from "../components/HotelSuggestions";

export default function Home() {
  return (
    <div>
      <Banner />
      <Neighbourhoods />
      <HotelSuggestions />

      {/* Hello */}
    </div>
  );
}
