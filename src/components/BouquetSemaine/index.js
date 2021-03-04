import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const BouquetSemaine = ({}) => (

  <div className="band">
  <div className="band__article">
    <div className="band__article__text">
    <h1 className="band__article__text__title">Des fleurs oubliées, locales et de saison</h1>
    <p className="band__article__text__writing">
      Marre des orchidées d'Australie, et des roses du Kenya! Quel dommage d'aller chercher si loin pour faire plaisir quand il existe <spanw className="gras"> une myriade de belles fleurs oubliées</spanw> sous nos latitudes.
    <br/>

    <br/>
    Dans les jardins de nos grand-mères, entre les rosiers, poussaient giroflées, delphiniums, myosotis et autres renoncules. Notre mission? Faire redécouvrir ces fleurs d’antan en vente directe, du producteur au particulier.</p>
    <p className="band__article__text__link" > <a href="#">Découvrir nos fleurs </a></p>
    </div>
  </div>
  </div>

)


export default BouquetSemaine;
