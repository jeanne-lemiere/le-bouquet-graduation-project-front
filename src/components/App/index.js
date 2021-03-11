// == Import npm
import React, {useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Article from '../Article';
import NavBar from '../../containers/NavBar';
import NotFound from '../NotFound';
import AuthModal from '../../containers/AuthModal';
import SingleProduct from 'src/containers/SingleProduct';
import Products from 'src/containers/Products';
import Card from 'src/components/Card';

// == Import
import './styles.scss';

// == Composant

const App = ({fetchProducts}) => {
    useEffect(() => {
      
      fetchProducts();
    }, []);

  return (
    <div className="app-container">
      <NavBar />
    <AuthModal isHidden />
    <Switch>
      <Route exact key="/" path="/">
        <Header />
        <Article />
        </Route>
        <Route exact path="/nos-fleurs">
          <Products />
        </Route>
        <Route path="/product/:id" exact>
          <SingleProduct />
        </Route>
        <Route path="/panier" exact>
          <Card />
        </Route>
      <NotFound />
    </Switch>
    <Footer />
  </div>
  )
};

// == Export
export default App;
