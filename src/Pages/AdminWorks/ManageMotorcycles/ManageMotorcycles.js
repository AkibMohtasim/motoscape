import { useQuery } from '@tanstack/react-query';
import { Spinner } from 'flowbite-react';
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const ManageMotorcycles = () => {

  const { data: motorcycles = [], refetch } = useQuery({
    queryKey: ['motorcycles'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/api/motorcycles');
      const data = await res.json();
      return data.motorcycles;
    }
  });

  const deleteOrderHandler = id => {
    const confirm = window.confirm('Do you want to delete the Motorcycle?');

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

  if (motorcycles.length < 1) {
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
        <caption className="caption-top text-center py-4">
          Manage Motorcycles (Admin)
        </caption>
        <thead>
          <th className='px-10 py-2 border tracking-wider'>Motorcycle Name</th>
          <th className='px-10 py-2 border tracking-wider'>Brand</th>
          <th className='px-10 py-2 border tracking-wider'>Price</th>
          <th className='px-10 py-2 border tracking-wider'> </th>
        </thead>
        <tbody>
          {
            motorcycles.map(order =>
              <tr key={order._id}>
                <th className='px-10 py-2 border font-light'>{order.name}</th>
                <th className='px-10 py-2 border font-light'>{order.brand}</th>
                <th className='px-10 py-2 border font-light'>${order.price}</th>
                <th className='px-10 py-2 border font-light'>
                  <button onClick={() => deleteOrderHandler(order._id)} className='bg-red-600 hover:bg-red-800 duration-150 text-white px-3 py-1 rounded'>Delete <MdDeleteForever className='inline' /></button>
                </th>
              </tr>
            )
          }
        </tbody>
      </table>

    </div>
  );
};

export default ManageMotorcycles;