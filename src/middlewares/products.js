/* eslint-disable no-empty */

import {
  FETCH_PRODUCTS,
  setProducts,
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
    default:
      return next(action);
  }
};