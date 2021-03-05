import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/Field';
import Radio from 'src/components/Radio';

import './styles.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <form
      autoComplete="off"
      className="login-form"
      onSubmit={handleSubmit}
    >

      <div className="login-form__radio">
        <Radio
          name="user-type"
          value="customer"
          label="Client"
          checked
          onChange={changeField}
        /><Radio
          name="user-type"
          value="seller"
          label="Producteur"
          onChange={changeField}
        />
      </div>

      <Field
        label="Email"
        placeholder="ADRESSE EMAIL"
        value={email}
        name="email"
        type="email"
        onChange={changeField}
      />
      <Field
        label="Mot de passe"
        placeholder="MOT DE PASSE"
        value={password}
        name="password"
        type="password"
        onChange={changeField}
      />
      <button
        className="auth__button"
        type="submit"
        aria-label="Se connecter"
      >Se connecter
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
