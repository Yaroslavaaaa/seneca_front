import React, { useState } from 'react';
import '../static/css/Header.css';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className='header' id="top">
        <div
          className='menu'
          onClick={() => setDrawerOpen(true)}
        />
        <div className='header__logo'>
    <a
      href="#top"
      onClick={e => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <img
        src={require('../static/images/logo.png')}
        alt='Seneca Logo'
      />
    </a>
  </div>
        <div className='header__contacts'>
          <a href='tel:+77020770170'>+7 702 077 01 70</a>
          <div className='phone'></div>
        </div>
      </header>

      {drawerOpen && (
        <div
          className="drawer-overlay"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      <nav className={`drawer ${drawerOpen ? 'open' : ''}`}>
        <button
          className="drawer-close"
          onClick={() => setDrawerOpen(false)}
        >×</button>

        <div className="drawer-logo">
          <img src={require('../static/images/logo.png')} alt="Seneca"/>
        </div>

        <ul className="drawer-nav">
          <li><a href="#features" onClick={e => {
      e.preventDefault();
      document
        .getElementById('features')
        .scrollIntoView({ behavior: 'smooth' });
    }}>ОСОБЕННОСТИ</a></li>
          <li><a href="#place" onClick={e => {
      e.preventDefault();
      document
        .getElementById('place')
        .scrollIntoView({ behavior: 'smooth' });
    }}>МЕСТО</a></li>
          <li><a href="#plan-selector" onClick={e => {
      e.preventDefault();
      document
        .getElementById('plan-selector')
        .scrollIntoView({ behavior: 'smooth' });
    }}>РЕЗИДЕНЦИИ</a></li>
          <li><a href="#gallery" onClick={e => {
      e.preventDefault();
      document
        .getElementById('gallery')
        .scrollIntoView({ behavior: 'smooth' });
    }}>ГАЛЕРЕЯ</a></li>
          <li><a href="#contacts" onClick={e => {
      e.preventDefault();
      document
        .getElementById('contacts')
        .scrollIntoView({ behavior: 'smooth' });
    }}>КОНТАКТЫ</a></li>
        </ul>

        <div className="drawer-socials">
          <a href="https://instagram.com"><img src={require('../static/images/instagram.png')} alt="" /></a>
          <a href="tel:+77020770170"><img src={require('../static/images/phone-ringing.png')} alt="" /></a>
        </div>

        <a>
          <div className="drawer-cta">Оставить заявку</div>
        </a>
      </nav>
    </>
  );
};

export default Header;
