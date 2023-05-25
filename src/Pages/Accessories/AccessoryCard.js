import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const AccessoryCard = ({ acessory }) => {
  const { _id, name, img, price, description } = acessory;
  return (
    <div className='max-w-[250px]'>
      <Card imgSrc={img} className='shadow-md shadow-gray-500/20 rounded tracking-wide'>
        <div className='min-h-[260px] flex flex-col justify-between '>
          <div>
            <h5 className="text-2xl font-bold text-gray-900 dark:text-white">{name}</h5>
            <p className='text-lg text-gray-800 my-2'>Price: ${price}</p>
            <p className='font-sans tracking-tighter'>{description}</p>
          </div>
          <div className='flex flex-col gap-2 items-center'>
            <Link to={`/placeOrder/accessory/${_id}`} className='rounded-full px-8 py-2 border border-gray-800 text-gray-800 hover:text-white hover:bg-red-600 hover:border-transparent duration-150 tracking-wide'>Buy Now</Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AccessoryCard;