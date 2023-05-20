import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageOrders = () => {

  const { data: orders = [], refetch } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/api/orders');
      const data = await res.json();
      return data;
    }
  });


  const changeStatusHandler = id => {

    const confirm = window.confirm('Do you want to change the status to "Shipped"?');

    if (confirm) {
      fetch(`http://localhost:5000/api/orders/${id}`, {
        method: 'PUT'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          refetch();
        });
    }
  }


  const deleteOrderHandler = id => {
    const confirm = window.confirm('Do you want to delete the order?');

    if (confirm) {
      fetch(`http://localhost:5000/api/orders/${id}`, {
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
        orders.map(order =>
          <div key={order._id} className='flex gap-4'>
            <p>{order.customerName}</p>
            <p>{order.bikeName}</p>
            <p>{order.phone}</p>
            <button onClick={() => changeStatusHandler(order._id)}>{order.status}</button>
            <button onClick={() => deleteOrderHandler(order._id)}>Delete Order</button>
          </div>
        )
      }
    </div>
  );
};

export default ManageOrders;