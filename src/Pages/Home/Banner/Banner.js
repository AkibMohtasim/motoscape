import React from 'react';
import './Banner.css';
import { GoFlame } from 'react-icons/go';
import bannerImg from '../../../images/Banner/banner1.jpg';

const Banner = () => {
  return (
    <div className='banner md:h-[100vh] h-[70vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center md:items-start tracking-wide' style={{
      backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0)), url(${bannerImg})`
    }}>
      <div className='md:px-28 mb-10 banner-text-animation'>
        <h1 className='text-6xl text-center md:text-start'><span className='text-red-600'>Moto</span>scape <GoFlame className='text-red-600 text-5xl flame-animation inline' /></h1>
        <p className='text-3xl tracking-widest text-center md:text-none text-red-100'>Rev up your passion for motorcycles</p>
      </div>
    </div>
  );
};

export default Banner;