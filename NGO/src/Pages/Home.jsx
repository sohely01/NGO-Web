import React from 'react';

import Header from '../Common/Header';
import Hero from '../HomePage/Hero';
import Footer from '../Common/Footer';
import Help from '../HomePage/Help';
import AboutUs from '../HomePage/AboutUs';
import Donatation from '../HomePage/Donatation';
import UpEvents from '../HomePage/UpEvents';
import Sponser from '../HomePage/Sponser';
import Reviews from '../HomePage/Reviews';

const Home = () => {
  return (
    <div>
      <Header />
      
      <Hero/>
      <Help/>
      <AboutUs/>
      <Donatation/>
      <UpEvents/>
      <Reviews/>
      <Sponser/>
      <Footer/>

      
    </div>
  );
};

export default Home;
