import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const PlaceOrder = () => {

  const { user } = useContext(AuthContext);

  const { _id, name, brand, details, price, img } = useLoaderData();

  const navigate = useNavigate();

  const orderHandler = event => {

    event.preventDefault();
    const form = event.target;
    const customerName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const address = form.address.value;
    const message = form.message.value;

    const order = {
      product_id: _id,
      productName: name,
      price,
      customerName,
      email,
      phone,
      date,
      address,
      message,
      status: 'Pending'
    }

    fetch('http://localhost:5000/api/orders', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        if (data) {
          alert('Order Placed Successfully');
          form.reset();
          console.log(data);
          navigate('/dashboard/paymentOptions', { replace: true })
        }
      })
      .catch(err => console.error(err.message));
  }

  return (
    <div className="flex justify-center items-center gap-4">
      <div className='w-1/2'>
        <div className='text-center'>
          <h1 className="mb-5 text-5xl font-bold">{name}</h1>
          <p>Brand: {brand}</p>
          <p>Engine Capacity: {details.engineCapacity}</p>
          <p className="mb-5">Price: ${price}</p>
        </div>
        <form onSubmit={orderHandler} className="w-full max-w-xs mx-auto my-10 text-black font-sans tracking-tight">
          <div>
            <label>
              <span className="">Name</span>
            </label>
            <input type="text" name="name" placeholder="Full Name" className="w-full max-w-xs" defaultValue={user.displayName} required />
          </div>
          <div>
            <label>
              <span>Email</span>
            </label>
            <input type="email" name='email' placeholder="Email" className="w-full max-w-xs" defaultValue={user.email} required readOnly />
          </div>
          <div>
            <label>
              <span>Phone Number</span>
            </label>
            <input type="text" name='phone' placeholder="Phone Number" className="w-full max-w-xs" required />
          </div>
          <div>
            <label>
              <span>When you want the product delivered?</span>
            </label>
            <input type="date" name='date' className="w-full max-w-xs" required />
          </div>
          <div>
            <label>
              <span className="">Address</span>
            </label>
            <input type="text" name='address' className="w-full max-w-xs" required />
          </div>
          <div>
            <label>
              <span className="">Additional message</span>
            </label>
            <textarea name="message" className="w-80" placeholder="Additional Message"></textarea>
          </div>
          <button type="submit" className="border border-black rounded-full px-6 py-2 mt-2">Purchase ${price}</button>
        </form>
      </div>
      <div className='w-1/2'>
        <img src={img} alt="" srcset="" className='w-5/6' />
      </div>
    </div>
  );
};

export default PlaceOrder;