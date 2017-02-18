import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router';
import logo from '../img/logo.svg'

const Header = () => (
  <header className='header'>
    <div id='head-top' className='container header-top clearfix'>
      <Link className='logo' to='/'>
        <img src={logo} alt='Logo' />
      </Link>
      <Navigation />
    </div>
  </header>
);

export default Header;
