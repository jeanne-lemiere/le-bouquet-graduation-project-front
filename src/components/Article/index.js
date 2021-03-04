import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import PicArticle from 'src/assets/zoe-schaeffer.jpg';


const Article = ({}) => (
  
  <div className="article">
  <div className="article__content">
    
  <div className="article__content__text">
  <h1 className="article__content__text__title">Cultivées avec amour par des passionnés.</h1>
    <p className="article__content__text__writing">
      <span className="italic">C’est le bouquet!</span> est né du désir de participer à 
      <span className="gras"> relocaliser la production et la vente de fleurs</span>, en proposant un outil pour 
      <span className="gras"> valoriser la filière française, faciliter les échanges</span> 
        entre producteurs et particuliers, et favoriser l’achat de <span className="gras">fleurs locales et de saison</span>.
      <br/>

      <br/>
        Ainsi nous avons conçu une plateforme multi-vendeurs sur laquelle les horticulteurs français pourraient proposer leur production à la vente 
      <span className="gras"> sans intermédiaire.</span>
      </p>
       <p className="article__content__text__link" > <a href="#">Découvrir nos producteurs</a></p>
   </div>    
    <img className = "article__content__pic" src={PicArticle} alt="Producer"/>

  </div>
  </div>

)


export default Article;
