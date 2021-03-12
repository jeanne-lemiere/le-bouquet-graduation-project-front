// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ScrollToTop from 'src/functions/scrollToTop';
import SignupFormCustomer from 'src/containers/SignupFormCustomer';
import SignupFormSeller from 'src/containers/SignupFormSeller';
import AccountCreated from 'src/containers/AccountCreated';
import SingleProduct from 'src/containers/SingleProduct';
import Products from 'src/containers/Products';
import Header from '../Header';
import Footer from '../Footer';
import Article from '../Article';
import NavBar from '../../containers/NavBar';
import NotFound from '../NotFound';
import AuthModal from '../../containers/AuthModal';

// == Import
import './styles.scss';

// == Composant

const App = ({ fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="app-container">
      <ScrollToTop />
      <NavBar />
      <AuthModal isHidden />
      <Switch>
        <Route exact key="/" path="/">
          <Header />
          <Article />
        </Route>
        <Route exact key="/inscription/client" path="/inscription/client">
          <SignupFormCustomer />
        </Route>
        <Route exact key="/inscription/pro" path="/inscription/pro">
          <SignupFormSeller />
        </Route>
        <Route exact key="/bienvenue" path="/bienvenue">
          <AccountCreated />
        </Route>
        <Route exact path="/nos-fleurs">
          <Products />
        </Route>
        <Route path="/product/:id" exact>
          <SingleProduct />
        </Route>
        <NotFound />
      </Switch>
      <Footer />
    </div>
  );
};
// == Export
export default App;
