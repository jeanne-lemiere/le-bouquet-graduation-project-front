import React from 'react';
import './style.scss';
import spinnerImage from 'src/assets/spinner.png';

export default () => (
  <div className="spinner">
    <img src={spinnerImage} alt="" className="spinner__image" />
  </div>
);
