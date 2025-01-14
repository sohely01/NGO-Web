import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Event1 from '../assets/img/events-1.jpg';
import Event2 from '../assets/img/events-2.jpg';
import Event3 from '../assets/img/events-3.jpg';

const UpEvents = () => {
  const options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 30,
    nav: false,
    dots: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
    },
  };

  return (
    <div>
      <section className="events-section bg-grey bd-bottom padding">
        <div className="container">
          <div className="section-heading text-center mb-40">
            <h2>Upcoming Events</h2>
            <span className="heading-border"></span>
            <p>
              Help today because tomorrow you may be the one who <br /> needs
              more helping!
            </p>
          </div>
          <OwlCarousel className="events-wrap owl-carousel" {...options}>
            <div className="events-item">
              <div className="event-thumb">
                <img src={Event1} alt="events" />
              </div>
              <div className="event-details">
                <h3>Let's talk about the poor children.</h3>
                <div className="event-info">
                  <p>
                    <i className="ti-calendar"></i> Started On: 12:00 PM.
                  </p>
                  <p>
                    <i className="ti-location-pin"></i> Grand Mahal, Dubai
                    2100.
                  </p>
                </div>
                <p>
                  Help today because tomorrow you may be the one who needs more
                  helping!
                </p>
                <a href="#" className="default-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="events-item">
              <div className="event-thumb">
                <img src={Event2} alt="events" />
              </div>
              <div className="event-details">
                <h3>Insure clean water to everyone in Africa.</h3>
                <div className="event-info">
                  <p>
                    <i className="ti-calendar"></i> Started On: 12:00 PM.
                  </p>
                  <p>
                    <i className="ti-location-pin"></i> Grand Mahal, Dubai
                    2100.
                  </p>
                </div>
                <p>
                  Help today because tomorrow you may be the one who needs more
                  helping!
                </p>
                <a href="#" className="default-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="events-item">
              <div className="event-thumb">
                <img src={Event3} alt="events" />
              </div>
              <div className="event-details">
                <h3>Nepal Earthquake Clean Water Initiative.</h3>
                <div className="event-info">
                  <p>
                    <i className="ti-calendar"></i> Started On: 12:00 PM.
                  </p>
                  <p>
                    <i className="ti-location-pin"></i> Grand Mahal, Dubai
                    2100.
                  </p>
                </div>
                <p>
                  Help today because tomorrow you may be the one who needs more
                  helping!
                </p>
                <a href="#" className="default-btn">
                  Read More
                </a>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </div>
  );
};

export default UpEvents;
