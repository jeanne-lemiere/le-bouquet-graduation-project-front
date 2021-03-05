// == Import npm
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import BouquetSemaine from '../BouquetSemaine';
import Article from '../Article';
// == Import
import './styles.scss';

// == Composant

const App = () => (
  <div className="app-container">
    <main className="main-container">
      <Article />
    </main>
    <Footer />
  </div>
);

// == Export
export default App;
