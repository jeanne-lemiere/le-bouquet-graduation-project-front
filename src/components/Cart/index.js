import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';
import CartProduct from '../../containers/CartProduct';
import Spinner from './Spinner';

const Cart = ({
  fetchCartProducts, cartProducts, loading, setLoading,
}) => {
  useEffect(() => {
    fetchCartProducts();
    setLoading(true);
  }, []);

  if (loading) {
    'vrai';
    return <Spinner />;
  }
  console.log('faux loading vaut :', loading, 'et cartProduct.length : ', cartProducts.length);

  let totalPrice = 0;
  let cartFull;

  if (cartProducts.length < 1) {
    cartFull = false;
  }
  else {
    totalPrice = 0;
    cartProducts.map((product) => (
      totalPrice += parseInt(product.data.quantity) * (parseFloat(product.data.price))
    ));
    totalPrice = totalPrice.toFixed(2);
    cartFull = true;
  }

  return (
    <div className="card">
      <div className="card__top">
        <h1>Votre panier</h1>
        <Link to="/récapitulatif" className={`${cartProducts.length < 1 ? 'card__next disabled-link' : 'card__next'}`}>Passer la commande</Link>
      </div>
      <Link to="/nos-fleurs">← Retourner à la boutique</Link>

      <div className="card__content">
        <div className="card__products">

          {
                            cartFull
                              ? (cartProducts.map((product) => (
                                <CartProduct key={product.data.id} id={product.data.id} name={product.data.name} image={product.data.images[0].url} price={product.data.price} description={product.data.description} quantity={product.data.quantity} />
                              )))
                              : <h2 className="empty-cart">Votre panier est vide, n'hésitez pas à visiter la page <Link to="/nos-fleurs">nos fleurs</Link> pour y ajouter des articles.</h2>
                        }
        </div>
      </div>
      <div className="card__total-container">
        <p className="card__total">Total TTC : <span>{totalPrice}€</span></p>
      </div>
    </div>
  );
};

Cart.propTypes = {
  loading: PropTypes.bool,
};

CartProduct.defaultProps = {
  loading: true,
};
export default Cart;
