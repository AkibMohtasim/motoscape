import { Tabs } from 'flowbite-react';
import React, { useState } from 'react';
import Reviews from './Reviews';
import { FaFacebook } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const CustomerReview = () => {

  // const [currentPage, setCurrentPage] = useState(1);
  const [medium, setMedium] = useState('?pageNumber');



  return (
    <section className='mx-auto w-4/5 py-14'>

      <h2 className='text-4xl text-center underline decoration-red-600 decoration-2 underline-offset-2 tracking-wide'>Here's what our customers have to say</h2>
      <p className='mt-2 text-lg text-center tracking-wider'>Read through some of our Website and Facebook reviews to hear directly from them.</p>

      <Tabs.Group aria-label="Tabs with icons" className='lg:my-10 my-4'>

        <Tabs.Item title={<button onClick={() => setMedium(`?pageNumber`)} className='tracking-wide'>All Reviews</button>}>
          <Reviews medium={medium} />
        </Tabs.Item>

        <Tabs.Item title={<button onClick={() => setMedium(`?medium=Website&pageNumber`)} className='tracking-wide'>Website</button>} icon={CgWebsite}>
          <Reviews medium={medium} />
        </Tabs.Item>

        <Tabs.Item title={<button onClick={() => setMedium(`?medium=Facebook&pageNumber`)} className='tracking-wide'>Facebook</button>} icon={FaFacebook}>
          <Reviews medium={medium} />
        </Tabs.Item>

      </Tabs.Group>

    </section>
  );
};

export default CustomerReview;