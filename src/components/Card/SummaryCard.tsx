import axios from 'axios';
import React, { useState, useEffect } from 'react';

const SummaryCard = () => {
  const [data, setData] = useState<T>({});

  interface T {
    serviceType?: string;
    pickupLocation?: string;
    dropOff?: string;
    pickUpDate?: string;
    hours?: number;
    days?: number;
    weekly?: number;
    totalRent?: number;
  }
  useEffect(() => {
    axios
      .get('http://localhost:3000/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },[data]);

  return (
    <div className="bg-[#252525] px-8 py-4 rounded-lg w-[300px] flex flex-col justify-evenly gap-8">
      <h1 className="font-semibold text-lg">Summary</h1>
      {/* {data.map((d) => ( */}
      <>
        <div className="flex flex-col justify-evenly gap-2">
          <h6 className="font-light text-sm">Service Type</h6>
          <h4 className="font-semibold">{data.serviceType}</h4>
          <h6 className="font-light text-sm">Pickup Location</h6>
          <h4 className="font-semibold">{data.pickupLocation}</h4>
          <h6 className="font-light text-sm">Drop Off Location</h6>
          <h4 className="font-semibold">{data.dropOff}</h4>
          <h6 className="font-light text-sm">Pickup Date</h6>
          <h4 className="font-semibold">{data.pickUpDate}</h4>
          <h6 className="font-light text-sm">Total Time</h6>
          {data.serviceType === 'Hourly' && (
            <h4 className="font-semibold">{data.hours} Hours</h4>
          )}
          {data.serviceType === 'Days' && (
            <h4 className="font-semibold">{data.days} Days</h4>
          )}
          {data.serviceType === 'Weekly' && (
            <h4 className="font-semibold">{data.weekly} Days</h4>
          )}
        </div>
        <h1 className="font-semibold text-lg">
          Total : {data.totalRent}
        </h1>
      </>
      {/* ))} */}
    </div>
  );
};

export default SummaryCard;
