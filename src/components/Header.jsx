import React from 'react';
import '../static/css/Header.css';

const Header = () => (
  <header className='header'>
    <div className='menu'></div>
    <div className='header__logo'>
      <img src={require('../static/images/logo.png')} alt='Seneca Logo' />
    </div>
    <div className='header__contacts'>
      <a href='tel:+77020770170'>+7 702 077 01 70</a>
      <div className='phone'></div>
    </div>
  </header>
);

export default Header;