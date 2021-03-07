import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Logo from 'src/assets/logo-bouquet.png';
import { FiShoppingBag, FiMenu } from 'react-icons/fi';
import { NavLink, Link } from 'react-router-dom';

const Header = ({ isLoggedIn }) => (
  <header>
    <nav className="nav">
      <img className="nav__logo" src={Logo} alt="icone bouquet" />
      <div className="nav__content">
        <ul className="nav__links">
          <li className="nav__link"> <NavLink to="/">ACCUEIL</NavLink></li>
          <li className="nav__link"> <NavLink to="/nos-fleurs">NOS FLEURS</NavLink></li>
          <li className="nav__link"> <NavLink to="/nos-producteurs">NOS PRODUCTEURS</NavLink></li>
          <li className="nav__link"> <NavLink to="/inscription/pro">DEVENIR PARTENAIRE</NavLink></li>
          {isLoggedIn ? (
            <li className="nav__link"><NavLink to="/mon-espace">MON ESPACE</NavLink></li>)
            : (<li className="nav__link"> <Link to="#">S'INSCRIRE/SE CONNECTER</Link></li>)}
          {isLoggedIn ? (
            <li className="nav__link"><Link to="#">DECONNEXION</Link></li>)
            : null }
        </ul>
        <NavLink className="nav__icon" to="/panier"><FiShoppingBag /></NavLink>
        <Link className="nav__icon nav__icon--burger" to="#"><FiMenu /></Link>
      </div>

    </nav>
  </header>
);

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
export default Header;
