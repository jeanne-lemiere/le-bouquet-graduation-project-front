import {
  TOGGLE_AUTH_MODAL,
  CHANGE_NAV_BACKGROUND,
  SET_LOADING,
} from 'src/actions/displayActions';

import {
  USER_LOGIN_SUCCESS,
} from 'src/actions/loginActions';

const initialState = {
  authModal: false,
  navBackground: false,
  loading: false,
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
    default:
      return state;
  }
};

export default reducer;
