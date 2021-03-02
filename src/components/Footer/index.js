import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import FacebookLogo from 'src/assets/fb.png';
import InstaLogo from 'src/assets/instagram.png';

const Footer = ({}) => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-content-links">
        <p>Qui sommes nous?</p>
        <p>Conditions générales de vente</p>
        <div className="footer-content-links-icons">
          <img src={FacebookLogo} className="footer-logo" alt="Logo Facebook" />
          <img src={InstaLogo} className="footer-logo" alt="Logo Instagram" />
        </div>
      </div>
    </div>

  </footer>
);

export default Footer;
