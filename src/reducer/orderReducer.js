import {
  FETCH_ORDERS_SUCCESS,
} from 'src/actions/orderActions';

export const initialState = {
  orders: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};
