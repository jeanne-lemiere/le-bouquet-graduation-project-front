import React from 'react';
import './styles.scss';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__links">
        <Link className=" footer__links--text" to="#">Qui sommes nous?</Link>
        <Link className="footer__links--text" to="#">Conditions générales de vente</Link>
      </div>
      <div className="footer__links footer__links--icons">
        <Link className="footer__icon" to="https://www.instagram.com/oclock_io/?hl=fr"><FiInstagram /></Link>
        <Link className="footer__icon" to="https://fr-fr.facebook.com/Oclock.io/"><FiFacebook /></Link>
      </div>
    </div>
  </footer>
);

export default Footer;
