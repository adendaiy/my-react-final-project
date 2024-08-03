import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "../assets/image_crop.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="container-fluid Footer pt-5">
        <div className="container">
          <div className="row gx-0 py-4 footer_row1">
            <div className="col-md-2">
              <div className="footer_col1">
                <h5 className="ft_h5 ">Company</h5>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#"> Why us</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <a href="#">Partnership</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer_col1">
                <h5 className="ft_h5">Categories</h5>
                <ul>
                  <li>
                    <Link to="./">Strength Traning</Link>
                  </li>
                  <li>
                    <Link to="./">Body Building</Link>
                  </li>
                  <li>
                    <Link to="./">Weight Loss</Link>
                  </li>
                  <li>
                    <Link to="./">Crossfit </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer_col1">
                <h5 className="ft_h5">Help</h5>
                <ul>
                  <li>
                    <a href="#">Account</a>
                  </li>
                  <li>
                    <a href="#">Support center</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_col2 ">
                <h5 className="ft_h5">Contact Us</h5>
                <div className="row py-3">
                  <div className="col-1">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="col-11">
                    <a href="tel:+2540720676534">
                      <p>0720676534</p>
                    </a>
                    <a href="tel:+2540720658945">
                      <p>+2540720658945</p>
                    </a>
                  </div>
                </div>
                {/*             */}
                <div className="row pb-3">
                  <div className="col-1">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="col-11">
                    <a
                      href="adenabdib@gmail.com"
                      className="email-link"
                    >
                      <p>adenabdib@gmail.com</p>
                    </a>
                  </div>
                </div>
                {/* 8******************* */}
                <div className="row pb-3">
                  <div className="col-1">
                    <i className="fa-solid fa-location"></i>
                  </div>
                  <div className="col-11">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="address-link"
                    >
                      <p className="address-details">
                        Kenya
                        <br />
                        North-eastern pronfince
                        <br />
                        Garissa County
                        <br />
                        address: 70100
                      </p>
                    </a>
                  </div>
                </div>

                {/* 8*********************** */}
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_col3">
                <h5 className="ft_h5">Location</h5>
                <p>
                  <br />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2821.1389244005927!2d39.64100064979895!3d-0.45425249903213755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18204aa53d2d8009%3A0x2c7479fc144036e9!2sHiddig%20Hotel!5e0!3m2!1sen!2ske!4v1722124097381!5m2!1sen!2ske"></iframe>
                   
                </p>
              </div>
            </div>
          </div>

          {/***** */}
          <div className="row gx-0 footer_row2 align-items-center py-3">
            <div className="col-md-3">
              <img src={logo} alt="" className="img-fluid footer_img" />
            </div>
            <div className="col-md-6 text-center">
              <p>
                &copy; {currentYear} <strong>Center-Hive Gym</strong> All
                Copyrights Reserved.
              </p>
            </div>
            <div className="col-md-3 text-md-end">
              <a
                href="#"
                target="_blank"
                className="email-link"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#"
                target="_blank"
                className="email-link"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="mailto:pramodyadav8178915007@gmail.com"
                target="_blank"
                className="email-link"
              >
                <i className="fa-regular fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
