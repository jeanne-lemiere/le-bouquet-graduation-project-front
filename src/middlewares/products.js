/* eslint-disable no-empty */
import Axios from 'axios';

import {
  FETCH_PRODUCTS,
  setProducts,
  FETCH_CART_PRODUCTS,
  setCartProducts
} from 'src/actions/productActions';

import axios from 'src/api';

export default (store) => (next) => (action) => {
  // Plus besoin de récupérer le token via le state grace
  // A la configureation de l'instance de axios ( voir le middleware login)
  // const { user: { token } } = store.getState();
  switch (action.type) {
    case FETCH_PRODUCTS:
      axios.get('/products')
        .then((result) => {
          console.log(result.data)
          store.dispatch(setProducts(result.data));
        });
      return next(action);
    
    case FETCH_CART_PRODUCTS:
      const cart = JSON.parse(localStorage.getItem("cart"))
      const requests = [];
      let request;
      if (cart) {
        for (const product of cart) {
          request = axios.get(`/product/${product.id}`)
          requests.push(request)
          console.log("nouvelle requête :", request)
        }
        Axios.all(
          requests
        )
        .then((results) => {
          console.log("middleware result",results)
          for (const product of results) {
            for (const cartProduct of cart) {
              if (parseInt(product.data.id) === parseInt(cartProduct.id)) {
                product.data.quantity = cartProduct.quantity
                console.log("pareil donc : ", product.data)
              } else {
                console.log(product.data.id +" différent de "+ cartProduct.id)
              }
            }
          }
          store.dispatch(setCartProducts(results));
        });
        return next(action);
      }
      return next(action);
    default:
      return next(action);
  }

};