import React from 'react';
// import trainingPhoto from '../../../images/Training/training.jpg';
import trainingPhoto from '../../../images/testRide/training3.jpg'
import { Link } from 'react-router-dom';

const TestRide = () => {
  return (
    <div className='bg-black lg:h-[80vh] h-auto flex text-white py-10'>
      <section className='w-1/2 px-2 flex justify-end'>
        <div className='w-4/5 flex flex-col gap-4 items-start justify-center'>
          <h2 className='lg:text-6xl text-4xl tracking-wider'>Ride Before You Buy</h2>
          <p className='lg:text-xl text-lg tracking-tighter font-sans font-thin'>Book a test ride at one of our two lcoations and get the full experience before you buy.</p>
          <Link to='testRide' className='mt-2 px-8 py-4 text-lg rounded-full border border-white hover:bg-red-600 text-white hover:border-transparent duration-150 tracking-widest'>Book Now</Link>
        </div>
      </section>
      <div className='w-1/2 flex items-center justify-center'>
        <img src={trainingPhoto} alt="" className='w-4/5' />
      </div>
    </div>
  );
};

export default TestRide;