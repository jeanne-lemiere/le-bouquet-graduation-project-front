import React from 'react';
import { FiXCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
import LoginForm from 'src/containers/LoginForm';

const AuthModal = ({ isLogged, open, toggle }) => {
  const modalClass = open ? 'modal' : 'modal modal--is-hidden';
  return (
    <div className={modalClass}>
      <div className="modal__card">
        <button
          type="button"
          className="modal__closing-icon-container"
          onClick={toggle}
        ><FiXCircle className="modal__closing-icon" />
        </button>
        <section className="auth__zone auth__zone--login">
          <div className="auth__content-container">
            <header className="auth__header">Vous possédez déjà un compte? </header>
            <LoginForm />
          </div>
        </section>
        <section className="auth__zone auth__zone--signin">
          <div className="auth__content-container">
            <header className="auth__header">Créer mon compte en quelques clics</header>
            <Link className="auth__button" to="/inscription/client">Créer un compte client</Link>
            <Link className="auth__button" to="/inscription/pro">Créer un compte pro</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

AuthModal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default AuthModal;
