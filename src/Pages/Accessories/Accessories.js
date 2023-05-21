import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Accessories = () => {

  const { data: accessories = [] } = useQuery({
    queryKey: ['accessories'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/api/accessories');
      const data = await res.json();
      return data;
    }
  });

  return (
    <div>
      {
        accessories.map(a =>
          <div key={a._id}>
            <h2>{a.name}</h2>
          </div>)
      }
    </div>
  );
};

export default Accessories;