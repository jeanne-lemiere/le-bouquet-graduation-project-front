// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';
// == Import
import './styles.css';
import AuthModal from '../AuthModal';

// == Composant
const App = () => (
  <div>
    <AuthModal isHidden={false} />
  </div>
);

// == Export
export default App;
