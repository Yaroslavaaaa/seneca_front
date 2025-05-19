import React from 'react';
import '../static/css/Place.css';

const Place = () => (
  <div className='place'>
    <div className='place_text'>
        <div class="bg1"></div>
        <div class="bg2"></div>
        <div className='text'>в 500 метрах от пересечения пр. Аль-Фараби — пр. Достык</div>
    </div>
    <div className='place_image'>
        {/* <img src={require('../static/images/C_02_D_Seneca.jpg')} /> */}
    </div>
  </div>
);

export default Place;