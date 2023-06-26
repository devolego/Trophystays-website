import React from 'react'
import BackButton from '../Common/BackButton'
import arrowDownSolid from '../../images/arrow-down-solid.png'
import searchIcon from '../../images/search-icon.png'
import Image from 'next/image'
import Button from '../Common/Button'
import BookingHistoryImage1 from "../../images/bookinghistory1.png";
import BookingHistoryImage2 from "../../images/bookinghistory2.png";
import BookingHistoryImage3 from "../../images/bookinghistory3.png";
import AdminBookingHistoryCard from './AdminBookingHistoryCard'

const listingTopArr = [
{name:"Checking Out(0)",active:false},
{name:"Currently Hosting(0)",active:true},
{name:"Arriving Soon(0)",active:false},
{name:"Upcoming(0)",active:false},
{name:"Pending Review(0)",active:false}
]
const AdminListing = () => {
  return (
    <React.Fragment>
    <div className="container-2xl max-lg:px-4 lg:px-[50px] py-5">
      <div className="flex gap-[10.5rem]">
        <BackButton buttonText="Listing" />
        <div className='lg:flex justify-between max-w-fit'>
          {listingTopArr && listingTopArr.length>0 && listingTopArr.map((data,index) => {
            return(
            <>
              {!data.active ? <p className='mr-4 px-3 p-2 rounded-full text-[14px] w-[171px] h-[36px] bg-[#FAFAFA] text-[#939393]'>{data.name}</p>
                 :
              <p className='mr-4 px-3 p-2 rounded-full text-[14px] w-[171px] h-[36px] bg-[#333333] text-[#FFFFFF]'>{data.name}</p>}
            </>
          )
          })}
        </div>
      </div>
      <div className='mt-4 flex justify-between content-center'>
        <div className='filter border border-solid border-[#E1D9CE] rounded-[8px] p-2 w-[185px] h-[52px] text-[#939393] text-[16px]'>
          <Image className='relative top-[12px] left-[145px]' src={arrowDownSolid} alt={""} />
          <div>Filter</div>
        </div>
        <div className='center-div lg:flex justify-center items-center w-[507px] h-[52px]'>
          <div className='search-bar '>
            <Image className='relative top-9 left-4' src={searchIcon} alt={""} />
            <input className='placeholder:pl-12 mb-4 mr-4 w-[375] h-[52px] border border-solid border-[#E1D9CE] rounded-[8px]' type='text' placeholder='Search by keyword' />
          </div>
          <div className='search-button'>
            <button className='w-[116px] h-[52px] bg-[#333333] rounded-[8px] text-[#FFFFFF] text-[16px]'>Search</button>
          </div>
        </div>
        <div className='p-3 border border-solid border-[#333333] rounded-[8px] w-[187px] h-[52px] text-[16px]'>Contact Support</div>
      </div>
      <AdminBookingHistoryCard
          image={BookingHistoryImage1}
          bookingDate="15 Jun 2022 → 20 Jun 2022"
          remainingTime="2 Days, 12:00:00"
        />
      <AdminBookingHistoryCard
          image={BookingHistoryImage2}
          bookingDate="15 Jun 2022 → 20 Jun 2022"
          remainingTime="2 Days, 12:00:00"
        />
      <AdminBookingHistoryCard
          image={BookingHistoryImage3}
          bookingDate="15 Jun 2022 → 20 Jun 2022"
          remainingTime="2 Days, 12:00:00"
        />
    </div>
    </React.Fragment>
  )
}

export default AdminListing
