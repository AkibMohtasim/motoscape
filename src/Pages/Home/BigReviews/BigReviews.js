import React from 'react';
import line from '../../../images/bigReviews/line8.svg';

const BigReviews = () => {
  return (
    <div className='bg-[#00000F] h-64 text-white bg-cover bg-center bg-no-repeat flex items-center justify-center gap-20' style={{
      backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0)), url(${line})`
    }}>
      <div className='flex flex-col gap-2 items-center'>
        <h2 className='text-4xl'>❞</h2>
        <p className='text-xl'>Great Customer Service and fast paperwork!</p>
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <h2 className='text-4xl'>❞</h2>
        <p className='text-xl'>Affordable EMI facilities.</p>
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <h2 className='text-4xl'>❞</h2>
        <p className='text-xl'>Trusted for all the Genuine accessories.</p>
      </div>

    </div>
  );
};

export default BigReviews;