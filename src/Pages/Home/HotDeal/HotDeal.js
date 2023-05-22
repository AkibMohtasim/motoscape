import React from 'react';
import { Link } from 'react-router-dom';


const HotDeal = () => {
  // const starIcon = <AiFillStar />;
  return (
    <div className='flex flex-col items-center py-10'>
      <div className='my-4 flex flex-col items-center gap-2 md:w-1/2 w-3/4 text-center'>
        <p className='flex items-center text-sm tracking-widest'>{'★'.repeat(4)} <span className='ml-2'>4.8 rating</span></p>
        <h3 className='text-4xl text-red-600'>Triumph Bonneville T120</h3>
        <p className='text-xl tracking-widest'>The Classic. The Elegant.</p>
        <p className='text-xl underline underline-offset-1'>Best selling bike of last year</p>
      </div>
      <div className='md:w-3/4 lg:w-2/5'>
        <img src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/127877/bonneville-t120-right-front-three-quarter.jpeg?isig=0&q=80" alt="" srcset="" className='mx-auto h-full' />
      </div>
      <div className="flex gap-2">
        <Link to='/motorcycles/646285829e6eae74abb12988' className='px-8 py-2 border border-black rounded-full hover:text-white hover:bg-red-600 hover:border-transparent duration-150 tracking-wide'>View Details</Link>
        <Link to='/placeOrder/646285829e6eae74abb12988' className='rounded-full px-8 py-2 border border-black hover:text-white hover:bg-red-600 hover:border-transparent duration-150 tracking-wide'>Buy Now</Link>
      </div>

    </div>
  );
};

export default HotDeal;