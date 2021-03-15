import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found">
    <div className="not-found__text">
      <div className="text-container">
        <h1>Mmmh, ce vase est un peu vide...</h1>
        <p>
          On dirait que nous n'avons pas trouvé ce que vous cherchiez.
          Plutôt pied d'alouette, cosmos ou tournesol?
        </p>

        <Link className="not-found__link" to="/nos-fleurs">Nos fleurs →</Link>
      </div>
    </div>
  </div>
);

export default NotFound;
