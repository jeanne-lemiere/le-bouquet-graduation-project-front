import {
  TOGGLE_AUTH_MODAL,
  CHANGE_NAV_BACKGROUND,
  SET_LOADING,
  TOGGLE_CURRENT_ORDERS,
  TOGGLE_ORDER_HISTORY,
  TOGGLE_PRODUCTS,
  INCREASE_CART_AMOUNT,
  DECREASE_CART_AMOUNT,
  TOGGLE_BURGER,
  CLOSE_BURGER,
} from 'src/actions/displayActions';

import {
  USER_LOGIN_SUCCESS,
} from 'src/actions/loginActions';

const ifNullOrNegativeReturnZero = (data) => {
  if (data === null || data < 0) {
    localStorage.setItem('cartAmount', JSON.stringify(0));
    return 0;
  }
  return data;
};

const initialState = {
  authModal: false,
  navBackground: false,
  loading: false,
  burgerOpen: false,
  historyOpen: false,
  currentOrdersOpen: false,
  cartAmount: ifNullOrNegativeReturnZero(JSON.parse(localStorage.getItem('cartAmount'))),
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_AUTH_MODAL:
      return {
        ...state,
        authModal: !state.authModal,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        authModal: !state.authModal,
      };
    case CHANGE_NAV_BACKGROUND:
      return {
        ...state,
        navBackground: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case TOGGLE_CURRENT_ORDERS:
      return {
        ...state,
        currentOrdersOpen: !state.currentOrdersOpen,
      };
    case TOGGLE_PRODUCTS:
      return {
        ...state,
        productsOpen: !state.productsOpen,
      };
    case TOGGLE_ORDER_HISTORY:
      return {
        ...state,
        historyOpen: !state.historyOpen,
      };
    case INCREASE_CART_AMOUNT:
      return {
        ...state,
        cartAmount: ifNullOrNegativeReturnZero(JSON.parse(localStorage.getItem('cartAmount'))),
      };
    case DECREASE_CART_AMOUNT:
      return {
        ...state,
        cartAmount: ifNullOrNegativeReturnZero(JSON.parse(localStorage.getItem('cartAmount'))),
      };
    case TOGGLE_BURGER:
      return {
        ...state,
        burgerOpen: !state.burgerOpen,
      };
    case CLOSE_BURGER:
      return {
        ...state,
        burgerOpen: false,
      };
    default:
      return state;
  }
};

export default reducer;
