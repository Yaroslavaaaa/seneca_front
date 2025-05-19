import React from 'react';
import '../static/css/Footer.css';

const Footer = () => (
  <footer className='footer'>
    <div className='footer__content'>
      <p>© {new Date().getFullYear()} Seneca. Все права защищены.</p>
    </div>
  </footer>
);

export default Footer;