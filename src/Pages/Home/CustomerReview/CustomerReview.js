import { Tabs } from 'flowbite-react';
import React, { useState } from 'react';
import Reviews from './Reviews';
import { FaFacebook } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const CustomerReview = () => {

  // const [currentPage, setCurrentPage] = useState(1);
  const [medium, setMedium] = useState('?pageNumber');



  return (
    <section className='mx-auto w-4/5'>

      <h2 className='text-4xl text-center'>Here's what our customers have to say</h2>
      <p className='text-lg text-center'>Read through some of our Website and Facebook reviews to hear directly from them.</p>

      <Tabs.Group aria-label="Tabs with icons">

        <Tabs.Item title={<button onClick={() => setMedium(`?pageNumber`)}>All Reviews 4.5★</button>}>
          <Reviews medium={medium} />

        </Tabs.Item>

        <Tabs.Item title={<button onClick={() => setMedium(`?medium=Website&pageNumber`)}>Website</button>} icon={CgWebsite}>
          <Reviews medium={medium} />

        </Tabs.Item>

        <Tabs.Item title={<button onClick={() => setMedium(`?medium=Facebook&pageNumber`)}>Facebook</button>} icon={FaFacebook}>
          <Reviews medium={medium} />

        </Tabs.Item>

      </Tabs.Group>

    </section>
  );
};

export default CustomerReview;