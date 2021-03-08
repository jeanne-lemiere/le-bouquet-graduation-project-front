// == Import npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Article from '../Article';
import NavBar from '../NavBar';
import NotFound from '../NotFound';
import AuthModal from '../AuthModal';
import Products from 'src/containers/Products';
// == Import
import './styles.scss';

// == Composant

const App = () => (
  <div className="app-container">
    <NavBar
      isLoggedIn={false}
    />
    <AuthModal isHidden={true} />
    <Switch>
      <Route exact key="/" path="/">
        <Header />
        <Article />
      </Route>
      <Route exact path="/nos-fleurs">
        <Products />
      </Route>
      {/*sup <Route path="/product/:id">
        <>
      </Route> */}
      <NotFound />
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
