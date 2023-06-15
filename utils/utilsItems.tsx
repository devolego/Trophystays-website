import { Josefin_Sans } from "next/font/google";
import sharjahImg from "../images/sharjah.png";
import ummalquwainImg from "../images/ummalquwain.png";
import fujairahImg from "../images/fujairah.png";
// const inter = Inter({ subsets: ["latin"] });
export const josefin = Josefin_Sans({
  subsets: ["latin"],
});

export const navbarItems = [
  "About Us",
  "Stay with Us",
  "Host with Us",
  "Reviews",
  "Blogs",
  "Contact Us",
];

// export const neighbourhoodsContent = [
//   {
//     id: 1,
//     subHeading: "2 Neighbourhoods",
//     heading: "Sharjah",
//     image: "sharjah.png",
//   },
//   {
//     id: 2,
//     subHeading: "4 Neighbourhoods",
//     heading: "Umm Al Qaiwain",
//     // image: { ummalquwainImg },
//     image: "sharjah.png",
//   },
//   {
//     id: 3,
//     subHeading: "3 Neighbourhoods",
//     heading: "Fujairah",
//     // image: { fujairahImg },
//     image: "sharjah.png",
//   },
// ];