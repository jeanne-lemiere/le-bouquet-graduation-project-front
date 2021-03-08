import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Logo from 'src/assets/logo-bouquet.png';
import { FiShoppingBag, FiMenu } from 'react-icons/fi';
import { NavLink, Link } from 'react-router-dom';

const NavBar = ({ isLogged, toggleAuthModal }) => {
  const [navBackground, setNavBackground] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavBackground(true);
    }
    else {
      setNavBackground(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  const navClass = navBackground ? 'nav nav--active' : 'nav';

  return (
    <header>
      <nav className={navClass}>
        <img className="nav__logo" src={Logo} alt="icone bouquet" />
        <div className="nav__content">
          <ul className="nav__links">
            <li className="nav__link"> <NavLink exact to="/">ACCUEIL</NavLink></li>
            <li className="nav__link"> <NavLink exact to="/nos-fleurs">NOS FLEURS</NavLink></li>
            <li className="nav__link"> <NavLink exact to="/nos-producteurs">NOS PRODUCTEURS</NavLink></li>
            <li className="nav__link"> <NavLink exact to="/inscription/pro">DEVENIR PARTENAIRE</NavLink></li>
            {isLogged ? (
              <li className="nav__link"><NavLink exact to="/mon-espace">MON ESPACE</NavLink></li>)
              : (
                <li className="nav__link">
                  <NavLink
                    onClick={() => {
                      toggleAuthModal();
                    }}
                    exact
                    to="#"
                  >S'INSCRIRE/SE CONNECTER
                  </NavLink>
                </li>
              )}
            {isLogged ? (
              <li className="nav__link"><NavLink exact to="#">DECONNEXION</NavLink></li>)
              : null }
          </ul>
          <Link
            className="nav__icon"
            to="/panier"
          ><FiShoppingBag />
          </Link>
          <Link
            className="nav__icon nav__icon--burger"
            to="#"
          ><FiMenu />
          </Link>
        </div>

      </nav>
    </header>
  );
};

NavBar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  toggleAuthModal: PropTypes.func.isRequired,
};
export default NavBar;
