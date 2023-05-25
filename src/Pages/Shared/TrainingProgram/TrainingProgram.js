import React from 'react';
import video from '../../../videos/training/motorcycle-riding.mp4';



const TrainingProgram = () => {
  return (
    <div className='lg:h-[90vh] flex md:flex-row flex-col items-center my-10 md:px-2 px-0'>
      <div className='w-4/5 md:w-1/2 lg:h-full flex justify-center'>
        <video autoPlay loop controls className='w-3/4 object-cover'>
          <source src={video} />
        </video>
      </div>
      <div className='md:w-1/2 w-3/4 flex flex-col justify-center items-start gap-6 mt-10 md:mt-0'>
        <h2 className='text-6xl'>Zero learning Curve</h2>
        <p className='font-sans text-lg tracking-tighter font-extralight'>Join our training program for better riding and understanding the laws.</p>
        <button className='mt-2 px-8 py-4 text-lg rounded-full border border-black hover:bg-red-600 hover:text-white hover:border-transparent duration-150 tracking-widest'>Join Now</button>
      </div>


    </div>
  );
};

export default TrainingProgram;