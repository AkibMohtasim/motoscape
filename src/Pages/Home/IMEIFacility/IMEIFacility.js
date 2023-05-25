import React from 'react';
import { FaPaypal } from 'react-icons/fa';
import line from '../../../images/bigReviews/line8.svg';


const IMEIFacility = () => {
  return (
    <div className='bg-[#00000F] text-white bg-cover bg-center bg-no-repeat flex flex-col items-center gap-4 md:py-10 py-4 px-2 text-center' style={{
      backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0)), url(${line})`
    }}>
      <p className='tracking-widest text-xl'>Ride now, pay later with</p>
      <h2 className='text-7xl my-2 flex items-center text-blue-800'><FaPaypal />Pay<span className='text-blue-500'>Pal</span> </h2>
      <p className='text-lg font-sans tracking-tight font-extralight'>As low as $100/month when you choose to purchase using PayPal.</p>

      <button className='mt-2 px-8 py-4 text-lg rounded-full border border-white hover:bg-blue-500 hover:border-transparent duration-150 tracking-wider'>Learn More</button>

    </div>
  );
};

export default IMEIFacility;