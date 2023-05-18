import React from 'react';
import Banner from '../Banner/Banner';
import BigReviews from '../BigReviews/BigReviews';
import HotDeal from '../HotDeal/HotDeal';
import FullLineup from '../FullLineup/FullLineup';
import CustomerReview from '../CustomerReview/CustomerReview';
import IMEIFacility from '../IMEIFacility/IMEIFacility';
import TrainingProgram from '../../Shared/TrainingProgram/TrainingProgram';
import TestRide from '../TestRide/TestRide';
import Facilities from '../Facilities/Facilities';

const Home = () => {
  return (
    <div>
      <Banner />
      <BigReviews />
      <HotDeal />
      <FullLineup />
      <CustomerReview />
      <IMEIFacility />
      <TrainingProgram />
      <TestRide />
      <Facilities />
    </div>
  );
};

export default Home;