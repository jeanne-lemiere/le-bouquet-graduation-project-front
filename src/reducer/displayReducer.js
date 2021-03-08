import {
  TOGGLE_AUTH_MODAL,
  CHANGE_NAV_BACKGROUND,
} from 'src/actions/displayActions';

import {
  USER_LOGIN_SUCCESS,
} from 'src/actions/userActions';

const initialState = {
  authModal: false,
  navBackground: false,
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
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
