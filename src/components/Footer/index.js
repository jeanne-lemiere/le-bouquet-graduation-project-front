import React from 'react';
import './styles.scss';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__links">
        <Link className=" footer__links--text" to="/qui-sommes-nous">Qui sommes nous?</Link>
        <Link className="footer__links--text" to="/cgv">Conditions générales de vente</Link>
      </div>
      <div className="footer__links footer__links--icons">
        <a className="footer__icon" href="https://www.instagram.com/oclock_io/?hl=fr"><FiInstagram /></a>
        <a className="footer__icon" href="https://fr-fr.facebook.com/Oclock.io/"><FiFacebook /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
