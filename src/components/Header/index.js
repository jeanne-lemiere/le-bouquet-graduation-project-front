import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const Header = ({isLoggedIn}) => (
  <header className="header">
    <nav className = "header-content">
        
        <img className = "header-content-pic" src="/home/etudiant/Bureau/OBouquet/Statique_homepage/src/assets/favicon.ico" alt="logo placeholder"/>


        <p className= "header-content-link">Accueil</p>
        {/* <li className= "header-content-menu"> <a href ="#">Nos produits</a></li> */}
        <p className= "header-content-link"> <a href ="#">Nos fleurs</a></p>
          {/* <ul className= "header-content-menu-sous">
            <li className= "header-content-menu-sous-cat"> <a href="#">Occasions </a></li>
            <li className= "header-content-menu-sous-cat"> <a href="#">Fleurs</a></li>
            <li className= "header-content-menu-sous-cat"> <a href="#">Consommables</a></li>
            
          </ul> */}
        <p className= "header-content-menu">Nos producteurs</p>
        <p className= "header-content-link">Devenir partenaire</p>
        <p className= "header-content-link">Mon Espace</p>
      {isLoggedIn ? <p className="header-content-link">Mon Espace</p> : console.log('veuillez vous connecter !')}

    </nav>


  </header>
)


export default Header;
