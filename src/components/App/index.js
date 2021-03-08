// == Import npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Article from '../Article';
import NavBar from '../../containers/NavBar';
import NotFound from '../NotFound';
import AuthModal from '../../containers/AuthModal';
// == Import
import './styles.scss';

// == Composant

const App = () => (
  <div className="app-container">
    <NavBar />
    <AuthModal isHidden />
    <Switch>
      <Route exact key="/" path="/">
        <Header />
        <Article />
      </Route>
      <NotFound />
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
