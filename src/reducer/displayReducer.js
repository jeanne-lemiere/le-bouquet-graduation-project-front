import {
  TOGGLE_AUTH_MODAL,
  CHANGE_NAV_BACKGROUND,
  SET_LOADING,
  TOGGLE_CURRENT_ORDERS,
  TOGGLE_ORDER_HISTORY,
} from 'src/actions/displayActions';

import {
  USER_LOGIN_SUCCESS,
} from 'src/actions/loginActions';

const initialState = {
  authModal: false,
  navBackground: false,
  loading: false,
  historyOpen: false,
  currentOrdersOpen: false,
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
    default:
      return state;
  }
};

export default reducer;
