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
        <div className='dropdown'>
          <button className='dropbtn'>
            resize-context <i className='fa fa-caret-down'></i>
          </button>
          <div className='dropdown-content'>
            <Link to='/resize'>single</Link>
            <Link to='/resizemulti'>multi</Link>
          </div>
        </div>
        <Link to='/datagrid'>data-grid</Link>
      </div>
    </>
  );
};

export default Navbar;
