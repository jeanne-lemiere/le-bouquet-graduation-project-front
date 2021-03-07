// == Import npm
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Article from '../Article';
// == Import
import './styles.scss';

// == Composant

const App = () => (
  <div className="app-container">
    <Header />
    <Article />
    <Footer />
  </div>
);

// == Export
export default App;
