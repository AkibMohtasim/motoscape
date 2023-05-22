import React from 'react';
import line from '../../../images/bigReviews/line8.svg';
import { FaServicestack } from 'react-icons/fa';
import { AiFillCreditCard } from 'react-icons/ai';
import { VscWorkspaceTrusted } from 'react-icons/vsc';

const BigReviews = () => {
  return (
    <div className='bg-[#00000F] h-auto lg:h-64 py-4 text-red-600 bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-20' style={{
      backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0)), url(${line})`
    }}>
      <div className='flex flex-col gap-2 lg:gap-4 items-center'>
        <h2 className='text-4xl'><FaServicestack /></h2>
        <p className='text-xl'>Great Customer Service and fast paperwork.</p>
      </div>
      <div className='flex flex-col gap-2 lg:gap-4 items-center'>
        <h2 className='text-4xl'><AiFillCreditCard /></h2>
        <p className='text-xl'>Affordable EMI facilities.</p>
      </div>
      <div className='flex flex-col gap-2 lg:gap-4 items-center'>
        <h2 className='text-4xl'><VscWorkspaceTrusted /></h2>
        <p className='text-xl'>Trusted for all the Genuine accessories.</p>
      </div>

    </div>
  );
};

export default BigReviews;