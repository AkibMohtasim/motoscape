import React from 'react';
import line from '../../../images/bigReviews/line8.svg';


const IMEIFacility = () => {
  return (
    <div className='bg-[#00000F] h-72 text-white bg-cover bg-center bg-no-repeat flex flex-col items-center gap-10' style={{
      backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0)), url(${line})`
    }}>
      <p>Ride now, pay later with</p>
      <h2 className='text-5xl'>Paypal.</h2>
      <p>As low as $100/month when you choose to purchase using Klarna</p>

      <button className='px-10 py-4 rounded-full border border-white'>Learn More</button>

    </div>
  );
};

export default IMEIFacility;