import React from 'react';
import './styles.scss';
import ArticlePic from 'src/assets/zoe-schaeffer.jpg';
import { Link } from 'react-router-dom';

const Article = () => (

  <div className="article">
    <div className="text-container">
      <div className="article__text">
        <h1>Cultivées avec amour par des passionnés.</h1>
        <p>
          <i>C’est le bouquet!</i> est né du désir de participer à
          <em> relocaliser la production et la vente de fleurs</em>, en proposant un outil pour
          <em> valoriser la filière française, faciliter les échanges</em>
          entre producteurs et particuliers, et favoriser l’achat de
          <em> fleurs locales et de saison.</em>
        </p>
        <p>Ainsi nous avons conçu une plateforme multi-vendeurs sur laquelle les horticulteurs
          français pourraient proposer leur production à la vente
          <em> sans intermédiaire.</em>
        </p>
        <Link className="link" to="/nos-producteurs">Découvrir nos producteurs →</Link>
      </div>
    </div>
    <div className="picture-container">
      <img className="article__picture" src={ArticlePic} alt="horticultrice portant un seau de pavots" />
    </div>

  </div>

);

export default Article;
