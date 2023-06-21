import Image from "next/image";
import Link from "next/link";
import React from "react";
import kitcherIcon from "../../images/kitchen-filter-icon.png";
import homeIcon from "../../images/homes-filter-icon.png";
import campingIcon from "../../images/camping-filter-icon.png";
import mountainIcon from "../../images/mountain-filter-icon.png";
import castlesIcon from "../../images/castles-filter-icon.png";
import lsland from "../../images/island-filter-icon.png";
import farms from "../../images/farms-filter-icon.png";
import lakeView from "../../images/lake-filter-icon.png";

const FilterImgTile = () => {
  return (
    <div className="grid grid-cols-8 gap-4">
      <Link href="/">
        <Image src={kitcherIcon} alt="" />
      </Link>

      <Link href="/">
        <Image src={homeIcon} alt="" />
      </Link>

      <Link href="/">
        <Image src={campingIcon} alt="" />
      </Link>

      <Link href="/">
        <Image src={mountainIcon} alt="" />
      </Link>

      <Link href="/">
        <Image src={castlesIcon} alt="" />
      </Link>

      <Link href="/">
        <Image src={lsland} alt="" />
      </Link>

      <Link href="/">
        <Image src={farms} alt="" />
      </Link>

      <Link href="/">
        <Image src={lakeView} alt="" />
      </Link>
    </div>
  );
};

export default FilterImgTile;
