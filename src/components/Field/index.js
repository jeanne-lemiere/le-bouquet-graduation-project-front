import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Field = (props) => (
  <div>
    <input
      {...props}
      className="form__input"
      onChange={(evt) => {
        props.onChange(evt.target.value, props.name);
      }}
    />
  </div>

);

Field.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Field;
