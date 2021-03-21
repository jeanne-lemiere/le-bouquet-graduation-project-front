// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

// == Import
import './styles.scss';
import ScrollToTop from 'src/functions/scrollToTop';
import SignupFormCustomer from 'src/containers/SignupFormCustomer';
import SignupFormSeller from 'src/containers/SignupFormSeller';
import AccountCreated from 'src/containers/AccountCreated';
import SingleProduct from 'src/containers/SingleProduct';
import Products from 'src/containers/Products';
import SellerPage from 'src/containers/SellerPage';
import Cart from 'src/containers/Cart';
import OrderPass from 'src/containers/OrderPass';
import Header from '../Header';
import Footer from '../Footer';
import Article from '../Article';
import NavBar from '../../containers/NavBar';
import NotFound from '../NotFound';
import Spinner from './Spinner';
import OurProducers from '../../containers/OurProducers';
import AboutUs from '../AboutUs';

// == Import
import './styles.scss';
import Dashboard from '../../containers/Dashboard';

const App = ({ init, loading }) => {
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="app-container">
      <ScrollToTop />
      <NavBar />
      {
        (loading) && <Spinner />
      }

      {
        !loading && (
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
          <Route path="/nos-producteurs" exact>
            <OurProducers />
          </Route>
          <Route path="/nos-producteurs/:sellerId" exact>
            <SellerPage />
          </Route>
          <Route path="/mon-espace" exact>
            <Dashboard />
          </Route>
          <Route path="/panier" exact>
            <Cart />
          </Route>
          <Route path="/qui-sommes-nous" exact>
            <AboutUs />
          </Route>
          <Route path="/récapitulatif" exact>
            <OrderPass />
          </Route>
          <NotFound />
        </Switch>
        )
      }
      <Footer />

    </div>
  );
};
App.propTypes = {
  loading: PropTypes.bool.isRequired,
  init: PropTypes.func.isRequired,
};
// == Export
export default App;
