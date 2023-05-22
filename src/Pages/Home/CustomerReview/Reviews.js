import { Pagination } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

const Reviews = ({ medium }) => {

  const [reviews, setReviews] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  // const [medium, setMedium] = useState('');
  const [count, setCount] = useState(0);


  const itemsPerPage = 4;
  const pages = Math.ceil(count / itemsPerPage);

  const onPageChange = (e) => {
    setCurrentPage(e)
  }


  const url = `http://localhost:5000/api/reviews${medium}=${currentPage}&pageSize=${itemsPerPage}`;

  // console.log(url)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setReviews(data.reviews);
        setCount(data.count);
      })
  }, [url, medium, currentPage])



  return (
    <div className='flex flex-col gap-4'>
      <h2>Total Reviews: {count}</h2>
      <div className='flex flex-wrap gap-4 justify-center tracking-wide'>
        {
          reviews ?
            reviews?.map(r => {

              const { _id, userName, rating, review, medium } = r;

              return (
                <div key={_id} className='md:w-1/5'>
                  <h2>{userName}</h2>
                  {/* <p>{rating > 4 ? '★★★★★' : '★★★★☆'}</p> */}
                  <p>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</p>
                  <p>{review}</p>
                  <p>{medium}</p>
                </div>
              )
            })
            :
            <p>Loading....</p>
        }
      </div>
      <Pagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        layout="navigation"
        showIcons={true}
        totalPages={pages}
        className='text-center'
      />
    </div>
  );
};

export default Reviews;