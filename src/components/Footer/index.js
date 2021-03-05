import React from 'react';
import './styles.scss';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

const Footer = ({}) => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__links">
        <a className=" footer__links--text" href="#">Qui sommes nous?</a>
        <a className="footer__links--text" href="#">Conditions générales de vente</a>
      </div>
      <div className="footer__links footer__links--icons">
        <a href="https://www.instagram.com/oclock_io/?hl=fr"><FiInstagram className="footer__icon" /></a>
        <a href="https://fr-fr.facebook.com/Oclock.io/"><FiFacebook className="footer__icon" /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
