import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <Link to='/'>
          <i className='fa fa-home'></i>
        </Link>
        <Link to='/context'>link</Link>
        <div className='dropdown'>
          <button className='dropbtn'>
            dropdown <i className='fa fa-caret-down'></i>
          </button>
          <div className='dropdown-content'>
            <Link to='/counter'>link1</Link>
            <Link to='/counterinput'>link2</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
