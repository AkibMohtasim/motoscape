import { Pagination, Tabs } from 'flowbite-react';
import React, { useState } from 'react';
import Reviews from './Reviews';
import { FaFacebook, FaGoogle } from "react-icons/fa";

const CustomerReview = () => {

  const [currentPage, setCurrentPage] = useState(1);
  // console.log(currentPage)

  const onPageChange = (e) => {
    setCurrentPage(e)
  }

  return (
    <section className='mx-auto w-4/5'>

      <h2 className='text-4xl text-center'>Here's what our customers have to say</h2>
      <p className='text-lg text-center'>Read through some of our Google and Facebook reviews to hear directly from them.</p>

      <Tabs.Group aria-label="Tabs with icons">

        <Tabs.Item title="All Reviews 4.5★">
          <Reviews medium={`?medium=&pageNumber=${currentPage}&pageSize=${4}`} />
          <Pagination
            currentPage={currentPage}
            layout="navigation"
            onPageChange={onPageChange}
            showIcons={true}
            totalPages={5}
          />
        </Tabs.Item>

        <Tabs.Item title="Google" icon={FaGoogle}>
          <Reviews medium={`?medium=Google&pageNumber=${currentPage}&pageSize=${4}`} />
          <Pagination
            currentPage={currentPage}
            layout="navigation"
            onPageChange={onPageChange}
            showIcons={true}
            totalPages={3}
          />
        </Tabs.Item>

        <Tabs.Item title="Facebook" icon={FaFacebook}>
          <Reviews medium={`?medium=Facebook&pageNumber=${currentPage}&pageSize=${4}`} />
          <Pagination
            currentPage={currentPage}
            layout="navigation"
            onPageChange={onPageChange}
            showIcons={true}
            totalPages={3}
          />
        </Tabs.Item>

      </Tabs.Group>
    </section>
  );
};

export default CustomerReview;