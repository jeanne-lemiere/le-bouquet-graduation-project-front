/* eslint-disable import/no-mutable-exports */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import './styles.scss';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { FiShare } from 'react-icons/fi';
import validate from 'src/functions/validateSeller';

// A custom Field component to be given to redux-form's built-in super component
const HomemadeField = ({
  input, label, type, meta: { touched, error },
}) => (
  <div>
    <input
      {...input}
      placeholder={label}
      type={type}
      className="form__input"
    />
    {touched && (error && <span className="signup__error">{error}</span>)}
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
    {touched && (error && <span className="signup__error">{error}</span>)}
  </div>
);

const HomemadeTextArea = ({
  input, label, type, meta: { touched, error },
}) => (
  <div>
    <textarea
      {...input}
      placeholder={label}
      {...type}
      className="form__input form__input--textarea"
    />
    {touched && (error && <div className="signup__error">{error}</div>)}
  </div>
);

const CheckGSC = ({
  input, label, type, meta: { touched, error },
}) => (
  <div className="signup__checkbox">
    <label htmlFor={label}>
      <input
        type={type}
        onChange={(event) => input.onChange(event.target.checked)}
        value={input.value}
        checked={input.value}
      />
      J'ai bien lu et j'accepte les
      <Link className="signup__link" to="/cgv"> CGV </Link>
      →
    </label>
    {touched && (error && <div className="signup__error">{error}</div>)}
  </div>
);

let SignupFormSeller = ({
  handleSubmit,
  submitting,
  updateUsertype,
  image,
  onUploadChange,
  updatePictureUrl,
  signUpError,
  signedUp,
}) => {
  if (signedUp === true) {
    return <Redirect to="/bienvenue" />;
  }

  useEffect(() => {
    updateUsertype();
  }, []);

  const options = [
    { text: 'Madame', value: 'F' },
    { text: 'Monsieur', value: 'M' },
  ];

  const uploadLabel = image ? `${image.name} ${(image.size / 1000).toFixed(2)}KB` : 'Ajouter une photo de profil';

  // An error message displays when account creation did not work on server side
  // Normally this should never appear since a front-end validation has been set up
  // But we never know...
  const errorMessage = signUpError ? <p className="signup__error">{signUpError}</p> : null;

  return (
    <div className="signup">
      <h1>Formulaire d'inscription pro</h1>
      <form
        className="signup__form"
        onSubmit={handleSubmit}
      >
        <h2>Civilité</h2>
        <div className="signup-form__section">
          <div className="signup-form__radio">
            {options.map((choice) => (
              <Field
                label={choice.text}
                type="radio"
                name="gender"
                value={choice.value}
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
        <div className="signup-form__section">
          <Field
            name="email"
            label="ADRESSE EMAIL"
            component={HomemadeField}
            type="email"
          />
          <Field
            name="password"
            label="MOT DE PASSE"
            component={HomemadeField}
            type="password"
          />
          <Field
            name="passwordConfirm"
            label="CONFIRMER LE MOT DE PASSE"
            component={HomemadeField}
            type="password"
          />
        </div>
        <h2>Adresse</h2>
        <div className="signup-form__section">
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
            type="tel"

          />
        </div>

        <h2>Ma Boutique</h2>
        <Field
          name="siret"
          label="SIRET"
          component={HomemadeField}
          type="text"
        />
        <Field
          name="shop_name"
          label="NOM DE LA BOUTIQUE"
          component={HomemadeField}
          type="text"
        />
        <Field
          name="shop_presentation"
          label="Ecrivez un petit texte pour vous présenter..."
          component={HomemadeTextArea}
          type="textarea"
        />

        <div>
          <label
            htmlFor="profile_pic"
            className="form__input--label"
          ><input
            name="profile_pic"
            label="Ajouter une photo de profil"
            type="file"
            onChange={onUploadChange}
            className="form__input form__input--upload"
          /><FiShare className="upload-icon" />{uploadLabel}
          </label>
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
          className="signup__submit-button"
        >Créer mon compte pro
        </button>
        {errorMessage}
      </form>
    </div>
  );
};

SignupFormSeller = reduxForm({
  form: 'signupSeller',
  validate,
})(SignupFormSeller);

// Redux Form works but props are somehow undefined
SignupFormSeller.propTypes = {
  // handleSubmit: PropTypes.func.isRequired,
  // submitting: PropTypes.bool.isRequired,
  updateUsertype: PropTypes.func.isRequired,
  onUploadChange: PropTypes.func.isRequired,
  updatePictureUrl: PropTypes.func.isRequired,
  signUpError: PropTypes.string.isRequired,
  signedUp: PropTypes.bool.isRequired,
};

export default SignupFormSeller;
