import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Logo from 'src/assets/logo-bouquet.png';
import { FiShoppingBag, FiMenu } from 'react-icons/fi';
import { NavLink, Link } from 'react-router-dom';

const NavBar = ({
  isLogged, toggleAuthModal, logOut, /* changeBackground, navBackground, */
}) => {
  const [navBackground, setNavBackground] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavBackground(true);
    }
    else {
      setNavBackground(false);
    }
  };
  window.addEventListener('scroll', () => {
    changeBackground(window.scrollY);
  });
  /*  I tried to centralise the handling of the nav background on scroll using redux
     Somehow the value never changes in the state when the action is triggered
     You'll find my code commented in the container
     As I spent already so much time on it, it will come back to it
     after handling more central features

 useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log('hauteur:', window.scrollY);
      changeBackground(window.scrollY);
    });
  }); */

  const navClass = navBackground ? 'nav nav--active' : 'nav';

  return (
    <header>
      <nav className={navClass}>
        <Link className="logo-link" to="/"><img className="nav__logo" src={Logo} alt="icone bouquet" /></Link>
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
  /*  changeBackground: PropTypes.func.isRequired,
  navBackground: PropTypes.bool.isRequired, */
};
export default NavBar;
