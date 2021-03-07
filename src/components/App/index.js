// == Import npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Article from '../Article';
import NavBar from '../NavBar';
import NotFound from '../NotFound';
// == Import
import './styles.scss';

// == Composant

const App = () => (
  <div className="app-container">
    <NavBar
      isLoggedIn={false}
    />
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
