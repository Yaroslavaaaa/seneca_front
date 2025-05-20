import React, { useState } from 'react';
import '../static/css/ContactForm.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName]         = useState('');
  const [phoneCode, setPhoneCode] = useState('+7');
  const [phone, setPhone]       = useState('');
  const [agreed, setAgreed]     = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (!agreed) {
      alert('Пожалуйста, согласитесь с политикой конфиденциальности');
      return;
    }
    onSubmit?.({ name, phone: `${phoneCode} ${phone}` });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Имя</label>
        <input
          type="text"
          className="form-input"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group phone-group">
        <div className="phone-prefix">
          <span role="img" aria-label="flag">🇰🇿</span>
          <select
            className="phone-code"
            value={phoneCode}
            onChange={e => setPhoneCode(e.target.value)}
          >
            <option value="+7">+7</option>
          </select>
        </div>
        <input
          type="tel"
          className="form-input phone-input"
          placeholder="999-99-99"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
        />
      </div>

      <div className="form-group checkbox-group">
        <label>
          <input
            type="checkbox"
            checked={agreed}
            onChange={e => setAgreed(e.target.checked)}
            required
          />
          <span className="checkbox-label">
            Я ознакомлен и согласен с{' '}
            <a href="/privacy-policy" className="privacy-link">
              политикой конфиденциальности TOO " KEMEL PARTNERS"
            </a>
          </span>
        </label>
      </div>

      {/* Кнопка */}
      <button type="submit" className="submit-btn">
        ОСТАВИТЬ ЗАЯВКУ&nbsp;<span className="arrow">→</span>
      </button>
    </form>
  );
};

export default ContactForm;
