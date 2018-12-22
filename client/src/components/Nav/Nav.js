import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../Grid';
import './Nav.css';

const Nav = () => (
  <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
    <Container>
      <button className='btn btn-primary'>SIGN IN</button>
      <a className='navbar-brand abs-center-x' href='/'>
        MTG Report
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav ml-auto'>
          <li
            className={
              window.location.pathname === '/' ? 'nav-item active' : 'nav-item'
            }
          >
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li
            className={
              window.location.pathname === '/' ? 'nav-item active' : 'nav-item'
            }
          >
            <Link to='/' className='nav-link'>
              Stuff
            </Link>
          </li>
          <li
            className={
              window.location.pathname === '/' ? 'nav-item active' : 'nav-item'
            }
          >
            <Link to='/' className='nav-link'>
              Stuff
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  </nav>
);

export default Nav;
