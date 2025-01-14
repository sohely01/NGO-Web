import React from 'react';
import CountUp from 'react-countup';

const Donatation = () => {
  return (
    <div>
      <section id="counter" className="counter-section">
        <div className="container">
          <ul className="row counters">
            <li className="col-md-3 col-sm-6 sm-padding">
              <div className="counter-content">
                <i className="ti-money"></i>
                <h3 className="counter">
                  <CountUp end={85389} duration={2.5} />
                </h3>
                <h4 className="text-white">Money Donated</h4>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 sm-padding">
              <div className="counter-content">
                <i className="ti-face-smile"></i>
                <h3 className="counter">
                  <CountUp end={10693} duration={2.5} />
                </h3>
                <h4 className="text-white">Volunteer Around The World</h4>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 sm-padding">
              <div className="counter-content">
                <i className="ti-user"></i>
                <h3 className="counter">
                  <CountUp end={50177} duration={2.5} />
                </h3>
                <h4 className="text-white">People Impacted</h4>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 sm-padding">
              <div className="counter-content">
                <i className="ti-comments"></i>
                <h3 className="counter">
                  <CountUp end={669} duration={2.5} />
                </h3>
                <h4 className="text-white">Positive Feedbacks</h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Donatation;
