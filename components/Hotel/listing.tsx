"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import CardWithSlider from "../Common/CardWithSlider";
import SearchBox from "../Common/SearchBox";
import FilterImgTile from "./filterImgTile";
import FilterOptions from "./filterOptions";
import mapImg from "../../images/map-img-2.png";
import mapOverlay from "../../images/appartment-icon.png";
import { getAreas, getListings } from '../../service/service';
// import { useLocation } from 'react-router-dom';
import { usePathname, useSearchParams, useParams} from 'next/navigation';
import mapboxgl from 'mapbox-gl'
// import Map from './Map';
// import ReactMapGl from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map, {GeolocateControl, Marker, Popup} from 'react-map-gl'

import {Context} from '../../app/page'
import axios from 'axios';


const HotelListing = () => {

  // const [listingsData, setListingsData] = useContext(Context)
  // console.log(listingsData)

  const [map, setMap] = useState({
    latitude: 25.2048,
    longitude: 55.2708,
    zoom: 10
  })

  const [selectedPopup, setSelectedPopup] = useState(null);



  const [sortOption, setSortOption] = useState(null)

  const fetchData = async (sortOption) => {
    try {
      console.log(sortOption)
      const url = 'https://trophy-test-281550a6867d.herokuapp.com/listings'
      const response = await axios.get(url, {
        params: {
          priceSortOrder: sortOption
        }
      })
      console.log('DAMN')
      console.log('damn resposne', response)
      setSearchData(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (sortOption !== null) {
      console.log('fnweiolwefn')
      fetchData(sortOption)
    }
  }, [sortOption])

  // const router = useRouter()

  const path = usePathname()
  const searchParams = useSearchParams()
  console.log(path)
  console.log(searchParams.get('propagated'))
  console.log(searchParams.get('data'))
  
  const [searchData, setSearchData] = useState(null)

  const handleSearchData = data => {
    console.log('HERE')
    setSearchData(data)
    console.log('DATA', searchData)
  }


  const [mapView, setMapView] = useState(false);

  const [areas, setAreas] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {

    }


    // Assume getAreas is a function that fetches the areas
    getAreas().then((fetchedAreas) => {
      setAreas(fetchedAreas);
    });

    const searchParams = new URLSearchParams(window.location.search);
    const propagated = searchParams.get('propagated');

    if (!propagated) {
      getListings().then((response) => {
        console.log('HERE')
        setSearchData(response)
      })
    }


  }, []);

  return (
    <div className="hotel-suggestion">
      <SearchBox searchClasses="mt-[20px] mb-10" areas={areas} handleOnSearch={handleSearchData}/>
      {/* <FilterImgTile /> */}
      <FilterOptions listOrMapView={() => setMapView(!mapView)} setSortOption={setSortOption} sortOption={sortOption}/>
      {mapView === true ? (
        <div className="grid grid-cols-2 gap-6 max-md:flex max-md:flex-col-reverse max-lg:grid-col-2" style={{width: '100%'}}>
          <div className="grid lg:grid-cols-2 gap-6 ">
          { 
  searchData && searchData.length ? 
  searchData.map((data, i) => (
    <CardWithSlider
      paraText={`${data.externalName} in ${data.address.stateOrProvince}`}
      rating={data ? (Math.round(data.averageReview).toFixed(1)) : ""}
      id={i}
      perRoomUserCount={`${data.bedrooms * 2} guests allowed`}  // Assuming 2 people per bedroom
      bedCount={`${data.bedrooms} Bedrooms`}
      bathCount={`${data.bathrooms} Bathrooms`}
      likeButton={"unfilled"}  // Assuming likeButton accepts string "unfilled"
      key={data._id}  // Using unique _id as key
      imgUrls={data.images.slice(0, 4).map(image => image.croppedUrl)}
      isMonthly={data.isMonthly}
      priceFrom={Math.round(data.priceFrom)}
    />
  ))
  : 
  <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '50vh' }}>
    <p style={{ fontSize: '24px' }}>
      Sorry, didnt find anything
    </p>
  </div>
}
          </div>
          <div className="md:sticky top-0 right-0 h-max">
         {/* <Image src={mapImg} alt="" className="w-full" /> */}
            <Map
            style={{height: "100vh", width: "100%",}}
            mapboxAccessToken='pk.eyJ1IjoiZGV2b2xlZ292aWNoIiwiYSI6ImNsbDBqNzJpcDF1YTczY216ZDEwdXhkd2IifQ.YS24fRbk-I43rMr9q2v0fQ'
            initialViewState={{
              longitude: 55.2708,
              latitude: 25.2048,
              zoom: 10
            }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            >

                <GeolocateControl
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
              />



{searchData.map((data, i) => (
  <Marker key={data._id} latitude={data.latitude} longitude={data.longitude}>
    <button 
      className="marker-btn" 
      onClick={e => {
        e.preventDefault();
        setSelectedPopup(data);
      }}
    >
      <div style={{ width: '300px', height: '100px' }}>
        <CardWithSlider
          paraText={`${data.externalName} in ${data.address.stateOrProvince}`}
          rating={data ? (Math.round(data.averageReview).toFixed(1)) : ""}
          id={i}
          perRoomUserCount={`${data.bedrooms * 2} guests allowed`}
          bedCount={`${data.bedrooms} Bedrooms`}
          bathCount={`${data.bathrooms} Bathrooms`}
          likeButton={"unfilled"}
          key={data._id}
          imgUrls={data.images.slice(0, 4).map(image => image.croppedUrl)}
          isMonthly={data.isMonthly}
          priceFrom={Math.round(data.priceFrom)}
        />
      </div>
    </button>
  </Marker>
))}


{selectedPopup && (
    <Popup
      latitude={selectedPopup.latitude}
      longitude={selectedPopup.longitude}
      onClose={() => setSelectedPopup(null)}
      closeOnClick={true}
    >
      <CardWithSlider
        // ... props as you have defined previously
      />
    </Popup>
  )}

            </Map>
            
            
            
            
            
            {/* <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] max-lg:hidden"> */}
              {/* <Image src={mapOverlay} alt="" /> */}
            {/* </div> */}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6 hotel-suggestion max-md:grid-cols-1 max-lg:grid-cols-2">
          { 
  searchData && searchData.length ? 
  searchData.map((data, i) => (
    <CardWithSlider
      paraText={`${data.externalName} in ${data.address.stateOrProvince}`}
      rating={data ? (Math.round(data.averageReview).toFixed(1)) : ""}
      id={i}
      perRoomUserCount={`${data.bedrooms * 2} guests allowed`}  // Assuming 2 people per bedroom
      bedCount={`${data.bedrooms} Bedrooms`}
      bathCount={`${data.bathrooms} Bathrooms`}
      likeButton={"unfilled"}  // Assuming likeButton accepts string "unfilled"
      key={data._id}  // Using unique _id as key
      imgUrls={data.images.slice(0, 4).map(image => image.croppedUrl)}
      isMonthly={data.isMonthly}
      priceFrom={Math.round(data.priceFrom)}
      ownerRezId={data.ownerRezId}
    />
  ))
  : 
  <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '50vh' }}>
    <p style={{ fontSize: '24px' }}>
      Sorry, didnt find anything
    </p>
  </div>
}

        </div>
      )}
    </div>
  );
};

export default HotelListing;
