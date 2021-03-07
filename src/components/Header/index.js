import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Header = () => (
  <div className="header">
    {/*  <NavBar /> */}
    <div className="header__text">
      <div className="text-container">
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

        <Link className="link" to="/nos-fleurs">Découvrir nos fleurs →</Link>
      </div>
    </div>
  </div>
);

export default Header;
