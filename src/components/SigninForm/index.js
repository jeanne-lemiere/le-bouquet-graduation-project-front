/* eslint-disable import/no-mutable-exports */
/* eslint-disable camelcase */
import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from 'src/functions/validateCustomer';

// A custom Field component to be given to redux-form's built-in super component
const HomemadeField = ({
  input, label, type, meta: { touched, error },
}) => (
  <div>
    <input
      {...input}
      placeholder={label}
      {...type}
      className="form__input"
    />
    {touched && (error && <span className="signin__error">{error}</span>)}
  </div>
);

const HomemadeRadio = ({
  input, label, type, meta: { touched, error },
}) => (
  <div className="radio">
    <input
      {...input}
      type={type}
      className="radio__button"
    />
    <label
      className="radio__label"
      htmlFor={label}
    >{label}
    </label>
    {touched && (error && <span className="signin__error">{error}</span>)}
  </div>
);

const CheckGSC = ({
  input, label, type, meta: { touched, error },
}) => (
  <div className="signin__checkbox">
    <label htmlFor={label}>
      <input
        type={type}
        onChange={(event) => input.onChange(event.target.checked)}
        value={input.value}
        checked={input.value}
      />
      J'ai bien lu et j'accepte les
      <Link className="signin__link" to="/cgv"> CGV </Link>
      →
    </label>
    {touched && (error && <div className="signin__error">{error}</div>)}
  </div>
);

let SigninForm = ({
  signinAs,
  handleSubmit,
  submitting,
}) => {
  const roleName = signinAs === 'seller' ? 'pro' : 'client';
  const options = [
    { text: 'Madame', value: 'F' },
    { text: 'Monsieur', value: 'M' },
  ];

  return (
    <div className="signin">
      <h1>Formulaire d'inscription {roleName}</h1>
      <form
        className="signin__form"
        onSubmit={handleSubmit}
      >
        <input
          className="hidden-usertype"
          name="userType"
          value={signinAs}
          readOnly
        />
        <h2>Civilité</h2>
        <div className="signin-form__section">
          <div className="signin-form__radio">
            {options.map((choice) => (
              <Field
                label={choice.text}
                type="radio"
                name="gender"
                key={choice.text}
                component={HomemadeRadio}
              />
            ))}
          </div>
          <Field
            name="lastname"
            label="NOM"
            component={HomemadeField}
            type="text"
          />
          <Field
            name="firstname"
            label="PRENOM"
            component={HomemadeField}
            type="text"
          />
        </div>
        <h2>Identifiants</h2>
        <div className="signin-form__section">
          <Field
            name="email"
            label="ADRESSE EMAIL"
            component={HomemadeField}
            type="text"
          />
          <Field
            name="password"
            label="MOT DE PASSE"
            component={HomemadeField}
            type="text"
          />
          <Field
            name="passwordConfirm"
            label="CONFIRMER LE MOT DE PASSE"
            component={HomemadeField}
            type="text"
          />
        </div>
        <h2>Adresse</h2>
        <div className="signin-form__section">
          <Field
            name="street_number"
            label="N° DE RUE"
            component={HomemadeField}
            type="text"
          />
          <Field
            name="street_name"
            label="ADRESSE"
            component={HomemadeField}
            type="text"

          />
          <Field
            name="zipcode"
            label="CODE POSTAL"
            component={HomemadeField}
            type="text"

          />
          <Field
            name="city"
            label="VILLE"
            component={HomemadeField}
            type="text"

          />
          <Field
            name="phone_number"
            label="N° DE TELEPHONE"
            component={HomemadeField}
            type="text"

          />
        </div>
        <Field
          name="gsc"
          label="Conditions générales"
          type="checkbox"
          component={CheckGSC}
        />

        <button
          type="submit"
          disabled={submitting}
          aria-label="créer mon compte"
          className="signin__submit-button"
        >Créer mon compte {roleName}
        </button>
      </form>
    </div>
  );
};

SigninForm = reduxForm({
  form: 'signin',
  validate,
})(SigninForm);

SigninForm.propTypes = {
  signinAs: PropTypes.string.isRequired,
};

export default SigninForm;
