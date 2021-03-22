import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Logo from 'src/assets/logo-bouquet.png';
import { FiShoppingBag, FiMenu } from 'react-icons/fi';
import { NavLink, Link } from 'react-router-dom';
import AuthModal from 'src/containers/AuthModal';

const NavBar = ({
  isLogged, toggleAuthModal, logOut, changeBackground, navBackground, userType, cartAmount, toggleBurger, burgerOpen, closeBurger,
}) => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      changeBackground(window.scrollY);
    });
  });

  const navClass = navBackground || burgerOpen ? 'nav nav--active' : 'nav';
  const joinUs = isLogged && userType === 'seller' ? null : <li className="nav__link"> <NavLink exact to="/inscription/pro">DEVENIR PARTENAIRE</NavLink></li>;
  const joinUsBurger = isLogged && userType === 'seller' ? null : <li className="burger__link"> <NavLink onClick={toggleBurger} exact to="/inscription/pro">DEVENIR PARTENAIRE</NavLink></li>;
  const cartClass = isLogged && userType === 'seller' ? 'nav__icon nav__icon--disabled' : 'nav__icon';
  const cartAmountClass = isLogged && userType === 'seller' ? 'cart__amount cart__amount--disabled' : 'cart__amount';
  const burgerClass = burgerOpen ? 'burger burger--active' : 'burger';

  return (
    <header>
      <nav className={navClass}>
        <Link className="logo-link" to="/" onClick={closeBurger}><img className="nav__logo" src={Logo} alt="icone bouquet" /></Link>
        <div className="nav__content">
          <ul className="nav__links">
            <li className="nav__link"> <NavLink exact to="/">ACCUEIL</NavLink></li>
            <li className="nav__link"> <NavLink exact to="/nos-fleurs">NOS FLEURS</NavLink></li>
            <li className="nav__link"> <NavLink exact to="/nos-producteurs">NOS PRODUCTEURS</NavLink></li>
            {joinUs}
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
                    // -----------------------------
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
                      localStorage.clear();
                      logOut();
                    }
                  }}
                  // --------------------------
                  className="nav__link link"
                  onClick={() => {
                    localStorage.clear();
                    logOut();
                  }}
                >DECONNEXION
                </div>
              </li>
            )
              : null }
          </ul>
          <Link
            className={cartClass}
            to="/panier"
            onClick={closeBurger}
          ><FiShoppingBag />
            <p className={cartAmountClass}>{cartAmount}</p>
          </Link>
          <div
            // --------- Accessibility ---------
            tabIndex="0"
            role="button"
            aria-label="menu mobile"
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                toggleBurger();
              }
            }}
            // ------------------------------
            className="nav__icon nav__icon--burger"
            onClick={() => {
              toggleBurger();
            }}
          ><FiMenu />
          </div>
        </div>
      </nav>
      <div className={burgerClass}>
        <ul className="burger__links">
          <li className="burger__link"> <NavLink onClick={toggleBurger} exact to="/">ACCUEIL</NavLink></li>
          <li className="burger__link"> <NavLink onClick={toggleBurger} exact to="/nos-fleurs">NOS FLEURS</NavLink></li>
          <li className="burger__link"> <NavLink onClick={toggleBurger} exact to="/nos-producteurs">NOS PRODUCTEURS</NavLink></li>
          {joinUsBurger}
          {isLogged ? (
            <li className="burger__link"><NavLink onClick={toggleBurger} exact to="/mon-espace">MON ESPACE</NavLink></li>)
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
                  className="burger__link link"
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
                    localStorage.clear();
                    logOut();
                    toggleBurger();
                  }
                }}
                // --------- Accessibility ---------
                className="burger__link link"
                onClick={() => {
                  localStorage.clear();
                  logOut();
                  toggleBurger();
                }}
              >DECONNEXION
              </div>
            </li>
          )
            : null}
        </ul>
      </div>
      <AuthModal />
    </header>
  );
};

NavBar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  toggleAuthModal: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  changeBackground: PropTypes.func.isRequired,
  navBackground: PropTypes.bool.isRequired,
  userType: PropTypes.string.isRequired,
  cartAmount: PropTypes.number.isRequired,
  toggleBurger: PropTypes.func.isRequired,
  burgerOpen: PropTypes.bool.isRequired,
  closeBurger: PropTypes.func.isRequired,
};
export default NavBar;
