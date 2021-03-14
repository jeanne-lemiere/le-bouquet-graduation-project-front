// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
import Spinner from './Spinner';
import OurProducers from '../../containers/OurProducers';

// == Import
import './styles.scss';

// == Composant

const App = ({ init, loading }) => {
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="app-container">
      <ScrollToTop />
      <NavBar />
      <AuthModal />
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
