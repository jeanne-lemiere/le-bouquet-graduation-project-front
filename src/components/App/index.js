// == Import npm
import React from 'react';

// == Import
import './styles.css';
import AuthModal from '../AuthModal';
import Dashboard from '../Dashboard';

// == Composant
const App = () => (
  <div>
    <Dashboard userType="seller" />
    <AuthModal isHidden />
  </div>
);

// == Export
export default App;
