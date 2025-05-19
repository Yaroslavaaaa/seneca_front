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
            <a href=''>
                <img src={require('../static/images/application_button.jpg')} className='application_button' />
            </a>
        </div>
        <div className='info'>
            {/* <div className='firstRow'>
                <div className='info-block'>
                    <div className='number'>
                        3
                    </div>
                    <div className='description'>
                        Блока
                    </div>
                </div>
                <div className='info-block'>
                    <div className='number'>
                        48
                    </div>
                    <div className='description'>
                        Апартаментов
                    </div>
                </div>
                <div className='info-block'>
                    <div className='number'>
                        3,3м
                    </div>
                    <div className='description'>
                        Потолки
                    </div>
                </div>
            </div>
            <div className='secondRow'>
                <div className='info-block'>
                    <div className='number'>
                        89,1 - 210,7 м²
                    </div>
                    <div className='description'>
                        Площади квартир
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  </div>
);

export default HeadBanner;