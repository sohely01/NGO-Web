import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Team1 from '../assets/img/team-1.jpg';
import Team2 from '../assets/img/team-2.jpg';
import Team3 from '../assets/img/team-3.jpg';
import Team4 from '../assets/img/team-4.jpg';

const Reviews = () => {
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
      1024: { items: 3 },
    },
  };

  return (
    <div>
      <section className="testimonial-section bd-bottom padding">
        <div className="container">
          <div className="section-heading text-center mb-40">
            <h2>What People Say</h2>
            <span className="heading-border"></span>
            <p>
              Help today because tomorrow you may be the one who <br /> needs
              more helping!
            </p>
          </div>
          <OwlCarousel
            className="testimonial-carousel owl-carousel"
            {...options}
          >
            <div className="testimonial-item">
              <p>
                The secret to happiness lies in helping others. Never
                underestimate the difference YOU can make in the lives of the
                poor, the abused and the helpless.
              </p>
              <div className="testi-footer">
                <img src={Team1} alt="profile" />
                <h4>
                  Jonathan Smith <span>Marketer</span>
                </h4>
              </div>
            </div>
            <div className="testimonial-item">
              <p>
                The secret to happiness lies in helping others. Never
                underestimate the difference YOU can make in the lives of the
                poor, the abused and the helpless.
              </p>
              <div className="testi-footer">
                <img src={Team2} alt="profile" />
                <h4>
                  Angelina Rose <span>Designer</span>
                </h4>
              </div>
            </div>
            <div className="testimonial-item">
              <p>
                The secret to happiness lies in helping others. Never
                underestimate the difference YOU can make in the lives of the
                poor, the abused and the helpless.
              </p>
              <div className="testi-footer">
                <img src={Team3} alt="profile" />
                <h4>
                  Taylor Swift <span>Developer</span>
                </h4>
              </div>
            </div>
            <div className="testimonial-item">
              <p>
                The secret to happiness lies in helping others. Never
                underestimate the difference YOU can make in the lives of the
                poor, the abused and the helpless.
              </p>
              <div className="testi-footer">
                <img src={Team4} alt="profile" />
                <h4>
                  Michel Brown <span>Programmer</span>
                </h4>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
