/* eslint-disable camelcase */
import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Radio from 'src/components/Radio';
import HomemadeField from 'src/components/HomemadeField';
import { Field, reduxForm } from 'redux-form';

const SigninForm = ({
  signinAs,
  changeField,
  handleSignin,
  signinInfos,
  gscChecked,
  handleCheck,
}) => {
  const roleName = signinAs === 'seller' ? 'pro' : 'client';
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (gscChecked) {
      handleSignin();
    }
  };

  const options = [
    { text: 'Madame', value: 'F' },
    { text: 'Monsieur', value: 'M' },
  ];
  const {
    gender,
    email,
    password,
    passwordConfirm,
    lastname,
    firstname,
    phone_number,
    street_name,
    street_number,
    city,
    zipcode,
  } = signinInfos;

  const validateCustomer = (values) => {
    const errors = {};
    if (!values.lastname) {
      errors.lastname = "Vous n'avez pas rempli votre nom.";
    }
    else if (values.lastname.length > 20) {
      errors.lastname = 'Le nom ne doit pas excéder 20 caractères.';
    }
    if (!values.firstname) {
      errors.firstname = "Vous n'avez pas rempli votre prénom.";
    }
    else if (values.firstname.length > 20) {
      errors.firstname = 'Le prénom ne doit pas excéder 20 caractères.';
    }
    if (!values.email) {
      errors.email = "Vous n'avez pas rempli votre email.";
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Adresse email invalide.';
    }
    if (!values.password) {
      errors.password = "Vous n'avez pas rempli votre mot de passe.";
    }
    else if (values.password.length < 8) {
      errors.password = 'Le mot de passe doit faire au moins 8 caractères.';
    }
    if (!values.passwordConfirm) {
      errors.passwordConfirm = 'Vous devez confirmer le mot de passe.';
    }
    if (values.password !== values.passwordConfirm) {
      errors.passwordConfirm = 'Les deux mots de passe ne correspondent pas.';
    }
    if (!values.street_number) {
      errors.password = "Vous n'avez pas rempli le n° de rue.";
    }
    if (values.street_number.length > 8) {
      errors.password = 'Le n° de rue ne doit pas excéder 8 caractères.';
    }
    if (!values.zipcode) {
      errors.zipcode = "Vous n'avez pas rempli le code postal.";
    }
    else if (values.zipcode.length !== 5 || (Number.isNaN(values.zipcode))) {
      errors.zipcode = 'Le code postal doit comprendre 5 chiffres.';
    }
    if (!values.city) {
      errors.city = "Vous n'avez pas rempli votre ville.";
    }
    else if (values.city.length > 20) {
      errors.city = 'La ville ne doit pas excéder 20 caractères.';
    }
    if (!values.phone_number) {
      errors.phone_number = "Vous n'avez pas rempli votre n° de téléphone.";
    }
    else if (values.phone_number.length !== 10 || (Number.isNaN(values.phone_number))) {
      errors.phone_number = 'Le numéro de téléphone doit comprendre 10 chiffres.';
    }
    return errors;
  };
  // const errorMessage = passwordsMatch ?  null
  // : <p className="login__error">Les deux mots de passe ne correspondent pas. </p> ;
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
              <Radio
              // important to give selected value in prop
              // so we can dynamically give the right radio button the checked property
                selected={gender}
                label={choice.text}
                type="radio"
                name="gender"
                value={choice.value}
                key={choice.value}
              // checks the radio if its value === the value that was sent to the state
                checked={gender === choice.value}
                onChange={changeField}
              />
            ))}
          </div>
          <HomemadeField
            label="Nom"
            placeholder="NOM"
            value={lastname}
            name="lastname"
            type="text"
            onChange={changeField}
          />
          <HomemadeField
            label="Prénom"
            placeholder="PRENOM"
            value={firstname}
            name="firstname"
            type="text"
            onChange={changeField}
          />
        </div>
        <h2>Identifiants</h2>
        <div className="signin-form__section">
          <HomemadeField
            label="Email"
            placeholder="ADRESSE EMAIL"
            value={email}
            name="email"
            type="text"
            onChange={changeField}
          />
          <HomemadeField
            label="Mot de passe"
            placeholder="MOT DE PASSE"
            value={password}
            name="password"
            type="text"
            onChange={changeField}
          />
          <HomemadeField
            label="Confirmer le mot de passe"
            placeholder="CONFIRMER LE MOT DE PASSE"
            value={passwordConfirm}
            name="passwordConfirm"
            type="text"
            onChange={changeField}
          />
        </div>
        <h2>Adresse</h2>
        <div className="signin-form__section">
          <HomemadeField
            label="N° de rue"
            placeholder="N° DE RUE"
            value={street_number}
            name="street_number"
            type="text"
            onChange={changeField}
          />
          <HomemadeField
            label="Adresse"
            placeholder="ADRESSE"
            value={street_name}
            name="street_name"
            type="text"
            onChange={changeField}
          />
          <HomemadeField
            label="Code postal"
            placeholder="CODE POSTAL"
            value={zipcode}
            name="zipcode"
            type="text"
            onChange={changeField}
          />
          <HomemadeField
            label="Ville"
            placeholder="VILLE"
            value={city}
            name="city"
            type="text"
            onChange={changeField}
          />
          <HomemadeField
            label="N° de téléphone"
            placeholder="N° DE TELEPHONE"
            value={phone_number}
            name="phone_number"
            type="text"
            onChange={changeField}
          />
        </div>
        <div className="signin__checkbox">
          <label htmlFor="conditions générales de vente">
            <input
              type="checkbox"
              name="gsc"
              id="gsc"
              checked={gscChecked}
              onChange={handleCheck}
            />
            J'ai bien lu et j'accepte les
            <Link className="signin__link" to="/cgv"> CGV </Link>
            →
          </label>
        </div>

        <button
          type="submit"
          aria-label="créer mon compte"
          className="signin__submit-button"
        >Créer mon compte {roleName}
        </button>
      </form>
    </div>
  );
};

SigninForm.propTypes = {
  signinAs: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSignin: PropTypes.func.isRequired,
  signinInfos: PropTypes.shape({
    gender: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConfirm: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
    street_name: PropTypes.string.isRequired,
    street_number: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    userType: PropTypes.string.isRequired,
  }).isRequired,
  gscChecked: PropTypes.bool.isRequired,
  handleCheck: PropTypes.func.isRequired,
};

export default SigninForm;
