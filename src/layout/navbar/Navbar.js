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
            <Link to='/tagtruncator'>useTagTruncator</Link>
          </div>
        </div>
        <div className='dropdown'>
          <button className='dropbtn'>
            data-grid <i className='fa fa-caret-down'></i>
          </button>
          <div className='dropdown-content'>
            <Link to='/datagrid'>simple table</Link>
          </div>
        </div>
        <div className='dropdown'>
          <button className='dropbtn'>
            menu <i className='fa fa-caret-down'></i>
          </button>
          <div className='dropdown-content'>
            <Link to='/menu'>basic</Link>
            <Link to='/menuevent'>event handler</Link>
            <Link to='/menuitems'>menu items</Link>
          </div>
        </div>
        <div className='dropdown'>
          <button className='dropbtn'>
            text <i className='fa fa-caret-down'></i>
          </button>
          <div className='dropdown-content'>
            <Link to='/typewriter'>type writer</Link>
          </div>
        </div>
        <div className='dropdown'>
          <button className='dropbtn'>
            hooks <i className='fa fa-caret-down'></i>
          </button>
          <div className='dropdown-content'>
            <Link to='/hooks-watch-async'>watch async f()</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
