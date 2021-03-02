import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const Header = ({isLoggedIn}) => (
  <header className="header">
    <nav className = "header__content">
        
        <img className = "header__content__pic" src="/home/etudiant/Bureau/OBouquet/Statique_homepage/src/assets/favicon.ico" alt="logo placeholder"/>


        <p className= "header__content__link">Accueil</p>
        {/* <li className= "header-content-menu"> <a href ="#">Nos produits</a></li> */}
        <p className= "header__content__link"> <a href ="#">Nos fleurs</a></p>
          {/* <ul className= "header-content-menu-sous">
            <li className= "header-content-menu-sous-cat"> <a href="#">Occasions </a></li>
            <li className= "header-content-menu-sous-cat"> <a href="#">Fleurs</a></li>
            <li className= "header-content-menu-sous-cat"> <a href="#">Consommables</a></li>
            
          </ul> */}
        <p className= "header__content__menu">Nos producteurs</p>
        <p className= "header__content__link">Devenir partenaire</p>
        
      {isLoggedIn ? <p className="header__content__link">Mon Espace</p> : console.log('veuillez vous connecter !')}

    </nav>


  </header>
)


export default Header;
