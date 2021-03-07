import React from 'react';
import { FiXCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
import LoginForm from 'src/containers/LoginForm';

const AuthModal = ({ isHidden }) => {
  const modalClass = isHidden ? 'modal modal--is-hidden' : 'modal';

  return (
    <div className={modalClass}>
      <div className="modal__card">
        <FiXCircle className="modal__closing-icon" />
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
  isHidden: PropTypes.bool.isRequired,
};

export default AuthModal;
