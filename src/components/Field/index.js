import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Field = (props) => (
  <div>
    <input
      {...props}
      className="form__input"
      onChange={(evt) => {
        const dataToSend = {
          [props.name]: evt.target.value,
        };
        props.onChange(dataToSend);
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
