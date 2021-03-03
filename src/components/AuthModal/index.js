import React from 'react';
import { FiXCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';
import './styles.scss';
import Field from '../Field';
import Radio from '../Radio';

const AuthModal = ({ isHidden }) => {
  const modalClass = isHidden ? 'modal modal--is-hidden' : 'modal';
  const testMessage = (message) => {
    console.log(`coucou, je veux ${message}`);
  };

  return (
    <div className={modalClass}>
      <div className="modal__card">
        <FiXCircle className="modal__closing-icon" />
        <section className="auth__zone auth__zone--login">
          <div className="auth__content-container">
            <header className="auth__header">Vous possédez déjà un compte? </header>
            <form className="login-form">

              <div className="login-form__radio">
                <Radio
                  name="user-type"
                  value="customer"
                  label="Client"
                  checked
                  onChange={(data) => {
                    console.log(data);
                  }}
                /><Radio
                  name="user-type"
                  value="seller"
                  label="Producteur"
                  onChange={(data) => {
                    console.log(data);
                  }}
                />
              </div>

              <Field
                label="Email"
                placeholder="ADRESSE EMAIL"
                value=""
                name="email"
                type="email"
                onChange={(data) => {
                  console.log(data);
                }}
              />
              <Field
                label="Mot de passe"
                placeholder="MOT DE PASSE"
                value=""
                name="password"
                type="password"
                onChange={(data) => {
                  console.log(data);
                }}
              />
              <button
                className="auth__button"
                type="submit"
                aria-label="Me connecter"
                onClick={(event) => {
                  event.preventDefault();
                  testMessage('me connecter');
                }}
              >Se connecter
              </button>
            </form>
          </div>
        </section>
        <section className="auth__zone auth__zone--signin">
          <div className="auth__content-container">
            <header className="auth__header">Créer mon compte en quelques clics</header>
            <button
              className="auth__button"
              type="button"
              aria-label="Créer un compte client"
              onClick={() => {
                testMessage('créer un compte client');
              }}
            >Créer un compte client
            </button>
            <button
              className="auth__button"
              type="button"
              aria-label="Créer un compte pro"
              onClick={() => {
                testMessage('créer un compte pro');
              }}
            >Créer un compte pro
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

AuthModal.propTypes = {
  isHidden: PropTypes.bool.isRequired,
};

export default AuthModal;
