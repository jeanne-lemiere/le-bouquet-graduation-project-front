import React from 'react';
import './styles.scss';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

const Footer = ({}) => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__links footer__links--text">
        <a href="#">Qui sommes nous?</a>
        <a href="#">Conditions générales de vente</a>
      </div>
      <div className="footer__links footer__links--icons">
        <FiInstagram className="footer__icon" />
        <FiFacebook className="footer__icon" />
      </div>
    </div>
  </footer>
);

export default Footer;
