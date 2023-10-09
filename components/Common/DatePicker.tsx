import React, { useEffect, useState } from "react";
// import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import { josefin } from "../../utils/utilsFonts";
import Button from "./Button";
import {DateRangePicker} from 'react-date-range'
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const DatePicker = (props) => {
  const [value, onChange] = useState(new Date());
  const [moveIn, setMoveIn] = useState(false);
  const [dates, setDates] = useState(null)

  console.log('Picker loaded')
  console.log('dates,', props.disabledDates)

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);


  useEffect(() => {
    // const dateStrings = props.disabledDates
    // const dateObjects = dateStrings.map(dateString => new Date(dateString));
    // setDates(dateObjects)
  }, [])


  return (
    <DateRangePicker 
        onChange={item => setRange([item.selection])}
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        ranges={range}
        months={1}
        direction='horizontal'
        className="rounded"
        format="yyyy-MM-dd"
        disabledDates={props.disabledDates.map(date => new Date(date))}
        // tileDisabled={({date, view}) =>
        //     (view === 'month') && // Block day tiles only
        //     props.disabledDates.some(disabledDate =>
        //     date.getFullYear() === disabledDate.getFullYear() &&
        //     date.getMonth() === disabledDate.getMonth() &&
        //     date.getDate() === disabledDate.getDate()
        //     )}
      />
    // <div className="bg-offWhite w-[531px] h-[550px] p-6 rounded-2xl">
    //   <div className="flex justify-between">
    //     <div className="flex items-center gap-2">
    //       <h6 className="text-2xl font-medium">21 Days</h6>
    //       <p className="text-darkGrey text-sm">1 bed • 1 bath</p>
    //     </div>
    //     <div>
    //       <div
    //         className="flex border rounded-lg border-greyishBrown w-max cursor-pointer"
    //         onClick={() => {
    //           setMoveIn(!moveIn);
    //         }}
    //       >
    //         <div
    //           className={`flex rounded-lg h-max px-6 py-3 items-center text-sm ${
    //             moveIn ? "bg-secondary text-white " : ""
    //           }`}
    //         >
    //           <p>Move in</p>
    //         </div>
    //         <div
    //           className={`flex rounded-lg h-max px-6 py-[10px] items-center ${
    //             moveIn ? "" : "bg-secondary text-white"
    //           }`}
    //         >
    //           <p>Move Out</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <DateRangePicker
    //     // onChange={onChange}
    //     value={value}
    //     isOpen={true}
    //     format="dd MMM,y"
    //     closeCalendar={false}
    //     monthAriaLabel="Month"
    //     // disabledDates={props.disabledDates}
    //     disabledDay={(date) => props.disabledDates.includes(date.toISOString().split('T')[0])}
    //   /> */}
      

    //   <div className="flex justify-between mt-5">
    //     <div className="flex gap-3">
    //       {/* <div className="flex items-center">
    //         <span className="w-3 h-3 bg-[#9B99E3] rounded-[50%] mr-3"></span>
    //         <p className={`${josefin.className}`}>Holiday</p>
    //       </div> */}

    //       <div className="flex items-center">
    //         <span className="w-3 h-3 bg-darkGrey rounded-[50%] mr-3"></span>
    //         <p className={`${josefin.className}`}>Unavailable</p>
    //       </div>
    //     </div>

    //     <div className="flex gap-3">
    //       <Button
    //         ButtonText="Save"
    //         ButtonClasses="bg-primary border border-primary text-white"
    //       />
    //       <Button
    //         ButtonText="Clear"
    //         ButtonClasses="bg-white border border-primary text-primary"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default DatePicker;
