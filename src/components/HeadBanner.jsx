import React from 'react';
import '../static/css/HeadBanner.css';

const HeadBanner = () => (
  <div className='bacground-image'>
    <div className='head_banner_container'>
      <div className='header_text'>
        <div className='text_h'>
          ОСОБЕННЫЙ
          <br/>КЛУБНЫЙ ДОМ
        </div>
        <a
          href="#plan-selector"
          onClick={e => {
            e.preventDefault();
            const el = document.getElementById('plan-selector');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <img
            src={require('../static/images/application_button.jpg')}
            className='application_button'
            alt='Оставить заявку'
          />
        </a>
      </div>
      <div className='info'></div>
    </div>
  </div>
);

export default HeadBanner;
