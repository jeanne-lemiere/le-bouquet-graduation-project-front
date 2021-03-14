import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const AccountCreated = ({ toggleAuthModal }) => (
  <div className="welcome">
    <div className="welcome__text">
      <div className="text-container">
        <p>
          <strong>Bienvenue!</strong> Votre compte a bien été créé, pour y accéder veuillez
          <span
            // added labels and keyboard navigation for accessibility since
            // I didn't use a button tag
            // --------- Accessibility ---------
            tabIndex="0"
            role="button"
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                toggleAuthModal();
              }
            }}
            // --------- Accessibility ---------
            className="link"
            onClick={() => {
              toggleAuthModal();
            }}
          > vous connecter
          </span>
          →
        </p>
      </div>
    </div>
  </div>
);

AccountCreated.propTypes = {
  toggleAuthModal: PropTypes.func.isRequired,
};

export default AccountCreated;
