// == Import npm
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import BouquetSemaine from '../BouquetSemaine';
import Article from '../Article';
// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant



const App = () => (
  <div >
    <Header isLoggedIn={true}/>
    <BouquetSemaine/>
    <Article/>
    <Footer/>
  </div>
);

// == Export
export default App;
