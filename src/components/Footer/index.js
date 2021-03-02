import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import FacebookLogo from 'src/assets/fb.png';
import InstaLogo from 'src/assets/instagram.png';

const Footer = ({}) => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__content__links">
        <p>Qui sommes nous?</p>
        <p>Conditions générales de vente</p>
        <div className="footer__content__icons">
          <img src={FacebookLogo} className="footer__content__icons__logo__fb" alt="Logo Facebook" />
          <img src={InstaLogo} className="footer__content__icons__logo__insta" alt="Logo Instagram" />
        </div>
      </div>
    </div>

  </footer>
);

export default Footer;
