'use client'
import React from "react";

const CustomTooltip = ({ active, payload, label, percentage, bookings}) => {
    if (active && payload && payload.length) {
      const date = new Date(label).toLocaleDateString();
      const value = payload[0].value;
      // const formattedValue = percentage ? `${value}%` : `AED${value}`;
      let formattedValue = ''
      let labelTitle = ''
      // const labelTitle = percentage ? 'Percentage Occupancy' : 'Revenue';
      if (percentage) {
        labelTitle = 'Percentage Occupancy'
        formattedValue = `${value}%`
      } else if (bookings) {
        labelTitle = 'Days'
        formattedValue = value
      } else {
        labelTitle = 'Revenue'
        formattedValue = `AED${value}`
      }
      return (
        <div className="custom-tooltip">
          <p className="label">{`Date: ${date}`}</p>
          <p className="intro">{`${labelTitle}: ${formattedValue}`}</p>
        </div>
      );
    }
  
    return null;
};

export default CustomTooltip;
