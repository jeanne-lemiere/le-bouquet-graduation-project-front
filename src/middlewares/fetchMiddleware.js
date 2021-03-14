/* eslint-disable no-empty */

import {
  FETCH_PRODUCTS,
  setProducts,
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
    case FETCH_PRODUCTS: {
      axios.get('/products')
        .then((response) => {
          store.dispatch(setProducts(response.data));
        })
        .catch((error) => {
          console.trace(error);
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      break;
    }
    default:
      return next(action);
  }
};
