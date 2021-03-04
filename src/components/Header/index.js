import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import FleurLogo from 'src/assets/logo.png';
import {FiShoppingBag} from "react-icons/fi";

const Header = ({isLoggedIn}) => (
  <header className="header">
    <nav className = "header__content">
        
        <div className="header__content__logo">
        <img className = "header__content__logo__pic" src={FleurLogo} alt="logo placeholder"/>
        <p className = "header__content__logo__text"> C'EST LE <span className="gras">BOUQUET!</span></p>
      </div>
        <ul className= "header__content__links">
        <li className= "header__content__links__link"> <a href= "#">Accueil</a></li>
        <li className= "header__content__links__link"> <a href= "#">Nos produits</a></li>
        <li className= "header__content__links__link"> <a href= "#">Nos producteurs</a></li>
        <li className= "header__content__links__link"> <a href= "#">Devenir partenaire</a></li>
        <li className= "header__content__links__link"> <a href= "#">Se connecter</a></li>
        <li className= "header__content__links__link"> <FiShoppingBag /> </li>
        
        {/* <script>
      window.onscroll = function() {myFunction()};

      var header = document.getElementById("myHeader");
      var sticky = header.offsetTop;

      function myFunction() {
      if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      } else {
      header.classList.remove("sticky");
     } 
}
    </script> */}
        
      {/* {isLoggedIn ? <li className="header__content__links__link"><a href= "#">Mon Espace</a></li> : console.log('veuillez vous connecter !')} */}
      </ul>

    </nav>


  </header>
)


export default Header;
