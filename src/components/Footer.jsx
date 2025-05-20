import React from 'react';
import '../static/css/Footer.css';

const Footer = () => (
  <footer className="footer" id='contacts'>
    <div className="footer_content">
      <div className="footer_info"></div>
      <div className="footer_map">
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <a
            href="https://yandex.kz/maps/ru/org/seneca/3470943477/?lang=ru&utm_medium=mapframe&utm_source=maps"
            className='map'
            style={{
              color: '#eee',
              fontSize: '12px',
              position: 'absolute',
              top: 0
            }}
          >
            Seneca
          </a>
          <a
            href="https://yandex.kz/maps/ru/162/almaty/category/luxury_real_estate/184107531/?lang=ru&utm_medium=mapframe&utm_source=maps"
            className='map'
            style={{
              color: '#eee',
              fontSize: '12px',
              position: 'absolute',
              top: '14px'
            }}
          >
            Элитная недвижимость в Алматы
          </a>
          <iframe
            src="https://yandex.kz/map-widget/v1/?ll=76.965956%2C43.231453&mode=search&oid=3470943477&ol=biz&sctx=ZAAAAAgBEAAaKAoSCSAKZkzBPVNAEYTwaOOInUVAEhIJUP2DSIYcez8RVz82yY%2F4ZT8iBgABAgMEBSgKOABAogFIAWoCa3qdAc3MTD2gAQCoAQC9AZ5gJbnCAQX1yYn3DIICBlNlbmVjYYoCAJICAJoCDGRlc2tvcCU21IP"
            className='map'
            width="560"
            height="400"
            frameBorder="1"
            allowFullScreen
            style={{ position: 'relative' }}
          />
        </div>
      </div>
    </div>
    <div className='inst'>
    </div>
    <div className='license'>
            Генеральный подрядчик: ТОО "Kemel Partners"<br/>
            <a href="https://www.dropbox.com/scl/fi/uwhnlmgkio0l8njjwune2/Report-1.pdf?rlkey=0b0h8yee4ej0vu4tqih7xtfag&e=1&dl=0" className='license_link'>№ лицензии 06-ГСЛ№001839 от 30.01.2023 г.</a>
    </div>
  </footer>
);

export default Footer;
