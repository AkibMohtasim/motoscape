import React from 'react';
import './Banner.css';
import bannerImg from '../../../images/Banner/banner1.jpg';

const Banner = () => {
  return (
    <div className='banner h-[100vh] bg-cover bg-center bg-no-repeat' style={{
      backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0)), url(${bannerImg})`
    }}>
      <div className='text-white pt-32 px-20'>
        <h1 className='text-4xl mb-6'>Motospace</h1>
        <p className='text-xl'>Rev up your passion for motorcycles!</p>
      </div>
    </div>
  );
};

export default Banner;