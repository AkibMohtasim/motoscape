import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import OrderTable from './OrderTable';
import { Table } from 'flowbite-react';

const MyOrders = () => {

  const { user } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/orders/findByemail/?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setOrders(data));
  }, [user?.email])


  const deleteOrder = id => {
    const confirm = window.confirm('Are you sure you want to delete the order?');

    if (confirm) {
      fetch(`http://localhost:5000/api/orders/${id}`, {
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

  return (

    <div>
      <h2>Orders for {user?.displayName}</h2>
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>
            Cusomter name
          </Table.HeadCell>
          <Table.HeadCell>
            Phone Number
          </Table.HeadCell>
          <Table.HeadCell>
            Bike Name
          </Table.HeadCell>
          <Table.HeadCell>
            Price
          </Table.HeadCell>
          <Table.HeadCell>
            Delivery Date
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">
              Cancel
            </span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            orders.map(order => <OrderTable key={order._id} order={order} deleteOrder={deleteOrder}></OrderTable>)
          }
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyOrders;