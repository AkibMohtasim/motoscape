import React from 'react';

const AddAccessory = () => {

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const newAccessory = {
      name: form.name.value,
      price: form.price.value,
      img: form.img.value,
      description: form.description.value
    }

    fetch('http://localhost:5000/api/accessories', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newAccessory)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data) {
          alert('Accessory Added Successfully')
          form.reset();
        }
      })

    console.log(newAccessory);
    form.reset();
  }



  return (
    <div className='my-8 w-96 px-2  '>
      <h2 className='my-4'>Add an Accessory</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 item font-sans'>
        <input type="text" name="name" placeholder='name' required />
        <input type="text" name="price" placeholder='price' required />
        <input type="text" name="img" placeholder='image url' required />
        <input type="text" name="description" placeholder='description' />
        <input type="submit" value="Submit" className='border border-black rounded-full px-4 py-2 w-32 hover:bg-red-600 hover:border-transparent hover:text-white duration-150 cursor-pointer mx-auto mt-2' />
      </form>
    </div>
  );
};

export default AddAccessory; <h2>Add an Accessory</h2>