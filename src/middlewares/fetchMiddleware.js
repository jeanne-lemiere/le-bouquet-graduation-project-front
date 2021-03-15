/* eslint-disable no-empty */

import {
  FETCH_PRODUCTS,
  setProducts,
} from 'src/actions/productActions';

import { FETCH_PRODUCERS, setProducers } from 'src/actions/sellerActions';

import {
  setLoading,
} from 'src/actions/displayActions';

import axios from 'axios';

const BASE_URL = ' https://c-le-bouquet.herokuapp.com';

export default (store) => (next) => async (action) => {
  // Plus besoin de récupérer le token via le state grace
  // A la configureation de l'instance de axios ( voir le middleware login)
  // const { user: { token } } = store.getState();
  switch (action.type) {
    case FETCH_PRODUCTS: {
      axios.get(`${BASE_URL}/products`)
        .then((response) => {
          store.dispatch(setProducts(response.data));
        })
        .catch((error) => {
          console.trace(error);
        })
        .finally(() => {
          setTimeout(() => {
            store.dispatch(setLoading(false));
          }, 400);
        });
      break;
    }
    case FETCH_PRODUCERS: {
      try {
        const response = await axios({
          url: `${BASE_URL}/sellers`,
          method: 'GET',
        });
        const actionToDispatch = setProducers(response.data);
        store.dispatch(actionToDispatch);
      }
      catch (error) {
        console.trace(error);
      }
      break;
    }
    default:
      return next(action);
  }
};
