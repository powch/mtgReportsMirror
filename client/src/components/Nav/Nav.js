import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
      MTG Report
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === '/' 
              ? 'nav-item active' 
              : 'nav-item'
          }
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className={
            window.location.pathname === '/' 
              ? 'nav-item active' 
              : 'nav-item'
          }
        >
          <Link to="/" className="nav-link">
            Stuff
          </Link>
        </li>
        <li
          className={
            window.location.pathname === '/' 
              ? 'nav-item active' 
              : 'nav-item'
          }
        >
          <Link to="/" className="nav-link">
            Stuff
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
