// == Import npm
import React, {useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Article from '../Article';
import NavBar from '../NavBar';
import NotFound from '../NotFound';
import AuthModal from '../AuthModal';
// SingleProduct est la page pour les détails d'un seul produit
import SingleProduct from 'src/containers/SingleProduct';
//Products est le page contenant tous les produits, ProductCard se trouve dans Products
import Products from 'src/containers/Products';
// == Import
import './styles.scss';

// == Composant

const App = ({fetchProducts}) => {
    useEffect(() => {
      // On demande à récupérer la donnée
      // Pour ca je dois donc déclencher une intention de récupération de données
      fetchProducts();
    }, []);

  return (
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
        <Route path="/product/:id" exact>
          <SingleProduct />
        </Route>
        <NotFound />
      </Switch>
      <Footer />
    </div>
  )
};

// == Export
export default App;
