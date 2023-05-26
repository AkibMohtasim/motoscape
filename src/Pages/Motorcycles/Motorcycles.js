import { Pagination, Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MotorcycleCard from './MotorcycleCard';
import useTitle from '../../Hooks/useTitle';

const Motorcycles = () => {

  useTitle('Motorcycles');

  const location = useLocation();

  const [motorcycles, setMotorcycles] = useState([]);
  const [count, setCount] = useState(0);
  // console.log(location.search)

  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = count;
  const itemsPerPage = 5;

  const pages = Math.ceil(totalItems / itemsPerPage);



  const onPageChange = (e) => {
    setCurrentPage(e);
  }

  let url = `https://motoscape-server.vercel.app/api/motorcycles${location.search}&pageNumber=${currentPage}&pageSize=${itemsPerPage}`;

  if (!location.search) {
    url = `https://motoscape-server.vercel.app/api/motorcycles?pageNumber=${currentPage}&pageSize=${itemsPerPage}`;
  }


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMotorcycles(data.motorcycles);
        setCount(data.count);
      })
  }, [url]);

  if (motorcycles.length < 1) {
    return (
      <div className='text-center my-10'>
        <Spinner
          aria-label="Extra large spinner example"
          size="xl"
        />
      </div>
    )
  }

  return (
    <div className='text-center py-10'>

      <div className='flex flex-wrap gap-4 justify-center'>
        {
          motorcycles.map(m => <MotorcycleCard key={m._id} motorcycle={m} />)
        }
      </div>

      <Pagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        showIcons={true}
        totalPages={pages}
      />
    </div>
  );
};

export default Motorcycles;