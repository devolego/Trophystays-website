import React from "react";

const OtpInput = (props) => {
  const { value, onChange } = props;

  const arr = new Array(6).fill("-");
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const elem = e.target;
    const val = e.target.value;
    
    const valueArr = value.split("");
    valueArr[index] = val;
    const newVal = valueArr.join("").slice(0, 6);
    onChange(newVal);

    if (val) {
      const next = elem.nextElementSibling as HTMLInputElement | null;
      next?.focus();
    }
  };
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const current = e.currentTarget;
    if (e.key === "ArrowLeft" || e.key === "Backspace") {
      const prev = current.previousElementSibling as HTMLInputElement | null;
      prev?.focus();
      prev?.setSelectionRange(0, 1);
      return;
    }

    if (e.key === "ArrowRight") {
      const prev = current.nextSibling as HTMLInputElement | null;
      prev?.focus();
      prev?.setSelectionRange(0, 1);
      return;
    }
  };
  return (
    <div className="flex gap-2 mb-[100px]">
      {arr.map((_, index) => {
        return (
          <input
            key={index}
            className="py-[16px] px-5 border border-greyishBrown rounded-lg w-[55px]"
            type="text"
            inputMode="numeric"
            maxLength={1}
            placeholder="-"
            onChange={(e) => handleInputChange(e, index)}
            onKeyUp={handleKeyUp}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
