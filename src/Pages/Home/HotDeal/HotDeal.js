import React from 'react';
import { AiFillStar } from "react-icons/ai";


const HotDeal = () => {
  return (
    <div className='flex flex-col items-center py-10'>
      <div className='my-4 flex flex-col items-center gap-4 w-1/2'>
        <p className='flex items-center text-sm'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> <span className='ml-2'>4.8 rating</span></p>
        <h3 className='text-3xl'>Triumph Bonneville T120</h3>
        <p className='text-lg'>The Classic. The Elegant.</p>
        <p>Best selling bike of last year</p>
      </div>
      <div className='w-3/5'>
        <img src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/127877/bonneville-t120-right-front-three-quarter.jpeg?isig=0&q=80" alt="" srcset="" className='mx-auto h-full' />
      </div>

    </div>
  );
};

export default HotDeal;