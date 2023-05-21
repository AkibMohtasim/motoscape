import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageMotorcycles = () => {

  const { data: products = [], refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/api/motorcycles');
      const data = await res.json();
      return data.motorcycles;
    }
  });

  const deleteOrderHandler = id => {
    const confirm = window.confirm('Do you want to delete the order?');

    if (confirm) {
      fetch(`http://localhost:5000/api/motorcycles/${id}`, {
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
        products.map(order =>
          <div key={order._id} className='flex gap-4'>
            <p>{order.name}</p>
            <p>{order.brand}</p>
            <p>{order.price}</p>
            <button onClick={() => deleteOrderHandler(order._id)}>Delete Motorcycle</button>
          </div>
        )
      }
    </div>
  );
};

export default ManageMotorcycles;