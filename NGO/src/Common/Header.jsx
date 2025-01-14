import React from "react";
import Logo from "../assets/img/logo.png";
import "slicknav/dist/slicknav.min.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header id="header" className="header-section">
        <div className="top-header">
          <div className="container">
            <div className="top-content-wrap row">
              <div className="col-sm-8">
                <ul className="left-info">
                  <li>
                    <a href="#">
                      <i className="ti-email"></i>Info@YourDomain.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-mobile"></i>+(333) 052 39876
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 d-none d-md-block">
                <ul className="right-info">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="container">
            <div className="bottom-content-wrap row">
              <div className="col-sm-4">
                <div className="site-branding">
                  <a href="#">
                    <img src={Logo} alt="Brand" />
                  </a>
                </div>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="col-sm-8 text-right">
                <ul id="mainmenu" className="nav navbar-nav nav-menu">
                  <Link to="/" className="nav-item">
                    Home
                  </Link>
                  <Link to="/about" className="nav-item">
                    About
                  </Link>
                  <Link to="/events" className="nav-item">
                    Event
                  </Link>
                  <Link to="/contact" className="nav-item">
                    Contact
                  </Link>
                </ul>

                <a href="#" className="default-btn">
                  Donet Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="header-height"></div>
    </div>
  );
};

export default Header;
