import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Logo from 'src/assets/logo-bouquet.png';
import { FiShoppingBag, FiMenu } from 'react-icons/fi';
import { NavLink, Link } from 'react-router-dom';

const NavBar = ({
  isLogged, toggleAuthModal, logOut, changeBackground, navBackground,
}) => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      changeBackground(window.scrollY);
    });
  });

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
                <li>
                  <div
                    // added labels and keyboard navigation for accessibility since
                    // I didn't use a button tag
                    // --------- Accessibility ---------
                    tabIndex="0"
                    role="button"
                    aria-label="s'inscrire / se connecter"
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        toggleAuthModal();
                      }
                    }}
                    // --------- Accessibility ---------
                    className="nav__link link"
                    onClick={() => {
                      toggleAuthModal();
                    }}
                  >S'INSCRIRE/SE CONNECTER
                  </div>
                </li>
              )}
            {isLogged ? (
              <li>
                <div
                  // --------- Accessibility ---------
                  tabIndex="0"
                  role="button"
                  aria-label="déconnexion"
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      toggleAuthModal();
                    }
                  }}
                  // --------- Accessibility ---------
                  className="nav__link link"
                  onClick={() => {
                    localStorage.removeItem('token');
                    logOut();
                  }}
                >DECONNEXION
                </div>
              </li>
            )
              : null }
          </ul>
          <Link
            className="nav__icon"
            to="/panier"
          ><FiShoppingBag />
          </Link>
          <div
            className="nav__icon nav__icon--burger"
          ><FiMenu />
          </div>
        </div>

      </nav>
    </header>
  );
};

NavBar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  toggleAuthModal: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  changeBackground: PropTypes.func.isRequired,
  navBackground: PropTypes.bool.isRequired,
};
export default NavBar;
