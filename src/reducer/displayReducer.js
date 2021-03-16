import {
  TOGGLE_AUTH_MODAL,
  CHANGE_NAV_BACKGROUND,
  SET_LOADING,
  TOGGLE_CURRENT_ORDERS,
  TOGGLE_ORDER_HISTORY,
  INCREASE_CART_AMOUNT,
  DECREASE_CART_AMOUNT,
} from 'src/actions/displayActions';

import {
  USER_LOGIN_SUCCESS,
} from 'src/actions/loginActions';

const ifNullReturnZero = (data) => {
  if (data === null) {
    return 0;
  }
  return data;
};

const initialState = {
  authModal: false,
  navBackground: false,
  loading: false,
  historyOpen: false,
  currentOrdersOpen: false,
  cartAmount: ifNullReturnZero(JSON.parse(localStorage.getItem('cartAmount'))),
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
    case TOGGLE_ORDER_HISTORY:
      return {
        ...state,
        historyOpen: !state.historyOpen,
      };
    case INCREASE_CART_AMOUNT:
      return {
        ...state,
        cartAmount: state.cartAmount + 1,
      };
    case DECREASE_CART_AMOUNT:
      return {
        ...state,
        cartAmount: state.cartAmount - 1,
      };
    default:
      return state;
  }
};

export default reducer;
