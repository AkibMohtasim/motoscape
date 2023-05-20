import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';



const AddReview = () => {

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

    fetch('http://localhost:5000/api/reviews', {
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
    <div className='mx-auto flex flex-col items-center'>
      <form onSubmit={addReviewHandler} className='w-full max-w-xs mx-auto my-10 text-black'>
        <div>
          <label>
            <span className="">Name</span>
          </label>
          <input type="text" name='name' className="w-full max-w-xs" defaultValue={user.displayName} required />
        </div>
        <div>
          <label>
            <span className="">Rating</span>
          </label>
          <select id="rating" name="rating" required>
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
          <textarea name="review" className="w-80" placeholder="Write Your Review..."></textarea>
        </div>
        <button type="submit" className="border border-black rounded-full px-6 py-2 mt-2">Submit</button>
      </form>
    </div>
  );
};

export default AddReview;