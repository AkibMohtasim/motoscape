import React, { useEffect, useState } from 'react';

const Reviews = ({ medium }) => {

  const url = `http://localhost:5000/api/reviews${medium}`
  // console.log(url)

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [url])

  return (
    <div className='flex flex-wrap gap-4'>
      {
        reviews.map(r => {

          const { _id, userName, rating, review, medium } = r;

          return (
            <div key={_id} className='w-1/5'>
              <h2>{userName}</h2>
              <p>{rating > 4 ? '★★★★★' : '★★★★☆'}</p>
              <p>{review}</p>
              <p>{medium}</p>
            </div>
          )
        }
        )

      }
    </div>
  );
};

export default Reviews;