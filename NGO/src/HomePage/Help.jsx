import React from 'react'
import Cause1 from '../assets/img/causes-1.jpg'
import Cause2 from '../assets/img/causes-2.jpg'
import Cause3 from '../assets/img/causes-3.jpg'


const Help = () => {
  return (
    <div>
      

      <section className="causes-section bg-grey bd-bottom padding">
            <div className="container">
                <div className="section-heading text-center mb-40">
                    <h2>Recent Causes</h2>
                    <span className="heading-border"></span>
                    <p>Help today because tomorrow you may be the one who <br /> needs more helping!</p>
                </div>
                {/* <!-- /Section Heading --> */}
                <div className="causes-wrap row">
                    <div className="col-md-4 xs-padding">
                        <div className="causes-content">
                           <div className="causes-thumb">
                                <img src={Cause1} alt="causes" />
                                <a href="#" className="donate-btn">Donate Now<i className="ti-plus"></i></a>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width:'25%'}}><span className="wow cssanimation fadeInLeft">25%</span></div>
                                </div>
                           </div>
                            <div className="causes-details">
                                <h3>First charity activity of this summer.</h3>
                                <p>Help today because tomorrow you may be the one who needs more helping!</p>
                                <div className="donation-box">
                                    <p><i className="ti-bar-chart"></i>Goal: $45000</p>
                                    <p><i className="ti-thumb-up"></i>Raised: $5000</p>
                                </div>
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Causes-1 --> */}
                    <div className="col-md-4 xs-padding">
                        <div className="causes-content">
                           <div className="causes-thumb">
                                <img src={Cause2} alt="causes" />
                                <a href="#" className="donate-btn">Donate Now<i className="ti-plus"></i></a>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width:'45%'}}><span className="wow cssanimation fadeInLeft">45%</span></div>
                                </div>
                           </div>
                            <div className="causes-details">
                                <h3>Big charity: build school for poor children.</h3>
                                <p>Help today because tomorrow you may be the one who needs more helping!</p>
                                <div className="donation-box">
                                    <p><i className="ti-bar-chart"></i>Goal: $45000</p>
                                    <p><i className="ti-thumb-up"></i>Raised: $5000</p>
                                </div>
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Causes-2 --> */}
                    <div className="col-md-4 xs-padding">
                        <div className="causes-content">
                           <div className="causes-thumb">
                                <img src={Cause3} alt="causes" />
                                <a href="#" className="donate-btn">Donate Now<i className="ti-plus"></i></a>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width:'75%'}}><span className="wow cssanimation fadeInLeft">75%</span></div>
                                </div>
                           </div>
                            <div className="causes-details">
                                <h3>Building clean-water system for rural poor.</h3>
                                <p>Help today because tomorrow you may be the one who needs more helping!</p>
                                <div className="donation-box">
                                    <p><i className="ti-bar-chart"></i>Goal: $45000</p>
                                    <p><i className="ti-thumb-up"></i>Raised: $5000</p>
                                </div>
                                <a href="#" className="read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Causes-3 --> */}
                </div>
            </div>
        </section>
        {/* <!-- /Causes Section --> */}


    </div>
  )
}

export default Help
