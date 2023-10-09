"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef, useContext} from "react";
import { josefin } from "../../utils/utilsFonts";
import Button from "./Button";
import Dropdown from "./Dropdown";
import locationIcon from "../../images/location.png";
import termIcon from "../../images/term-icon.png";
import bedroomIcon from "../../images/bedroom.png";
import arrivalIcon from "../../images/arrival.png";
// import Calendar from "../Common/Calendar"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../public/styles/DatePickerStyles.css';
import { useRouter } from 'next/navigation';
import { DataContext } from '../DataContext';
import { usePathname, useSearchParams } from 'next/navigation';

import {
  arrivalItems,
  bedroomsItems,
  departureItems,
  locationFilterItems,
  termMenuItems,
} from "../../utils/utilsItems";
import SearchBoxDropdown from "./SearchBoxDropdown";
import { getListings } from '../../service/service';

const SearchBox = ({ searchClasses, areas, handleOnSearch }) => {

  const router = useRouter()

  const [locationItems, setLocationItems] = useState(false);
  const [termItem, setTermItem] = useState(false);
  const [bedRoomItem, setBedRoomItem] = useState(false);
  const [arrivalMenuItem, setArrivalMenuItem] = useState(false);
  const [departureMenuItem, setDepartureMenuItem] = useState(false);

  console.log(areas)


  const [selectedArea, setSelectedArea] = useState('');
  const [selectedTerm, setSelectedTerm] = useState('Term');
  const [selectedBedroom, setSelectedBedroom] = useState('Bedrooms');

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [minDepartureDate, setMinDepartureDate] = useState(null);

  const arrivalRef = useRef(null);
  const departureRef = useRef(null);
  const locationRef = useRef(null)
  const termRef= useRef(null);
  const bedroomsRef = useRef(null)

  
  // const handleStartDateChange = (date, event) => {
  //   event?.stopPropagation();
  //   setStartDate(date);
  
  //   if (date) {
  //     const newMinDepartureDate = new Date(date);
  //     newMinDepartureDate.setDate(newMinDepartureDate.getDate() + 3);
  //     setMinDepartureDate(newMinDepartureDate);
  //     setSearchHeading(`Arrival: ${date.toLocaleDateString()}`); // Update the search heading
  //   }
  // };
  
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        arrivalRef.current && 
        !arrivalRef.current.contains(event.target) &&
        departureRef.current && 
        !departureRef.current.contains(event.target) &&
        locationRef.current && 
        !locationRef.current.contains(event.target) &&
        termRef.current && 
        !termRef.current.contains(event.target) &&
        bedroomsRef.current && 
        !bedroomsRef.current.contains(event.target)
      ) {
        setArrivalMenuItem(false);
        setDepartureMenuItem(false);
        setLocationItems(false);
        setTermItem(false);
        setBedRoomItem(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const handleAreaSelect = (area) => {
    setSelectedArea(area);
  };

  const handleLocationItems = () => {
    setLocationItems(!locationItems);
  };
  const handelTermItems = () => {
    setTermItem(!termItem);
  };
  const handleBedRoomItem = () => {
    setBedRoomItem(!bedRoomItem);
  };
  const handleArrivalMenuItem = (event) => {
    if (event.target.closest(".react-datepicker")) {
      return;
    }
    setArrivalMenuItem((prev) => !prev);
  };
  
  const handleDepartureMenuItem = (event) => {
    if (event.target.closest(".react-datepicker")) {
      return;
    }
    setDepartureMenuItem((prev) => !prev);
  };




  const [searchHeading, setSearchHeading] = useState('Arrival');
  const [aDate, setADate] = useState<String | null>('Arrival');
  const [bDate, setBDate] = useState<String | null>('Departure');

  const convertDate = (originalDate) => {
    const day = originalDate.getDate().toString().padStart(2, '0');
    const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
    const year = originalDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`
    console.log(formattedDate);
    return formattedDate
  }

  const path = usePathname()


  // const {data, setData} = useContext(DataContext);

  const handleSubmit = (e) => {



    // Gather the searchHeading values and construct a payload to send to your API
    e.stopPropagation()




    // console.log('Clicked!@')
    const searchPayload = {
      location: selectedArea,
      term: selectedTerm,
      bedrooms: selectedBedroom,
      arrival: aDate,
      departure: bDate,
    };

    if (searchPayload.term === 'Term') {
      searchPayload.term = ''
    }

    if ( searchPayload.bedrooms === 'Bedrooms') {
      searchPayload.bedrooms = ''
    }

    if (searchPayload.arrival === 'Arrival') {
      searchPayload.arrival = ''
    }

    if (searchPayload.departure === 'Departure') {
      searchPayload.departure= ''
    }

    console.log('payload', searchPayload);

    if (searchPayload.bedrooms) {
      searchPayload.bedrooms = parseInt(searchPayload.bedrooms.match(/\d+/)[0]).toString();
    }

    if (searchPayload.term) {
      searchPayload.term = searchPayload.term.charAt(0).toLowerCase() + searchPayload.term.slice(1);
    }
    
    
    

    if (path !== '/stay-with-us') {
      router.push('/stay-with-us?propagated=true&data=' + encodeURIComponent(JSON.stringify(searchPayload)))
    } else {
      getListings(searchPayload.term, searchPayload.arrival, searchPayload.departure, searchPayload.bedrooms, searchPayload.location)
      .then((response) => {
        handleOnSearch(response)
        
      })
      .catch((err) => {
        console.log(err)
      })
    }

    // You can now send the searchPayload to your API using your preferred method (e.g., fetch or axios).
    // Example fetch request:
    // getListings(searchPayload.term, searchPayload.arrival, searchPayload.departure, searchPayload.bedrooms, searchPayload.location)
    //   .then((response) => {
    //     // Handle the response from your API here

    //     console.log(response);
    //     setData(response)
    //     router.push('/stay-with-us?data=')

    //     if (response) {
    //       // The request was successful
    //       console.log("Search submitted successfully!");
    //       // You can add further actions here if needed.
    //     } else {
    //       // Handle errors here if the request was not successful
    //       console.error("Error submitting search:", response.status, response);
    //     }
    //   })
    //   .catch((error) => {
    //     // Handle network errors or other exceptions here
    //     console.error("Error submitting search:", error);
    //   });
  };

  
  return (
    <div
      className={`bg-white p-[30px] rounded-xl shadow-md max-w-[1190px] w-full m-auto relative z-1 ${searchClasses} xl:max-h-[166px] h-full max-xl:h-max`}
    >
      <h3 className={`text-2xl ${josefin.className} mb-4`}>
        Search for your most needed hotels.
      </h3>
      <div className="flex justify-between gap-4 relative max-xl:grid max-xl:grid-cols-3 max-md:grid-cols-1">
        <div
          className="relative xl:w-[185px] max-xl:w-full"
          onClick={handleLocationItems}
        >
          <SearchBoxDropdown imageSrc={locationIcon} seachHeading={selectedArea || "Location"} selectedDate={undefined} onChange={undefined} placeholderText={undefined} minDate={undefined} isDatePicker={false}/>
          {locationItems && (
            <div ref={locationRef} className="p-4 rounded-xl grid grid-cols-2 md:w-[587px] bg-white mt-3 max-md:grid-cols-1 absolute bg-white max-md:w-full" style={{zIndex: 100}}>
              {areas.map((area) => {
                return (
                  <div
                    key={area._id}
                    className="odd:border-r odd:border-[#E1D9CE] odd:mr-[30px] max-md:border-none cursor-pointer hover:bg-gray-200"
                    onClick={() => handleAreaSelect(area.area)}
                    
                  >
                     {area.area}
                    {/* <h2 className="text-base font-semibold mt-[30px]">
                      {items.heading}
                    </h2> */}
                    {/* {items.menuItem.map((value, index) => {
                      return (
                        <div key={index} className="font-extralight p-">
                          {value}
                        </div>
                      ); */}
                    {/* })} */}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 2nd box */}
        <div
          className="relative xl:w-[185px] max-xl:w-full"
          onClick={handelTermItems}
        >
          <SearchBoxDropdown imageSrc={termIcon} seachHeading={selectedTerm} selectedDate={undefined} onChange={undefined} placeholderText={undefined} minDate={undefined} isDatePicker={false}/>
          {termItem && (
  <div ref={termRef} className="p-4 rounded-xl bg-white mt-3 absolute z-[1] bg-white w-full">
    <div 
      className="cursor-pointer hover:bg-gray-200" 
      onClick={() => setSelectedTerm('Monthly')}
    >
      <h2 className="text-base">Monthly</h2>
    </div>
    <div 
      className="cursor-pointer hover:bg-gray-200" 
      onClick={() => setSelectedTerm('Daily')}
    >
      <h2 className="text-base">Daily</h2>
    </div>
  </div>
)}
        </div>

        {/* 3rd box */}
        <div
          className="relative xl:w-[185px] max-xl:w-full"
          onClick={handleBedRoomItem}
        >
          <SearchBoxDropdown imageSrc={bedroomIcon} seachHeading={selectedBedroom} selectedDate={undefined} onChange={undefined} placeholderText={undefined} minDate={undefined} isDatePicker={false}/>
          {bedRoomItem && (
  <div ref={bedroomsRef} className="p-4 rounded-xl bg-white mt-3 absolute z-[1] bg-white w-full">
    {[1, 2, 3, 4, 5].map((bedroomCount, index) => {
      return (
        <div 
          key={index} 
          className="cursor-pointer hover:bg-gray-200" 
          onClick={() => setSelectedBedroom(`${bedroomCount} Bedroom${bedroomCount > 1 ? 's' : ''}`)}
        >
          <h2 className="text-base">{bedroomCount} Bedroom{bedroomCount > 1 ? 's' : ''}</h2>
        </div>
      );
    })}
  </div>
)}

        </div>

        {/* 4th box */}
        <div
          className="relative xl:w-[185px] max-xl:w-full"
          onClick={handleArrivalMenuItem}
        >
          <SearchBoxDropdown imageSrc={arrivalIcon} seachHeading={aDate} selectedDate={startDate} onChange={(date) => setStartDate(date)} placeholderText={undefined} minDate={undefined} isDatePicker={true}/>
          {arrivalMenuItem && (
            <div ref={arrivalRef} className="p-4 rounded-xl grid grid-cols-2 bg-white mt-3 absolute z-[1] bg-white w-full z-50">
              <DatePicker
                selected={startDate}
                onChange={(date, event) => {
                  event?.stopPropagation();
                  const formattedDate = convertDate(date)
                  setADate(formattedDate)
                  console.log(formattedDate)

                  setStartDate(date);
                  console.log('start', date);

                  // const d = new Date(startDate).toLocaleDateString('fr-FR')
                  // setADate(d)
                  // console.log('new Date', d)
        
                  // if (date) {
                  //   const newMinDepartureDate = new Date(date);
                  //   newMinDepartureDate.setDate(newMinDepartureDate.getDate() + 3);
                  //   setMinDepartureDate(newMinDepartureDate);
                  // }
        
                  setArrivalMenuItem(false); // Close the dropdown
                }}
                // placeholderText="Select arrival date"
                className="text-base text-darkGrey"
                inline
                showYearDropdown
                format='dd-MM-yyyy'
                />
            </div>
          )}
        </div>

        {/* 5th box  */}
        <div
          className="relative xl:w-[185px] max-xl:w-full"
          onClick={handleDepartureMenuItem}
        >
          <SearchBoxDropdown imageSrc={arrivalIcon} seachHeading={bDate} selectedDate={endDate} onChange={(date) => setEndDate(date)} placeholderText={undefined} minDate={startDate} isDatePicker={true}/>
          {departureMenuItem && (
            <div ref={departureRef} className="p-4 rounded-xl grid grid-cols-2 bg-white mt-3 absolute z-[1] bg-white w-full">
              <DatePicker
                selected={endDate}
                onChange={(date, event) => {
          event?.stopPropagation();

                  const formattedDate = convertDate(date)
                  setBDate(formattedDate)

          if (date >= minDepartureDate) {
            setEndDate(date);
          }
          setDepartureMenuItem(false); // Close the dropdown
        }}
                minDate={startDate}
                // placeholderText="Select departure date"
                className="text-base text-darkGrey"
                inline
                showYearDropdown
              />
            </div>
          )}
        </div>

        <Button
          ButtonText={"Search"}
          ButtonClasses={
            "w-max flex items-center text-white justify-center max-h-[58px] max-xl:w-full max-md:py-3"
          }
          ButtonClicked={handleSubmit}
        ></Button>
      </div>
    </div>
  );
};

export default SearchBox;
