import { combineReducers } from 'redux';
import userReducer from './userReducer';

// Her we combine specific reducers (user, order, product...)
// and export them so we can use them as one in createStore

// For now I am not sure whether I should create a specific reducer for
// the seller and another for the customer
// I'll start with a simple userReducer and will separate them if needed

export default combineReducers({
  user: userReducer,
});
