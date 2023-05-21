import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageAccessories = () => {
  const { data: accessories = [], refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/api/accessories');
      const data = await res.json();
      return data;
    }
  });

  const deleteOrderHandler = id => {
    const confirm = window.confirm('Do you want to delete this accessory?');

    if (confirm) {
      fetch(`http://localhost:5000/api/accessories/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          refetch();
        });
    }
  }


  return (
    <div>
      {
        accessories.map(a =>
          <div key={a._id} className='flex gap-4'>
            <p>{a.name}</p>
            <p>{a.price}</p>
            <button onClick={() => deleteOrderHandler(a._id)}>Delete</button>
          </div>
        )
      }
    </div>
  );
};

export default ManageAccessories;