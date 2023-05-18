import React from 'react';
import trainingPhoto from '../../../images/Training/training.jpg';

const TestRide = () => {
  return (
    <div className='bg-black h-[100vh] flex text-white'>
      <div className='w-1/2'>
        <h2 className='text-4xl'>Ride Before You Buy</h2>
        <p>Book a test ride at one of our two lcoations and get the full experience before you buy.</p>
      </div>
      <div className='w-1/2 flex items-center justify-center'>
        <img src={trainingPhoto} alt="" className='h-3/4' />
      </div>
    </div>
  );
};

export default TestRide;