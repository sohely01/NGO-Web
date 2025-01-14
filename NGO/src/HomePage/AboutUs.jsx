import React from 'react'
import Team1 from '../assets/img/team-1.jpg'
import Team2 from '../assets/img/team-2.jpg'
import Team3 from '../assets/img/team-3.jpg'
import Team4 from '../assets/img/team-4.jpg'
import Profile from '../assets/img/profile.jpg'
import History from '../assets/img/history.jpg'
import Mission from '../assets/img/mission.jpg'




const AboutUs = () => {
  return (
    <div>
      

      <section className="team-section bg-grey bd-bottom circle shape padding">
            <div className="container">
                <div className="section-heading text-center mb-40">
                    <h2>Meet Out Volunteers</h2>
                    <span className="heading-border"></span>
                    <p>Help today because tomorrow you may be the one who <br /> needs more helping!</p>
                </div>
                {/* <!-- /Section Heading --> */}
                <div className="team-wrapper row">
                    <div className="col-lg-6 sm-padding">
                        <div className="team-wrap row">
                            <div className="col-md-6">
                                <div className="team-details">
                                   <img src={Team1} alt="team" />
                                    <div className="hover">
                                        <h3>Jonathan Smith <span>Communicator</span></h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /Team-1 --> */}
                            <div className="col-md-6">
                                <div className="team-details">
                                   <img src={Team2} alt="team" />
                                    <div className="hover">
                                        <h3>Angelina Rose <span>Certified Reader</span></h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /Team-2 --> */}
                            <div className="col-md-6">
                                <div className="team-details">
                                    <img src={Team3} alt="team" />
                                    <div className="hover">
                                        <h3>Taylor Swift <span>Event Creator</span></h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /Team-3 --> */}
                            <div className="col-md-6">
                                <div className="team-details">
                                   <img src={Team4} alt="team" />
                                    <div className="hover">
                                        <h3>Michel Brown <span>Internet Specialist</span></h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /Team-4 --> */}
                        </div>
                    </div>
                    <div className="col-lg-6 sm-padding">
                        <div className="team-content">
                            <h2>Become a Volunteer?</h2>
                            <h3>Join your hand with us for a better life and beautiful future.</h3>
                            <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
                            <ul className="check-list">
                                <li><i className="fa fa-check"></i>We are friendly to each other.</li>
                                <li><i className="fa fa-check"></i>If you join with us,We will give you free training.</li>
                                <li><i className="fa fa-check"></i>Its an opportunity to help poor children.</li>
                                <li><i className="fa fa-check"></i>No goal requirements.</li>
                                <li><i className="fa fa-check"></i>Joining is tottaly free. We dont need any money from you.</li>
                            </ul>
                            <a href="#" className="default-btn">Join With Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- /Team Section --> */}



        <section className="about-section bd-bottom shape circle padding">
            <div className="container">
                <div className="row">
                   <div className="col-md-4 xs-padding">
                        <div className="profile-wrap">
                            <img className="profile" src={Profile} alt="profile" />
                            <h3>Jonathan Smith <span>CEO & Founder of Charitify.</span></h3>
                            <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
                            <img src="img/sign.png" alt="sign" />
                        </div>
                    </div>
                    <div className="col-md-8 xs-padding">
                        <div className="about-wrap row">
                            <div className="col-md-6 xs-padding">
                                <img src={History} alt="about-thumb" />
                                <h3>Our History</h3>
                                <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor.</p>
                                <a href="#" className="default-btn">Read More</a>
                            </div>
                            <div className="col-md-6 xs-padding">
                                <img src={Mission} alt="about-thumb" />
                                <h3>Our Mission</h3>
                                <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor.</p>
                                <a href="#" className="default-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutUs
