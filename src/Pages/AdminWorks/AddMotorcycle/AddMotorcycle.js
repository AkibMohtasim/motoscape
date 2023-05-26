import React from 'react';

const AddMotorcycle = () => {



  const productSubmitHandler = e => {
    const form = e.target;
    e.preventDefault();

    const newMotorcycle = {
      brand: form.brand.value,
      category: form.category.value,
      name: form.name.value,
      img: form.img.value,
      price: form.price.value,
      details: {
        engineCapacity: form.engineCapacity.value,
        maxPower: form.maxPower.value,
        maxTorque: form.maxTorque.value,
        gearbox: form.gearbox.value,
        frontTire: form.frontTire.value,
        rearTire: form.rearTire.value,
        frontBrakes: form.frontBrakes.value,
        rearBrakes: form.rearBrakes.value,
        display: form.display.value,
        seatHeight: form.seatHeight.value,
        fuelCapacity: form.fuelCapacity.value,
        wetWeight: form.wetWeight.value,
        serviceInterval: form.serviceInterval.value
      }
    }

    fetch('https://motoscape-server.vercel.app/api/motorcycles', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newMotorcycle)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data) {
          alert('Motorcycle Added Successfully')
          form.reset();
        }
      })
  }



  return (
    <div className='w-96 px-2 mb-8'>
      <h2 className='text-2xl tracking-wider py-4 text-center'>Add a new Motorcyle</h2>
      <form onSubmit={productSubmitHandler} className='flex flex-col gap-2 font-sans'>
        <input type="text" name="brand" placeholder='brand' required />
        <select name="category" required defaultValue="none">
          <option value="none" disabled>Choose a category</option>
          <option value="Adventure">Adventure</option>
          <option value="Naked">Naked</option>
          <option value="Sport">Sport</option>
          <option value="Cruiser">Cruiser</option>
        </select>
        <input type="text" name="name" placeholder='name' required />
        <input type="text" name="img" placeholder='image URL' required />
        <input type="text" name="price" placeholder='Write the number only. for example - 5000' required />
        <input type="text" name="engineCapacity" placeholder='engine capacity. e.g. 650cc' required />
        <input type="text" name="maxPower" placeholder='max power' required />
        <input type="text" name="maxTorque" placeholder='max torque' required />
        <input type="text" name="gearbox" placeholder='Gear Box' required />
        <input type="text" name="frontTire" placeholder='Front Tire' required />
        <input type="text" name="rearTire" placeholder='Rear Tire' required />
        <input type="text" name="frontBrakes" placeholder='Front Brakes' required />
        <input type="text" name="rearBrakes" placeholder='Rear Brakes' required />
        <input type="text" name="display" placeholder='Display' required />
        <input type="text" name="seatHeight" placeholder='Seat Height' required />
        <input type="text" name="fuelCapacity" placeholder='Fuel Capacity' required />
        <input type="text" name="wetWeight" placeholder='Wet Weight' required />
        <input type="text" name="serviceInterval" placeholder='Service Interval' required />
        <input type="submit" value="Submit" className='border border-black rounded-full px-4 py-2 w-32 hover:bg-red-600 hover:border-transparent hover:text-white duration-150 cursor-pointer mx-auto mt-2' />
      </form>
    </div>
  );
};

export default AddMotorcycle;