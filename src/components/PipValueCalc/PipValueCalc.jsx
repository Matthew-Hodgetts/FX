import React, { useState } from 'react';

import styles from './PipValueCalc.module.scss';

const PipValueCalc = () => {
  const [pipSize, setPipSize] = useState(0.0001); // Could be 0.001 when it is JPY
  const [exchangeRate, setExchangeRate] = useState(1.10008);
  const [positionSize, setPositionSize] = useState(100000);
  const [pipValue, setPipValue] = useState(undefined);

  const [formData, setFormData] = useState({
    pipSize: 0.0001,
    account: 'GBP',
    positionSize: 100000,
    pair: 'GBP/USD',
    price: 1.32,
  });

  const determineValue = () => {
    setPipValue((pipSize / exchangeRate) * positionSize);
  };

  const handleChangeWithParse = (e) => {
    const value = parseFloat(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handlePair = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getPrice = (pair) => {
    let base = pair.split('/')[0];
  };

  // !  Pip value = (pip size / exchange rate) x position size

  return (
    <form className={styles.form}>
      <div className="row">
        <div className="col-12">
          <label>Account currency</label>
          <select>
            <option value={formData.account}>GBP</option>
            <option value={formData.account}>USD</option>
            <option value={formData.account}>EUR</option>
          </select>
        </div>
        <div className="col-12">
          <label>Position size</label>
          <input
            type="text"
            value={formData.positionSize}
            name="positionSize"
            onChange={(e) => handleChangeWithParse(e)}
          />
        </div>
        <div className="col-12">
          <label>Currency pair</label>
          <select name="pair" onChange={(e) => handlePair(e)}>
            <option value="EUR/USD">EUR/USD</option>
            <option value="USD/JPY">USD/JPY</option>
            <option value="EUR/GBP">EUR/GBP</option>
            <option value="GBP/USD">GBP/USD</option>
          </select>
        </div>
        <div className="col-12">
          <label>Current price</label>
          <input type="text" value={formData.price} name="price" disabled />
        </div>
        <div className="col-12">
          <p className={styles.result}>Pip Value: {pipValue || ''}</p>
        </div>
      </div>
    </form>
  );
};

export default PipValueCalc;
