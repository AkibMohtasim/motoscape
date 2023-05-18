import { Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const MotorcycleCard = ({ motorcycle }) => {

  const { _id, name, category, brand, img, price, details } = motorcycle;

  return (
    <div className="max-w-sm">
      <Card imgSrc={img}>

        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
          <p>{category}</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">{brand}</p>
          <p>Price: ${price}</p>
          <p>{details.engineCapacity}</p>
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <Link to={`/motorcycles/${_id}`} className='px-8 py-2 border border-black rounded-full'>View Details</Link>
          <button className='px-8 py-2 border border-black rounded-full'>Add to Cart</button>
        </div>
      </Card>
    </div>
  );
};

export default MotorcycleCard;