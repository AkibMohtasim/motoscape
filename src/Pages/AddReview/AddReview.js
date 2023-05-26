import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';



const AddReview = () => {

  useTitle('Add a Review')

  const { user } = useContext(AuthContext);

  const addReviewHandler = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const review = form.review.value;

    const reviewObj = {
      userName: name,
      rating,
      review
    }

    fetch('https://motoscape-server.vercel.app/api/reviews', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviewObj)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        if (data) {
          alert('Review Added Successfully')
          form.reset();
        }
      })
      .catch(err => console.error(err.message));

  }


  return (
    <div className='mx-auto'>
      <h2 className='text-4xl tracking-wider text-center mt-6 underline underline-offset-2 decoration-red-600 decoration-2'>Add a Review</h2>
      <form onSubmit={addReviewHandler} className='max-w-xs mx-auto my-10 text-black flex flex-col items-start gap-4'>
        <div className='w-80'>
          <label>
            <span className="">Name</span>
          </label>
          <input type="text" name='name' className="w-full max-w-xs font-sans" defaultValue={user.displayName} required />
        </div>
        <div>
          <label>
            <span className="">Rating</span>
          </label>
          <select id="rating" name="rating" defaultValue="5" className='ms-2 rounded' required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label>
            <span className="">Review</span>
          </label>
          <textarea name="review" className="w-80 h-32 font-sans" placeholder="Write Your Review..."></textarea>
        </div>
        <button type="submit" className="border border-black hover:border-transparent rounded-full px-6 py-2 mt-2 hover:bg-gray-600 hover:text-white duration-150">Submit</button>
      </form>
    </div>
  );
};

export default AddReview;