import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FullLineup.css';

const FullLineup = () => {

  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    // Delay showing the component for 1.5 seconds
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);




  return (
    <div className={`flex flex-col items-center bg-black text-white`}>
      <h2 className='text-2xl'>The full line up</h2>
      <p className='text-lg'>A variety of motorcycles for every rider.</p>

      <h2>Browse by Brands</h2>
      <section id='box' className={`flex gap-8 justify-center items-center slide-in ${showComponent ? 'show' : ''}`}>
        <Link to='/motorcycles?brand=Triumph' className='w-1/4 hover:scale-110 duration-150 cursor-pointer'>
          <img src="https://cdn-0.motorcycle-logos.com/wp-content/uploads/2017/08/Triumph-logo-2013.jpg" alt="" srcset="" className='w-full' />
        </Link>
        <Link to='/motorcycles?brand=Honda' className='w-1/4 hover:scale-110 duration-150 cursor-pointer'>
          <img src="https://www.logo.wine/a/logo/Honda/Honda-Logo.wine.svg" alt="" srcset="" className='w-full' />
        </Link>
        <Link to='/motorcycles?brand=Yamaha' className='w-1/4 hover:scale-110 duration-150 cursor-pointer'>
          <img src="https://worldagritechusa.com/wp-content/uploads/2019/01/Yamaha-Logo.png" alt="" srcset="" className='w-full' />
        </Link>
      </section>

      <h2>Browse by Categories</h2>

      <section className='flex gap-4 flex-wrap'>
        <Link to='/motorcycles?category=Adventure' className='w-[20vw] h-[35vh] bg-cover bg-center' style={{ backgroundImage: 'url("https://www.madornomad.com/wp-content/uploads/2022/04/New-Adventure-Bikes-of-2023-1.jpg")' }}>
          <h2>Adventure</h2>
        </Link>
        <Link to='/motorcycles?category=Sport' className='w-[20vw] h-[35vh] bg-cover bg-center' style={{ backgroundImage: 'url("https://www.webbikeworld.com/wp-content/uploads/2020/05/2022-Yamaha-YZF-R7.jpg")' }} >
          <img src="" alt="" srcset="" />
          <h2>Sport</h2>
        </Link>
        <Link to='/motorcycles?category=Cruiser' className='w-[20vw] h-[35vh] bg-cover bg-center' style={{ backgroundImage: 'url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/p90451706-highres-1659455646.jpg?crop=0.943xw:0.707xh;0,0.164xh&resize=980:*")' }}>
          <img src="" alt="" srcset="" />
          <h2>Cruiser</h2>
        </Link>
        <Link to='/motorcycles?category=Naked' className='w-[20vw] h-[35vh] bg-cover bg-center' style={{ backgroundImage: 'url("https://cdn.visordown.com/styles/v2_large/s3/field/image/Triumph%20Speed%20Triple_0.jpg?itok=wHuvDhjQ")' }}>
          <img src="" alt="" srcset="" />
          <h2>Naked Sport</h2>
        </Link>
      </section>

      <h2 className='text-3xl'>See all Bikes</h2>
      <section>
        <Link to='/motorcycles' className='text-4xl'>See All Bikes</Link>
      </section>
    </div>
  );
};

export default FullLineup;