import React, { useEffect, useState } from 'react';
import api from '../api';
import '../static/css/PhotoCarousel.css';

const PhotoCarousel = () => {
  const [photos, setPhotos]   = useState([]);
  const [current, setCurrent] = useState(0);

  // Подтягиваем фотки
  useEffect(() => {
    api.get('/photos/', {
      params: { caption: 'Стройка' }
    })
    .then(({ data }) => setPhotos(data))
    .catch(console.error);
  }, []);

  if (!photos.length) return null;

  const prev = () => setCurrent(c => (c + photos.length - 1) % photos.length);
  const next = () => setCurrent(c => (c + 1) % photos.length);

  // Вспомогалка для полного URL
  const src = img =>
    img.startsWith('http') ? img : `${process.env.REACT_APP_API_BASE}${img}`;

  return (
    <div className="photo-carousel">
      {/* Prev */}
      <button className="carousel-arrow left" onClick={prev}>‹</button>

      {/* Слайды */}
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {photos.map((photo, idx) => (
          <div key={photo.id} className="carousel-item">
            <img
              src={src(photo.image)}
              alt={photo.caption}
              className="carousel-image"
            />
          </div>
        ))}
      </div>

      {/* Next */}
      <button className="carousel-arrow right" onClick={next}>›</button>

      {/* Dots */}
      <div className="carousel-dots">
        {photos.map((_, idx) => (
          <span
            key={idx}
            className={`carousel-dot ${idx === current ? 'active' : ''}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
