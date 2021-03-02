import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import FleurLogo from 'src/assets/logo.png';

const Header = ({isLoggedIn}) => (
  <header className="header">
    <nav className = "header__content">
        
        <img className = "header__content__pic" src={FleurLogo} alt="logo placeholder"/>

        <ul className= "header__content__links">
        <li className= "header__content__links__link"> <a href= "#">Accueil</a></li>
        <li className= "header__content__links__link"> <a href= "#">Nos produits</a></li>
        <li className= "header__content__links__link"> <a href= "#">Nos producteurs</a></li>
        <li className= "header__content__links__link"> <a href= "#">Devenir partenaire</a></li>
        <li className= "header__content__links__link"> <a href= "#">Se connecter</a></li>
        
        
        
      {/* {isLoggedIn ? <li className="header__content__links__link"><a href= "#">Mon Espace</a></li> : console.log('veuillez vous connecter !')} */}
      </ul>

    </nav>


  </header>
)


export default Header;
