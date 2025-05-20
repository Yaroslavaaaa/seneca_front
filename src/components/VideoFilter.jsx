import React, { useEffect, useState } from 'react';
import api from '../api';
import '../static/css/VideoFilter.css';

const VideoFilter = () => {
  const [years, setYears]                 = useState([]);
  const [months, setMonths]               = useState([]);
  const [selectedYear, setSelectedYear]   = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [videos, setVideos]               = useState([]);

  // 1️⃣ Загружаем список годов
  useEffect(() => {
    api.get('/videos/years/')
      .then(({ data }) => {
        setYears(data);
        if (data.length) setSelectedYear(data[0]);
      })
      .catch(console.error);
  }, []);

  // 2️⃣ При смене года — загружаем месяцы для этого года
  useEffect(() => {
    if (!selectedYear) return;
    api.get('/videos/months/', { params: { year: selectedYear } })
      .then(({ data }) => {
        setMonths(data);
        if (data.length) setSelectedMonth(data[0]);
      })
      .catch(console.error);
  }, [selectedYear]);

  // 3️⃣ При смене года или месяца — подгружаем только соответствующие видео
  useEffect(() => {
    if (!selectedYear || !selectedMonth) {
      setVideos([]);
      return;
    }
    api.get('/videos/', {
      params: {
        year:  selectedYear,
        month: selectedMonth,
      }
    })
    .then(({ data }) => setVideos(data))
    .catch(console.error);
  }, [selectedYear, selectedMonth]);

  // Переводим любую ссылку YouTube к embed-формату
  const toEmbedUrl = url => {
    const m = url.match(/(?:v=|youtu\.be\/)([\w-]+)/);
    return m ? `https://www.youtube.com/embed/${m[1]}` : url;
  };

  return (
    <>
      <div className="video-filter">
        {/* выбор года */}
        <div className='rez'>Ход строительства</div>
        <div className="filter-bar years-bar">
          {years.map(year => (
            <button
              key={year}
              className={`filter-btn ${selectedYear === year ? 'active' : ''}`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>

        {/* выбор месяца */}
        <div className="filter-bar months-bar">
          {months.map(month => (
            <button
              key={month}
              className={`filter-btn ${selectedMonth === month ? 'active' : ''}`}
              onClick={() => setSelectedMonth(month)}
            >
              {month}
            </button>
          ))}
        </div>
      </div>

      {/* список отфильтрованных видео */}
      <div className="videos-list">
        {videos.map(video => (
          <div key={video.id} className="video-row">
            {/* Левая колонка: дата + описание */}
            <div>
              <div className="video-date">
                {video.date} {video.month} {video.year}
              </div>
              {video.description && (
                <div className="description">
                  {video.description}
                </div>
              )}
            </div>

            {/* Правая колонка: YouTube-плеер */}
            <div className="video-player">
              <iframe
                title={`video-${video.id}`}
                width="560"
                height="315"
                src={toEmbedUrl(video.youtube_link)}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}

        {/* Сообщение, если за выбранный год/месяц нет ни одного видео */}
        {videos.length === 0 && selectedMonth && (
          <p className="no-videos">
            Видео за {selectedMonth} {selectedYear} не найдено.
          </p>
        )}
      </div>
    </>
  );
};

export default VideoFilter;
