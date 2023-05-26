import { useQuery } from '@tanstack/react-query';
import { Spinner } from 'flowbite-react';
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const ManageAccessories = () => {
  const { data: accessories = [], refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('https://motoscape-server.vercel.app/api/accessories');
      const data = await res.json();
      return data;
    }
  });

  const deleteOrderHandler = id => {
    const confirm = window.confirm('Do you want to delete this accessory?');

    if (confirm) {
      fetch(`https://motoscape-server.vercel.app/api/accessories/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          refetch();
        });
    }
  }

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
    <div>
      <table>
        <caption className="caption-top text-center py-4 text-2xl tracking-wider">
          Manage Accessories (Admin)
        </caption>
        <thead>
          <tr>
            <th className='px-10 py-2 border'>Product Name</th>
            <th className='px-10 py-2 border'>Status</th>
            <th className='px-10 py-2 border'>Delivery Date</th>
            <th className='px-10 py-2 border'> </th>
          </tr>
        </thead>
        <tbody>
          {
            accessories.map(a =>
              <tr key={a._id}>
                <td className='px-10 py-2 border'>{a.name}</td>
                <td className='px-10 py-2 border'>{a.price}</td>
                <td className='px-10 py-2 border'>
                  <button onClick={() => deleteOrderHandler(a._id)} className='bg-red-600 hover:bg-red-800 duration-150 text-white px-3 py-1 rounded'>Delete <MdDeleteForever className='inline' /></button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default ManageAccessories;