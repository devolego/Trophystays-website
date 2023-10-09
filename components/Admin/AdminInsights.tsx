"use client";
import React, { useEffect, useMemo, useState } from "react";
import LineChartCommon from "./LineChartCommon";
import Rating from "../Common/Rating";
import Reviews from "./Reviews";
import ListingImg1 from "../../images/admin-listing1.png";
import ListingImg2 from "../../images/admin-listing2.png";
import Listing from "./Listing";
import { josefin } from "../../utils/utilsFonts";
import primaryArrowDown from "../../images/primary-arrow-down.png";
import Image from "next/image";
import BarChartCommon from "../Common/BarChartCommon";
import RibbonCalendar from '../Common/RibbonCalendar';
import ChartComponent from '../Common/ChartComponent';
import axios from 'axios';
import moment from 'moment';
import {useSearchParams} from 'next/navigation'


const AdminInsights = (props) => {

  const [revenueData, setRevenueData] = useState(null)
  const [ownerRezId, setOwnerRezId] = useState(null)
  const [totalrevenue, setTotalRevenue] = useState(null)
  const [lastThirtyDaysData, setLastThirtyDaysData] = useState(null)
  const [totalLastThirtyDaysData, setTotalLastThirtyDaysData] = useState(null)
  const [last30daysChartData, setLast30DaysChartData] = useState(null)

  const search = useSearchParams().get('internalCode')

  function getToken() {
    return localStorage.getItem('auth_token')
  }

  function getUser(overview = true) {
    const token = getToken();  // Define this function to retrieve the token
    fetch('https://trophy-test-281550a6867d.herokuapp.com/user', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(response => response.json())
  .then(data => {

    if (!overview) {
      setOwnerRezId(data?.landlord?.ownerRezId)
      fetchRevenueData(data?.landlord?.ownerRezId, false)
      fetchOccupancyData(data?.landlord?.ownerRezId, false)
      fetchArvDep(data?.landlord?.ownerRezId, false)
      console.log('Checking confidtiond')
      if (!apartmentsData) {
      console.log('Done  confidtiond')
        fetchApartments(data?.landlord?.ownerRezId);
        }
    } else if (data?.isLandlord) {
      setOwnerRezId(data?.landlord?.ownerRezId)
      fetchRevenueData(data?.landlord?.ownerRezId, true)
      fetchOccupancyData(data?.landlord?.ownerRezId, true)
      fetchArvDep(data?.landlord?.ownerRezId, true)
      if (!apartmentsData) {
      fetchApartments(data?.landlord?.ownerRezId);
      }
    } else {
      //Navigate to the home page or something
    }
  })
  .catch(error => console.error(error));
  }



  const fetchRevenueData = async (ownerRezId, overview = true) => {
    try {
      let response
      if (overview) {
        response = await axios.get(`https://trophy-test-281550a6867d.herokuapp.com/amounts/${ownerRezId}`);

      } else {
        response = await axios.get(`https://trophy-test-281550a6867d.herokuapp.com/amounts/${ownerRezId}?internalCodeGiven=${search}`);

      }
      console.log('RESPONSE',response.data)
      const properties = Object.keys(response.data)
      const formattedData = properties.map(property => {
        return response.data[property].map(item => {
          return {
            date: new Date(item.date),
            ownerAmount: item.ownerAmount
          }
        })
      })
      const flattenedData = formattedData.flat()
      // Sort the flattenedData array based on the date
      flattenedData.sort((a, b) => a.date - b.date);

      // console.log(flattenedData);

          // Get the date for 30 days ago
      const thirtyDaysAgo = new Date();
      // console.log(thirtyDaysAgo)
      thirtyDaysAgo.setHours(0, 0, 0, 0);
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      // console.log('Thirty days ago:', thirtyDaysAgo);

      // Filter the flattenedData array for items within the last 30 days
      // Now do the same for each itemDate in the filter callback
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const lastThirtyDaysData = flattenedData.filter(item => {
        const itemDate = new Date(item.date);
        itemDate.setHours(0, 0, 0, 0);
        return itemDate >= thirtyDaysAgo && itemDate <= today;
      });
    

      setLastThirtyDaysData(lastThirtyDaysData);
      // console.log('3000000', lastThirtyDaysData);


      // Step 1: Create an object to hold the aggregated data.
        let aggregatedData = {};

        // Step 2: Iterate through lastThirtyDaysData.
        lastThirtyDaysData.forEach(item => {
          // Format the date to a string (e.g., "YYYY-MM-DD") as the property name.
          let dateStr = item.date.toISOString().split('T')[0];
          
          if (!aggregatedData[dateStr]) {
            // Initialize new property data.
            aggregatedData[dateStr] = { uv: 0, pv: 0, amt: 0 };
          }
          
          // Update the aggregated data.
          // Assumes uv, pv, and amt all come from item.ownerAmount; 
          // replace with actual logic if they come from different data points.
          aggregatedData[dateStr].uv += item.ownerAmount;
          aggregatedData[dateStr].pv += item.ownerAmount;
          aggregatedData[dateStr].amt += item.ownerAmount;
        });

        // Step 3: Convert aggregated data into the desired array format.
        let dataChart = Object.keys(aggregatedData).map(dateStr => {
          return {
            name: dateStr,
            uv: aggregatedData[dateStr].uv,
            pv: aggregatedData[dateStr].pv,
            amt: aggregatedData[dateStr].amt
          };
        });

        // console.log('DataChart', dataChart);

        setLast30DaysChartData(dataChart);

















      const lastThirtyTotalOwnerAmount = lastThirtyDaysData.reduce((total, item) => {
        return total + item.ownerAmount;
      }, 0);
      setTotalLastThirtyDaysData(lastThirtyTotalOwnerAmount)

      //caluclate the total ownerAmount
      
      const totalOwnerAmount = flattenedData.reduce((total, item) => {
        return total + item.ownerAmount;
      }, 0);

      setTotalRevenue(Math.floor(totalOwnerAmount * 100) / 100)

      const adjustedData = flattenedData.map(item => ({
        name: item.date,
        uv: item.ownerAmount,
        pv: item.ownerAmount,
        amt: item.ownerAmount
      }))
      setRevenueData(adjustedData);
      // console.log('Revenue', formattedData.flat())
    } catch (error) {
      console.error('Error fetching revenue data:', error);
    }
  };

  const [averageOccupancy, setAverageOccupancy] = useState(null)
  const [overallOccupancy, setOverallOccupancy] = useState(null)
  const [lastSixMonthsData, setLastSixMonthsData] = useState(null)

  const fetchOccupancyData = async (ownerRezId, overview = false) => {
    try {
      let response
      if (overview) {
        response = await axios.get(`https://trophy-test-281550a6867d.herokuapp.com/occupancies/${ownerRezId}`);
      } else {
        response = await axios.get(`https://trophy-test-281550a6867d.herokuapp.com/occupancies/${ownerRezId}?internalCodeGiven=${search}`);
      }
        const properties = Object.keys(response.data);
        const formattedData = properties.map(property => {
          let monthlyData = response.data[property].map(monthData => {
              const date = new Date(`${monthData.month} 01, ${monthData.month.split(' ')[1]}`);
              const occupancyFloat = parseFloat(monthData.data[0].occupancy.replace('%', ''));
              return {
                  date: date,
                  occupancy: occupancyFloat
              }
          });
          monthlyData.sort((a, b) => a.date - b.date);
          return monthlyData;
      });
        // console.log('Formatted data:', formattedData);
        const flattenedData = formattedData.flat();
        flattenedData.sort((a, b) => a.date - b.date);

        // console.log('Occupancies', flattenedData);

        let occupancyAccumulator = {};

        flattenedData.forEach(item => {
            let dateStr = moment(item.date).format('YYYY-MM');  // Use moment.js to format the date string
            
            if (!occupancyAccumulator[dateStr]) {
                occupancyAccumulator[dateStr] = { totalOccupancy: 0, count: 0 };
            }
            
            occupancyAccumulator[dateStr].totalOccupancy += item.occupancy;
            occupancyAccumulator[dateStr].count += 1;
        });

        let averageOccupancyData = Object.keys(occupancyAccumulator).map(dateStr => {
          let avgOccupancy = occupancyAccumulator[dateStr].totalOccupancy / occupancyAccumulator[dateStr].count;
          // console.log(new Date(dateStr))
          let roundedAvgOccupancy = parseFloat(avgOccupancy.toFixed(2));
          return {
              name: dateStr,  // Keep the date as a formatted string
              averageOccupancy: roundedAvgOccupancy
          };
        });

        setAverageOccupancy(averageOccupancyData)
        // console.log('Average Occupancy', averageOccupancyData);

        // Determine the date for six months ago from September
        const now = new Date();
        const firstDayOfPreviousMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 6, 1);

        // Filter the data for the last 6 months, up through September
        const lastSixMonthsData = averageOccupancyData.filter(data => {
            const dataDate = new Date(`${data.name}-01`);
            return dataDate >= sixMonthsAgo && dataDate < firstDayOfPreviousMonth;
        });

        if (lastSixMonthsData.length > 0) {
            // console.log('Occupancy Data for Last 6 Months:', lastSixMonthsData);
            setLastSixMonthsData(lastSixMonthsData);  // Assuming you have such a state-setting function
        } else {
            // console.log('No data available for the last 6 months');
            setLastSixMonthsData([]);
        }

        // Step 1: Accumulate total occupancy and count the number of data points
          let totalOccupancy = 0;
          let totalCount = 0;
          for (let key in occupancyAccumulator) {
              totalOccupancy += occupancyAccumulator[key].totalOccupancy;
              totalCount += occupancyAccumulator[key].count;
          }

          // Step 2: Calculate the overall average occupancy
          const overallAverageOccupancy = (totalOccupancy / totalCount).toFixed(2);

          // Step 3: Save the overall average occupancy to state
          setOverallOccupancy(overallAverageOccupancy);  // Assuming you have a state-setting function called setOverallOccupancy



          console.log('Overall Average Occupancy:', averageOccupancy);




        
    } catch (error) {
        console.error('Error fetching occupancy data:', error);
    }
};

  const [arvDepData, setArvDepData] = useState(null)
  const [totalDaysBooked, setTotalDaysBooked] = useState(null)
  const [calendarData, setCalendarData] = useState(null)

  const createChartData = (input) => {
    let results = []
    // console.log()
    // for (const internalCode of rawData) {
    //   console.log('RAWDATA', rawData[internalCode])
    // }
    // for (const internalCode of input) {
    //   if (input.hasOwnProperty(internalCode)) {
    //     const dataArray = input[internalCode].data

    //     for (const item of dataArray) {
    //       const transformedItem = {
    //         x: [item.arrvial, item.departure],
    //         y: internalCode
    //       }
    //       results.push(transformedItem)
    //     }
    //   }
    // }

    const formatDate = (dateStr, subtractDay) => {
      const date = new Date(dateStr)
      if (subtractDay) {
        date.setDate(date.getDate() - 1)
      }
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    }

    Object.keys(input).forEach((key, index) => {
      // console.log(key, input[key], index)
      // console.log(input[key].data)
      const internalCode = key
      for (const entry of input[key].data) {
        const arrivalDate = formatDate(entry.arrival, true)
        const departureDate = formatDate(entry.departure, false)
        const transformedItem = {
          x: [arrivalDate, departureDate],
          y: internalCode
        }
        results.push(transformedItem)
      }

    })

    // console.log('RESULTS', results)
    setCalendarData(results)
  }

  const fetchArvDep = async (ownerRezId, overview = true) => {
    console.log('START fetching')
    try {
      let endpoint
      if (overview) {
        endpoint = `https://trophy-test-281550a6867d.herokuapp.com/arvDep?ownerRezId=${ownerRezId}`
      } else {
        console.log('RUNNING ELSE')
        endpoint = `https://trophy-test-281550a6867d.herokuapp.com/arvDep?ownerRezId=${ownerRezId}&internalCodeGiven=${search}`
      }
      const response = await axios.get(endpoint)
      console.log('ARVDP', response.data)
      if( response.status !== 200) {
        console.error('Failed to fetch data:', response.status)
        return
      }
      const {data} = response
      // console.log('DAAAAAAAAAAAAAAAATA', data)
      let flattenedData = []
      // let formattedData = {}
      for (const internalCode of Object.keys(data)) {
        // console.log(data[internalCode].data)
        flattenedData.push(...data[internalCode].data)
      }

      flattenedData.sort((a,b) => new Date(a.arrival).getTime() - new Date(b.arrival).getTime())

      // console.log('FLAAAAAAAAAAAAT', data)

      createChartData(data)

      const renamedDate = flattenedData.map((item, index) => {
        const arrivalDate = new Date(item.arrival)
        const departureDate = new Date(item.departure)
        const daysBetween = (departureDate.getTime() - arrivalDate.getTime()) / (1000 * 60 * 60 * 24)

        // Format the arrival date as year, month, day
        const name = arrivalDate.toISOString().slice(0, 10).replace(/-/g, '/');

        return {
          name,
          pv: daysBetween,
          uv: daysBetween,
          amt: daysBetween,
        }
      })

      const totalDays = renamedDate.reduce((accum, item) => accum + item.amt, 0)
      // console.log(totalDays)
      setTotalDaysBooked(totalDays)

      // console.log('Renamed Date', renamedDate)

      // console.log('ARV DEP DATA:', renamedDate)
      setArvDepData(renamedDate)
    } catch (err) {
      console.error('Error fetching data:', err)
    }
  }


  

  const fetchApartments = async (ownerRezId) => {
    try {
      const response = await axios.get(`https://trophy-test-281550a6867d.herokuapp.com/apartments/${ownerRezId}`);
      setApartmentsData(response.data);
      // console.log('Apartments', response.data)
    } catch (error) {
      console.error('Error fetching apartments data:', error);
      // Handle error...
    }
  };


  // const [userData, setUserData] = useState(null)
  const [apartmentsData, setApartmentsData] = useState(null)

useEffect(() => {
  if(search) {
    console.log('SPECIFC VIEW')
    getUser(false)
  } else {
    console.log('NOT VIEW')

    getUser(true);

  }
}, []);

console.log('APASTMENTS DSEKTBKEJ', apartmentsData)


  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px] py-5">
        <p
          className={`mt-4 mb-3 text-2xl font-semibold leading-6 text-black ${josefin.className}`}
        >
          {search ? `Insights for ${search}` : 'Insights'}
        </p>
        <div className="justify-between grid-cols-3 lg:grid lg:gap-6">
          <div className="bg-offWhite w-full max-lg:mb-4 h-[185px rounded-2xl overflow-hidden">
            <p className="text-xl font-medium text-center">AED{totalrevenue}</p>
            <p className="text-[10px] text-center">Total Earning</p>
            <LineChartCommon color="#8FA3CA" dataKey="pv" data={revenueData}/>
          </div>
          <div className="bg-offWhite w-full max-lg:mb-4 h-[185px] rounded-2xl overflow-hidden">
            <p className="text-xl font-medium text-center">{overallOccupancy}%</p>
            <p className="text-[10px] text-center">Total Average Occupancy</p>
            <LineChartCommon color="#CA8FB2" dataKey="averageOccupancy" data={averageOccupancy} percentage={true}/>
          </div>
          <div className="bg-offWhite w-full max-lg:mb-4 h-[185px] rounded-2xl overflow-hidden">
            <p className="text-xl font-medium text-center">{totalDaysBooked}</p>
            <p className="text-[10px] text-center">All Time Bookings</p>
            <LineChartCommon color="#8FCAB5" dataKey="amt" data={arvDepData} bookings={true}/>
          </div>

        </div>
        <div className="grid justify-between gap-4 mt-6 mb-2 lg:grid-cols-3 max-lg:grid-cols-1">
          {/* <div className="col-span-1 p-5 bg-offWhite rounded-xl max-md:p-3">
            <div className="flex justify-between mb-5">
              <p className="mr-10 font-semibold leading-9 text-black md:text-2xl max-md:text-lg">
                Reviews
              </p>
              <div className="flex flex-wrap content-center max-md:justify-end">
                <Rating />
                <p className="text-2xl font-medium leading-9 text-black">4.0</p>
                <p className="ml-1 text-base font-normal leading-9 text-darkGrey">
                  (21 Reviews)
                </p>
              </div>
            </div>
            {reviewArr &&
              reviewArr.length &&
              reviewArr.map((data, idx) => {
                return (
                  <div key={idx} className="my-4">
                    <Rating />
                    <Reviews data={data} />
                  </div>
                );
              })}
            <button className="flex px-3 py-2 text-xs font-medium border rounded md:hidden text-primary border-primary">
              See More
              <Image
                className="object-contain ml-2"
                src={primaryArrowDown}
                alt=""
              />
            </button>
          </div> */}
       
          <div className="bg-offWhite w-full max-lg:mb-4 p-5 rounded-2xl overflow-hidden max-md:p-3 h-400px">
            {/* <p className="text-[10px] text-center">Property Revenue Insights</p> */}
            <p className="mb-5 font-semibold leading-9 text-black max-md:text-lg md:text-2xl lg:flex-wrap">
              Revenue 30 Days
            </p>
            <BarChartCommon color="#8FCAB5" dataKey="amt" data={last30daysChartData}/>
          </div>

          <div className="bg-offWhite w-full max-lg:mb-4 p-5 rounded-2xl overflow-hidden max-md:p-3 h-400px">
            {/* <p className="text-[10px] text-center">Property Revenue Insights</p> */}
            <p className="mb-5 font-semibold leading-9 text-black max-md:text-lg md:text-2xl lg:flex-wrap">
              Occupancy Last 6 Months
            </p>
            <BarChartCommon color="#8FCAB5" dataKey="averageOccupancy" data={lastSixMonthsData}/>
          </div>

          
   
          <div className="p-5 bg-offWhite rounded-xl max-md:p-3">
            <p className="mb-5 font-semibold leading-9 text-black max-md:text-lg md:text-2xl lg:flex-wrap">
              Your Other Listings
            </p>
            {
              apartmentsData && 
              apartmentsData.length > 0 && 
              apartmentsData.slice(0, 3).map((data, idx) => (
                <div key={idx} className="mb-5 cursor-pointer">
                  <Listing data={data} />
                </div>
              ))
            }


          </div>

          <div className="bg-offWhite w-full max-lg:mb-4 p-5 rounded-2xl overflow-hidden max-md:p-3 h-400px col-span-3">
            {/* <p className="text-[10px] text-center">Property Revenue Insights</p> */}
            <p className="mb-5 font-semibold leading-9 text-black max-md:text-lg md:text-2xl lg:flex-wrap">
              Calendar
            </p>
            {/* <RibbonCalendar /> */}
            <ChartComponent data={calendarData}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminInsights;
