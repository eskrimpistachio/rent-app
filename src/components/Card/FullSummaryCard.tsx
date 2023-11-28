import axios from 'axios';
import { useState, useEffect } from 'react';
import s63 from '../../assets/s63.png';
import q3 from '../../assets/q3.png';
import series2 from '../../assets/series2.png';
import gr86 from '../../assets/gr86.png';
import mazda3 from '../../assets/mazda3.png';
import Popup from '../Popup/Popup';
import { Link } from 'react-router-dom';
import Skeleton from '../Skeleton/Skeleton';

const FullSummary = () => {
  const [data, setData] = useState<T>({});
  const [isLoading, setIsLoading] = useState(true);

  interface T {
    serviceType?: any;
    pickupLocation?: string;
    dropOff?: string;
    pickUpDate?: string;
    hours?: number;
    days?: number;
    weekly?: number;
    totalRent?: any;
    selectedCars?: string;
  }

  useEffect(() => {
    axios
      .get('https://api-rent-app-beta.vercel.app/data')
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [data]);

  console.log(data);

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="bg-[#252525] px-16 py-8 rounded-lg flex flex-col gap-8">
          <h1 className="font-semibold text-2xl text-center">Summary</h1>
          {
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
                {selectionTimes(data)}
              </div>

              <div className="flex flex-col text-center">
                <h6 className="font-light text-sm">Car Choices</h6>
                {selectionCars(data)}
                <h4 className="font-semibold">{data.selectedCars}</h4>
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="font-semibold">Detail Payment :</h6>
                <h4>Selected Cars : {data.selectedCars}</h4>
                <div className="flex flex-row gap-2">
                  <h4>Total Time : </h4>
                  {selectionTimes(data)}
                </div>
                <hr />
              </div>
              <h1 className="font-bold text-2xl text-center">
                Total : {rentTotalCount(data.serviceType, data.totalRent, data)}
              </h1>
              <div className='mx-auto'>
                <Link to="/rentals">
                  <button className="bg-secondary text-center text-white rounded-xl text-lg px-12 py-3 2xl:px-16 2xl:py-4 2xl:text-xl font-bold hover:scale-110">
                    Rent
                  </button>
                </Link>
              </div>
            </>
          }
        </div>
      )}
    </>
  );
};

export default FullSummary;

function selectionCars(d: any) {
  switch (d.selectedCars) {
    case 'Mercedes-Benz S63 AMG':
      return <img src={s63} alt="missing cars" />;
      break;
    case 'Audi Q3':
      return <img src={q3} alt="missing cars" />;
      break;
    case 'BMW 2 Series Coupe':
      return <img src={series2} alt="missing cars" />;
      break;
    case 'Toyota GR 86':
      return <img src={gr86} alt="missing cars" />;
      break;
    case 'Mazda 3 Hatchback':
      return <img src={mazda3} alt="missing cars" />;
      break;
  }
}

function selectionTimes(d: any) {
  switch (d.serviceType) {
    case 'Hourly':
      return <h4 className="font-semibold">{d.hours} Hours</h4>;
      break;
    case 'Daily':
      return <h4 className="font-semibold">{d.days} Days</h4>;
      break;
    case 'Weekly':
      return <h4 className="font-semibold">{d.weekly} Weeks</h4>;
      break;
  }
}

function rentTotalCount(type: string, price: number, data: any) {
  let time: any;
  switch (type) {
    case 'Hourly':
      time = data.hours;
      break;
    case 'Daily':
      time = data.days;
      break;
    case 'Weekly':
      time = data.weekly;
      break;
  }
  switch (time) {
    case '2':
      const count2 = parseInt(time);
      return count2 * price;
      break;
    case '3':
      const count3 = parseInt(time);
      return count3 * price;
      break;
    case '4':
      const count4 = parseInt(time);
      return count4 * price;
      break;
    case '5':
      const count5 = parseInt(time);
      return count5 * price;
      break;
    case '6':
      const count6 = parseInt(time);
      return count6 * price;
      break;
    case '7':
      const count7 = parseInt(time);
      return count7 * price;
      break;
    case '14':
      const count14 = parseInt(time);
      return count14 * price;
      break;
    case '12':
      return price / 2;
      break;
    default:
      return price;
  }
}
