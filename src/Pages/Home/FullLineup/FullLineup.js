import React from 'react';
import { Link } from 'react-router-dom';
import triumphLogo from '../../../images/motorcycleBrands/Triumph-logo-2013.png';
import hondaLogo from '../../../images/motorcycleBrands/Honda-Logopng.png';
import yamahaLogo from '../../../images/motorcycleBrands/Yamaha-Logo.jpg';

const FullLineup = () => {

  return (
    <div className='flex flex-col items-center bg-black text-white pt-10 text-center'>
      <h2 className='md:text-6xl text-4xl tracking-widest mb-4 underline underline-offset-4 decoration-2 decoration-red-600'>The full line up</h2>
      <p className='text-xl tracking-wider'>A variety of motorcycles for every rider.</p>


      {/* -------------- Brand section ----------- */}

      <section className='mt-20 flex flex-col md:gap-2 gap-8 justify-center items-center py-4 md:py-0 w-4/5 md:w-full'>
        <h2 className='md:text-4xl text-3xl underline underline-offset-4 decoration-1 decoration-red-600 mb-6'>Browse by Brands</h2>
        <div className='flex md:flex-row flex-col md:gap-8 gap-10 justify-center items-center'>
          <Link to='/motorcycles?brand=Triumph' className='md:w-1/4 w-1/2 hover:scale-110 duration-150 cursor-pointer flex justify-center items-center shadow-md shadow-red-500/50'>
            <img src={triumphLogo} alt="" srcset="" className='md:w-3/4 w-full' />
          </Link>
          <Link to='/motorcycles?brand=Honda' className='md:w-1/4 w-1/2 hover:scale-110 duration-150 cursor-pointer flex justify-center items-center shadow-md shadow-red-500/50'>
            <img src={hondaLogo} alt="" srcset="" className='w-full' />
          </Link>
          <Link to='/motorcycles?brand=Yamaha' className='md:w-1/4 w-1/2 hover:scale-110 duration-150 cursor-pointer flex justify-center items-center shadow-md shadow-red-500/50'>
            <img src={yamahaLogo} alt="" srcset="" className='md:w-3/4 w-full' />
          </Link>
        </div>
      </section>

      {/* -------------- category section ----------- */}

      <section className='mt-20 flex flex-col gap-8 justify-center items-center py-4 md:py-0 w-4/5 md:w-full'>
        <h2 className='md:text-4xl text-3xl underline underline-offset-4 decoration-1 decoration-red-600'>Browse by Categories</h2>
        <div className='flex md:flex-row flex-col md:gap-8 gap-2 justify-center items-center'>
          <Link to='/motorcycles?category=Adventure' className='md:w-[18vw] md:h-[31vh] w-64 h-48 bg-cover bg-center flex items-center justify-center rounded' style={{
            backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://www.madornomad.com/wp-content/uploads/2022/04/New-Adventure-Bikes-of-2023-1.jpg")'
          }}>
            <h2 className='text-2xl tracking-wide p-2 bg-[#0000009F] w-full hover:bg-transparent hover:text-3xl duration-100'>Adventure</h2>
          </Link>
          <Link to='/motorcycles?category=Sport' className='md:w-[18vw] md:h-[31vh] w-64 h-48 bg-cover bg-center flex items-center justify-center rounded' style={{ backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://www.webbikeworld.com/wp-content/uploads/2020/05/2022-Yamaha-YZF-R7.jpg")' }} >

            <h2 className='text-2xl tracking-wide p-2 bg-[#0000009F] w-full hover:bg-transparent hover:text-3xl duration-100'>Sport</h2>
          </Link>
          <Link to='/motorcycles?category=Cruiser' className='md:w-[18vw] md:h-[31vh] w-64 h-48 bg-cover bg-center flex items-center justify-center rounded' style={{ backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90451706-highres-1659455646.jpg?crop=0.943xw:0.707xh;0,0.164xh&resize=980:*")' }}>

            <h2 className='text-2xl tracking-wide p-2 bg-[#0000009F] w-full hover:bg-transparent hover:text-3xl duration-100'>Cruiser</h2>
          </Link>
          <Link to='/motorcycles?category=Naked' className='md:w-[18vw] md:h-[31vh] w-64 h-48 bg-cover bg-center flex items-center justify-center rounded' style={{ backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://cdn.visordown.com/styles/v2_large/s3/field/image/Triumph%20Speed%20Triple_0.jpg?itok=wHuvDhjQ")' }}>

            <h2 className='text-2xl tracking-wide p-2 bg-[#0000009F] w-full hover:bg-transparent hover:text-3xl duration-100'>Naked Sport</h2>
          </Link>
        </div>
      </section>

      <section className='md:my-20 my-10 w-4/5 h-20'>
        <Link to='/motorcycles' className='md:text-2xl text-lg rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-150 md:px-8 px-4 md:py-4 py-2'>See All Bikes</Link>
      </section >
    </div >
  );
};

export default FullLineup;