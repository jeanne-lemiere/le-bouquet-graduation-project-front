import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Radio = (props) => (
  <div className="radio">
    <input
      {...props}
      type="radio"
      className="radio__button"
      onChange={(evt) => {
        const dataToSend = {
          [props.name]: evt.target.value,
        };
        props.onChange(dataToSend);
      }}
    />
    <label
      className="radio__label"
      htmlFor={props.value}
    >{props.label}
    </label>
  </div>

);

Radio.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default Radio;
