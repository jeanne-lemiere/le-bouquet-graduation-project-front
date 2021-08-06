import React, {useEffect} from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const Header = () =>  (
  <div className="header">
    <div className="header__text">
        <h1>Des fleurs oubliées, locales et de saison</h1>
        <p>
          Marre des orchidées d'Australie, et des roses du Kenya! Quel dommage d'aller chercher si
          loin pour faire plaisir quand il existe
          <em> une myriade de belles fleurs oubliées</em> sous nos latitudes.
        </p>
        <p> Dans les jardins de nos grand-mères, entre les rosiers, poussaient giroflées,
          delphiniums, myosotis et autres renoncules.
          Notre mission? Faire redécouvrir ces fleurs d’antan
          <em> en vente directe, du producteur au particulier.
          </em>
        </p>

      <Link className="homepage__link" to="/nos-fleurs">Découvrir nos fleurs →</Link>
      </div>
  </div>
);

export default Header;
