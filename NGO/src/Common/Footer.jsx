import React from 'react'
import FLogo from '../assets/img/logo-light.png'
const Footer = () => {
  return (
    <div>
        <section class="widget-section padding">
            <div class="container">
                <div class="widget-wrap row">
                    <div class="col-md-4 xs-padding">
                        <div class="widget-content">
                            <img src={FLogo} alt="logo" />
                            <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor</p>
                            <ul class="social-icon">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 xs-padding">
                        <div class="widget-content">
                            <h3>Recent Campaigns</h3>
                            <ul class="widget-link">
                                <li><a href="#">First charity activity of this summer. <span>-1 Year Ago</span></a></li>
                                <li><a href="#">Big charity: build school for poor children. <span>-2 Year Ago</span></a></li>
                                <li><a href="#">Clean-water system for rural poor. <span>-2 Year Ago</span></a></li>
                                <li><a href="#">Nepal earthqueak donation campaigns. <span>-3 Year Ago</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 xs-padding">
                        <div class="widget-content">
                            <h3>Charitify Location</h3>
                            <ul class="address">
                                <li><i class="ti-email"></i> Info@YourDomain.com</li>
                                <li><i class="ti-mobile"></i> +(333) 052 39876</li>
                                <li><i class="ti-world"></i> Www.YourWebsite.com</li>
                                <li><i class="ti-location-pin"></i> 60 Grand Avenue. Central New Road 0708, USA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- ./Widget Section --> */}
        
        <footer class="footer-section">
			<div class="container">
                <div class="row">
                    <div class="col-md-6 sm-padding">
                        <div class="copyright">&copy; 2021 Charitify Powered by DynamicLayers</div>
                    </div>
                    <div class="col-md-6 sm-padding">
                        <ul class="footer-social">
                            <li><a href="#">Orders</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Report Problem</a></li>
                        </ul>
                    </div>
                </div>
			</div>
		</footer>
        {/* <!-- /Footer Section --> */}
        
		<a data-scroll href="#header" id="scroll-to-top"><i class="arrow_up"></i></a>
	
    </div>
  )
}

export default Footer
