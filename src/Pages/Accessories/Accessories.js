import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AccessoryCard from './AccessoryCard';
import { Spinner } from 'flowbite-react';

const Accessories = () => {

  const { data: accessories = [] } = useQuery({
    queryKey: ['accessories'],
    queryFn: async () => {
      const res = await fetch('https://motoscape-server.vercel.app/api/accessories');
      const data = await res.json();
      return data;
    }
  });

  if (accessories.length < 1) {
    return (
      <div className='text-center my-10'>
        <Spinner
          aria-label="Extra large spinner example"
          size="xl"
        />
      </div>
    )
  }

  return (
    <div className='flex flex-wrap justify-center gap-8 my-10'>
      {
        accessories.map(acessory =>
          <AccessoryCard key={acessory._id} acessory={acessory}></AccessoryCard>)
      }
    </div>
  );
};

export default Accessories;