import { useQuery } from '@tanstack/react-query';
import { Spinner } from 'flowbite-react';
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import useTitle from '../../../Hooks/useTitle';

const ManageOrders = () => {

  useTitle('Manage Orders - Admin');

  const { data: orders = [], refetch } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const res = await fetch('https://motoscape-server.vercel.app/api/orders');
      const data = await res.json();
      return data;
    }
  });


  const changeStatusHandler = (id, status) => {

    if (status === 'Shipped') {
      alert('This product has already been shipped!');
      return;
    }

    const confirm = window.confirm('Do you want to change the status to "Shipped"?');

    if (confirm) {
      fetch(`https://motoscape-server.vercel.app/api/orders/${id}`, {
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
      fetch(`https://motoscape-server.vercel.app/api/orders/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          refetch();
        });
    }
  }

  if (orders.length < 1) {
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
    <div>
      <table className='table-auto mb-8'>
        <caption className="caption-top text-center py-4 text-2xl tracking-wider">
          Manage Orders (Admin)
        </caption>
        <thead>
          <tr>
            <th className='px-10 py-2 border tracking-wider'>Customer Name</th>
            <th className='px-10 py-2 border tracking-wider'>Product Name</th>
            <th className='px-10 py-2 border tracking-wider'>Price</th>
            <th className='px-10 py-2 border tracking-wider'>Phone</th>
            <th className='px-10 py-2 border tracking-wider'>Date</th>
            <th className='px-10 py-2 border tracking-wider'>Status</th>
            <th className='px-10 py-2 border tracking-wider'></th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map(order =>
              <tr key={order._id}>
                <td className='px-10 py-2 border'>{order.customerName}</td>
                <td className='px-10 py-2 border'>{order.productName}</td>
                <td className='px-10 py-2 border'>${order.price}</td>
                <td className='px-10 py-2 border'>{order.phone}</td>
                <td className='px-10 py-2 border'>{order.date}</td>
                <td className='px-10 py-2 border'>
                  <button onClick={() => changeStatusHandler(order._id, order.status)} className={`${order.status === 'Pending' ? 'bg-[#000000bf] hover:bg-[#000000df]' : 'bg-blue-700'} duration-150 text-white px-3 py-1 rounded`}>{order.status}</button>
                </td>
                <td className='px-10 py-2 border'>
                  <button onClick={() => deleteOrderHandler(order._id)}
                    className='bg-red-600 hover:bg-red-800 duration-150 text-white px-3 py-1 rounded'>Delete <MdDeleteForever className='inline' /></button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div >
  );
};

export default ManageOrders;