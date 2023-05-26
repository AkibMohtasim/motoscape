import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const MotorcycleDetails = () => {

  const { _id, name, brand, category, img, price, details } = useLoaderData();

  useTitle(`Details of ${name} `);

  const {
    engineCapacity,
    maxPower,
    maxTorque,
    gearbox,
    frontTire,
    rearTire,
    frontBrakes,
    rearBrakes,
    display,
    seatHeight,
    fuelCapacity,
    wetWeight,
    serviceInterval } = details;

  return (
    <div className='flex flex-wrap'>
      <section className='bg-black text-white w-1/2 flex flex-col gap-4 items-center'>
        <div className='w-[600px] mt-10'>
          <h2 className='text-4xl text-red-700'>{name}</h2>
          <h3>{brand}</h3>
          <h4>{category} Bike</h4>
        </div>

        <div>
          <h2 className='py-8 text-3xl tracking-wide mb-4'>Features</h2>
          <div className='flex'>
            <p className='w-[300px] bg-gray-500 py-4 pl-2 border border-white'>Engine Capacity</p>
            <p className='py-4 pl-2 border border-white w-[300px]'>{engineCapacity}</p>
          </div>
          <div className='flex'>
            <p className='w-[300px] bg-gray-500 py-4 pl-2 border border-white'>Max Power</p>
            <p className='py-4 pl-2 border border-white w-[300px]'>{maxPower}</p>
          </div>
          <div className='flex'>
            <p className='w-[300px] bg-gray-500 py-4 pl-2 border border-white'>Max Torque</p>
            <p className='py-4 pl-2 border border-white w-[300px]'>{maxTorque}</p>
          </div>
          <div className='flex'>
            <p className='w-[300px] bg-gray-500 py-4 pl-2 border border-white'>Gear Box</p>
            <p className='py-4 pl-2 border border-white w-[300px]'>{gearbox}</p>
          </div>
          <div className='flex'>
            <p className='w-[300px] bg-gray-500 py-4 pl-2 border border-white'>Front Tire</p>
            <p className='py-4 pl-2 border border-white w-[300px]'>{frontTire}</p>
          </div>
          <div className='flex'>
            <p className='w-[300px] bg-gray-500 py-4 pl-2 border border-white'>Rear Tire</p>
            <p className='py-4 pl-2 border border-white w-[300px]'>{rearTire}</p>
          </div>
          <div className='flex'>
            <p className='w-[300px] bg-gray-500 py-4 pl-2 border border-white'>Front Brakes</p>
            <p className='py-4 pl-2 border border-white w-[300px]'>{frontBrakes}</p>
          </div>
          <div className='flex'>
            <p className='w-[300px] bg-gray-500 py-4 pl-2 border border-white'>Rear Brakes</p>
            <p className='py-4 pl-2 border border-white w-[300px]'>{rearBrakes}</p>
          </div>
          <div className='flex'>
            <p className='w-[300px] bg-gray-500 py-4 pl-2 border border-white'>Display</p>
            <p className='py-4 pl-2 border border-white w-[300px]'>{display}</p>
          </div>
          <div className='flex'>
            <p className='w-[300px] bg-gray-500 py-4 pl-2 border border-white'>Seat Height</p>
            <p className='py-4 pl-2 border border-white w-[300px]'>{seatHeight}</p>
          </div>
          <div className='flex'>
            <p className='w-[300px] bg-gray-500 py-4 pl-2 border border-white'>Fuel Capacity</p>
            <p className='py-4 pl-2 border border-white w-[300px]'>{fuelCapacity}</p>
          </div>
          <div className='flex'>
            <p className='w-[300px] bg-gray-500 py-4 pl-2 border border-white'>Wet Weight</p>
            <p className='py-4 pl-2 border border-white w-[300px]'>{wetWeight}</p>
          </div>
          <div className='flex'>
            <p className='w-[300px] bg-gray-500 py-4 pl-2 border border-white'>Service Interval</p>
            <p className='py-4 pl-2 border border-white w-[300px]'>{serviceInterval} or 1 year which comes first.</p>
          </div>

          <p className='my-6'>Price: ${price}</p>
          <Link to={`/placeOrder/${_id}`} className='px-6 py-2 border border-white rounded-full'>Buy Now</Link>
        </div>

      </section>
      <section className='w-1/2'>
        <img src={img} alt="" srcset="" className='w-5/6 mx-auto mt-60' />
      </section>
    </div>
  );
};

export default MotorcycleDetails;