import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Sponser1 from '../assets/img/sponsor-1.png';
import Sponser2 from '../assets/img/sponsor-2.png';
import Sponser3 from '../assets/img/sponsor-3.png';
import Sponser4 from '../assets/img/sponsor-4.png';
import Sponser5 from '../assets/img/sponsor-5.png';
import Sponser6 from '../assets/img/sponsor-6.png';
import Sponser7 from '../assets/img/sponsor-7.png';
import Sponser8 from '../assets/img/sponsor-8.png';

const Sponser = () => {
  return (
    <div className="sponsor-section bd-bottom">
      <div className="container">
        <OwlCarousel
          className="sponsor-items owl-carousel"
          loop
          autoplay
          autoplayTimeout={3000}
          margin={10}
          items={4} // Adjust the number of sponsors visible at once
          dots={false}
          nav={false}
          responsive={{
            0: { items: 2 },
            768: { items: 3 },
            1024: { items: 4 },
          }}
        >
          <div className="sponsor-item">
            <img src={Sponser1} alt="sponsor-image" />
          </div>
          <div className="sponsor-item">
            <img src={Sponser2} alt="sponsor-image" />
          </div>
          <div className="sponsor-item">
            <img src={Sponser3} alt="sponsor-image" />
          </div>
          <div className="sponsor-item">
            <img src={Sponser4} alt="sponsor-image" />
          </div>
          <div className="sponsor-item">
            <img src={Sponser5} alt="sponsor-image" />
          </div>
          <div className="sponsor-item">
            <img src={Sponser6} alt="sponsor-image" />
          </div>
          <div className="sponsor-item">
            <img src={Sponser7} alt="sponsor-image" />
          </div>
          <div className="sponsor-item">
            <img src={Sponser8} alt="sponsor-image" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Sponser;
