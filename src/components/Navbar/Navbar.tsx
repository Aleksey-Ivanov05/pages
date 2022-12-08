import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
      <div className="container-fluid">
        <span className="navbar-brand">Static Pages</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/pages/home" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/contacts" className="nav-link">Contacts</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/login" className="nav-link">Log in</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/reviews" className="nav-link">Reviews</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pages/admin" className="nav-link">Admin</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;