// == Import npm
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const App = () => (
  <div >
    <Header isLoggedIn={true}/>
    <Footer/>
  </div>
);

// == Export
export default App;
