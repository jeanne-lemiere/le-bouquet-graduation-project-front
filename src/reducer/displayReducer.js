import {
  TOGGLE_AUTH_MODAL,
} from 'src/actions/displayActions';

import {
  USER_LOGIN_SUCCESS,
} from 'src/actions/userActions';

const initialState = {
  authModal: false,
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
    default:
      return state;
  }
};

export default reducer;
