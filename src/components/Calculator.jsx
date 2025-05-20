// src/components/MortgageCalculator.jsx
import React, { useState, useEffect } from 'react';
import api from '../api';               // ваш axios-инстанс
import '../static/css/Calculator.css'; // путь к вашему CSS

const Calculator = () => {
  const [banks, setBanks] = useState([]);
  const [selectedBankId, setSelectedBankId] = useState('');
  const [principal, setPrincipal] = useState('');     // стоимость недвижимости
  const [downPayment, setDownPayment] = useState(''); // первоначальный взнос
  const [years, setYears] = useState('');             // срок в годах

  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [overpayment, setOverpayment] = useState(null);  // добавили переплату
  const [error, setError] = useState('');
  const [loadingBanks, setLoadingBanks] = useState(false);

  useEffect(() => {
    const fetchBanks = async () => {
      setLoadingBanks(true);
      try {
        const { data } = await api.get('/banks/');
        setBanks(data);
        if (data.length > 0) {
          setSelectedBankId(data[0].id.toString());
        }
      } catch {
        setError('Не удалось загрузить список банков.');
      } finally {
        setLoadingBanks(false);
      }
    };
    fetchBanks();
  }, []);

  const calculate = () => {
    setError('');
    setMonthlyPayment(null);
    setOverpayment(null);  // сброс переплаты перед новым расчётом

    const P = parseFloat(principal);
    const D = parseFloat(downPayment);
    const n = parseInt(years, 10) * 12;
    const bank = banks.find(b => b.id.toString() === selectedBankId);
    if (!bank) {
      setError('Выберите банк.');
      return;
    }

    const r = parseFloat(bank.rate) / 100 / 12;     // месячная ставка
    const loanAmount = P - D;                       // тело кредита

    if (!(P > 0 && D >= 0 && loanAmount > 0 && r > 0 && n > 0)) {
      setError('Проверьте правильность введённых данных.');
      return;
    }

    // Аннуитетная формула
    const M = loanAmount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const M_rounded = Math.round(M);
    setMonthlyPayment(M_rounded);

    // Переплата = (ежемесячный платёж * количество месяцев) − тело кредита
    const totalPayment = M * n;
    const overpay = Math.round(totalPayment - loanAmount);
    setOverpayment(overpay);
  };

  return (
    <div className='calculator_container'>
      <div className="mortgage-calculator">
        <h2 className="mortgage-calculator__title">Ипотечный калькулятор</h2>

        {loadingBanks ? (
          <p>Загрузка банков…</p>
        ) : (
          <label className="mortgage-calculator__label">
            Банк <br/>
            <select
              className="mortgage-calculator__select"
              value={selectedBankId}
              onChange={e => setSelectedBankId(e.target.value)}
            >
              {banks.map(bank => (
                <option key={bank.id} value={bank.id}>
                  {bank.name} — {bank.rate}%
                </option>
              ))}
            </select>
          </label>
        )}

        <label className="mortgage-calculator__label">
          Стоимость недвижимости, ₸
          <input
            type="number"
            className="mortgage-calculator__input"
            value={principal}
            onChange={e => setPrincipal(e.target.value)}
            placeholder="Например, 5 000 000"
          />
        </label>

        <label className="mortgage-calculator__label">
          Первоначальный взнос, ₸
          <input
            type="number"
            className="mortgage-calculator__input"
            value={downPayment}
            onChange={e => setDownPayment(e.target.value)}
            placeholder="Например, 1 000 000"
          />
        </label>

        <label className="mortgage-calculator__label">
          Срок, лет
          <input
            type="number"
            className="mortgage-calculator__input"
            value={years}
            onChange={e => setYears(e.target.value)}
            placeholder="Например, 20"
          />
        </label>

        {error && <p className="mortgage-calculator__error">{error}</p>}

        <button
          onClick={calculate}
          className="mortgage-calculator__button"
        >
          Рассчитать
        </button>

        {monthlyPayment !== null && (
          <div className="mortgage-calculator__result">
            <p><strong>Ежемесячный платёж:</strong> ₸{monthlyPayment}</p>
            <p><strong>Переплата за весь срок:</strong> ₸{overpayment}</p>
          </div>
        )}
      </div>

      <div className='calc_img'>
        <img
          src={require('../static/images/C_02_D_Seneca.jpg')}
          alt=""
          className='calc_image'
        />
      </div>
    </div>
  );
};

export default Calculator;
