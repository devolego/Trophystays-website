import React from "react";
import { josefin } from "../../utils/utilsFonts";
import { aboutGoal } from "../../utils/utilsItems";
import Button from "../Common/Button";

const Goals = () => {
  return (
    <div className="my-[50px]">
      <h3
        className={`text-[40px] leading-[45px] font-bold ${josefin.className} mb-6`}
      >
        Goals
      </h3>
      <ul>
        {aboutGoal.map((items) => {
          return (
            <div key={items.id} className="mb-8 ml-5">
              <p className="flex items-center font-bold text-base mb-4 before:bg-arrow-right-primary before:bg-no-repeat before:bg-center before:w-[20px] before:h-[20px] before:inline-flex before:-ml-5 pl-2">
                {items.title}
              </p>
              <p className="font-bold text-base mb-4 pl-2">{items.content}</p>
            </div>
          );
        })}
      </ul>

      <div className="flex justify-between gap-[30px]">
        <Button
          ButtonText="Book Now"
          ButtonClasses="bg-primary border border-primary text-white w-full text-center font-bold py-3"
        />
        <Button
          ButtonText="Gallery"
          ButtonClasses="bg-white border border-primary text-primary  w-full text-center font-bold py-3"
        />
      </div>
    </div>
  );
};

export default Goals;
