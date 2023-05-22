import React from 'react';
import './Banner.css';
import { GoFlame } from 'react-icons/go';
import bannerImg from '../../../images/Banner/banner1.jpg';

const Banner = () => {
  return (
    <div className='banner h-[100vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center md:items-start tracking-wide' style={{
      backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0)), url(${bannerImg})`
    }}>
      <div className='md:px-28 mb-10 banner-text-animation'>
        <h1 className='text-6xl underline decoration-red-600 underline-offset-1 decoration-2'>Motospace</h1>
        <p className='text-3xl tracking-widest flex items-end mt-4 gap-1'>Rev up your passion for motorcycles <GoFlame className='text-red-600 text-5xl flame-animation' /></p>
      </div>
    </div>
  );
};

export default Banner;