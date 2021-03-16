import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import displayReducer from './displayReducer';
import productReducer from './productReducer';
import producerReducer from './producerReducer';
import orderReducer from './orderReducer';
// Her we combine specific reducers (user, order, product...)
// and export them so we can use them as one in createStore

// For now I am not sure whether I should create a specific reducer for
// the seller and another for the customer
// I'll start with a simple userReducer and will separate them if needed

export default combineReducers({
  login: loginReducer,
  signup: signupReducer,
  display: displayReducer,
  form: reduxFormReducer,
  product: productReducer,
  producer: producerReducer,
  order: orderReducer,
});
