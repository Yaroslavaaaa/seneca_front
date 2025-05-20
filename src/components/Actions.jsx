import React from 'react';
import '../static/css/Actions.css';

const Actions = () => {
  const scrollToPlan = e => {
    e.preventDefault();
    const el = document.getElementById('plan-selector');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="actions_container">
      <div className="live">
        <a href="#plan-selector" onClick={scrollToPlan}>
          <div className="app_btn" />
        </a>
      </div>
      <div className="prez">
        <a href="#plan-selector" onClick={scrollToPlan}>
          <div className="prez_btn" />
        </a>
      </div>
    </div>
  );
};

export default Actions;
