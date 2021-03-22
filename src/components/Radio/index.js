import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Radio = (props) => (
  <div className="radio">
    <input
      {...props}
      id={props.value} // for input to be checked even when label is clicked 
      type="radio"
      className="radio__button"
      onChange={(evt) => {
        props.onChange(evt.target.value, props.name);
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
