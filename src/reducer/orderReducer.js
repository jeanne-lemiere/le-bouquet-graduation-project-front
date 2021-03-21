import {
  FETCH_ORDERS_SUCCESS,
  SET_ORDER_ITEM,
  SET_ORDER_ERROR,
  ORDER_TO_EMPTY,
} from 'src/actions/orderActions';

export const initialState = {
  orders: [],
  orderedItem: {},
  orderError: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
      };
    case SET_ORDER_ITEM:
      // console.log('ici orderReducer case SET_ORDER_ITEM');
      return {
        ...state,
        orderedItem: action.item,
      };
    case SET_ORDER_ERROR:
      // console.log('ici orderReducer case SET_ORDER_ERROR');
      return {
        ...state,
        orderError: action.error,
      };
    case ORDER_TO_EMPTY:
      // console.log('ici orderReducer on vide les variables');
      return {
        ...state,
        orderError: '',
        orderedItem: {},
      };
    default:
      return state;
  }
};
