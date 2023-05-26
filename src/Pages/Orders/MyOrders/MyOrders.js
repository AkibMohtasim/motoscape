import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import OrderTable from './OrderTable';

const MyOrders = () => {

  const { user } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://motoscape-server.vercel.app/api/orders/findByemail/?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setOrders(data));
  }, [user?.email])


  const deleteOrder = id => {
    const confirm = window.confirm('Are you sure you want to delete the order?');

    if (confirm) {
      fetch(`https://motoscape-server.vercel.app/api/orders/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data) {
            const remaining = orders.filter(odr => odr._id !== id);
            setOrders(remaining);
            alert('deleted successfully');
          }
        })
        .catch(err => console.error(err.message))
    }
  }

  if (orders.length === 0) {
    return <h2 className='text-xl font-extralight tracking-wide text-center my-8 text-gray-800'>You haven't placed any orders.</h2>
  }

  return (

    <div>
      <table className='table-auto mb-8'>
        <caption className="caption-top text-center py-4">
          Orders for {user?.displayName}
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
            orders.map(order => <OrderTable key={order._id} order={order} deleteOrder={deleteOrder}></OrderTable>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;