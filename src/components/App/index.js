// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Header from '../Header';
import Footer from '../Footer';
import AuthModal from '../AuthModal';

// == Composant
const App = () => (
  <div>
    <Header isLoggedIn />
    <AuthModal isHidden={false} />
    <Footer />
  </div>
);

// == Export
export default App;
