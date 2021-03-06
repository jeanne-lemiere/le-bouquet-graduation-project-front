import { createStore, applyMiddleware, compose } from 'redux';
import fetchMiddleware from 'src/middlewares/fetchMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import reducer from 'src/reducer';
import products from 'src/middlewares/products';
import uploadMiddleware from '../middlewares/uploadMiddleware';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    // Don't forget middlewares will be executed in the order
    // they are declared here
    uploadMiddleware,
    products,
    authMiddleware,
    fetchMiddleware,
  ),
);

const store = createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  enhancers,
);

export default store;
