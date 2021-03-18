/* eslint-disable no-empty */
import Axios from 'axios';

import {
  FETCH_PRODUCTS,
  setProducts,
  FETCH_CART_PRODUCTS,
  setCartProducts,
} from 'src/actions/productActions';

import {
  setLoading,
} from 'src/actions/displayActions';

import axios from 'src/api';

export default (store) => (next) => (action) => {
  // Plus besoin de récupérer le token via le state grace
  // A la configureation de l'instance de axios ( voir le middleware login)
  // const { user: { token } } = store.getState();
  switch (action.type) {
    case FETCH_PRODUCTS:
      axios.get('/products')
        .then((result) => {
          // console.log(result.data)
          store.dispatch(setProducts(result.data));
        });
      return next(action);

    case FETCH_CART_PRODUCTS:
      const cart = JSON.parse(localStorage.getItem('cart'));
      const requests = [];
      let request;
      if (cart) {
        for (const product of cart) {
          request = axios.get(`/product/${product.id}`);
          requests.push(request);
          // console.log("nouvelle requête :", request)
        }
        Axios.all(
          requests,
        )
          .then((results) => {
          // console.log("middleware result",results)
            for (const product of results) { // now we add quantities to each result
              for (const cartProduct of cart) {
                if (parseInt(product.data.id) === parseInt(cartProduct.id)) {
                  product.data.quantity = cartProduct.quantity;
                // console.log("pareil donc : ", product.data)
                }
              }
            }
            store.dispatch(setCartProducts(results));
          }).catch((error) => {
            console.trace(error);
          }).finally(() => {
            //  store.dispatch(setLoading(false));
            //  console.log("loadging envoyé depuis middleware pour devenir false")
          });
        return next(action);
      }
      return next(action);
    default:
      return next(action);
  }
};
