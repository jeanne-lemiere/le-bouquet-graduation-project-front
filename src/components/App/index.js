// == Import npm
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ScrollToTop from 'src/functions/scrollToTop';
import Header from '../Header';
import Footer from '../Footer';
import Article from '../Article';
import NavBar from '../../containers/NavBar';
import NotFound from '../NotFound';
import AuthModal from '../../containers/AuthModal';
import SigninForm from '../SigninForm';

// == Import
import './styles.scss';

// == Composant

const App = () => {
  const showSigninData = (values) => {
    console.log(`Signin form submit values:\n\n${JSON.stringify(values, null, 2)}`);
  };

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
          <SigninForm signinAs="customer" onSubmit={showSigninData} />
        </Route>
        <Route exact key="/inscription/client" path="/inscription/pro">
          <SigninForm signinAs="seller" onSubmit={showSigninData} />
        </Route>
        <NotFound />
      </Switch>
      <Footer />
    </div>
  );
};
// == Export
export default App;
