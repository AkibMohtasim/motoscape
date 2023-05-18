import React from 'react';
import line from '../../../images/bigReviews/line8.svg';
import { FaShippingFast } from "react-icons/fa";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { RiMotorbikeFill } from "react-icons/ri";
import { TbBike } from "react-icons/tb";

const Facilities = () => {
  return (
    <div className='bg-[#00000F] h-72 text-white bg-cover bg-center bg-no-repeat flex justify-around items-center' style={{
      backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0)), url(${line})`
    }}>
      <div className='flex flex-col gap-4 items-center'>
        <h2 className='text-6xl text-red-600'><FaShippingFast /></h2>
        <p className='text-lg'>Fast shipping</p>
      </div>
      <div className='flex flex-col gap-4 items-center'>
        <h2 className='text-6xl text-red-600'><RiMotorbikeFill /></h2>
        <p className='text-lg'>Test rides available</p>
      </div>
      <div className='flex flex-col gap-4 items-center'>
        <h2 className='text-6xl text-red-600'><BsFillBoxSeamFill /></h2>
        <p className='text-lg'>Easy Returns</p>
      </div>
      <div className='flex flex-col gap-4 items-center'>
        <h2 className='text-6xl text-red-600'><TbBike /></h2>
        <p className='text-lg'>Ride Gently for first 1000 miles</p>
      </div>

    </div>
  );
};

export default Facilities;