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

    console.log(newAccessory);
    form.reset();
  }



  return (
    <div>
      <h2>Add an Accessory</h2>
      <form onSubmit={handleSubmit} className='flex flex-col item'>
        <input type="text" name="name" placeholder='name' required />
        <input type="text" name="price" placeholder='price' required />
        <input type="text" name="img" placeholder='image url' required />
        <input type="text" name="description" placeholder='description' />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AddAccessory; <h2>Add an Accessory</h2>