import React from 'react';
import './styles.scss';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__text-links">
        <Link className="text-links__team" to="/qui-sommes-nous">Qui sommes nous?</Link>
        <Link className="text-links__terms" to="/cgv">Conditions générales de vente</Link>
      </div>
      <div className="footer__social">
        <a className="social__instagram" label="instagram" href="https://www.instagram.com/oclock_io/?hl=fr"><FiInstagram className="social__icon"/></a>
        <a className="social__facebook" label="facebook" href="https://fr-fr.facebook.com/Oclock.io/"><FiFacebook className="social__icon"/> </a>
      </div>
    </div>
  </footer>
);

export default Footer;
