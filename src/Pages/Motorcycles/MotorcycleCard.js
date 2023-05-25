import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const MotorcycleCard = ({ motorcycle }) => {

  const { _id, name, category, brand, img, price, details } = motorcycle;

  return (
    <div className="max-w-sm">
      <Card imgSrc={img} className='shadow-md shadow-gray-500/20 rounded tracking-wider'>
        <div>
          <h5 className="text-2xl font-bold text-gray-800 dark:text-white">{name}</h5>
          <p>{category}</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">{brand}</p>
          <p>Price: ${price}</p>
          <p>{details.engineCapacity}</p>
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <Link to={`/motorcycles/${_id}`} className='rounded-full px-8 py-2 border border-gray-800 text-gray-800 hover:text-white hover:bg-red-600 hover:border-transparent duration-150 tracking-wide'>View Details</Link>
          <Link to={`/placeOrder/motorcycle/${_id}`} className='rounded-full px-8 py-2 border border-gray-800 text-gray-800 hover:text-white hover:bg-red-600 hover:border-transparent duration-150 tracking-wide'>Buy Now</Link>
        </div>
      </Card>
    </div>
  );
};

export default MotorcycleCard;