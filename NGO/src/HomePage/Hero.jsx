import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../assets/img/slider-1.jpg";
import Slider2 from "../assets/img/slider-2.jpg";
import Slider3 from "../assets/img/slider-3.jpg";
import Icon1 from "../assets/img/icon-1.png";
import Icon2 from "../assets/img/icon-2.png";
import Icon3 from "../assets/img/icon-3.png";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  useEffect(() => {
    // If you are using wow.js for animation triggers, initialize it
    new WOW().init();
  }, []);

  return (
    <div>
      <section className="slider-section">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="slider-item">
            <img src={Slider1} alt="Slider 1" />
            <div className="slider-caption">
              <div className="display-table">
                <div className="slider-item">
                  <img src={Slider1} alt="Slider 1" />
                  <div className="slider-caption">
                    <div className="slider-text">
                      <h5 className="animate__animated animate__fadeInUp">
                        Join Us Today
                      </h5>
                      <h1
                        className="animate__animated animate__fadeInRight"
                        data-wow-delay="1s"
                      >
                        Give a little. Change a lot.
                      </h1>
                      <p
                        className="animate__animated animate__fadeInDown"
                        data-wow-delay="1s"
                      >
                        Help today because tomorrow you may be the one who needs
                        helping!
                        <br /> Forget what you can get and see what you can
                        give.
                      </p>
                      <a
                        href="#"
                        className="default-btn animate__animated animate__fadeInUp"
                        data-wow-delay="0.8s"
                      >
                        Join With Us
                      </a>
                      <a
                        href="#"
                        className="default-btn animate__animated animate__fadeInUp"
                        data-wow-delay="0.8s"
                      >
                        Donate Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="slider-item">
            <img src={Slider2} alt="Slider 2" />
            <div className="slider-caption">
              <div className="display-table">
              <div className="slider-item">
                  <img src={Slider1} alt="Slider 1" />
                  <div className="slider-caption">
                    <div className="slider-text">
                      <h5 className="animate__animated animate__fadeInUp">
                        Join Us Today
                      </h5>
                      <h1
                        className="animate__animated animate__fadeInRight"
                        data-wow-delay="1s"
                      >
                        Give a little. Change a lot.
                      </h1>
                      <p
                        className="animate__animated animate__fadeInDown"
                        data-wow-delay="1s"
                      >
                        Help today because tomorrow you may be the one who needs
                        helping!
                        <br /> Forget what you can get and see what you can
                        give.
                      </p>
                      <a
                        href="#"
                        className="default-btn animate__animated animate__fadeInUp"
                        data-wow-delay="0.8s"
                      >
                        Join With Us
                      </a>
                      <a
                        href="#"
                        className="default-btn animate__animated animate__fadeInUp"
                        data-wow-delay="0.8s"
                      >
                        Donate Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="slider-item">
            <img src={Slider3} alt="Slider 3" />
            <div className="slider-caption">
              <div className="display-table">
              <div className="slider-item">
                  <img src={Slider1} alt="Slider 1" />
                  <div className="slider-caption">
                    <div className="slider-text">
                      <h5 className="animate__animated animate__fadeInUp">
                        Join Us Today
                      </h5>
                      <h1
                        className="animate__animated animate__fadeInRight"
                        data-wow-delay="1s"
                      >
                        Give a little. Change a lot.
                      </h1>
                      <p
                        className="animate__animated animate__fadeInDown"
                        data-wow-delay="1s"
                      >
                        Help today because tomorrow you may be the one who needs
                        helping!
                        <br /> Forget what you can get and see what you can
                        give.
                      </p>
                      <a
                        href="#"
                        className="default-btn animate__animated animate__fadeInUp"
                        data-wow-delay="0.8s"
                      >
                        Join With Us
                      </a>
                      <a
                        href="#"
                        className="default-btn animate__animated animate__fadeInUp"
                        data-wow-delay="0.8s"
                      >
                        Donate Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      <section className="promo-section bd-bottom">
        <div className="promo-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 xs-padding">
                <div className="promo-content">
                  <img src={Icon1} alt="prmo icon" />
                  <h3>Make Donetion</h3>
                  <p>
                    Help today because tomorrow you may be the one who needs
                    helping!
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 xs-padding">
                <div class="promo-content">
                  <img src={Icon2} alt="prmo icon" />
                  <h3>Fundrising</h3>
                  <p>
                    Help today because tomorrow you may be the one who needs
                    helping!{" "}
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 xs-padding">
                <div className="promo-content">
                  <img src={Icon3} alt="prmo icon" />
                  <h3>Become A Volunteer</h3>
                  <p>
                    Help today because tomorrow you may be the one who needs
                    helping!{" "}
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /Promo Section --> */}
    </div>
  );
};

export default Hero;
