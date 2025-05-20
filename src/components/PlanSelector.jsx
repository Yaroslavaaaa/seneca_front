import React, { useEffect, useState } from 'react';
import api from '../api';
import '../static/css/PlanSelector.css';
import PhoneInput from 'react-phone-input-2';

const PlanSelector = () => {
  const [blocks, setBlocks]               = useState([]);
  const [floors, setFloors]               = useState([]);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [plan, setPlan]                   = useState(null);

  const [name, setName]     = useState('');
  const [phone, setPhone]   = useState('');
  const [agreed, setAgreed] = useState(false);

  // 1️⃣ Загрузить блоки и сразу выбрать первый
  useEffect(() => {
    api.get('/blocks/')
      .then(({ data }) => {
        setBlocks(data);
        if (data.length) setSelectedBlock(data[0]);
      })
      .catch(console.error);
  }, []);

  // 2️⃣ При смене блока — очистить этажи/план, запросить его этажи и выбрать первый
  useEffect(() => {
    if (!selectedBlock) return;

    setFloors([]);
    setSelectedFloor(null);
    setPlan(null);

    api.get('/floors/', { params: { block: selectedBlock.id } })
      .then(({ data }) => {
        setFloors(data);
        if (data.length) setSelectedFloor(data[0]);
      })
      .catch(console.error);
  }, [selectedBlock]);

  // 3️⃣ При смене этажа — очистить план; запросить план этажа и сохранить
  useEffect(() => {
    if (!selectedFloor) return;

    setPlan(null);

    api.get('/plans/', { params: { floor: selectedFloor.id } })
      .then(({ data }) => {
        setPlan(data.length ? data[0] : null);
      })
      .catch(console.error);
  }, [selectedFloor]);

  // 📨 Отправка формы — создаём Application на бэке
  const handleSubmit = async e => {
    e.preventDefault();
    if (!agreed) {
      alert('Пожалуйста, согласитесь с политикой конфиденциальности');
      return;
    }

    try {
      await api.post('/applications/', {
        name: name.trim(),
        phone: phone.trim(),
      });
      alert('Ваша заявка успешно отправлена');
      // можно очистить поля, если нужно:
      setName('');
      setPhone('');
      setAgreed(false);
    } catch (err) {
      console.error(err);
      alert('Ошибка при отправке заявки. Попробуйте ещё раз.');
    }
  };

  return (
    <div className="plan-selector" id="plan-selector">
        <div className='rez'>Резиденции</div>
      {/* === Фильтр блоков === */}
      <div className="filter-bar blocks-bar">
        {blocks.map(block => (
          <button
            key={block.id}
            className={`filter-btn ${
              selectedBlock?.id === block.id ? 'active' : ''
            }`}
            onClick={() => setSelectedBlock(block)}
          >
            Блок {block.name}
          </button>
        ))}
      </div>

      {/* === Фильтр этажей === */}
      <div className="filter-bar floors-bar">
        {floors.map(floor => (
          <button
            key={floor.id}
            className={`filter-btn ${
              selectedFloor?.id === floor.id ? 'active' : ''
            }`}
            onClick={() => setSelectedFloor(floor)}
          >
            {floor.level_display}
          </button>
        ))}
      </div>

      <div className="plan_and_app">
        {/* === Отображение плана === */}
        <div className="plan-view">
          {plan ? (
            <div className="plan-card">
              <img
                src={plan.drawing}
                alt={`План: ${selectedBlock.name} / ${selectedFloor.level_display}`}
              />
            </div>
          ) : (
            <p className="no-plan">План недоступен для этого этажа.</p>
          )}
        </div>

        <div className="more-arka">
          <div className="more_text" />

          {/* === Форма заявки === */}
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Имя */}
            <div className="form-group">
              <div className="name">
                <label className="form-label">Имя</label>
                <input
                  type="text"
                  className="form-input"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Телефон */}
            <div className="phone_input">
              <label className="form-label">Телефон</label>
              <PhoneInput
                country={'kz'}
                onlyCountries={['kz','ru','us','de','se','ch','sd','sr','sz','sy']}
                countryCodeEditable={false}
                enableSearch
                disableSearchIcon
                value={phone}
                onChange={setPhone}
                inputStyle={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #fff',
                  borderRadius: 0,
                  color: '#fff',
                  fontSize: '1rem',
                  paddingLeft: '65px',
                }}
                buttonStyle={{
                  background: 'transparent',
                  border: 'none',
                  padding: '0 12px',
                }}
                dropdownStyle={{
                  background: '#fff',
                  color: '#000',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
              />
            </div>

            {/* Чекбокс */}
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
                  <a
                    href="https://seneca.kz/policy"
                    className="privacy-link"
                  >
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
        </div>
      </div>
    </div>
  );
};

export default PlanSelector;
