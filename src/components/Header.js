import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/Union.png';
import logo2 from '../assets/pineapple..png';

import '../styles/Header.css';

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <a href='/'>
          <img className='logo1' src={logo1} alt='Logo' />
        </a>
        <a href='/'>
          <img className='logo2' src={logo2} alt='Logo' />
        </a>
      </div>
      <nav className='main-nav'>
        <ul className='main-nav-list'>
          <li>
            <Link className='main-nav-link' to='/'>
              About
            </Link>
          </li>
          <li>
            <Link className='main-nav-link' to='/'>
              How it works
            </Link>
          </li>
          <li>
            <Link className='main-nav-link' to='/list'>
              Email List
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
