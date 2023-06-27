import React from "react";
import BackButton from "../Common/BackButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikForm from "./FormikForm";
import visaIcon from "../../images/visa.png";
import mastercardIcon from "../../images/mastercard.png";
import americanExpressIcon from "../../images/AmericanExpress.png";
import checkboxIcon from "../../images/checkbox.png";
import bookingBedroom from "../../images/BookingBedroom.png";
import Image from "next/image";
import FormikFormPayment from "./FormikFormPayment";

const BookingProperty = () => {
  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px] py-5">
      <BackButton buttonText="Back" />
      <div className="flex gap-20">
        <div className="w-2/3 left-section">
          <div className="bg-offWhite">
            <div className="flex mb-5">
              <div className="text-[#292021] text-[20px] font-medium flex w-1/2 mr-1">
                Guest Details
              </div>
              <div className="flex ml-1">
                <p className="text-[#292021] text-[20px] font-medium mr-1">
                  Company Details
                </p>
                <p className="text-[#292021] text-[20px] font-light">
                  (Optional)
                </p>
              </div>
            </div>
            <div>
              <FormikForm />
            </div>
          </div>
          <div className="mt-10 bg-offWhite">
            <div className="flex gap-[31rem]">
              <p className="text-[20px] text-black font-medium">
                Payment Method
              </p>
              <div className="flex">
                <div>
                  <Image src={visaIcon} alt={""} />
                </div>
                <div>
                  <Image src={mastercardIcon} alt={""} />
                </div>
                <div>
                  <Image src={americanExpressIcon} alt={""} />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <FormikFormPayment />
            </div>
          </div>
          <div className="mt-10 bg-offWhite">
            <div className="pt-4 text-base font-medium text-black">
              Pay now to reserve this property
            </div>
            <div className="mt-6 bg-white">
              <div className="p-3 flex gap-[41rem]">
                <div className="text-sm font-medium text-black">Subtotal</div>
                <div className="text-sm font-normal text-black">
                  AED 71,736.26
                </div>
              </div>
              <div className="p-3 flex gap-[33rem]">
                <div className="text-sm font-medium text-black">
                  Card processing fee (3.2%)
                </div>
                <div className="text-sm font-normal text-black">
                  AED 3,422.29
                </div>
              </div>
              <div className="p-3 flex gap-[40rem] mt-5">
                <div className="text-sm font-medium text-black">Total cost</div>
                <div className="text-sm font-semibold text-black">
                  AED 110,368.87
                </div>
              </div>
              <div className="flex mt-8">
                <Image src={checkboxIcon} alt={""} />
                <div className="ml-2 text-base font-normal text-black">
                  I agree to recieve exclusive deals, guest perks, the latest
                  Trophy news, and more!
                </div>
              </div>
              <div className="mt-3 text-sm font-normal text-black">
                By booking, I agree to the Terms and Conditions, and understand
                that the booking is not finalized until the background check is
                complete.
              </div>
              <div className="mt-5">
                <button className="text-white bg-primary w-[140px] h-[52px] rounded-lg">
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 right-section min-h-max text-primary">
          <div>
            <Image src={bookingBedroom} alt={""} />
          </div>
          <div className="mt-4 text-lg font-medium text-black">
            1 Bed Apartment with Stunning View
          </div>
          <div className="text-sm font-normal text-darkGrey">
            15 Jun 2022 - 20 Jun 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingProperty;
