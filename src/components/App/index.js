// == Import npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Article from '../Article';
import NavBar from '../NavBar';
import NotFound from '../NotFound';
import AuthModal from '../AuthModal';
// SingleProduct est la page pour les détails d'un seul produit
import SingleProduct from '../SingleProduct';
//Products est le page contenant tous les produits, ProductCard se trouve dans Products
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
      <Route path="/product/:id">
        <SingleProduct />
      </Route>
      <NotFound />
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
