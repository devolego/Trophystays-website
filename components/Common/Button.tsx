import React from "react";

const Button = ({ ButtonText, ButtonClasses }) => {
  return (
    <div
      className={`bg-blackLight rounded-[8px] px-[31px] py-2 laptopScreen:text-base ${ButtonClasses}`}
    >
      {ButtonText}
    </div>
  );
};

export default Button;
