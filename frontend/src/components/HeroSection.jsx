// CustomNavbar.jsx
import React from 'react';

// Your React component code...

const CustomNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(173, 216, 230, 0.5)' }}>
      <img className='nav-img' src="main.png" alt="" />
      <h4 className='navbar_title'>
        Law API (React - Django)
      </h4>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#Form-sec">Form</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Footer-sec">Footer</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
