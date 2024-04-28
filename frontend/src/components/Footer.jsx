import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-5 footer-margin">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="banner">
          <div className="text-right">
            <p>Karachi</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="text-right">
            <p>@ All right reserved By Ali. 2024</p>
          </div>
        </div>
        <div className="banner text-left">
          <div className="left">
            <p>Developed By Ali</p>
          </div>
          <div className="right">
            <p>Law Api Usage</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
